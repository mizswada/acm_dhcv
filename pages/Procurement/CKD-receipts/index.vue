<template>
  <div>
    <LayoutsBreadcrumb />
    <rs-card>
      <template #header>
        <div class="flex">
          <Icon class="mr-2 flex justify-center" name="ic:outline-receipt"></Icon>
          CKD Receipts
        </div>
      </template>
      <template #body>
        <div class="space-y-6">
          <FormKit type="form" :actions="false" @submit="handleSubmit">
            <!-- Top Section - CKD Receipt Details -->
            <div class="grid grid-cols-3 gap-6 mb-6">
              <!-- Left Column -->
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">CKD Receipt No:</label>
                  <input v-model="formData.ckdReceiptNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter CKD receipt no" />
                </div>
                <div class="grid grid-cols-2 gap-2">
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Vendor Code:</label>
                    <input v-model="formData.vendorCode1" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Code" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">&nbsp;</label>
                    <input v-model="formData.vendorCode2" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Name" />
                  </div>
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
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Yen Value:</label>
                  <input v-model="formData.yenValue" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="xxxxxxxxxxxx" />
                </div>
              </div>

              <!-- Middle Column -->
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Port Receipt Date:</label>
                  <input v-model="formData.portReceiptDate" type="date" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Vendor Invoice No:</label>
                  <input v-model="formData.vendorInvoiceNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter vendor invoice no" />
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
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">CKD Qty:</label>
                  <input v-model="formData.ckdQty" type="number" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">GST Rate:</label>
                  <input v-model="formData.gstRate" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter GST rate" />
                </div>
              </div>

              <!-- Right Column -->
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">AOD Receipt Date:</label>
                  <input v-model="formData.aodReceiptDate" type="date" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Vendor Invoice Date:</label>
                  <input v-model="formData.vendorInvoiceDate" type="date" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Vessel Name:</label>
                  <input v-model="formData.vesselName" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter vessel name" />
                </div>
              </div>
            </div>

            <!-- FOB CKD & Parts Values Section -->
            <div class="mb-6">
              <h3 class="text-lg font-semibold text-[rgb(var(--text-color))] mb-4">FOB CKD & Parts Values</h3>
              <div class="grid grid-cols-3 gap-6">
                <!-- FOB CKD -->
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">FOB CKD:</label>
                    <input v-model="fobValues.fobCkd" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="xxxxxxxxxxxx" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Freight Type:</label>
                    <select v-model="fobValues.freightType" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                      <option value="Sea">Sea</option>
                      <option value="Air">Air</option>
                      <option value="Land">Land</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Exchange Rate:</label>
                    <input v-model="fobValues.exchangeRate" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="xxxxxxxxxxxx" />
                  </div>
                </div>

                <!-- FOB CKD Parts -->
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">FOB CKD Parts:</label>
                    <input v-model="fobValues.fobCkdParts" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="xxxxxxxxxxxx" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Freight Value:</label>
                    <input v-model="fobValues.freightValue" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="xxxxxxxxxxxx" />
                  </div>
                </div>

                <!-- Net FOB Value -->
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Net FOB Value:</label>
                    <input v-model="fobValues.netFobValue" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="xxxxxxxxxxxx" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">C/F:</label>
                    <input v-model="fobValues.cf" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="xxxxxxxxxxxx" />
                  </div>
                </div>
              </div>
            </div>

            <!-- RM Value & Other Charges Section -->
            <div class="mb-6">
              <h3 class="text-lg font-semibold text-[rgb(var(--text-color))] mb-4">RM Value & Other Charges</h3>
              <div class="grid grid-cols-3 gap-6">
                <!-- RM Value -->
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">FOB CKD:</label>
                    <input v-model="rmValues.fobCkd" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="xxxxxxxxxxxx" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Freight Value:</label>
                    <input v-model="rmValues.freightValue" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="xxxxxxxxxxxx" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Ins. CKD:</label>
                    <input v-model="rmValues.insCkd" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="xxxxxxxxxxxx" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Trsp Handling:</label>
                    <input v-model="rmValues.trspHandling" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="xxxxxxxxxxxx" />
                  </div>
                </div>

                <!-- FOB CKD Parts -->
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">FOB CKD Parts:</label>
                    <input v-model="rmValues.fobCkdParts" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="xxxxxxxxxxxx" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">C/F:</label>
                    <input v-model="rmValues.cf" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="xxxxxxxxxxxx" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Ins. Duty:</label>
                    <input v-model="rmValues.insDuty" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="xxxxxxxxxxxx" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">L/C Charges:</label>
                    <input v-model="rmValues.lcCharges" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="xxxxxxxxxxxx" />
                  </div>
                </div>

                <!-- Net FOB Value -->
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Net FOB Value:</label>
                    <input v-model="rmValues.netFobValue" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="xxxxxxxxxxxx" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">L/C Discount:</label>
                    <input v-model="rmValues.lcDiscount" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="xxxxxxxxxxxx" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Import Duty:</label>
                    <input v-model="rmValues.importDuty" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="xxxxxxxxxxxx" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Net Value:</label>
                    <input v-model="rmValues.netValue" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="xxxxxxxxxxxx" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Pending C/F:</label>
                    <input v-model="rmValues.pendingCf" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="xxxxxxxxxxxx" />
                  </div>
                </div>
              </div>
            </div>

            <!-- Footer Section - Audit and Action Buttons -->
            <div class="flex justify-between items-center pt-6 pb-4 border-t border-[rgb(var(--border-color))]">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Created By:</label>
                  <input v-model="formData.createdBy" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter created by" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Modified By:</label>
                  <input v-model="formData.modifiedBy" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter modified by" />
                </div>
              </div>
              
              <div class="flex space-x-4">
                <rs-button variant="secondary-outline" @click="handleCancel">Cancel</rs-button>
                <rs-button variant="info" @click="handleRefresh">Refresh</rs-button>
                <rs-button variant="success" btn-type="submit">Save</rs-button>
                <rs-button variant="primary" @click="handlePrint">Print</rs-button>
                <rs-button variant="warning" @click="handleChassis">Chassis</rs-button>
                <rs-button variant="info" @click="handleJV">JV</rs-button>
              </div>
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
  title: "CKD Receipts",
});

