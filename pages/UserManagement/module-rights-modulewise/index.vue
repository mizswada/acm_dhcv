<template>
  <div>
    <LayoutsBreadcrumb />
    <rs-card>
      <template #header>
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <Icon class="mr-2 flex justify-center" name="ic:outline-security"></Icon>
            Module Rights (Modulewise)
          </div>
          <div class="flex space-x-2">
            <rs-button
              variant="info-outline"
              @click="refreshPage"
              :disabled="loading"
            >
              <Icon name="ic:outline-refresh" class="mr-1" size="1rem" />
              Refresh
            </rs-button>
            <rs-button
              variant="success"
              @click="saveModulePermissions"
              :disabled="loading || !selectedModule"
            >
              <Icon name="ic:outline-save" class="mr-1" size="1rem" />
              Save Permissions
            </rs-button>
          </div>
        </div>
      </template>
      <template #body>
        <div class="space-y-6">
          <!-- Module Selection -->
          <div class="bg-gray-50 p-4 rounded-lg">
            <div class="space-y-4 mb-4">
              <div class="flex space-x-2">
                <rs-button
                  variant="info-outline"
                  @click="refreshPage"
                  :disabled="loading"
                >
                  <Icon name="ic:outline-refresh" class="mr-1" size="1rem" />
                  Refresh
                </rs-button>
                <rs-button
                  variant="success"
                  @click="saveModulePermissions"
                  :disabled="loading || !selectedModule"
                >
                  <Icon name="ic:outline-save" class="mr-1" size="1rem" />
                  Save Permissions
                </rs-button>
                <rs-button
                  variant="warning-outline"
                  size="sm"
                  @click="openQuery"
                >
                  Query (F7)
                </rs-button>
                <rs-button
                  variant="success-outline"
                  size="sm"
                  @click="executeQuery"
                >
                  Execute Query (F8)
                </rs-button>
                <rs-button
                  variant="info-outline"
                  size="sm"
                  @click="openModuleLOV"
                >
                  LOV (F9)
                </rs-button>
              </div>
              <h3 class="text-lg font-semibold">Module Code & Name</h3>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-1 gap-4">
              <FormKit
                v-model="displayModuleValue"
                type="text"
                readonly
                name="moduleId"
                :validation="[['required']]"
                placeholder="Press F9 to select a module or Click LOV button"
              />
            </div>
          </div>

          <!-- User Assignment for Selected Module -->
          <div v-if="selectedModule && showModuleDetails" class="space-y-6">
            <h3 class="text-lg font-semibold">Module: {{ selectedModule.name }}</h3>
            
            <!-- User Assignment -->
            <rs-fieldset title="Assign Users to Module" class="mb-6">
              <div class="space-y-4">
                <!-- User Search and Add -->
                <div class="flex space-x-4">
                  <div class="flex-1">
                    <FormKit
                      v-model="userSearchQuery"
                      type="search"
                      placeholder="Search users to assign..."
                      outer-class="mb-0"
                      @input="filterUsersForAssignment"
                    />
                  </div>
                  <rs-button
                    variant="info-outline"
                    @click="openUserLOV"
                  >
                    <Icon name="ic:outline-person-add" class="mr-1" size="1rem" />
                    Add Users
                  </rs-button>
                </div>

                <!-- Assigned Users Table -->
                <div class="border border-gray-200 rounded-lg overflow-hidden">
                  <table class="min-w-full bg-white">
                    <thead class="bg-gray-50">
                      <tr>
                        <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          USER CODE
                        </th>
                        <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          USER NAME
                        </th>
                        <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          ROLE
                        </th>
                        <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          PERMISSIONS
                        </th>
                        <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          ACTIONS
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                      <tr 
                        v-for="user in assignedUsers" 
                        :key="user.id" 
                        class="hover:bg-gray-50"
                      >
                        <td class="px-4 py-3 text-sm font-medium text-gray-900">
                          {{ user.username }}
                        </td>
                        <td class="px-4 py-3 text-sm text-gray-900">
                          {{ user.firstName }} {{ user.lastName }}
                        </td>
                        <td class="px-4 py-3 text-sm text-gray-500">
                          {{ user.role?.name || 'No Role' }}
                        </td>
                        <td class="px-4 py-3 text-sm text-gray-500">
                          <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {{ getUserPermissionCount(user) }} permissions
                          </span>
                        </td>
                        <td class="px-4 py-3 text-sm">
                          <div class="flex space-x-2">
                            <rs-button
                              variant="info-outline"
                              size="sm"
                              @click="editUserPermissions(user)"
                            >
                              <Icon name="ic:outline-edit" size="0.875rem" />
                            </rs-button>
                            <rs-button
                              variant="danger-outline"
                              size="sm"
                              @click="removeUserFromModule(user)"
                            >
                              <Icon name="ic:outline-delete" size="0.875rem" />
                            </rs-button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  
                  <!-- No Users Message -->
                  <div v-if="assignedUsers.length === 0" class="text-center py-8">
                    <p class="text-gray-500">No users assigned to this module</p>
                  </div>
                </div>
              </div>
            </rs-fieldset>
            
            <!-- Module Permissions -->
            <rs-fieldset title="Module Permissions" class="mb-6">
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div v-for="permission in selectedModulePermissions" :key="permission.key" class="flex items-center space-x-2">
                  <FormKit
                    v-model="modulePermissions[permission.key]"
                    type="checkbox"
                    :name="permission.key"
                    :label="permission.label"
                    :value="true"
                  />
                </div>
              </div>
            </rs-fieldset>

            

            <!-- Quick Actions -->
            <div class="flex justify-between items-center pt-4 border-t">
              <div class="flex space-x-2">
                <rs-button
                  variant="info-outline"
                  @click="selectAllModulePermissions"
                >
                  Select All Permissions
                </rs-button>
                <rs-button
                  variant="warning-outline"
                  @click="clearAllModulePermissions"
                >
                  Clear All Permissions
                </rs-button>
              </div>
              <div class="text-sm text-gray-600">
                {{ assignedUsers.length }} users assigned • {{ selectedModulePermissionsCount }} permissions selected
              </div>
            </div>
          </div>

          <!-- No Module Selected Message -->
          <div v-else-if="!selectedModule" class="text-center py-12">
            <Icon name="ic:outline-folder" size="4rem" class="mx-auto text-gray-400 mb-4" />
            <h3 class="text-lg font-medium text-gray-900 mb-2">No Module Selected</h3>
            <p class="text-gray-500">Please select a module using LOV button (F9) to assign users and permissions.</p>
          </div>
          
          <!-- Module Selected but No Details Loaded Message -->
          <div v-else-if="selectedModule && !showModuleDetails" class="text-center py-12">
            <Icon name="ic:outline-search" size="4rem" class="mx-auto text-gray-400 mb-4" />
            <h3 class="text-lg font-medium text-gray-900 mb-2">Module Selected: {{ selectedModule.name }}</h3>
            <p class="text-gray-500">Click "Execute Query (F8)" or press F8 to load module details and permissions.</p>
          </div>
        </div>
      </template>
    </rs-card>

    <!-- Module LOV Modal -->
    <rs-modal 
      v-model="showModuleLOVModal"  
      title="Module Code & Name" 
      size="lg"
      :ok-title="false"
      :cancel-title="false"
    >
      <template #header>
        <div class="flex justify-between items-center w-full">
          <h3 class="text-lg font-semibold">Module Code & Name</h3>
        </div>
      </template>
      
      <div class="space-y-4">
        <!-- Search Input -->
        <div class="relative">
          <FormKit
            v-model="moduleLOVSearchQuery"
            type="search"
            placeholder="Search modules..."
            outer-class="mb-0"
            @input="filterModuleLOV"
          />
        </div>

        <!-- Modules Table -->
        <div class="max-h-96 overflow-y-auto border border-gray-200 rounded-lg">
          <table class="min-w-full bg-white">
            <thead class="bg-gray-50 sticky top-0">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                  MODULE CODE
                </th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                  MODULE NAME
                </th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                  DESCRIPTION
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr 
                v-for="module in filteredModuleLOV" 
                :key="module.id" 
                class="hover:bg-gray-50 cursor-pointer"
                @click="selectModuleFromLOV(module)"
              >
                <td class="px-4 py-3 text-sm font-medium text-gray-900">
                  {{ module.code }}
                </td>
                <td class="px-4 py-3 text-sm text-gray-900">
                  {{ module.name }}
                </td>
                <td class="px-4 py-3 text-sm text-gray-500">
                  {{ module.description }}
                </td>
              </tr>
            </tbody>
          </table>
          
          <!-- No Results Message -->
          <div v-if="filteredModuleLOV.length === 0" class="text-center py-8">
            <p class="text-gray-500">No modules found</p>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-end">
          <rs-button
            variant="secondary-outline"
            @click="closeModuleLOVModal"
          >
            Cancel
          </rs-button>
        </div>
      </template>
    </rs-modal>

    <!-- User LOV Modal -->
    <rs-modal 
      v-model="showUserLOVModal"  
      title="Select Users" 
      size="lg"
      :ok-title="false"
      :cancel-title="false"
    >
      <template #header>
        <div class="flex justify-between items-center w-full">
          <h3 class="text-lg font-semibold">Select Users to Assign</h3>
        </div>
      </template>
      
      <div class="space-y-4">
         <!-- Search Input and Actions -->
         <div class="space-y-4">
           <div class="flex space-x-4">
             <div class="flex-1">
               <FormKit
                 v-model="userLOVSearchQuery"
                 type="search"
                 placeholder="Search users..."
                 outer-class="mb-0"
                 @input="filterUserLOV"
               />
             </div>
             <div class="flex space-x-2">
               <rs-button
                 variant="info-outline"
                 size="sm"
                 @click="selectAllUsers"
               >
                 Select All
               </rs-button>
               <rs-button
                 variant="warning-outline"
                 size="sm"
                 @click="clearAllUserSelection"
               >
                 Clear All
               </rs-button>
             </div>
           </div>
         </div>

        <!-- Users Table -->
        <div class="max-h-96 overflow-y-auto border border-gray-200 rounded-lg">
          <table class="min-w-full bg-white">
            <thead class="bg-gray-50 sticky top-0">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                  SELECT
                </th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                  USER CODE
                </th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                  USER NAME
                </th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                  ROLE
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr 
                v-for="user in filteredUserLOV" 
                :key="user.id" 
                class="hover:bg-gray-50"
              >
                 <td class="px-4 py-3 text-sm">
                   <input
                     type="checkbox"
                     :checked="selectedUsersForAssignment.includes(user.id)"
                     @change="toggleUserSelection(user, $event)"
                     class="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                   />
                 </td>
                <td class="px-4 py-3 text-sm font-medium text-gray-900">
                  {{ user.username }}
                </td>
                <td class="px-4 py-3 text-sm text-gray-900">
                  {{ user.firstName }} {{ user.lastName }}
                </td>
                <td class="px-4 py-3 text-sm text-gray-500">
                  {{ user.role?.name || 'No Role' }}
                </td>
              </tr>
            </tbody>
          </table>
          
          <!-- No Results Message -->
          <div v-if="filteredUserLOV.length === 0" class="text-center py-8">
            <p class="text-gray-500">No users found</p>
          </div>
        </div>
      </div>

       <template #footer>
         <div class="flex justify-between items-center">
           <div class="text-sm text-gray-600">
             {{ selectedUsersForAssignment.length }} user(s) selected
           </div>
           <div class="flex space-x-2">
             <rs-button
               variant="secondary-outline"
               @click="closeUserLOVModal"
             >
               Cancel
             </rs-button>
             <rs-button
               variant="success"
               @click="assignSelectedUsers"
               :disabled="selectedUsersForAssignment.length === 0"
             >
               Assign Selected Users ({{ selectedUsersForAssignment.length }})
             </rs-button>
           </div>
         </div>
       </template>
    </rs-modal>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue';
