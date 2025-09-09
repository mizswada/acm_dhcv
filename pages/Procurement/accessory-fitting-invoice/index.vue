<template>
  <div>
    <rs-card>
      <template #header>
        <div class="flex">
          <Icon class="mr-2 flex justify-center" name="ic:outline-receipt"></Icon>
          Accessory Invoices
        </div>
      </template>
      <template #body>
        <div class="space-y-6">
          <FormKit type="form" :actions="false" @submit="handleSubmit">
            <!-- Top Section - Invoice Header Details -->
            <div class="grid grid-cols-2 gap-6 mb-8">
              <!-- Left Column -->
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Posting No:</label>
                  <input v-model="formData.postingNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter posting number" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Party Code & Name:</label>
                  <div class="flex space-x-2">
                    <input v-model="formData.partyCode" type="text" class="flex-1 px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Code" />
                    <input v-model="formData.partyName" type="text" class="flex-1 px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Name" />
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Vendor Invoice No:</label>
                  <input v-model="formData.vendorInvoiceNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter vendor invoice number" />
                </div>
              </div>

              <!-- Right Column -->
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Posting Date:</label>
                  <input v-model="formData.postingDate" type="date" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Created By:</label>
                  <input v-model="formData.createdBy" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter created by" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Vendor Invoice Date:</label>
                  <input v-model="formData.vendorInvoiceDate" type="date" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Modified By:</label>
                  <input v-model="formData.modifiedBy" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter modified by" />
                </div>
              </div>
            </div>

            <!-- Middle Section - Line Items Table -->
            <div class="space-y-4 mb-8">
              <div class="overflow-x-auto">
                <table class="w-full border-collapse border border-[rgb(var(--border-color))]">
                  <thead>
                    <tr class="bg-gray-50">
                      <th class="border border-[rgb(var(--border-color))] px-3 py-2 text-left text-sm font-medium text-[rgb(var(--text-color))]">PO No</th>
                      <th class="border border-[rgb(var(--border-color))] px-3 py-2 text-left text-sm font-medium text-[rgb(var(--text-color))]">Model Code</th>
                      <th class="border border-[rgb(var(--border-color))] px-3 py-2 text-left text-sm font-medium text-[rgb(var(--text-color))]">Chassis No</th>
                      <th class="border border-[rgb(var(--border-color))] px-3 py-2 text-left text-sm font-medium text-[rgb(var(--text-color))]">Purchase No</th>
                      <th class="border border-[rgb(var(--border-color))] px-3 py-2 text-left text-sm font-medium text-[rgb(var(--text-color))]">Lot No</th>
                      <th class="border border-[rgb(var(--border-color))] px-3 py-2 text-left text-sm font-medium text-[rgb(var(--text-color))]">Amount (Ex. GST)</th>
                      <th class="border border-[rgb(var(--border-color))] px-3 py-2 text-left text-sm font-medium text-[rgb(var(--text-color))]">GST Tax Code & Rate</th>
                      <th class="border border-[rgb(var(--border-color))] px-3 py-2 text-left text-sm font-medium text-[rgb(var(--text-color))]">GST Amount</th>
                      <th class="border border-[rgb(var(--border-color))] px-3 py-2 text-left text-sm font-medium text-[rgb(var(--text-color))]">Amount (Inc. GST)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in lineItems" :key="index">
                      <td class="border border-[rgb(var(--border-color))] px-3 py-2">
                        <input v-model="item.poNo" type="text" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary" placeholder="PO number" />
                      </td>
                      <td class="border border-[rgb(var(--border-color))] px-3 py-2">
                        <input v-model="item.modelCode" type="text" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary" placeholder="Model code" />
                      </td>
                      <td class="border border-[rgb(var(--border-color))] px-3 py-2">
                        <input v-model="item.chassisNo" type="text" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary" placeholder="Chassis number" />
                      </td>
                      <td class="border border-[rgb(var(--border-color))] px-3 py-2">
                        <input v-model="item.purchaseNo" type="text" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary" placeholder="Purchase number" />
                      </td>
                      <td class="border border-[rgb(var(--border-color))] px-3 py-2">
                        <input v-model="item.lotNo" type="text" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary" placeholder="Lot number" />
                      </td>
                      <td class="border border-[rgb(var(--border-color))] px-3 py-2">
                        <input v-model="item.amountExGst" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                      </td>
                      <td class="border border-[rgb(var(--border-color))] px-3 py-2">
                        <input v-model="item.gstTaxCodeRate" type="text" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary" placeholder="Tax code & rate" />
                      </td>
                      <td class="border border-[rgb(var(--border-color))] px-3 py-2">
                        <input v-model="item.gstAmount" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                      </td>
                      <td class="border border-[rgb(var(--border-color))] px-3 py-2">
                        <input v-model="item.amountIncGst" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Bottom Section - Summary and Action Buttons -->
            <div class="flex justify-between items-end mb-8">
              <!-- Left Side - Summary Fields -->
              <div class="flex space-x-6">
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Pending Amount:</label>
                  <input v-model="summary.pendingAmount" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Total Amount:</label>
                  <input v-model="summary.totalAmount" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                </div>
              </div>
            </div>

            <!-- Action Buttons - Bottom Center -->
            <div class="flex justify-center space-x-4 pt-6 pb-4 border-t border-[rgb(var(--border-color))]">
              <rs-button variant="secondary-outline" @click="handleCancel">Cancel</rs-button>
              <rs-button variant="info" @click="handleRefresh">Refresh</rs-button>
              <rs-button variant="success" btn-type="submit">Save</rs-button>
              <rs-button variant="success" @click="handleItems">Items..</rs-button>
              <rs-button variant="success" @click="handleJV">JV</rs-button>
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
  title: "Accessory Invoices",
});

