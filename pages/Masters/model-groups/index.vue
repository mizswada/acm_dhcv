<template>
  <div>
    <rs-card>
      <template #header>
        <div class="flex">
          <Icon class="mr-2 flex justify-center" name="ic:outline-groups"></Icon>
          Model Groups
        </div>
      </template>
      <template #body>
        <div class="space-y-6">
          <FormKit type="form" :actions="false" @submit="handleSubmit">
            <!-- Main Heading -->
            <div class="mb-4">
              <h3 class="text-lg font-semibold text-[rgb(var(--text-color))]">Group Code & Name</h3>
            </div>

            <!-- Data Entry Table -->
            <div class="overflow-x-auto">
              <table class="w-full border-collapse">
                <thead>
                  <tr class="border-b border-[rgb(var(--border-color))]">
                    <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))] w-1/3">
                      Group Code
                    </th>
                    <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] w-2/3">
                      Name
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(group, index) in modelGroups" :key="index" class="border-b border-[rgb(var(--border-color))]">
                    <!-- Group Code -->
                    <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                      <input 
                        v-model="group.code" 
                        type="text" 
                        class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="Enter group code"
                      />
                    </td>
                    
                    <!-- Name -->
                    <td class="py-3 px-4">
                      <input 
                        v-model="group.name" 
                        type="text" 
                        class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="Enter group name"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Action Buttons -->
            <div class="flex justify-center space-x-4 pt-6 pb-4 pr-4 border-t border-[rgb(var(--border-color))]">
              <rs-button
                variant="secondary-outline"
                @click="handleCancel"
              >
                Cancel
              </rs-button>
              <rs-button
                variant="info"
                @click="handleRefresh"
              >
                Refresh
              </rs-button>
              <rs-button
                variant="success"
                btn-type="submit"
              >
                Save
              </rs-button>
            </div>
          </FormKit>
        </div>
      </template>
    </rs-card>
  </div>
</template>

<script setup>
import { useNuxtApp } from '#app';

definePageMeta({
  title: "Model Groups",
});

const { $swal } = useNuxtApp();

// Model Groups data structure
const modelGroups = ref([
  {
    code: '',
    name: ''
  },
  {
    code: '',
    name: ''
  },
  {
    code: '',
    name: ''
  },
  {
    code: '',
    name: ''
  },
  {
    code: '',
    name: ''
  },
  {
    code: '',
    name: ''
  },
  {
    code: '',
    name: ''
  },
  {
    code: '',
    name: ''
  },
  {
    code: '',
    name: ''
  },
  {
    code: '',
    name: ''
  }
]);

// Action handlers
const handleCancel = () => {
  $swal.fire({
    title: 'Are you sure?',
    text: 'You will lose any unsaved changes!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, cancel',
    cancelButtonText: 'Stay',
  }).then((result) => {
    if (result.isConfirmed) {
      // Reset all form data
      modelGroups.value.forEach(group => {
        group.code = '';
        group.name = '';
      });
    }
  });
};

const handleRefresh = () => {
  // Reload or refresh data
  console.log('Refreshing model groups data...');
};

const handleSubmit = async (formData) => {
  try {
    // Save model groups data
    const validGroups = modelGroups.value.filter(group => 
      group.code.trim() !== '' || 
      group.name.trim() !== ''
    );
    
    if (validGroups.length === 0) {
      $swal.fire({
        title: 'No Data',
        text: 'Please enter at least one model group\'s information before saving.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      return;
    }
    
    console.log('Saving model groups:', validGroups);
    $swal.fire({
      title: 'Success!',
      text: 'Model groups saved successfully!',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  } catch (error) {
    console.error('Error submitting form:', error);
    $swal.fire({
      title: 'Error!',
      text: 'An error occurred while saving the data.',
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }
};

// Keyboard shortcuts
onMounted(() => {
  const handleKeyDown = (event) => {
    if (event.altKey) {
      switch (event.key.toLowerCase()) {
        case 'c':
          event.preventDefault();
          handleCancel();
          break;
        case 'e':
          event.preventDefault();
          handleRefresh();
          break;
        case 's':
          event.preventDefault();
          handleSubmit();
          break;
      }
    }
  };
  
  document.addEventListener('keydown', handleKeyDown);
  
  onUnmounted(() => {
    document.removeEventListener('keydown', handleKeyDown);
  });
});
</script>