import { useNuxtApp } from '#app';

definePageMeta({
  title: "Module Rights (Modulewise)",
});

const { $swal } = useNuxtApp();

// Reactive data
const modules = ref([]);
const users = ref([]);
const selectedModule = ref(null);
const showModuleDetails = ref(false);
const modulePermissions = ref({});
const assignedUsers = ref([]);
const loading = ref(false);

// LOV Modals
const showModuleLOVModal = ref(false);
const showUserLOVModal = ref(false);
const moduleLOVSearchQuery = ref('');
const userLOVSearchQuery = ref('');
const userSearchQuery = ref('');

// User assignment
const selectedUsersForAssignment = ref([]);

// Module definitions
const moduleDefinitions = [
  {
    id: '1',
    code: 'SALES',
    name: 'Sales Module',
    description: 'Sales management and customer relations',
    permissions: [
      { key: 'sales.tenders.create', label: 'Create Tenders' },
      { key: 'sales.tenders.read', label: 'View Tenders' },
      { key: 'sales.tenders.update', label: 'Update Tenders' },
      { key: 'sales.tenders.delete', label: 'Delete Tenders' },
      { key: 'sales.enquiries.create', label: 'Create Sales Enquiries' },
      { key: 'sales.enquiries.read', label: 'View Sales Enquiries' },
      { key: 'sales.enquiries.update', label: 'Update Sales Enquiries' },
      { key: 'sales.enquiries.delete', label: 'Delete Sales Enquiries' },
      { key: 'sales.quotations.create', label: 'Create Quotations' },
      { key: 'sales.quotations.read', label: 'View Quotations' },
      { key: 'sales.quotations.update', label: 'Update Quotations' },
      { key: 'sales.quotations.delete', label: 'Delete Quotations' },
      { key: 'sales.orders.create', label: 'Create Vehicle Orders' },
      { key: 'sales.orders.read', label: 'View Vehicle Orders' },
      { key: 'sales.orders.update', label: 'Update Vehicle Orders' },
      { key: 'sales.orders.delete', label: 'Delete Vehicle Orders' },
      { key: 'sales.invoices.create', label: 'Create Vehicle Invoices' },
      { key: 'sales.invoices.read', label: 'View Vehicle Invoices' },
      { key: 'sales.invoices.update', label: 'Update Vehicle Invoices' },
      { key: 'sales.invoices.delete', label: 'Delete Vehicle Invoices' }
    ]
  },
  {
    id: '2',
    code: 'PROC',
    name: 'Procurement Module',
    description: 'Procurement and supply chain management',
    permissions: [
      { key: 'procurement.opc_decisions.create', label: 'Create OPC Decisions' },
      { key: 'procurement.opc_decisions.read', label: 'View OPC Decisions' },
      { key: 'procurement.opc_decisions.update', label: 'Update OPC Decisions' },
      { key: 'procurement.opc_decisions.delete', label: 'Delete OPC Decisions' },
      { key: 'procurement.ckd_po.create', label: 'Create CKD Purchase Orders' },
      { key: 'procurement.ckd_po.read', label: 'View CKD Purchase Orders' },
      { key: 'procurement.ckd_po.update', label: 'Update CKD Purchase Orders' },
      { key: 'procurement.ckd_po.delete', label: 'Delete CKD Purchase Orders' },
      { key: 'procurement.ckd_receipts.create', label: 'Create CKD Receipts' },
      { key: 'procurement.ckd_receipts.read', label: 'View CKD Receipts' },
      { key: 'procurement.ckd_receipts.update', label: 'Update CKD Receipts' },
      { key: 'procurement.ckd_receipts.delete', label: 'Delete CKD Receipts' }
    ]
  },
  {
    id: '3',
    code: 'SPARES',
    name: 'Spares Module',
    description: 'Spare parts management and inventory',
    permissions: [
      { key: 'spares.sos.create', label: 'Create Spares SOs' },
      { key: 'spares.sos.read', label: 'View Spares SOs' },
      { key: 'spares.sos.update', label: 'Update Spares SOs' },
      { key: 'spares.sos.delete', label: 'Delete Spares SOs' },
      { key: 'spares.dos.create', label: 'Create Spares DOs' },
      { key: 'spares.dos.read', label: 'View Spares DOs' },
      { key: 'spares.dos.update', label: 'Update Spares DOs' },
      { key: 'spares.dos.delete', label: 'Delete Spares DOs' },
      { key: 'spares.sales_invoices.create', label: 'Create Sales Invoices' },
      { key: 'spares.sales_invoices.read', label: 'View Sales Invoices' },
      { key: 'spares.sales_invoices.update', label: 'Update Sales Invoices' },
      { key: 'spares.sales_invoices.delete', label: 'Delete Sales Invoices' }
    ]
  },
  {
    id: '4',
    code: 'SERVICE',
    name: 'Service Module',
    description: 'Service management and maintenance',
    permissions: [
      { key: 'service.job_cards.create', label: 'Create Job Cards' },
      { key: 'service.job_cards.read', label: 'View Job Cards' },
      { key: 'service.job_cards.update', label: 'Update Job Cards' },
      { key: 'service.job_cards.delete', label: 'Delete Job Cards' },
      { key: 'service.oil_lube_issue.create', label: 'Create Oil/Lube Issues' },
      { key: 'service.oil_lube_issue.read', label: 'View Oil/Lube Issues' },
      { key: 'service.oil_lube_issue.update', label: 'Update Oil/Lube Issues' },
      { key: 'service.oil_lube_issue.delete', label: 'Delete Oil/Lube Issues' },
      { key: 'service.invoices.create', label: 'Create Service Invoices' },
      { key: 'service.invoices.read', label: 'View Service Invoices' },
      { key: 'service.invoices.update', label: 'Update Service Invoices' },
      { key: 'service.invoices.delete', label: 'Delete Service Invoices' }
    ]
  },
  {
    id: '5',
    code: 'FINANCE',
    name: 'Finance Module',
    description: 'Financial management and accounting',
    permissions: [
      { key: 'finance.bank_payment_vouchers.create', label: 'Create Bank Payment Vouchers' },
      { key: 'finance.bank_payment_vouchers.read', label: 'View Bank Payment Vouchers' },
      { key: 'finance.bank_payment_vouchers.update', label: 'Update Bank Payment Vouchers' },
      { key: 'finance.bank_payment_vouchers.delete', label: 'Delete Bank Payment Vouchers' },
      { key: 'finance.bank_receipt_vouchers.create', label: 'Create Bank Receipt Vouchers' },
      { key: 'finance.bank_receipt_vouchers.read', label: 'View Bank Receipt Vouchers' },
      { key: 'finance.bank_receipt_vouchers.update', label: 'Update Bank Receipt Vouchers' },
      { key: 'finance.bank_receipt_vouchers.delete', label: 'Delete Bank Receipt Vouchers' }
    ]
  },
  {
    id: '6',
    code: 'MASTERS',
    name: 'Masters Module',
    description: 'Master data management',
    permissions: [
      { key: 'masters.models.create', label: 'Create Models' },
      { key: 'masters.models.read', label: 'View Models' },
      { key: 'masters.models.update', label: 'Update Models' },
      { key: 'masters.models.delete', label: 'Delete Models' },
      { key: 'masters.drivers.create', label: 'Create Drivers' },
      { key: 'masters.drivers.read', label: 'View Drivers' },
      { key: 'masters.drivers.update', label: 'Update Drivers' },
      { key: 'masters.drivers.delete', label: 'Delete Drivers' }
    ]
  }
];

