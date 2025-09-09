<template> 
    <div>
    <rs-card>
      <template #header>
        <div class="flex">
          <Icon class="mr-2 flex justify-center" name="ic:outline-receipt"></Icon>
          Local Contents Receipts
        </div>
      </template>
      <template #body>
        <div class="space-y-6">
          <FormKit type="form" :actions="false" @submit="handleSubmit">
            <!-- Top Section - Header Details -->
            <div class="grid grid-cols-2 gap-6 mb-6">
              <!-- Left Column -->
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Invoice No:</label>
                  <input v-model="formData.invoiceNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter invoice no" />
                </div>
                <div class="grid grid-cols-2 gap-2">
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Vendor Code:</label>
                    <input v-model="formData.vendorCode" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Code" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">&nbsp;</label>
                    <input v-model="formData.vendorName" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Name" />
                  </div>
                </div>
                <div class="grid grid-cols-4 gap-2">
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">PO No:</label>
                    <input v-model="formData.poNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="PO No" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Lot:</label>
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
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Delivery Order No:</label>
                  <input v-model="formData.deliveryOrderNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter delivery order no" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Vendor Invoice No:</label>
                  <input v-model="formData.vendorInvoiceNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter vendor invoice no" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Created By:</label>
                  <input v-model="formData.createdBy" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter created by" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Date of Creation:</label>
                  <input v-model="formData.dateOfCreation" type="date" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Model:</label>
                  <input v-model="formData.model" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter model" />
                </div>
              </div>

              <!-- Right Column -->
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Invoice Date:</label>
                  <input v-model="formData.invoiceDate" type="date" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">PO Date:</label>
                  <input v-model="formData.poDate" type="date" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Delivery Order Date:</label>
                  <input v-model="formData.deliveryOrderDate" type="date" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
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
            <div class="mb-6">
              <h3 class="text-lg font-semibold text-[rgb(var(--text-color))] mb-4">Line Items</h3>
              <div class="overflow-x-auto">
                <table class="w-full border-collapse">
                  <thead>
                    <tr class="border-b border-[rgb(var(--border-color))]">
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))] w-1/3">Part No & Name</th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">Qty</th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">Price</th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">Amount (Ex. GST)</th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">GST Tax Code & Rate</th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">GST Amount</th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">Amount (Inc. GST)</th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))]">Forward Rob</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in lineItems" :key="index" class="border-b border-[rgb(var(--border-color))]">
                      <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                        <input v-model="item.partNoName" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter part no & name" />
                      </td>
                      <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                        <input v-model="item.qty" type="number" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0" />
                      </td>
                      <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                        <input v-model="item.price" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                      </td>
                      <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                        <input v-model="item.amountExGst" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                      </td>
                      <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                        <input v-model="item.gstTaxCodeRate" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="GST Code & Rate" />
                      </td>
                      <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                        <input v-model="item.gstAmount" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                      </td>
                      <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                        <input v-model="item.amountIncGst" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                      </td>
                      <td class="py-3 px-4">
                        <div class="flex items-center justify-center">
                          <input v-model="item.forwardRob" type="checkbox" :id="`forward-rob-${index}`" class="rounded border-[rgb(var(--border-color))] focus:ring-2 focus:ring-primary/20" />
                          <label :for="`forward-rob-${index}`" class="ml-2 text-sm font-medium text-[rgb(var(--text-color))]">
                            Forward Rob
                          </label>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Bottom Section - Summary Fields -->
            <div class="grid grid-cols-3 gap-6 mb-6">
              <!-- Left Side - Audit Fields -->
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Created By:</label>
                  <input v-model="formData.createdByBottom" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter created by" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Modified By:</label>
                  <input v-model="formData.modifiedByBottom" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter modified by" />
                </div>
              </div>

              <!-- Middle-Right Side - Summary Fields -->
              <div class="col-span-2">
                <div class="grid grid-cols-3 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Discount %:</label>
                    <input v-model="summary.discountPercent" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Pending Amt:</label>
                    <input v-model="summary.pendingAmt" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Invoice Amt:</label>
                    <input v-model="summary.invoiceAmt" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Spares Amt:</label>
                    <input v-model="summary.sparesAmt" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Discount Amt:</label>
                    <input v-model="summary.discountAmt" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Net Amt:</label>
                    <input v-model="summary.netAmt" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                  </div>
                </div>
              </div>
            </div>

            <!-- Action Buttons - Bottom Center -->
            <div class="flex justify-center space-x-4 pt-6 pb-4 border-t border-[rgb(var(--border-color))]">
              <rs-button variant="secondary-outline" @click="handleCancel">Cancel</rs-button>
              <rs-button variant="info" @click="handleRefresh">Refresh</rs-button>
              <rs-button variant="success" btn-type="submit">Save</rs-button>
              <rs-button variant="success" @click="handleJV">JV</rs-button>
              <rs-button variant="warning" @click="handleCkdPO">Ckd PO</rs-button>
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
  title: "Local Contents Receipts",
});

const { $swal } = useNuxtApp();

// Form data structure
const formData = ref({
  invoiceNo: '',
  vendorCode: '',
  vendorName: '',
  poNo: '',
  lotFrom: '',
  lotTo: '',
  deliveryOrderNo: '',
  vendorInvoiceNo: '',
  createdBy: '',
  dateOfCreation: '',
  model: '',
  invoiceDate: '',
  poDate: '',
  deliveryOrderDate: '',
  vendorInvoiceDate: '',
  modifiedBy: '',
  createdByBottom: '',
  modifiedByBottom: ''
});

// Line items data structure
const lineItems = ref([
  { partNoName: '', qty: '', price: '', amountExGst: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '', forwardRob: true },
  { partNoName: '', qty: '', price: '', amountExGst: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '', forwardRob: false },
  { partNoName: '', qty: '', price: '', amountExGst: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '', forwardRob: false },
  { partNoName: '', qty: '', price: '', amountExGst: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '', forwardRob: false },
  { partNoName: '', qty: '', price: '', amountExGst: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '', forwardRob: false },
  { partNoName: '', qty: '', price: '', amountExGst: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '', forwardRob: false }
]);

// Summary fields
const summary = ref({
  discountPercent: '',
  pendingAmt: '',
  invoiceAmt: '',
  sparesAmt: '',
  discountAmt: '',
  netAmt: ''
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
      Object.keys(summary.value).forEach(key => summary.value[key] = '');
      lineItems.value.forEach(item => {
        Object.keys(item).forEach(key => {
          if (key === 'forwardRob') item[key] = false;
          else item[key] = '';
        });
      });
      lineItems.value[0].forwardRob = true; // First row forward rob by default
    }
  });
};

const handleRefresh = () => {
  console.log('Refreshing local content receipts data...');
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

const handleCkdPO = () => {
  console.log('Checked Purchase Order...');
  $swal.fire({
    title: 'Checked PO!',
    text: 'Purchase order has been checked successfully.',
    icon: 'success',
    confirmButtonText: 'OK'
  });
};

const handleSubmit = async (formData) => {
  try {
    const validItems = lineItems.value.filter(item => 
      item.partNoName !== '' || item.qty !== '' || item.price !== '' || item.amountExGst !== ''
    );
    
    if (validItems.length === 0 && formData.invoiceNo.trim() === '') {
      $swal.fire({
        title: 'No Data',
        text: 'Please enter at least one line item information before saving.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      return;
    }
    
    console.log('Saving Local Contents Receipt:', { formData: formData.value, lineItems: validItems, summary: summary.value });
    $swal.fire({
      title: 'Success!',
      text: 'Local Contents Receipt saved successfully!',
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
