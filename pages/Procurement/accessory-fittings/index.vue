<template>
  <div>
    <LayoutsBreadcrumb />
    <rs-card>
      <template #header>
        <div class="flex">
          <Icon class="mr-2 flex justify-center" name="ic:outline-build"></Icon>
          Accessory Fitting
        </div>
      </template>
      <template #body>
        <div class="space-y-6">
          <FormKit type="form" :actions="false" @submit="handleSubmit">
            <!-- Top Section - General Information -->
            <div class="grid grid-cols-3 gap-6 mb-6">
              <!-- Left Column -->
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Serial No:</label>
                  <input v-model="formData.serialNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter serial no" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Vendor:</label>
                  <input v-model="formData.vendor" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter vendor" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Delivery Date:</label>
                  <input v-model="formData.deliveryDate" type="date" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Color Name:</label>
                  <input v-model="formData.colorName" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter color name" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Model Name:</label>
                  <input v-model="formData.modelName" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter model name" />
                </div>
              </div>

              <!-- Middle Column -->
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Despatch Date:</label>
                  <input v-model="formData.despatchDate" type="date" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">PR_No:</label>
                  <input v-model="formData.prNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter PR No" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Type:</label>
                  <select v-model="formData.type" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                    <option value="Standard">Standard</option>
                    <option value="Custom">Custom</option>
                    <option value="Premium">Premium</option>
                  </select>
                </div>
              </div>

              <!-- Right Column -->
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Created By:</label>
                  <input v-model="formData.createdBy" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter created by" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Modified By:</label>
                  <input v-model="formData.modifiedBy" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter modified by" />
                </div>
                <div class="flex items-center gap-2">
                  <input v-model="formData.cancelled" type="checkbox" id="cancelled" class="rounded border-[rgb(var(--border-color))] focus:ring-2 focus:ring-primary/20" />
                  <label for="cancelled" class="text-sm font-medium text-[rgb(var(--text-color))]">Cancelled</label>
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Invoice No:</label>
                  <select v-model="formData.invoiceNo" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                    <option value="">Select Invoice No</option>
                    <option value="INV001">INV001</option>
                    <option value="INV002">INV002</option>
                    <option value="INV003">INV003</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Middle Section - Tabular Data Grid -->
            <div class="mb-6">
              <h3 class="text-lg font-semibold text-[rgb(var(--text-color))] mb-4">Fitting Details</h3>
              <div class="overflow-x-auto">
                <table class="w-full border-collapse">
                  <thead>
                    <tr class="border-b border-[rgb(var(--border-color))]">
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">Model Code</th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">Chassis No</th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">Receipt No Lot No</th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">Color</th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">Completion Date</th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">Std Amt</th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))]">Invoice No</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in fittingItems" :key="index" class="border-b border-[rgb(var(--border-color))]">
                      <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                        <input v-model="item.modelCode" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter model code" />
                      </td>
                      <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                        <input v-model="item.chassisNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter chassis no" />
                      </td>
                      <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                        <input v-model="item.receiptNoLotNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter receipt no lot no" />
                      </td>
                      <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                        <input v-model="item.color" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter color" />
                      </td>
                      <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                        <input v-model="item.completionDate" type="date" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                      </td>
                      <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                        <input v-model="item.stdAmt" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                      </td>
                      <td class="py-3 px-4">
                        <div class="flex items-center gap-2">
                          <input v-model="item.invoiced" type="checkbox" :id="`invoiced-${index}`" class="rounded border-[rgb(var(--border-color))] focus:ring-2 focus:ring-primary/20" />
                          <label :for="`invoiced-${index}`" class="text-sm font-medium text-[rgb(var(--text-color))]" :class="{ 'text-gray-400': !item.invoiced }">
                            Invoiced
                          </label>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex justify-end space-x-4 pt-6 pb-4 pr-4 border-t border-[rgb(var(--border-color))]">
              <rs-button variant="secondary-outline" @click="handleCancel">Cancel</rs-button>
              <rs-button variant="info" @click="handleRefresh">Refresh</rs-button>
              <rs-button variant="success" btn-type="submit">Save</rs-button>
              <rs-button variant="warning" @click="handleItems">Items</rs-button>
              <rs-button variant="primary" @click="handlePrint">Print</rs-button>
              <rs-button variant="info" @click="handlePrintDO">Print DO</rs-button>
              <rs-button variant="success" @click="handleJV">JV</rs-button>
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
  title: "Accessory Fitting",
});