// Mock users data
const mockUsers = [
  {
    id: '1',
    username: 'admin',
    email: 'admin@example.com',
    firstName: 'Ali',
    lastName: 'Abdul',
    roleId: '1',
    role: { id: '1', name: 'Administrator', description: 'Full system access' },
    isActive: true
  },
  {
    id: '2',
    username: 'manager',
    email: 'manager@example.com',
    firstName: 'Ayesha',
    lastName: 'Khan',
    roleId: '2',
    role: { id: '2', name: 'Manager', description: 'Management access' },
    isActive: true
  },
  {
    id: '3',
    username: 'user',
    email: 'user@example.com',
    firstName: 'Saba',
    lastName: 'Khan',
    roleId: '3',
    role: { id: '3', name: 'User', description: 'Basic user access' },
    isActive: true
  },
  {
    id: '4',
    username: 'sales_rep',
    email: 'sales@example.com',
    firstName: 'Rajesh',
    lastName: 'Kumar',
    roleId: '4',
    role: { id: '4', name: 'Sales Representative', description: 'Sales-focused role' },
    isActive: true
  },
  {
    id: '5',
    username: 'finance_officer',
    email: 'finance@example.com',
    firstName: 'Rajesh',
    lastName: 'Kumar',
    roleId: '5',
    role: { id: '5', name: 'Finance Officer', description: 'Financial operations' },
    isActive: false
  }
];

