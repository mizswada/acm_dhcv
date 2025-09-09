<template>
  <div>
    <LayoutsBreadcrumb />
    <rs-card>
       <template #header>
         <div class="flex justify-between items-center">
           <div class="flex items-center">
             <Icon class="mr-2 flex justify-center" name="ic:outline-security"></Icon>
             Module Rights (Userwise)
           </div>
           <div class="flex space-x-2">
             
           </div>
         </div>
       </template>
      <template #body>
        <div class="space-y-6">
          <!-- User Selection -->
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
                    @click="savePermissions"
                    :disabled="loading || !selectedUser"
                    >
                    <Icon name="ic:outline-save" class="mr-1" size="1rem" />
                    Save Permissions
                </rs-button>              
                <!-- <rs-button
                  variant="warning-outline"
                  size="sm"
                  @click="openQuery"
                >
                  Query (F7)
                </rs-button> -->
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
                  @click="openLOV"
                >
                  LOV (F9)
                </rs-button>
              </div>
              <h3 class="text-lg font-semibold">User Code & Name</h3>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-1 gap-4">
               <FormKit
                 v-model="displayUserValue"
                 type="text"
                 readonly
                 name="userId"
                 :validation="[['required']]"
                 placeholder="Press F9 to select a user or Click LOV button"
               />
              <!-- <div v-if="selectedUser" class="flex items-center space-x-2">
                <div class="text-sm text-gray-600">
                  <span class="font-medium">Current Role:</span> {{ selectedUser.role?.name || 'No Role' }}
                </div>
              </div> -->
            </div>
          </div>

           <!-- Module Rights Assignment -->
           <div v-if="selectedUser && showPermissions" class="space-y-6">
            <div class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
              <div class="flex items-center">
                <Icon name="ic:outline-security" class="mr-2 text-blue-600" size="1.25rem" />
                <h3 class="text-xl font-bold text-blue-900">Module Permissions</h3>
              </div>
              <p class="text-sm text-blue-700 mt-1">Assign specific permissions for each module to the selected user</p>
            </div>
            
            <!-- Sales Module -->
            <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
              <div class="flex items-center mb-4">
                <Icon name="ic:outline-shopping-cart" class="mr-2 text-green-600" size="1.25rem" />
                <h4 class="text-lg font-semibold text-gray-800">Sales Module</h4>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div v-for="permission in salesPermissions" :key="permission.key" class="flex items-center space-x-2">
                  <FormKit
                    v-model="userPermissions[permission.key]"
                    type="checkbox"
                    :name="permission.key"
                    :label="permission.label"
                    :value="true"
                  />
                </div>
              </div>
            </div>

            <!-- Procurement Module -->
            <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
              <div class="flex items-center mb-4">
                <Icon name="ic:outline-shopping-bag" class="mr-2 text-orange-600" size="1.25rem" />
                <h4 class="text-lg font-semibold text-gray-800">Procurement Module</h4>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div v-for="permission in procurementPermissions" :key="permission.key" class="flex items-center space-x-2">
                  <FormKit
                    v-model="userPermissions[permission.key]"
                    type="checkbox"
                    :name="permission.key"
                    :label="permission.label"
                    :value="true"
                  />
                </div>
              </div>
            </div>

            <!-- Spares Module -->
            <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
              <div class="flex items-center mb-4">
                <Icon name="ic:outline-build" class="mr-2 text-purple-600" size="1.25rem" />
                <h4 class="text-lg font-semibold text-gray-800">Spares Module</h4>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div v-for="permission in sparesPermissions" :key="permission.key" class="flex items-center space-x-2">
                  <FormKit
                    v-model="userPermissions[permission.key]"
                    type="checkbox"
                    :name="permission.key"
                    :label="permission.label"
                    :value="true"
                  />
                </div>
              </div>
            </div>

            <!-- Service Module -->
            <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
              <div class="flex items-center mb-4">
                <Icon name="ic:outline-handyman" class="mr-2 text-blue-600" size="1.25rem" />
                <h4 class="text-lg font-semibold text-gray-800">Service Module</h4>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div v-for="permission in servicePermissions" :key="permission.key" class="flex items-center space-x-2">
                  <FormKit
                    v-model="userPermissions[permission.key]"
                    type="checkbox"
                    :name="permission.key"
                    :label="permission.label"
                    :value="true"
                  />
                </div>
              </div>
            </div>

            <!-- Finance Module -->
            <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
              <div class="flex items-center mb-4">
                <Icon name="ic:outline-account-balance" class="mr-2 text-emerald-600" size="1.25rem" />
                <h4 class="text-lg font-semibold text-gray-800">Finance Module</h4>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div v-for="permission in financePermissions" :key="permission.key" class="flex items-center space-x-2">
                  <FormKit
                    v-model="userPermissions[permission.key]"
                    type="checkbox"
                    :name="permission.key"
                    :label="permission.label"
                    :value="true"
                  />
                </div>
              </div>
            </div>

            <!-- Masters Module -->
            <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
              <div class="flex items-center mb-4">
                <Icon name="ic:outline-settings" class="mr-2 text-indigo-600" size="1.25rem" />
                <h4 class="text-lg font-semibold text-gray-800">Masters Module</h4>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div v-for="permission in mastersPermissions" :key="permission.key" class="flex items-center space-x-2">
                  <FormKit
                    v-model="userPermissions[permission.key]"
                    type="checkbox"
                    :name="permission.key"
                    :label="permission.label"
                    :value="true"
                  />
                </div>
              </div>
            </div>

            <!-- User Management Module -->
            <div class="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
              <div class="flex items-center mb-4">
                <Icon name="ic:outline-people" class="mr-2 text-red-600" size="1.25rem" />
                <h4 class="text-lg font-semibold text-gray-800">User Management Module</h4>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div v-for="permission in userManagementPermissions" :key="permission.key" class="flex items-center space-x-2">
                  <FormKit
                    v-model="userPermissions[permission.key]"
                    type="checkbox"
                    :name="permission.key"
                    :label="permission.label"
                    :value="true"
                  />
                </div>
              </div>
            </div>

            <!-- Quick Actions -->
            <div class="flex justify-between items-center pt-4 border-t">
              <div class="flex space-x-2">
                <rs-button
                  variant="info-outline"
                  @click="selectAllPermissions"
                >
                  Select All
                </rs-button>
                <rs-button
                  variant="warning-outline"
                  @click="clearAllPermissions"
                >
                  Clear All
                </rs-button>
                <rs-button
                  variant="secondary-outline"
                  @click="loadRolePermissions"
                  :disabled="!selectedUser?.role"
                >
                  Load Role Permissions
                </rs-button>
              </div>
              <div class="text-sm text-gray-600">
                {{ selectedPermissionsCount }} permissions selected
              </div>
            </div>
          </div>

           <!-- No User Selected Message -->
           <div v-else-if="!selectedUser" class="text-center py-12">
             <Icon name="ic:outline-person" size="4rem" class="mx-auto text-gray-400 mb-4" />
             <h3 class="text-lg font-medium text-gray-900 mb-2">No User Selected</h3>
             <p class="text-gray-500">Please select a user using LOV button (F9) to assign module permissions.</p>
           </div>
           
           <!-- User Selected but No Permissions Loaded Message -->
           <div v-else-if="selectedUser && !showPermissions" class="text-center py-12">
             <Icon name="ic:outline-search" size="4rem" class="mx-auto text-gray-400 mb-4" />
             <h3 class="text-lg font-medium text-gray-900 mb-2">User Selected: {{ selectedUser.firstName }} {{ selectedUser.lastName }}</h3>
             <p class="text-gray-500">Click "Execute Query (F8)" or press F8 to load module permissions.</p>
           </div>
        </div>
      </template>
    </rs-card>

    <!-- LOV Modal for User Selection -->
    <rs-modal 
      v-model="showLOVModal"  
      title="User Code & Name" 
      size="lg"
      :ok-title="false"
      :cancel-title="false"
    >
      <template #header>
        <div class="flex justify-between items-center w-full">
          <h3 class="text-lg font-semibold">User Code & Name</h3>
          
        </div>
      </template>
      
      <div class="space-y-4">
        <!-- Search Input -->
        <div class="relative">
          <FormKit
            v-model="lovSearchQuery"
            type="search"
            placeholder="Search users..."
            outer-class="mb-0"
            @input="filterLOVUsers"
          />
        </div>

        <!-- Users Table -->
        <div class="max-h-96 overflow-y-auto border border-gray-200 rounded-lg">
          <table class="min-w-full bg-white">
            <thead class="bg-gray-50 sticky top-0">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                  USER CODE
                </th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                  USER NAME
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr 
                v-for="user in filteredLOVUsers" 
                :key="user.id" 
                class="hover:bg-gray-50 cursor-pointer"
                @click="selectUserFromLOV(user)"
              >
                <td class="px-4 py-3 text-sm font-medium text-gray-900">
                  {{ user.username }}
                </td>
                <td class="px-4 py-3 text-sm text-gray-900">
                  {{ user.firstName }} {{ user.lastName }}
                </td>
              </tr>
            </tbody>
          </table>
          
          <!-- No Results Message -->
          <div v-if="filteredLOVUsers.length === 0" class="text-center py-8">
            <p class="text-gray-500">No users found</p>
          </div>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-end">
          <rs-button
            variant="secondary-outline"
            @click="closeLOVModal"
          >
            Cancel
          </rs-button>
        </div>
      </template>
    </rs-modal>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue';