const { $swal } = useNuxtApp();

// Form data structure
const formData = ref({
  serialNo: '',
  vendor: '',
  deliveryDate: '',
  colorName: '',
  modelName: '',
  despatchDate: '',
  prNo: '',
  type: 'Standard',
  createdBy: '',
  modifiedBy: '',
  cancelled: false,
  invoiceNo: ''
});

// Fitting items data structure
const fittingItems = ref([
  { modelCode: '', chassisNo: '', receiptNoLotNo: '', color: '', completionDate: '', stdAmt: '', invoiced: true },
  { modelCode: '', chassisNo: '', receiptNoLotNo: '', color: '', completionDate: '', stdAmt: '', invoiced: false },
  { modelCode: '', chassisNo: '', receiptNoLotNo: '', color: '', completionDate: '', stdAmt: '', invoiced: false },
  { modelCode: '', chassisNo: '', receiptNoLotNo: '', color: '', completionDate: '', stdAmt: '', invoiced: false },
  { modelCode: '', chassisNo: '', receiptNoLotNo: '', color: '', completionDate: '', stdAmt: '', invoiced: false },
  { modelCode: '', chassisNo: '', receiptNoLotNo: '', color: '', completionDate: '', stdAmt: '', invoiced: false }
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
      Object.keys(formData.value).forEach(key => {
        if (key === 'cancelled') formData.value[key] = false;
        else if (key === 'type') formData.value[key] = 'Standard';
        else formData.value[key] = '';
      });
      fittingItems.value.forEach(item => {
        Object.keys(item).forEach(key => {
          if (key === 'invoiced') item[key] = false;
          else item[key] = '';
        });
      });
      fittingItems.value[0].invoiced = true; // First row invoiced by default
    }
  });
};

const handleRefresh = () => {
  console.log('Refreshing accessory fitting data...');
};

const handleItems = () => {
  console.log('Managing items...');
  $swal.fire({
    title: 'Items Management!',
    text: 'Items management has been opened.',
    icon: 'info',
    confirmButtonText: 'OK'
  });
};

const handlePrint = () => {
  console.log('Printing...');
  $swal.fire({
    title: 'Print Job!',
    text: 'Print job has been initiated.',
    icon: 'info',
    confirmButtonText: 'OK'
  });
};

const handlePrintDO = () => {
  console.log('Printing DO...');
  $swal.fire({
    title: 'Print DO!',
    text: 'Delivery Order print job has been initiated.',
    icon: 'info',
    confirmButtonText: 'OK'
  });
};

const handleJV = () => {
  console.log('Journal Voucher...');
  $swal.fire({
    title: 'Journal Voucher!',
    text: 'Journal voucher has been generated successfully.',
    icon: 'success',
    confirmButtonText: 'OK'
  });
};

const handleSubmit = async (formData) => {
  try {
    const validItems = fittingItems.value.filter(item => 
      item.modelCode !== '' || item.chassisNo !== '' || item.receiptNoLotNo !== '' || item.color !== ''
    );
    
    if (validItems.length === 0 && formData.serialNo.trim() === '') {
      $swal.fire({
        title: 'No Data',
        text: 'Please enter at least one fitting item information before saving.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      return;
    }
    
    console.log('Saving Accessory Fitting:', { formData: formData.value, fittingItems: validItems });
    $swal.fire({
      title: 'Success!',
      text: 'Accessory Fitting saved successfully!',
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
        case 'p':
          event.preventDefault();
          handlePrint();
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
