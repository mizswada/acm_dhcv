<template>
  <div>
    <LayoutsBreadcrumb />
    <rs-card>
      <template #header>
        <div class="flex">
          <Icon class="mr-2 flex justify-center" name="ic:outline-receipt"></Icon>
          CBU Receipts - Local
        </div>
      </template>
      <template #body>
        <div class="space-y-6">
          <FormKit type="form" :actions="false" @submit="handleSubmit">
            <!-- Top Section - Receipt and Vendor Details -->
            <div class="grid grid-cols-3 gap-6 mb-6">
              <!-- Left Column -->
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">CBU Receipt No:</label>
                  <input v-model="formData.cbuReceiptNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter CBU receipt no" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Vendor Code:</label>
                  <input v-model="formData.vendorCode" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter vendor code" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Delivery Order No:</label>
                  <input v-model="formData.deliveryOrderNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter delivery order no" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">L/C No:</label>
                  <input v-model="formData.lcNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter L/C no" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">PO No:</label>
                  <input v-model="formData.poNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter PO no" />
                </div>
                <div class="grid grid-cols-3 gap-2">
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Lot Nos.:</label>
                    <input v-model="formData.lotFrom" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="From" />
                  </div>
                  <div class="flex items-end">
                    <span class="text-center text-sm">-</span>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">&nbsp;</label>
                    <input v-model="formData.lotTo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="To" />
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">GST Tax Code:</label>
                  <input v-model="formData.gstTaxCode" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter GST tax code" />
                </div>
              </div>

              <!-- Middle Column -->
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Receipt Date:</label>
                  <input v-model="formData.receiptDate" type="date" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                </div>
                <div class="grid grid-cols-2 gap-2">
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Vendor Inv No:</label>
                    <input v-model="formData.vendorInvNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Invoice No" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Date:</label>
                    <input v-model="formData.vendorInvDate" type="date" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">L/C Date:</label>
                  <input v-model="formData.lcDate" type="date" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Model:</label>
                  <input v-model="formData.model" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter model" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">CBU Qty:</label>
                  <input v-model="formData.cbuQty" type="number" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">GST Tax Rate:</label>
                  <input v-model="formData.gstTaxRate" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter GST tax rate" />
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
              </div>
            </div>

            <!-- RM Value Section -->
            <div class="mb-6">
              <div class="border border-[rgb(var(--border-color))] rounded-lg p-6 bg-gray-50">
                <h3 class="text-lg font-semibold text-[rgb(var(--text-color))] mb-4">RM Value</h3>
                <div class="grid grid-cols-3 gap-6">
                  <!-- Left Column -->
                  <div class="space-y-4">
                    <div>
                      <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">FOB CBU:</label>
                      <input v-model="rmValues.fobCbu" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="xxxxxxxxxx" />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Freight Value:</label>
                      <input v-model="rmValues.freightValue" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="xxxxxxxxxx" />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">L/C Charges:</label>
                      <input v-model="rmValues.lcCharges" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="xxxxxxxxxx" />
                    </div>
                  </div>

                  <!-- Middle Column -->
                  <div class="space-y-4">
                    <div>
                      <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">FOB CBU Parts:</label>
                      <input v-model="rmValues.fobCbuParts" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="xxxxxxxxxx" />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">C/F:</label>
                      <input v-model="rmValues.cf" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="xxxxxxxxxx" />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Net Value:</label>
                      <input v-model="rmValues.netValue" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="xxxxxxxxxx" />
                    </div>
                  </div>

                  <!-- Right Column -->
                  <div class="space-y-4">
                    <div>
                      <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Net FOB Value:</label>
                      <input v-model="rmValues.netFobValue" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="xxxxxxxxxx" />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">L/C Discount:</label>
                      <input v-model="rmValues.lcDiscount" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="xxxxxxxxxx" />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Pending C/F:</label>
                      <input v-model="rmValues.pendingCf" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="xxxxxxxxxx" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex justify-center space-x-4 pt-6 pb-4 border-t border-[rgb(var(--border-color))]">
              <rs-button variant="secondary-outline" @click="handleCancel">Cancel</rs-button>
              <rs-button variant="info" @click="handleRefresh">Refresh</rs-button>
              <rs-button variant="success" btn-type="submit">Save</rs-button>
              <rs-button variant="primary" @click="handlePrint">Print</rs-button>
              <rs-button variant="warning" @click="handleChassis">Chassis</rs-button>
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
  title: "CBU Receipts - Local",
});

const { $swal } = useNuxtApp();

// Form data structure
const formData = ref({
  cbuReceiptNo: '',
  vendorCode: '',
  deliveryOrderNo: '',
  lcNo: '',
  poNo: '',
  lotFrom: '',
  lotTo: '',
  gstTaxCode: '',
  receiptDate: '',
  vendorInvNo: '',
  vendorInvDate: '',
  lcDate: '',
  model: '',
  cbuQty: '',
  gstTaxRate: '',
  createdBy: '',
  modifiedBy: ''
});

// RM Values
const rmValues = ref({
  fobCbu: '',
  freightValue: '',
  lcCharges: '',
  fobCbuParts: '',
  cf: '',
  netValue: '',
  netFobValue: '',
  lcDiscount: '',
  pendingCf: ''
});

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
      Object.keys(formData.value).forEach(key => formData.value[key] = '');
      Object.keys(rmValues.value).forEach(key => rmValues.value[key] = '');
    }
  });
};

const handleRefresh = () => {
  console.log('Refreshing CBU receipt local data...');
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

const handleChassis = () => {
  console.log('Chassis processing...');
  $swal.fire({
    title: 'Chassis Processed!',
    text: 'Chassis processing has been completed successfully.',
    icon: 'success',
    confirmButtonText: 'OK'
  });
};

const handleSubmit = async (formData) => {
  try {
    if (formData.cbuReceiptNo.trim() === '') {
      $swal.fire({
        title: 'No Data',
        text: 'Please enter CBU Receipt No before saving.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      return;
    }
    
    console.log('Saving CBU Receipt Local:', { formData: formData.value, rmValues: rmValues.value });
    $swal.fire({
      title: 'Success!',
      text: 'CBU Receipt Local saved successfully!',
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
