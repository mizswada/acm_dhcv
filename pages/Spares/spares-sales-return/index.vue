<template>
  <div>
    <rs-card>
      <template #header>
        <div class="flex items-center space-x-2">
          <Icon name="heroicons:arrow-uturn-left" class="w-5 h-5" />
          <h2 class="text-lg font-semibold text-[rgb(var(--text-color))]">Spares Sale Returns</h2>
        </div>
      </template>

      <template #body>
        <div class="space-y-6">
          <FormKit type="form" @submit="handleSubmit" :actions="false">
            <!-- Customer and Return Details -->
            <div class="mb-8">
              <h3 class="text-lg font-medium text-[rgb(var(--text-color))] mb-4">Return Details</h3>
              <div class="grid grid-cols-3 gap-8">
                <!-- Left Column -->
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Location:</label>
                    <input v-model="formData.location" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Return No:</label>
                    <input v-model="formData.returnNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Customer:</label>
                    <input v-model="formData.customer" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Cash:</label>
                    <div class="flex space-x-2">
                      <select v-model="formData.cash" class="px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                        <option value="">Select</option>
                        <option value="cash">Cash</option>
                        <option value="credit">Credit</option>
                      </select>
                      <label class="flex items-center px-3 py-2 text-sm text-[rgb(var(--text-color))]">Invoice No</label>
                      <input v-model="formData.invoiceNo" type="text" class="flex-1 px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                    </div>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Customer DO No:</label>
                    <input v-model="formData.customerDONo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Remarks:</label>
                    <textarea v-model="formData.remarks" rows="3" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"></textarea>
                  </div>
                </div>

                <!-- Middle Column -->
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Return Date:</label>
                    <input v-model="formData.returnDate" type="date" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Date:</label>
                    <input v-model="formData.date" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">DO Date:</label>
                    <input v-model="formData.doDate" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Incorrect Model:</label>
                    <select v-model="formData.incorrectModel" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                      <option value="">Select model</option>
                      <option value="model1">Model 1</option>
                      <option value="model2">Model 2</option>
                    </select>
                  </div>
                </div>

                <!-- Right Column -->
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Cash Cust Name:</label>
                    <input v-model="formData.cashCustName" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Cash Cust Add1:</label>
                    <input v-model="formData.cashCustAdd1" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Cash Cust Add2:</label>
                    <input v-model="formData.cashCustAdd2" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Cash Cust Add3:</label>
                    <input v-model="formData.cashCustAdd3" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  
                  <!-- Audit Trail -->
                  <div class="mt-6">
                    <h4 class="text-sm font-medium text-[rgb(var(--text-color))] mb-4">Audit Trail</h4>
                    <div class="space-y-3">
                      <div>
                        <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Created By:</label>
                        <input v-model="formData.createdBy" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Modified By:</label>
                        <input v-model="formData.modifiedBy" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Part Details Section -->
            <div class="mb-8">
              <h3 class="text-lg font-medium text-[rgb(var(--text-color))] mb-4">Part Details</h3>
              <div class="mb-4">
                <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Part Name:</label>
                <input v-model="formData.partName" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
              </div>

              <!-- Line Items Table -->
              <div class="overflow-x-auto">
                <table class="w-full border border-[rgb(var(--border-color))] rounded-lg">
                  <thead class="bg-gray-50">
                    <tr>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Part No</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Dummy</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">O/P</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Qty</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Gross</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Price</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Disc %</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Price</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Amount (Ex. GST)</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">GST Tax Code & Rate</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">GST Amount</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Amount (Inc. GST)</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Cost</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in lineItemsData" :key="index" class="hover:bg-gray-50">
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.partNo" type="text" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.dummy" type="checkbox" class="w-4 h-4" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.op" type="checkbox" class="w-4 h-4" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.qty" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.gross" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.price1" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.discPercent" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.price2" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.amountExGst" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.gstTaxCodeRate" type="text" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.gstAmount" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.amountIncGst" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.cost" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Summary Totals Section -->
            <div class="mb-8">
              <h3 class="text-lg font-medium text-[rgb(var(--text-color))] mb-4">Summary Totals</h3>
              <div class="grid grid-cols-2 gap-8">
                <!-- Left Side -->
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Agent Amount:</label>
                    <input v-model="formData.agentAmount" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Additional Charges:</label>
                    <div class="space-y-2">
                      <label class="block text-sm font-medium text-[rgb(var(--text-color))]">Amount:</label>
                      <input v-model="formData.additionalChargesAmount" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                    </div>
                  </div>
                </div>

                <!-- Right Side -->
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Spares Total:</label>
                    <input v-model="formData.sparesTotal" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Round Off:</label>
                    <input v-model="formData.roundOff" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Net Amount:</label>
                    <input v-model="formData.netAmount" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex justify-center space-x-4 pt-6 pb-4 border-t">
              <rs-button variant="secondary-outline" @click="handleCancel">Cancel</rs-button>
              <rs-button variant="info" @click="handleRefresh">Refresh</rs-button>
              <rs-button variant="success" btn-type="submit">Save</rs-button>
              <rs-button variant="info" @click="handlePrint">Print</rs-button>
              <rs-button variant="info" @click="handleJV">JV</rs-button>
              <rs-button variant="info" @click="handleAlloc">Alloc..</rs-button>
              <rs-button variant="info" @click="handleGiRec">GI Rec.</rs-button>
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
  title: "Spares Sale Returns",
});

