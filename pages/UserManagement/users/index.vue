<template>
  <div>
    <LayoutsBreadcrumb />
    <rs-card>
      <template #header>
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <Icon class="mr-2 flex justify-center" name="ic:outline-people"></Icon>
            Users Management
          </div>
          <rs-button
            variant="success"
            @click="openAddModal"
          >
            <Icon name="ic:outline-add" class="mr-1" size="1rem" />
            Add User
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
                placeholder="Search users..."
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

          <!-- Users Table -->
          <rs-table
            :data="users"
            :field="tableFields"
            :advanced="true"
            :options-advanced="{
              sortable: true,
              filterable: true,
              responsive: true,
              outsideBorder: true
            }"
            :options="{
              variant: 'default',
              striped: true,
              bordered: true,
              hover: true
            }"
            :page-size="pageSize"
          >
            <template #actions="{ value }">
              <div class="flex space-x-2">
                <rs-button
                  variant="info-outline"
                  size="sm"
                  @click="editUser(value)"
                >
                  <Icon name="ic:outline-edit" size="0.875rem" />
                </rs-button>
                <rs-button
                  variant="danger-outline"
                  size="sm"
                  @click="deleteUser(value)"
                >
                  <Icon name="ic:outline-delete" size="0.875rem" />
                </rs-button>
              </div>
            </template>
            <template #isActive="{ value }">
              <rs-badge
                :variant="value ? 'success' : 'danger'"
                :text="value ? 'Active' : 'Inactive'"
              />
            </template>
            <template #role="{ value }">
              <span class="font-medium">{{ value?.name || 'N/A' }}</span>
            </template>
          </rs-table>
        </div>
      </template>
    </rs-card>

    <!-- Add/Edit User Modal -->
    <rs-modal 
      v-model="showModal"  
      :title="isEditing ? 'Edit User' : 'Add User'" 
      size="lg"
      ok-title='Save User'>
      <FormKit
        type="form"
        :actions="false"
        @submit="handleSubmit"
        v-model="formData"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormKit
            type="text"
            name="username"
            label="Username"
            :validation="[['required']]"
            placeholder="Enter username"
          />
          <FormKit
            type="email"
            name="email"
            label="Email"
            :validation="[['required'], ['email']]"
            placeholder="Enter email"
          />
          <FormKit
            type="text"
            name="firstName"
            label="First Name"
            :validation="[['required']]"
            placeholder="Enter first name"
          />
          <FormKit
            type="text"
            name="lastName"
            label="Last Name"
            :validation="[['required']]"
            placeholder="Enter last name"
          />
          <FormKit
            v-if="!isEditing"
            type="password"
            name="password"
            label="Password"
            :validation="[['required'], ['min', 6]]"
            placeholder="Enter password"
          />
          <FormKit
            type="select"
            name="roleId"
            label="Role"
            :validation="[['required']]"
            :options="roleOptions"
            placeholder="Select role"
          />
          <div class="md:col-span-2">
            <FormKit
              type="checkbox"
              name="isActive"
              label="Active"
              :value="true"
            />
          </div>
        </div>

        <div class="flex justify-end space-x-4 pt-6 border-t mt-6">
          <rs-button
            variant="secondary-outline"
            @click="closeModal"
          >
            Cancel
          </rs-button>
          <rs-button
            variant="success"
            btn-type="submit"
            :disabled="loading"
          >
            {{ isEditing ? 'Update' : 'Create' }} User
          </rs-button>
        </div>
      </FormKit>
    </rs-modal>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useNuxtApp } from '#app';

definePageMeta({
  title: "Users Management",
});

const { $swal } = useNuxtApp();

// Reactive data
const users = ref([]);
const allUsers = ref([]);
const roles = ref([]);
const loading = ref(false);
const searchQuery = ref('');
const showModal = ref(false);
const isEditing = ref(false);
const pageSize = ref(10);

// Form data
const formData = ref({
  username: '',
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  roleId: '',
  isActive: true
});

// Table fields configuration
const tableFields = [
  'username',
  'email',
  'firstName',
  'lastName',
  'role',
  'isActive',
  'actions'
];

// Computed properties
const roleOptions = computed(() => {
  return roles.value.map(role => ({
    label: role.name,
    value: role.id
  }));
});