import { useNuxtApp } from '#app';

definePageMeta({
  title: "Module Rights (Userwise)",
});

const { $swal } = useNuxtApp();

// Reactive data
const users = ref([]);
const selectedUserId = ref('');
const selectedUser = ref(null);
const userPermissions = ref({});
const loading = ref(false);
const showLOVModal = ref(false);
const lovSearchQuery = ref('');
const lovUsers = ref([]);
const showPermissions = ref(false);

// Permission definitions
const salesPermissions = [
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
  { key: 'sales.invoices.delete', label: 'Delete Vehicle Invoices' },
  { key: 'sales.credit_notes.create', label: 'Create Credit Notes' },
  { key: 'sales.credit_notes.read', label: 'View Credit Notes' },
  { key: 'sales.credit_notes.update', label: 'Update Credit Notes' },
  { key: 'sales.credit_notes.delete', label: 'Delete Credit Notes' }
];

const procurementPermissions = [
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
  { key: 'procurement.ckd_receipts.delete', label: 'Delete CKD Receipts' },
  { key: 'procurement.cbu_receipts.create', label: 'Create CBU Receipts' },
  { key: 'procurement.cbu_receipts.read', label: 'View CBU Receipts' },
  { key: 'procurement.cbu_receipts.update', label: 'Update CBU Receipts' },
  { key: 'procurement.cbu_receipts.delete', label: 'Delete CBU Receipts' },
  { key: 'procurement.assembly.create', label: 'Create Assembly' },
  { key: 'procurement.assembly.read', label: 'View Assembly' },
  { key: 'procurement.assembly.update', label: 'Update Assembly' },
  { key: 'procurement.assembly.delete', label: 'Delete Assembly' }
];