// Computed properties
const displayModuleValue = computed(() => {
  if (selectedModule.value) {
    return `${selectedModule.value.code} - ${selectedModule.value.name}`;
  }
  return '';
});

const selectedModulePermissions = computed(() => {
  return selectedModule.value?.permissions || [];
});

const selectedModulePermissionsCount = computed(() => {
  return Object.values(modulePermissions.value).filter(Boolean).length;
});

const filteredModuleLOV = computed(() => {
  if (!moduleLOVSearchQuery.value) {
    return modules.value;
  }
  return modules.value.filter(module => 
    module.code.toLowerCase().includes(moduleLOVSearchQuery.value.toLowerCase()) ||
    module.name.toLowerCase().includes(moduleLOVSearchQuery.value.toLowerCase()) ||
    module.description.toLowerCase().includes(moduleLOVSearchQuery.value.toLowerCase())
  );
});

const filteredUserLOV = computed(() => {
  if (!userLOVSearchQuery.value) {
    return users.value;
  }
  return users.value.filter(user => 
    user.username.toLowerCase().includes(userLOVSearchQuery.value.toLowerCase()) ||
    user.firstName.toLowerCase().includes(userLOVSearchQuery.value.toLowerCase()) ||
    user.lastName.toLowerCase().includes(userLOVSearchQuery.value.toLowerCase()) ||
    user.role?.name?.toLowerCase().includes(userLOVSearchQuery.value.toLowerCase())
  );
});

