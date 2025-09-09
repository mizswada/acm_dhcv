<template> 
    <div>
    <rs-card>
      <template #header>
        <div class="flex items-center space-x-2">
          <Icon name="heroicons:cube" class="w-5 h-5" />
          <h2 class="text-lg font-semibold text-[rgb(var(--text-color))]">Stock Allocation - VO</h2>
        </div>
      </template>

      <template #body>
        <div class="space-y-6">
          <FormKit
            type="form"
            @submit="handleSubmit"
            :actions="false"
          >
        <!-- Allocation Details Section -->
        <div class="grid grid-cols-4 gap-6 mb-8">
          <div>
            <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Location Code:</label>
            <input v-model="formData.locationCode" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter location code" />
          </div>
          <div>
            <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">VO No:</label>
            <input v-model="formData.voNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter VO number" />
          </div>
          <div>
            <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Party Code:</label>
            <input v-model="formData.partyCode" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter party code" />
          </div>
          <div>
            <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Category Code:</label>
            <input v-model="formData.categoryCode" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter category code" />
          </div>
          <div>
            <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Model Code:</label>
            <input v-model="formData.modelCode" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter model code" />
          </div>
          <div>
            <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Body Type:</label>
            <input v-model="formData.bodyType" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter body type" />
          </div>
          <div>
            <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Color Code:</label>
            <input v-model="formData.colorCode" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter color code" />
          </div>
          <div>
            <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Qty:</label>
            <input v-model="formData.qty" type="number" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter quantity" />
          </div>
          <div>
            <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Salesman Code:</label>
            <input v-model="formData.salesmanCode" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter salesman code" />
          </div>
          <div>
            <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Deposit Amount:</label>
            <input v-model="formData.depositAmount" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
          </div>
          <div>
            <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Created By:</label>
            <input v-model="formData.createdBy" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter created by" />
          </div>
          <div>
            <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">VO Date:</label>
            <input v-model="formData.voDate" type="date" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
          </div>
          <div>
            <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Private:</label>
            <select v-model="formData.private" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
              <option value="Private">Private</option>
              <option value="Commercial">Commercial</option>
            </select>
          </div>
          <div class="col-span-2">
            <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Remarks:</label>
            <textarea v-model="formData.remarks" rows="3" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter remarks"></textarea>
          </div>
          <div class="col-span-2">
            <label class="flex items-center space-x-2 mt-6">
              <input v-model="formData.cancelled" type="checkbox" class="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary/20" />
              <span class="text-sm font-medium text-[rgb(var(--text-color))]">Cancelled</span>
            </label>
          </div>
        </div>

        <!-- Stock Item Details Table -->
        <div class="mt-12">
          <h3 class="text-lg font-medium text-[rgb(var(--text-color))] mb-6">Stock Item Details</h3>
          <div class="overflow-x-auto">
            <table class="w-full border border-[rgb(var(--border-color))] rounded-lg">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-6 py-4 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Stock Location Code & Name</th>
                  <th class="px-6 py-4 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Model Code</th>
                  <th class="px-6 py-4 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Chassis No</th>
                  <th class="px-6 py-4 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Alloc Date</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in stockItems" :key="index" class="hover:bg-gray-50">
                  <td class="px-6 py-4 border-b border-[rgb(var(--border-color))]">
                    <input v-model="item.stockLocation" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" placeholder="Stock location" />
                  </td>
                  <td class="px-6 py-4 border-b border-[rgb(var(--border-color))]">
                    <input v-model="item.modelCode" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" placeholder="Model code" />
                  </td>
                  <td class="px-6 py-4 border-b border-[rgb(var(--border-color))]">
                    <input v-model="item.chassisNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" placeholder="Chassis number" />
                  </td>
                  <td class="px-6 py-4 border-b border-[rgb(var(--border-color))]">
                    <input v-model="item.allocDate" type="date" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex justify-center space-x-4 pt-8 pb-6 pr-6 mt-8 border-t">
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
import { ref, onMounted, onUnmounted } from 'vue';
import { useNuxtApp } from '#app';

definePageMeta({
  title: "Stock Allocation - VO",
});

const { $swal } = useNuxtApp();

// Form data
const formData = ref({
  locationCode: '',
  voNo: '',
  partyCode: '',
  categoryCode: '',
  modelCode: '',
  bodyType: '',
  colorCode: '',
  qty: '',
  salesmanCode: '',
  depositAmount: '0.00',
  remarks: '',
  createdBy: '',
  voDate: '',
  private: 'Private',
  cancelled: true
});

// Stock items data
const stockItems = ref([
  { stockLocation: '', modelCode: '', chassisNo: '', allocDate: '' },
  { stockLocation: '', modelCode: '', chassisNo: '', allocDate: '' },
  { stockLocation: '', modelCode: '', chassisNo: '', allocDate: '' },
  { stockLocation: '', modelCode: '', chassisNo: '', allocDate: '' },
  { stockLocation: '', modelCode: '', chassisNo: '', allocDate: '' }
]);

// Form submission
const handleSubmit = async (formData) => {
  try {
    // Validate that at least one stock item has data
    const hasStockData = stockItems.value.some(item => 
      item.stockLocation || item.modelCode || item.chassisNo || item.allocDate
    );

    if (!hasStockData) {
      $swal.fire({
        title: 'Validation Error',
        text: 'Please enter at least one stock item detail.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      return;
    }

    // Process form submission
    console.log('Form submitted:', { formData, stockItems: stockItems.value });
    
    $swal.fire({
      title: 'Success!',
      text: 'Stock allocation has been saved successfully.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  } catch (error) {
    console.error('Error submitting form:', error);
    $swal.fire({
      title: 'Error!',
      text: 'An error occurred while saving the stock allocation.',
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }
};

// Cancel handler
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
      // Reset form data
      Object.keys(formData.value).forEach(key => {
        if (key === 'depositAmount') {
          formData.value[key] = '0.00';
        } else if (key === 'private') {
          formData.value[key] = 'Private';
        } else if (key === 'cancelled') {
          formData.value[key] = true;
        } else {
          formData.value[key] = '';
        }
      });
      
      // Reset stock items
      stockItems.value.forEach(item => {
        item.stockLocation = '';
        item.modelCode = '';
        item.chassisNo = '';
        item.allocDate = '';
      });
    }
  });
};

// Refresh handler
const handleRefresh = () => {
  // Reset form data
  Object.keys(formData.value).forEach(key => {
    if (key === 'depositAmount') {
      formData.value[key] = '0.00';
    } else if (key === 'private') {
      formData.value[key] = 'Private';
    } else if (key === 'cancelled') {
      formData.value[key] = true;
    } else {
      formData.value[key] = '';
    }
  });
  
  // Reset stock items
  stockItems.value.forEach(item => {
    item.stockLocation = '';
    item.modelCode = '';
    item.chassisNo = '';
    item.allocDate = '';
  });

  $swal.fire({
    title: 'Refreshed!',
    text: 'Form has been refreshed successfully.',
    icon: 'success',
    timer: 1500,
    showConfirmButton: false
  });
};

// Keyboard shortcuts
const handleKeydown = (event) => {
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
        document.querySelector('form').requestSubmit();
        break;
    }
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown);
});
</script>