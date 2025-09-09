<template>
  <div>
    <rs-card>
      <template #header>
        <div class="flex">
          <Icon class="mr-2 flex justify-center" name="ic:outline-directions-car"></Icon>
          Trade Plates
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
                      Trade Plate No
                    </th>
                    <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">
                      Regn No
                    </th>
                    <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">
                      Insured Value
                    </th>
                    <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">
                      Expiry Date
                    </th>
                    <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">
                      Premium
                    </th>
                    <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">
                      Road Tax
                    </th>
                    <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">
                      Dept Code
                    </th>
                    <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))]">
                      Custodian
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(plate, index) in tradePlates" :key="index" class="border-b border-[rgb(var(--border-color))]">
                    <!-- Trade Plate No -->
                    <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                      <input 
                        v-model="plate.tradePlateNo" 
                        type="text" 
                        class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="Enter trade plate number"
                      />
                    </td>
                    
                    <!-- Regn No -->
                    <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                      <input 
                        v-model="plate.regnNo" 
                        type="text" 
                        class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="Enter registration number"
                      />
                    </td>
                    
                    <!-- Insured Value -->
                    <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                      <input 
                        v-model="plate.insuredValue" 
                        type="number" 
                        step="0.01"
                        class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="Enter insured value"
                      />
                    </td>
                    
                    <!-- Expiry Date -->
                    <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                      <input 
                        v-model="plate.expiryDate" 
                        type="date" 
                        class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </td>
                    
                    <!-- Premium -->
                    <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                      <input 
                        v-model="plate.premium" 
                        type="number" 
                        step="0.01"
                        class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="0.00"
                      />
                    </td>
                    
                    <!-- Road Tax -->
                    <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                      <input 
                        v-model="plate.roadTax" 
                        type="number" 
                        step="0.01"
                        class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="0.00"
                      />
                    </td>
                    
                    <!-- Dept Code -->
                    <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                      <input 
                        v-model="plate.deptCode" 
                        type="text" 
                        class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="Enter department code"
                      />
                    </td>
                    
                    <!-- Custodian -->
                    <td class="py-3 px-4">
                      <input 
                        v-model="plate.custodian" 
                        type="text" 
                        class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="Enter custodian name"
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
  title: "Trade Plates",
});

const { $swal } = useNuxtApp();

// Trade Plates data structure
const tradePlates = ref([
  {
    tradePlateNo: '',
    regnNo: '',
    insuredValue: '',
    expiryDate: '',
    premium: '0.00',
    roadTax: '0.00',
    deptCode: '',
    custodian: ''
  },
  {
    tradePlateNo: '',
    regnNo: '',
    insuredValue: '',
    expiryDate: '',
    premium: '0.00',
    roadTax: '0.00',
    deptCode: '',
    custodian: ''
  },
  {
    tradePlateNo: '',
    regnNo: '',
    insuredValue: '',
    expiryDate: '',
    premium: '0.00',
    roadTax: '0.00',
    deptCode: '',
    custodian: ''
  },
  {
    tradePlateNo: '',
    regnNo: '',
    insuredValue: '',
    expiryDate: '',
    premium: '0.00',
    roadTax: '0.00',
    deptCode: '',
    custodian: ''
  },
  {
    tradePlateNo: '',
    regnNo: '',
    insuredValue: '',
    expiryDate: '',
    premium: '0.00',
    roadTax: '0.00',
    deptCode: '',
    custodian: ''
  },
  {
    tradePlateNo: '',
    regnNo: '',
    insuredValue: '',
    expiryDate: '',
    premium: '0.00',
    roadTax: '0.00',
    deptCode: '',
    custodian: ''
  },
  {
    tradePlateNo: '',
    regnNo: '',
    insuredValue: '',
    expiryDate: '',
    premium: '0.00',
    roadTax: '0.00',
    deptCode: '',
    custodian: ''
  },
  {
    tradePlateNo: '',
    regnNo: '',
    insuredValue: '',
    expiryDate: '',
    premium: '0.00',
    roadTax: '0.00',
    deptCode: '',
    custodian: ''
  },
  {
    tradePlateNo: '',
    regnNo: '',
    insuredValue: '',
    expiryDate: '',
    premium: '0.00',
    roadTax: '0.00',
    deptCode: '',
    custodian: ''
  },
  {
    tradePlateNo: '',
    regnNo: '',
    insuredValue: '',
    expiryDate: '',
    premium: '0.00',
    roadTax: '0.00',
    deptCode: '',
    custodian: ''
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
      tradePlates.value.forEach(plate => {
        plate.tradePlateNo = '';
        plate.regnNo = '';
        plate.insuredValue = '';
        plate.expiryDate = '';
        plate.premium = '0.00';
        plate.roadTax = '0.00';
        plate.deptCode = '';
        plate.custodian = '';
      });
    }
  });
};

const handleRefresh = () => {
  // Reload or refresh data
  console.log('Refreshing trade plates data...');
};

const handleSubmit = async (formData) => {
  try {
    // Save trade plates data
    const validPlates = tradePlates.value.filter(plate => 
      plate.tradePlateNo.trim() !== '' || 
      plate.regnNo.trim() !== '' || 
      plate.insuredValue !== '' ||
      plate.deptCode.trim() !== '' || 
      plate.custodian.trim() !== ''
    );
    
    if (validPlates.length === 0) {
      $swal.fire({
        title: 'No Data',
        text: 'Please enter at least one trade plate\'s information before saving.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      return;
    }
    
    console.log('Saving trade plates:', validPlates);
    $swal.fire({
      title: 'Success!',
      text: 'Trade plates saved successfully!',
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