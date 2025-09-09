<template>
  <div>
    <LayoutsBreadcrumb />
    <rs-card>
      <template #header>
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <Icon class="mr-2 flex justify-center" name="ic:outline-security"></Icon>
            Roles Management
          </div>
          <rs-button
            variant="success"
            @click="navigateToAdd"
          >
            <Icon name="ic:outline-add" class="mr-1" size="1rem" />
            Add Role
          </rs-button>
        </div>
      </template>
      <template #body>
        <div class="space-y-6">
          <!-- Search and Filter -->
          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-4">
              <FormKit
                v-model="searchQuery"
                type="search"
                placeholder="Search roles..."
                outer-class="mb-0 w-64"
              />
            </div>
            <div class="flex items-center space-x-2">
              <rs-button
                variant="warning-outline"
                @click="loadTestData"
              >
                Load Test Data
              </rs-button>
              <rs-button
                variant="info-outline"
                @click="refreshData"
                :disabled="loading"
              >
                <Icon name="ic:outline-refresh" class="mr-1" size="1rem" />
                Refresh
              </rs-button>
            </div>
          </div>

          <!-- Debug Info -->
          <div class="mb-4 p-4 bg-gray-100 rounded">
            <p>Roles count: {{ roles.length }}</p>
            <p>Loading: {{ loading }}</p>
            <p>Search query: {{ searchQuery }}</p>
          </div>

          <!-- Simple Table Fallback -->
          <div v-if="roles.length === 0 && !loading" class="text-center py-8">
            <p class="text-gray-500">No roles found</p>
          </div>
          
          <div v-else-if="loading" class="text-center py-8">
            <p class="text-gray-500">Loading roles...</p>
          </div>

          <!-- Simple HTML Table -->
          <div v-else class="overflow-x-auto">
            <table class="min-w-full bg-white border border-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Permissions</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="role in roles" :key="role.id" class="hover:bg-gray-50">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {{ role.name }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ role.description }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div class="flex flex-wrap gap-1">
                      <span 
                        v-for="permission in role.permissions.slice(0, 3)" 
                        :key="permission"
                        class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {{ permission }}
                      </span>
                      <span 
                        v-if="role.permissions.length > 3"
                        class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                      >
                        +{{ role.permissions.length - 3 }} more
                      </span>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span 
                      :class="role.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'"
                      class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                    >
                      {{ role.isActive ? 'Active' : 'Inactive' }}
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div class="flex space-x-2">
                      <button
                        @click="navigateToEdit(role)"
                        class="text-blue-600 hover:text-blue-900"
                      >
                        Edit
                      </button>
                      <button
                        @click="deleteRole(role)"
                        class="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </template>
    </rs-card>

  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { useNuxtApp } from '#app';
import { useRouter } from 'vue-router';

definePageMeta({
  title: "Roles Management",
});

const { $swal } = useNuxtApp();
const router = useRouter();

// Reactive data
const roles = ref([]);
const allRoles = ref([]);
const loading = ref(false);
const searchQuery = ref('');
const pageSize = ref(10);

// Table fields configuration
const tableFields = [
  'name',
  'description',
  'permissions',
  'isActive',
  'actions'
];


// Mock data
const mockRoles = [
  {
    id: '1',
    name: 'Administrator',
    description: 'Full system access with all permissions',
    permissions: ['users.create', 'users.read', 'users.update', 'users.delete', 'roles.create', 'roles.read', 'roles.update', 'roles.delete', 'sales.create', 'sales.read', 'sales.update', 'sales.delete', 'procurement.create', 'procurement.read', 'procurement.update', 'procurement.delete', 'finance.create', 'finance.read', 'finance.update', 'finance.delete', 'reports.read', 'reports.export'],
    isActive: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: '2',
    name: 'Manager',
    description: 'Management access with limited permissions',
    permissions: ['users.read', 'users.update', 'roles.read', 'sales.create', 'sales.read', 'sales.update', 'procurement.create', 'procurement.read', 'procurement.update', 'finance.read', 'reports.read'],
    isActive: true,
    createdAt: new Date('2024-01-02'),
    updatedAt: new Date('2024-01-02')
  },
  {
    id: '3',
    name: 'User',
    description: 'Basic user access with read-only permissions',
    permissions: ['users.read', 'sales.read', 'procurement.read', 'finance.read', 'reports.read'],
    isActive: true,
    createdAt: new Date('2024-01-03'),
    updatedAt: new Date('2024-01-03')
  },
  {
    id: '4',
    name: 'Sales Representative',
    description: 'Sales-focused role with customer interaction permissions',
    permissions: ['users.read', 'sales.create', 'sales.read', 'sales.update', 'reports.read'],
    isActive: true,
    createdAt: new Date('2024-01-04'),
    updatedAt: new Date('2024-01-04')
  },
  {
    id: '5',
    name: 'Finance Officer',
    description: 'Financial operations and reporting permissions',
    permissions: ['users.read', 'finance.create', 'finance.read', 'finance.update', 'reports.read', 'reports.export'],
    isActive: true,
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-05')
  }
];

// Methods
const fetchRoles = () => {
  console.log('fetchRoles called');
  loading.value = true;
  // Simulate API delay
  setTimeout(() => {
    console.log('Setting roles data:', mockRoles);
    allRoles.value = [...mockRoles];
    filterRoles();
    loading.value = false;
    console.log('Roles after fetch:', roles.value);
  }, 300);
};

const filterRoles = () => {
  console.log('filterRoles called, searchQuery:', searchQuery.value);
  console.log('allRoles.value:', allRoles.value);
  if (searchQuery.value) {
    roles.value = allRoles.value.filter(role => 
      role.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      role.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  } else {
    roles.value = [...allRoles.value];
  }
  console.log('roles.value after filter:', roles.value);
};

const refreshData = () => {
  fetchRoles();
};

const loadTestData = () => {
  console.log('Loading test data directly');
  allRoles.value = [...mockRoles];
  roles.value = [...mockRoles];
  console.log('Test data loaded:', roles.value);
};

const navigateToAdd = () => {
  router.push('/UserManagement/roles/add');
};

const navigateToEdit = (role) => {
  router.push(`/UserManagement/roles/add?id=${role.id}`);
};

const deleteRole = async (role) => {
  const result = await $swal.fire({
    title: 'Are you sure?',
    text: `You are about to delete role "${role.name}". This action cannot be undone!`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'Cancel'
  });

  if (result.isConfirmed) {
    try {
      loading.value = true;
      
      // Remove role from allRoles array
      const index = allRoles.value.findIndex(r => r.id === role.id);
      if (index !== -1) {
        allRoles.value.splice(index, 1);
      }
      
      $swal.fire({
        title: 'Deleted!',
        text: 'Role has been deleted.',
        icon: 'success'
      });
      
      filterRoles();
    } catch (error) {
      console.error('Error deleting role:', error);
      $swal.fire({
        title: 'Error',
        text: 'Failed to delete role',
        icon: 'error'
      });
    } finally {
      loading.value = false;
    }
  }
};

// Watch search query
watch(searchQuery, () => {
  filterRoles();
});

// Lifecycle
onMounted(() => {
  console.log('Component mounted, calling fetchRoles');
  fetchRoles();
});
</script>

<style scoped>
/* Add any additional styles here */
</style>