const { $swal } = useNuxtApp();

// Form data structure
const formData = ref({
  ckdReceiptNo: '',
  vendorCode1: '',
  vendorCode2: '',
  deliveryOrderNo: '',
  lcNo: '',
  poNo: '',
  lotFrom: '',
  lotTo: '',
  gstTaxCode: '',
  yenValue: '',
  portReceiptDate: '',
  vendorInvoiceNo: '',
  lcDate: '',
  model: '',
  ckdQty: '0',
  gstRate: '',
  aodReceiptDate: '',
  vendorInvoiceDate: '',
  vesselName: '',
  createdBy: '',
  modifiedBy: ''
});

// FOB Values
const fobValues = ref({
  fobCkd: '',
  freightType: 'Sea',
  exchangeRate: '',
  fobCkdParts: '',
  freightValue: '',
  netFobValue: '',
  cf: ''
});

// RM Values
const rmValues = ref({
  fobCkd: '',
  freightValue: '',
  insCkd: '',
  trspHandling: '',
  fobCkdParts: '',
  cf: '',
  insDuty: '',
  lcCharges: '',
  netFobValue: '',
  lcDiscount: '',
  importDuty: '',
  netValue: '',
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
      Object.keys(fobValues.value).forEach(key => fobValues.value[key] = '');
      Object.keys(rmValues.value).forEach(key => rmValues.value[key] = '');
      formData.value.ckdQty = '0';
      fobValues.value.freightType = 'Sea';
    }
  });
};

const handleRefresh = () => {
  console.log('Refreshing CKD receipts data...');
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
    if (formData.ckdReceiptNo.trim() === '') {
      $swal.fire({
        title: 'No Data',
        text: 'Please enter CKD Receipt No before saving.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      return;
    }
    
    console.log('Saving CKD Receipt:', { formData: formData.value, fobValues: fobValues.value, rmValues: rmValues.value });
    $swal.fire({
      title: 'Success!',
      text: 'CKD Receipt saved successfully!',
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