const sparesPermissions = [
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
  { key: 'spares.sales_invoices.delete', label: 'Delete Sales Invoices' },
  { key: 'spares.pos.create', label: 'Create Purchase Orders' },
  { key: 'spares.pos.read', label: 'View Purchase Orders' },
  { key: 'spares.pos.update', label: 'Update Purchase Orders' },
  { key: 'spares.pos.delete', label: 'Delete Purchase Orders' },
  { key: 'spares.grns.create', label: 'Create GRNs' },
  { key: 'spares.grns.read', label: 'View GRNs' },
  { key: 'spares.grns.update', label: 'Update GRNs' },
  { key: 'spares.grns.delete', label: 'Delete GRNs' },
  { key: 'spares.stock_transfers.create', label: 'Create Stock Transfers' },
  { key: 'spares.stock_transfers.read', label: 'View Stock Transfers' },
  { key: 'spares.stock_transfers.update', label: 'Update Stock Transfers' },
  { key: 'spares.stock_transfers.delete', label: 'Delete Stock Transfers' }
];

const servicePermissions = [
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
  { key: 'service.invoices.delete', label: 'Delete Service Invoices' },
  { key: 'service.clock_in_out.create', label: 'Clock In/Out' },
  { key: 'service.clock_in_out.read', label: 'View Clock In/Out' },
  { key: 'service.repair_followups.create', label: 'Create Repair Followups' },
  { key: 'service.repair_followups.read', label: 'View Repair Followups' },
  { key: 'service.repair_followups.update', label: 'Update Repair Followups' },
  { key: 'service.repair_followups.delete', label: 'Delete Repair Followups' },
  { key: 'service.bookings.create', label: 'Create Service Bookings' },
  { key: 'service.bookings.read', label: 'View Service Bookings' },
  { key: 'service.bookings.update', label: 'Update Service Bookings' },
  { key: 'service.bookings.delete', label: 'Delete Service Bookings' }
];

