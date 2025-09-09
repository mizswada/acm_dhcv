<template>
  <div>
    <LayoutsBreadcrumb />
    <rs-card>
      <template #header>
        <div class="flex">
          <Icon class="mr-2 flex justify-center" name="ic:outline-person"></Icon>
          Drivers
        </div>
      </template>
      <template #body>
        <div class="space-y-6">
          <FormKit type="form" :actions="false" @submit="handleSubmit">
            <!-- Data Entry Table -->
            <div class="overflow-x-auto">
              <table class="w-full border-collapse">
                <thead>
                  <tr class="border-b border-[rgb(var(--border-color))]">
                    <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">
                      Driver Code
                    </th>
                    <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">
                      Name
                    </th>
                    <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">
                      NRIC No
                    </th>
                    <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">
                      License Type
                    </th>
                    <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">
                      Expiry Date
                    </th>
                    <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">
                      Trade
                    </th>
                    <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))]">
                      Plate No
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(driver, index) in drivers" :key="index" class="border-b border-[rgb(var(--border-color))]">
                    <!-- Driver Code -->
                    <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                      <input 
                        v-model="driver.code" 
                        type="text" 
                        class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="Enter driver code"
                      />
                    </td>
                    
                    <!-- Name -->
                    <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                      <input 
                        v-model="driver.name" 
                        type="text" 
                        class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="Enter driver name"
                      />
                    </td>
                    
                    <!-- NRIC No -->
                    <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                      <input 
                        v-model="driver.nricNo" 
                        type="text" 
                        class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="Enter NRIC number"
                      />
                    </td>
                    
                    <!-- License Type -->
                    <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                      <input 
                        v-model="driver.licenseType" 
                        type="text" 
                        class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="Enter license type"
                      />
                    </td>
                    
                    <!-- Expiry Date -->
                    <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                      <input 
                        v-model="driver.expiryDate" 
                        type="date" 
                        class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </td>
                    
                    <!-- Trade -->
                    <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                      <input 
                        v-model="driver.trade" 
                        type="text" 
                        class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="Enter trade"
                      />
                    </td>
                    
                    <!-- Plate No -->
                    <td class="py-3 px-4">
                      <input 
                        v-model="driver.plateNo" 
                        type="text" 
                        class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="Enter plate number"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Action Buttons -->
            <div class="flex justify-end space-x-4 pt-6 pb-4 pr-4 border-t border-[rgb(var(--border-color))]">
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
  title: "Drivers",
});

const { $swal } = useNuxtApp();

// Driver data structure
const drivers = ref([
  {
    code: '',
    name: '',
    nricNo: '',
    licenseType: '',
    expiryDate: '',
    trade: '',
    plateNo: ''
  },
  {
    code: '',
    name: '',
    nricNo: '',
    licenseType: '',
    expiryDate: '',
    trade: '',
    plateNo: ''
  },
  {
    code: '',
    name: '',
    nricNo: '',
    licenseType: '',
    expiryDate: '',
    trade: '',
    plateNo: ''
  },
  {
    code: '',
    name: '',
    nricNo: '',
    licenseType: '',
    expiryDate: '',
    trade: '',
    plateNo: ''
  },
  {
    code: '',
    name: '',
    nricNo: '',
    licenseType: '',
    expiryDate: '',
    trade: '',
    plateNo: ''
  },
  {
    code: '',
    name: '',
    nricNo: '',
    licenseType: '',
    expiryDate: '',
    trade: '',
    plateNo: ''
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
      drivers.value.forEach(driver => {
        driver.code = '';
        driver.name = '';
        driver.nricNo = '';
        driver.licenseType = '';
        driver.expiryDate = '';
        driver.trade = '';
        driver.plateNo = '';
      });
    }
  });
};

const handleRefresh = () => {
  // Reload or refresh data
  console.log('Refreshing drivers data...');
};

const handleSubmit = async (formData) => {
  try {
    // Save driver data
    const validDrivers = drivers.value.filter(driver => 
      driver.code.trim() !== '' || 
      driver.name.trim() !== '' || 
      driver.nricNo.trim() !== '' ||
      driver.licenseType.trim() !== '' || 
      driver.trade.trim() !== '' || 
      driver.plateNo.trim() !== ''
    );
    
    if (validDrivers.length === 0) {
      $swal.fire({
        title: 'No Data',
        text: 'Please enter at least one driver\'s information before saving.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      return;
    }
    
    console.log('Saving drivers:', validDrivers);
    $swal.fire({
      title: 'Success!',
      text: 'Drivers saved successfully!',
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