// Methods
const fetchData = () => {
  loading.value = true;
  setTimeout(() => {
    modules.value = [...moduleDefinitions];
    users.value = [...mockUsers];
    loading.value = false;
  }, 300);
};

const openModuleLOV = () => {
  moduleLOVSearchQuery.value = '';
  showModuleLOVModal.value = true;
};

const closeModuleLOVModal = () => {
  showModuleLOVModal.value = false;
  moduleLOVSearchQuery.value = '';
};

const selectModuleFromLOV = (module) => {
  selectedModule.value = module;
  showModuleDetails.value = false;
  assignedUsers.value = [];
  modulePermissions.value = {};
  closeModuleLOVModal();
};

const filterModuleLOV = () => {
  // Filtering is handled by computed property
};

const executeQuery = () => {
  if (!selectedModule.value) {
    $swal.fire({
      title: 'No Module Selected',
      text: 'Please select a module first using LOV button or F9',
      icon: 'warning',
      confirmButtonText: 'OK'
    });
    return;
  }
  
  // Show module details and load permissions
  showModuleDetails.value = true;
  loadModulePermissions();
  
  $swal.fire({
    title: 'Query Executed',
    text: `Module details loaded for ${selectedModule.value.name}`,
    icon: 'success',
    confirmButtonText: 'OK'
  });
};