const financePermissions = [
  { key: 'finance.bank_payment_vouchers.create', label: 'Create Bank Payment Vouchers' },
  { key: 'finance.bank_payment_vouchers.read', label: 'View Bank Payment Vouchers' },
  { key: 'finance.bank_payment_vouchers.update', label: 'Update Bank Payment Vouchers' },
  { key: 'finance.bank_payment_vouchers.delete', label: 'Delete Bank Payment Vouchers' },
  { key: 'finance.bank_receipt_vouchers.create', label: 'Create Bank Receipt Vouchers' },
  { key: 'finance.bank_receipt_vouchers.read', label: 'View Bank Receipt Vouchers' },
  { key: 'finance.bank_receipt_vouchers.update', label: 'Update Bank Receipt Vouchers' },
  { key: 'finance.bank_receipt_vouchers.delete', label: 'Delete Bank Receipt Vouchers' },
  { key: 'finance.cash_payment_vouchers.create', label: 'Create Cash Payment Vouchers' },
  { key: 'finance.cash_payment_vouchers.read', label: 'View Cash Payment Vouchers' },
  { key: 'finance.cash_payment_vouchers.update', label: 'Update Cash Payment Vouchers' },
  { key: 'finance.cash_payment_vouchers.delete', label: 'Delete Cash Payment Vouchers' },
  { key: 'finance.journal_vouchers.create', label: 'Create Journal Vouchers' },
  { key: 'finance.journal_vouchers.read', label: 'View Journal Vouchers' },
  { key: 'finance.journal_vouchers.update', label: 'Update Journal Vouchers' },
  { key: 'finance.journal_vouchers.delete', label: 'Delete Journal Vouchers' },
  { key: 'finance.asset_transfers.create', label: 'Create Asset Transfers' },
  { key: 'finance.asset_transfers.read', label: 'View Asset Transfers' },
  { key: 'finance.asset_transfers.update', label: 'Update Asset Transfers' },
  { key: 'finance.asset_transfers.delete', label: 'Delete Asset Transfers' }
];

const mastersPermissions = [
  { key: 'masters.models.create', label: 'Create Models' },
  { key: 'masters.models.read', label: 'View Models' },
  { key: 'masters.models.update', label: 'Update Models' },
  { key: 'masters.models.delete', label: 'Delete Models' },
  { key: 'masters.drivers.create', label: 'Create Drivers' },
  { key: 'masters.drivers.read', label: 'View Drivers' },
  { key: 'masters.drivers.update', label: 'Update Drivers' },
  { key: 'masters.drivers.delete', label: 'Delete Drivers' },
  { key: 'masters.trade_plates.create', label: 'Create Trade Plates' },
  { key: 'masters.trade_plates.read', label: 'View Trade Plates' },
  { key: 'masters.trade_plates.update', label: 'Update Trade Plates' },
  { key: 'masters.trade_plates.delete', label: 'Delete Trade Plates' },
  { key: 'masters.local_content_parts.create', label: 'Create Local Content Parts' },
  { key: 'masters.local_content_parts.read', label: 'View Local Content Parts' },
  { key: 'masters.local_content_parts.update', label: 'Update Local Content Parts' },
  { key: 'masters.local_content_parts.delete', label: 'Delete Local Content Parts' },
  { key: 'masters.model_categories.create', label: 'Create Model Categories' },
  { key: 'masters.model_categories.read', label: 'View Model Categories' },
  { key: 'masters.model_categories.update', label: 'Update Model Categories' },
  { key: 'masters.model_categories.delete', label: 'Delete Model Categories' },
  { key: 'masters.colors.create', label: 'Create Colors' },
  { key: 'masters.colors.read', label: 'View Colors' },
  { key: 'masters.colors.update', label: 'Update Colors' },
  { key: 'masters.colors.delete', label: 'Delete Colors' }
];

const userManagementPermissions = [
  { key: 'user_management.users.create', label: 'Create Users' },
  { key: 'user_management.users.read', label: 'View Users' },
  { key: 'user_management.users.update', label: 'Update Users' },
  { key: 'user_management.users.delete', label: 'Delete Users' },
  { key: 'user_management.roles.create', label: 'Create Roles' },
  { key: 'user_management.roles.read', label: 'View Roles' },
  { key: 'user_management.roles.update', label: 'Update Roles' },
  { key: 'user_management.roles.delete', label: 'Delete Roles' },
  { key: 'user_management.permissions.assign', label: 'Assign Permissions' },
  { key: 'user_management.permissions.revoke', label: 'Revoke Permissions' }
];