// Mock data
const mockUsers = [
  {
    id: '1',
    username: 'admin',
    email: 'admin@example.com',
    firstName: 'Admin',
    lastName: 'User',
    roleId: '1',
    role: {
      id: '1',
      name: 'Administrator',
      description: 'Full system access'
    },
    isActive: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: '2',
    username: 'manager',
    email: 'manager@example.com',
    firstName: 'Manager',
    lastName: 'User',
    roleId: '2',
    role: {
      id: '2',
      name: 'Manager',
      description: 'Management access'
    },
    isActive: true,
    createdAt: new Date('2024-01-02'),
    updatedAt: new Date('2024-01-02')
  },
  {
    id: '3',
    username: 'user',
    email: 'user@example.com',
    firstName: 'Regular',
    lastName: 'User',
    roleId: '3',
    role: {
      id: '3',
      name: 'User',
      description: 'Basic user access'
    },
    isActive: true,
    createdAt: new Date('2024-01-03'),
    updatedAt: new Date('2024-01-03')
  },
  {
    id: '4',
    username: 'sales_rep',
    email: 'sales@example.com',
    firstName: 'Sales',
    lastName: 'Representative',
    roleId: '4',
    role: {
      id: '4',
      name: 'Sales Representative',
      description: 'Sales-focused role'
    },
    isActive: true,
    createdAt: new Date('2024-01-04'),
    updatedAt: new Date('2024-01-04')
  },
  {
    id: '5',
    username: 'finance_officer',
    email: 'finance@example.com',
    firstName: 'Finance',
    lastName: 'Officer',
    roleId: '5',
    role: {
      id: '5',
      name: 'Finance Officer',
      description: 'Financial operations'
    },
    isActive: false,
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-05')
  }
];

const mockRoles = [
  { id: '1', name: 'Administrator' },
  { id: '2', name: 'Manager' },
  { id: '3', name: 'User' },
  { id: '4', name: 'Sales Representative' },
  { id: '5', name: 'Finance Officer' }
];

// Methods
const fetchUsers = () => {
  loading.value = true;
  // Simulate API delay
  setTimeout(() => {
    allUsers.value = [...mockUsers];
    filterUsers();
    loading.value = false;
  }, 300);
};

const fetchRoles = () => {
  roles.value = [...mockRoles];
};

const filterUsers = () => {
  if (searchQuery.value) {
    users.value = allUsers.value.filter(user => 
      user.username.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.firstName.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  } else {
    users.value = [...allUsers.value];
  }
};

const refreshData = () => {
  fetchUsers();
};

const loadTestData = () => {
  console.log('Loading test data directly');
  allUsers.value = [...mockUsers];
  users.value = [...mockUsers];
  console.log('Test data loaded:', users.value);
};

const openAddModal = () => {
  isEditing.value = false;
  formData.value = {
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    roleId: '',
    isActive: true
  };
  showModal.value = true;
};

const editUser = (user) => {
  isEditing.value = true;
  formData.value = {
    username: user.username,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    password: '',
    roleId: user.roleId,
    isActive: user.isActive
  };
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  formData.value = {
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    roleId: '',
    isActive: true
  };
};

const handleSubmit = (formData) => {
  try {
    loading.value = true;
    
    if (isEditing.value) {
      // Update existing user
      const index = allUsers.value.findIndex(user => user.id === formData.id);
      if (index !== -1) {
        const selectedRole = roles.value.find(role => role.id === formData.roleId);
        allUsers.value[index] = {
          ...allUsers.value[index],
          ...formData,
          role: selectedRole,
          updatedAt: new Date()
        };
      }
      $swal.fire({
        title: 'Success',
        text: 'User updated successfully',
        icon: 'success'
      });
    } else {
      // Create new user
      const selectedRole = roles.value.find(role => role.id === formData.roleId);
      const newUser = {
        id: Date.now().toString(),
        ...formData,
        role: selectedRole,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      allUsers.value.push(newUser);
      $swal.fire({
        title: 'Success',
        text: 'User created successfully',
        icon: 'success'
      });
    }
    
    closeModal();
    filterUsers();
  } catch (error) {
    console.error('Error saving user:', error);
    $swal.fire({
      title: 'Error',
      text: 'Failed to save user',
      icon: 'error'
    });
  } finally {
    loading.value = false;
  }
};

const deleteUser = async (user) => {
  const result = await $swal.fire({
    title: 'Are you sure?',
    text: `You are about to delete user "${user.username}". This action cannot be undone!`,
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
      
      // Remove user from allUsers array
      const index = allUsers.value.findIndex(u => u.id === user.id);
      if (index !== -1) {
        allUsers.value.splice(index, 1);
      }
      
      $swal.fire({
        title: 'Deleted!',
        text: 'User has been deleted.',
        icon: 'success'
      });
      
      filterUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
      $swal.fire({
        title: 'Error',
        text: 'Failed to delete user',
        icon: 'error'
      });
    } finally {
      loading.value = false;
    }
  }
};

// Watch search query
watch(searchQuery, () => {
  filterUsers();
});

// Lifecycle
onMounted(() => {
  fetchUsers();
  fetchRoles();
});
</script>

<style scoped>
/* Add any additional styles here */
</style>