const loadModulePermissions = () => {
  if (selectedModule.value) {
    const permissions = {};
    selectedModule.value.permissions.forEach(permission => {
      permissions[permission.key] = false;
    });
    modulePermissions.value = permissions;
  }
};

const openUserLOV = () => {
  userLOVSearchQuery.value = '';
  selectedUsersForAssignment.value = [];
  showUserLOVModal.value = true;
};

const closeUserLOVModal = () => {
  showUserLOVModal.value = false;
  userLOVSearchQuery.value = '';
  selectedUsersForAssignment.value = [];
};

const filterUserLOV = () => {
  // Filtering is handled by computed property
};

const toggleUserSelection = (user, event) => {
  const isChecked = event.target.checked;
  if (isChecked) {
    // Add user to selection if not already selected
    if (!selectedUsersForAssignment.value.includes(user.id)) {
      selectedUsersForAssignment.value.push(user.id);
    }
  } else {
    // Remove user from selection
    const index = selectedUsersForAssignment.value.indexOf(user.id);
    if (index > -1) {
      selectedUsersForAssignment.value.splice(index, 1);
    }
  }
};

const selectAllUsers = () => {
  selectedUsersForAssignment.value = filteredUserLOV.value.map(user => user.id);
};

const clearAllUserSelection = () => {
  selectedUsersForAssignment.value = [];
};