// All permissions combined
const allPermissions = [
  ...salesPermissions,
  ...procurementPermissions,
  ...sparesPermissions,
  ...servicePermissions,
  ...financePermissions,
  ...mastersPermissions,
  ...userManagementPermissions
];

// Computed properties
const userOptions = computed(() => {
  return users.value.map(user => ({
    label: `${user.username} - ${user.firstName} ${user.lastName}`,
    value: user.id
  }));
});

const selectedPermissionsCount = computed(() => {
  return Object.values(userPermissions.value).filter(Boolean).length;
});

const filteredLOVUsers = computed(() => {
  if (!lovSearchQuery.value) {
    return lovUsers.value;
  }
  return lovUsers.value.filter(user => 
    user.username.toLowerCase().includes(lovSearchQuery.value.toLowerCase()) ||
    user.firstName.toLowerCase().includes(lovSearchQuery.value.toLowerCase()) ||
    user.lastName.toLowerCase().includes(lovSearchQuery.value.toLowerCase()) ||
    user.role?.name?.toLowerCase().includes(lovSearchQuery.value.toLowerCase())
  );
});

const displayUserValue = computed(() => {
  if (selectedUser.value) {
    return `${selectedUser.value.username} - ${selectedUser.value.firstName} ${selectedUser.value.lastName}`;
  }
  return '';
});

// Mock data
const mockUsers = [
  {
    id: '1',
    username: 'admin',
    email: 'admin@example.com',
    firstName: 'Ali',
    lastName: 'Abdul',
    roleId: '1',
    role: {
      id: '1',
      name: 'Administrator',
      description: 'Full system access'
    },
    isActive: true,
    permissions: []
  },
  {
    id: '2',
    username: 'manager',
    email: 'manager@example.com',
    firstName: 'Ayesha',
    lastName: 'Khan',
    roleId: '2',
    role: {
      id: '2',
      name: 'Manager',
      description: 'Management access'
    },
    isActive: true,
    permissions: []
  },
  {
    id: '3',
    username: 'user',
    email: 'user@example.com',
    firstName: 'Saba',
    lastName: 'Khan',
    roleId: '3',
    role: {
      id: '3',
      name: 'User',
      description: 'Basic user access'
    },
    isActive: true,
    permissions: []
  },
  {
    id: '4',
    username: 'sales_rep',
    email: 'sales@example.com',
    firstName: 'Rajesh',
    lastName: 'Kumar',
    roleId: '4',
    role: {
      id: '4',
      name: 'Sales Representative',
      description: 'Sales-focused role'
    },
    isActive: true,
    permissions: []
  },
  {
    id: '5',
    username: 'finance_officer',
    email: 'finance@example.com',
    firstName: 'Rajesh',
    lastName: 'Kumar',
    roleId: '5',
    role: {
      id: '5',
      name: 'Finance Officer',
      description: 'Financial operations'
    },
    isActive: false,
    permissions: []
  }
];

// Methods
const fetchUsers = () => {
  loading.value = true;
  setTimeout(() => {
    users.value = [...mockUsers];
    lovUsers.value = [...mockUsers];
    loading.value = false;
  }, 300);
};

const onUserChange = (userId) => {
  if (userId) {
    selectedUser.value = users.value.find(user => user.id === userId);
    loadUserPermissions();
  } else {
    selectedUser.value = null;
    userPermissions.value = {};
  }
};

const loadUserPermissions = () => {
  if (selectedUser.value) {
    // Initialize all permissions as false
    const permissions = {};
    allPermissions.forEach(permission => {
      permissions[permission.key] = false;
    });
    
    // Load existing user permissions if any
    if (selectedUser.value.permissions && selectedUser.value.permissions.length > 0) {
      selectedUser.value.permissions.forEach(permission => {
        permissions[permission] = true;
      });
    }
    
    userPermissions.value = permissions;
  }
};

