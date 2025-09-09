<template>
  <div>
    <rs-card>
      <template #header>
        <div class="flex">
          <Icon class="mr-2 flex justify-center" name="ic:outline-folder"></Icon>
          Model Categories
        </div>
      </template>
      <template #body>
        <div class="space-y-6">
          <FormKit type="form" :actions="false" @submit="handleSubmit">
            <!-- Main Heading -->
            <div class="mb-4">
              <h3 class="text-lg font-semibold text-[rgb(var(--text-color))]">Model Category Code & Name</h3>
            </div>

            <!-- Data Entry Table -->
            <div class="overflow-x-auto">
              <table class="w-full border-collapse">
                <thead>
                  <tr class="border-b border-[rgb(var(--border-color))]">
                    <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">
                      Code
                    </th>
                    <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))]">
                      Name
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(category, index) in modelCategories" :key="index" class="border-b border-[rgb(var(--border-color))]">
                    <!-- Code -->
                    <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                      <input 
                        v-model="category.code" 
                        type="text" 
                        class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="Enter category code"
                      />
                    </td>
                    
                    <!-- Name -->
                    <td class="py-3 px-4">
                      <input 
                        v-model="category.name" 
                        type="text" 
                        class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="Enter category name"
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
  title: "Model Categories",
});

const { $swal } = useNuxtApp();

// Model Categories data structure
const modelCategories = ref([
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
      modelCategories.value.forEach(category => {
        category.code = '';
        category.name = '';
      });
    }
  });
};

const handleRefresh = () => {
  // Reload or refresh data
  console.log('Refreshing model categories data...');
};

const handleSubmit = async (formData) => {
  try {
    // Save model categories data
    const validCategories = modelCategories.value.filter(category => 
      category.code.trim() !== '' || 
      category.name.trim() !== ''
    );
    
    if (validCategories.length === 0) {
      $swal.fire({
        title: 'No Data',
        text: 'Please enter at least one model category\'s information before saving.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      return;
    }
    
    console.log('Saving model categories:', validCategories);
    $swal.fire({
      title: 'Success!',
      text: 'Model categories saved successfully!',
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
        case 'r':
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