const assignSelectedUsers = () => {
  const usersToAssign = users.value.filter(user => 
    selectedUsersForAssignment.value.includes(user.id)
  );
  
  // Add users that aren't already assigned
  usersToAssign.forEach(user => {
    if (!assignedUsers.value.find(u => u.id === user.id)) {
      assignedUsers.value.push({
        ...user,
        modulePermissions: {}
      });
    }
  });
  
  closeUserLOVModal();
  
  $swal.fire({
    title: 'Users Assigned',
    text: `${usersToAssign.length} users assigned to ${selectedModule.value.name}`,
    icon: 'success',
    confirmButtonText: 'OK'
  });
};

const removeUserFromModule = (user) => {
  const index = assignedUsers.value.findIndex(u => u.id === user.id);
  if (index !== -1) {
    assignedUsers.value.splice(index, 1);
  }
};

const editUserPermissions = (user) => {
  // This would open a modal to edit individual user permissions
  $swal.fire({
    title: 'Edit User Permissions',
    text: `Edit permissions for ${user.firstName} ${user.lastName}`,
    icon: 'info',
    confirmButtonText: 'OK'
  });
};

const getUserPermissionCount = (user) => {
  return user.modulePermissions ? Object.values(user.modulePermissions).filter(Boolean).length : 0;
};

const selectAllModulePermissions = () => {
  const permissions = {};
  selectedModule.value.permissions.forEach(permission => {
    permissions[permission.key] = true;
  });
  modulePermissions.value = permissions;
};

const clearAllModulePermissions = () => {
  const permissions = {};
  selectedModule.value.permissions.forEach(permission => {
    permissions[permission.key] = false;
  });
  modulePermissions.value = permissions;
};

const saveModulePermissions = async () => {
  if (!selectedModule.value) {
    $swal.fire({
      title: 'Error',
      text: 'Please select a module first',
      icon: 'error'
    });
    return;
  }

  try {
    loading.value = true;
    
    // Get selected permissions
    const selectedPermissions = Object.entries(modulePermissions.value)
      .filter(([key, value]) => value)
      .map(([key]) => key);
    
    $swal.fire({
      title: 'Success',
      text: `Module permissions saved for ${selectedModule.value.name}`,
      icon: 'success'
    });
    
  } catch (error) {
    console.error('Error saving module permissions:', error);
    $swal.fire({
      title: 'Error',
      text: 'Failed to save module permissions',
      icon: 'error'
    });
  } finally {
    loading.value = false;
  }
};

const openQuery = () => {
  $swal.fire({
    title: 'Query Builder',
    text: 'Query builder would open for custom module search criteria',
    icon: 'info',
    confirmButtonText: 'OK'
  });
};

const refreshPage = () => {
  window.location.reload();
};

// Keyboard shortcuts
const handleKeydown = (event) => {
  if (event.key === 'F9') {
    event.preventDefault();
    openModuleLOV();
  } else if (event.key === 'F8') {
    event.preventDefault();
    executeQuery();
  }
};

// Lifecycle
onMounted(() => {
  fetchData();
  document.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown);
});
</script>

<style scoped>
/* Add any additional styles here */
</style>