const { $swal } = useNuxtApp();

// Form data
const formData = ref({
  // Return Details
  location: '',
  returnNo: '',
  customer: '',
  cash: '',
  invoiceNo: '',
  customerDONo: '',
  remarks: '',
  returnDate: '2022-06-24',
  date: '',
  doDate: '',
  incorrectModel: '',
  
  // Cash Customer Details
  cashCustName: '',
  cashCustAdd1: '',
  cashCustAdd2: '',
  cashCustAdd3: '',
  
  // Audit Trail
  createdBy: '',
  modifiedBy: '',
  
  // Part Details
  partName: '',
  
  // Summary Totals
  agentAmount: '.00',
  additionalChargesAmount: '.00',
  sparesTotal: '',
  roundOff: '.00',
  netAmount: '.00'
});

// Line items data
const lineItemsData = ref([
  { partNo: '', dummy: false, op: false, qty: '', gross: '', price1: '', discPercent: '', price2: '', amountExGst: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '', cost: '' },
  { partNo: '', dummy: false, op: false, qty: '', gross: '', price1: '', discPercent: '', price2: '', amountExGst: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '', cost: '' },
  { partNo: '', dummy: false, op: false, qty: '', gross: '', price1: '', discPercent: '', price2: '', amountExGst: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '', cost: '' },
  { partNo: '', dummy: false, op: false, qty: '', gross: '', price1: '', discPercent: '', price2: '', amountExGst: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '', cost: '' },
  { partNo: '', dummy: false, op: false, qty: '', gross: '', price1: '', discPercent: '', price2: '', amountExGst: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '', cost: '' }
]);

// Form submission
const handleSubmit = async (formData) => {
  try {
    console.log('Form submitted:', { formData, lineItemsData: lineItemsData.value });
    $swal.fire({
      title: 'Success!',
      text: 'Spares sale return has been saved successfully.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  } catch (error) {
    console.error('Error submitting form:', error);
    $swal.fire({
      title: 'Error!',
      text: 'An error occurred while saving the sale return.',
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
        if (key === 'returnDate') {
          formData.value[key] = '2022-06-24';
        } else if (key === 'agentAmount' || key === 'additionalChargesAmount' || key === 'roundOff' || key === 'netAmount') {
          formData.value[key] = '.00';
        } else {
          formData.value[key] = '';
        }
      });
      
      // Reset line items data
      lineItemsData.value.forEach(item => {
        Object.keys(item).forEach(key => {
          if (key === 'dummy' || key === 'op') {
            item[key] = false;
          } else {
            item[key] = '';
          }
        });
      });
    }
  });
};

// Refresh handler
const handleRefresh = () => {
  handleCancel();
  $swal.fire({
    title: 'Refreshed!',
    text: 'Form has been refreshed successfully.',
    icon: 'success',
    timer: 1500,
    showConfirmButton: false
  });
};

// Action handlers
const handlePrint = () => $swal.fire({ title: 'Print', text: 'Print functionality will be implemented.', icon: 'info', confirmButtonText: 'OK' });
const handleJV = () => $swal.fire({ title: 'Journal Voucher', text: 'Journal voucher functionality will be implemented.', icon: 'info', confirmButtonText: 'OK' });
const handleAlloc = () => $swal.fire({ title: 'Allocation', text: 'Allocation functionality will be implemented.', icon: 'info', confirmButtonText: 'OK' });
const handleGiRec = () => $swal.fire({ title: 'GI Receipt', text: 'GI receipt functionality will be implemented.', icon: 'info', confirmButtonText: 'OK' });

// Keyboard shortcuts
const handleKeydown = (event) => {
  if (event.altKey) {
    switch (event.key.toLowerCase()) {
      case 'c': event.preventDefault(); handleCancel(); break;
      case 'e': event.preventDefault(); handleRefresh(); break;
      case 's': event.preventDefault(); document.querySelector('form').requestSubmit(); break;
    }
  }
};

onMounted(() => document.addEventListener('keydown', handleKeydown));
onUnmounted(() => document.removeEventListener('keydown', handleKeydown));
</script>