const { $swal } = useNuxtApp();

// Form data
const formData = ref({
  postingNo: '',
  partyCode: '',
  partyName: '',
  vendorInvoiceNo: '',
  postingDate: '',
  createdBy: '',
  vendorInvoiceDate: '',
  modifiedBy: ''
});

// Line items data
const lineItems = ref([
  { poNo: '', modelCode: '', chassisNo: '', purchaseNo: '', lotNo: '', amountExGst: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '' },
  { poNo: '', modelCode: '', chassisNo: '', purchaseNo: '', lotNo: '', amountExGst: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '' },
  { poNo: '', modelCode: '', chassisNo: '', purchaseNo: '', lotNo: '', amountExGst: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '' },
  { poNo: '', modelCode: '', chassisNo: '', purchaseNo: '', lotNo: '', amountExGst: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '' },
  { poNo: '', modelCode: '', chassisNo: '', purchaseNo: '', lotNo: '', amountExGst: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '' },
  { poNo: '', modelCode: '', chassisNo: '', purchaseNo: '', lotNo: '', amountExGst: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '' }
]);

// Summary data
const summary = ref({
  pendingAmount: '0.00',
  totalAmount: '0.00'
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
      // Reset form data
      Object.keys(formData.value).forEach(key => {
        formData.value[key] = '';
      });
      lineItems.value.forEach(item => {
        Object.keys(item).forEach(key => {
          item[key] = '';
        });
      });
      summary.value.pendingAmount = '0.00';
      summary.value.totalAmount = '0.00';
    }
  });
};

const handleRefresh = () => {
  $swal.fire({
    title: 'Refresh',
    text: 'Form data will be refreshed!',
    icon: 'info',
    confirmButtonText: 'OK'
  }).then(() => {
    // Logic to refresh the form
  });
};

const handleItems = () => {
  $swal.fire({
    title: 'Items',
    text: 'Items action triggered!',
    icon: 'info',
    confirmButtonText: 'OK'
  }).then(() => {
    // Logic to handle Items action
  });
};

const handleJV = () => {
  $swal.fire({
    title: 'JV',
    text: 'Journal Voucher action triggered!',
    icon: 'info',
    confirmButtonText: 'OK'
  }).then(() => {
    // Logic to handle JV action
  });
};

const handleSubmit = async (formData) => {
  try {
    // Validate that at least one line item has data
    const hasLineItemData = lineItems.value.some(item => 
      item.poNo || item.modelCode || item.chassisNo || item.purchaseNo || item.lotNo
    );

    if (!hasLineItemData) {
      $swal.fire({
        title: 'Validation Error',
        text: 'Please enter at least one line item!',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      return;
    }

    $swal.fire({
      title: 'Success!',
      text: 'Accessory invoice saved successfully!',
      icon: 'success',
      confirmButtonText: 'OK'
    }).then(() => {
      // Logic to handle successful save
    });
  } catch (error) {
    console.error('Error submitting form:', error);
    $swal.fire({
      title: 'Error!',
      text: 'An error occurred while saving the invoice.',
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }
};

// Keyboard shortcuts
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
        handleSubmit(formData.value);
        break;
      case 'i':
        event.preventDefault();
        handleItems();
        break;
      case 'j':
        event.preventDefault();
        handleJV();
        break;
    }
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown);
});
</script>

<style scoped>
/* Add any additional styles here */
</style>