const loadRolePermissions = () => {
  if (selectedUser.value?.role) {
    // This would typically load permissions from the role
    // For now, we'll simulate loading role-based permissions
    const rolePermissions = {
      'Administrator': allPermissions.map(p => p.key),
      'Manager': [
        'sales.read', 'sales.create', 'sales.update',
        'procurement.read', 'procurement.create', 'procurement.update',
        'finance.read', 'reports.read'
      ],
      'User': [
        'sales.read', 'procurement.read', 'finance.read'
      ],
      'Sales Representative': [
        'sales.read', 'sales.create', 'sales.update',
        'reports.read'
      ],
      'Finance Officer': [
        'finance.read', 'finance.create', 'finance.update',
        'reports.read', 'reports.export'
      ]
    };
    
    const roleName = selectedUser.value.role.name;
    const permissions = rolePermissions[roleName] || [];
    
    // Reset all permissions
    const newPermissions = {};
    allPermissions.forEach(permission => {
      newPermissions[permission.key] = permissions.includes(permission.key);
    });
    
    userPermissions.value = newPermissions;
    
    $swal.fire({
      title: 'Success',
      text: `Loaded permissions from ${roleName} role`,
      icon: 'success'
    });
  }
};

const selectAllPermissions = () => {
  const permissions = {};
  allPermissions.forEach(permission => {
    permissions[permission.key] = true;
  });
  userPermissions.value = permissions;
};

const clearAllPermissions = () => {
  const permissions = {};
  allPermissions.forEach(permission => {
    permissions[permission.key] = false;
  });
  userPermissions.value = permissions;
};

const openLOV = () => {
  lovSearchQuery.value = '';
  showLOVModal.value = true;
};

const closeLOVModal = () => {
  showLOVModal.value = false;
  lovSearchQuery.value = '';
};

const selectUserFromLOV = (user) => {
  selectedUserId.value = user.id;
  selectedUser.value = user;
  showPermissions.value = false; // Hide permissions until Execute Query is clicked
  closeLOVModal();
};

const filterLOVUsers = () => {
  // The filtering is handled by the computed property
  // This method is called on input but the actual filtering happens in computed
};

const openQuery = () => {
  $swal.fire({
    title: 'Query Builder',
    text: 'Query builder would open for custom user search criteria',
    icon: 'info',
    confirmButtonText: 'OK'
  });
};

const executeQuery = () => {
  if (!selectedUser.value) {
    $swal.fire({
      title: 'No User Selected',
      text: 'Please select a user first using LOV button or F9',
      icon: 'warning',
      confirmButtonText: 'OK'
    });
    return;
  }
  
  // Show permissions and load them
  showPermissions.value = true;
  loadUserPermissions();
  
  $swal.fire({
    title: 'Query Executed',
    text: `Module permissions loaded for ${selectedUser.value.firstName} ${selectedUser.value.lastName}`,
    icon: 'success',
    confirmButtonText: 'OK'
  });
};

const refreshPage = () => {
  window.location.reload();
};

const savePermissions = async () => {
  if (!selectedUser.value) {
    $swal.fire({
      title: 'Error',
      text: 'Please select a user first',
      icon: 'error'
    });
    return;
  }

  try {
    loading.value = true;
    
    // Get selected permissions
    const selectedPermissions = Object.entries(userPermissions.value)
      .filter(([key, value]) => value)
      .map(([key]) => key);
    
    // Update user permissions
    const userIndex = users.value.findIndex(user => user.id === selectedUser.value.id);
    if (userIndex !== -1) {
      users.value[userIndex].permissions = selectedPermissions;
    }
    
    // Here you would typically make an API call to save the permissions
    // await $fetch(`/api/users/${selectedUser.value.id}/permissions`, {
    //   method: 'PUT',
    //   body: { permissions: selectedPermissions }
    // });
    
    $swal.fire({
      title: 'Success',
      text: `Permissions saved for ${selectedUser.value.firstName} ${selectedUser.value.lastName}`,
      icon: 'success'
    });
    
  } catch (error) {
    console.error('Error saving permissions:', error);
    $swal.fire({
      title: 'Error',
      text: 'Failed to save permissions',
      icon: 'error'
    });
  } finally {
    loading.value = false;
  }
};

// Keyboard shortcuts
const handleKeydown = (event) => {
  if (event.key === 'F9') {
    event.preventDefault();
    openLOV();
  } else if (event.key === 'F8') {
    event.preventDefault();
    executeQuery();
  }
};

// Lifecycle
onMounted(() => {
  fetchUsers();
  document.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown);
});
</script>

<style scoped>
/* Add any additional styles here */
</style>
