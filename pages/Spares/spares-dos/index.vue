<template>
  <div>
    <rs-card>
      <template #header>
        <div class="flex items-center space-x-2">
          <Icon name="heroicons:truck" class="w-5 h-5" />
          <h2 class="text-lg font-semibold text-[rgb(var(--text-color))]">Spares DOs</h2>
        </div>
      </template>

      <template #body>
        <div class="space-y-6">
          <FormKit
            type="form"
            @submit="handleSubmit"
            :actions="false"
          >
            <!-- Header/General Details Section -->
            <div class="mb-8">
              <h3 class="text-lg font-medium text-[rgb(var(--text-color))] mb-4">Delivery Order Details</h3>
              <div class="grid grid-cols-3 gap-8">
                <!-- Left Column -->
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Location Code:</label>
                    <input v-model="formData.locationCode" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter location code" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">DO No:</label>
                    <div class="flex space-x-2">
                      <input v-model="formData.doNo" type="text" class="flex-1 px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter DO number" />
                      <select class="px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                        <option value="">Credit</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Party Code:</label>
                    <input v-model="formData.partyCode" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter party code" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">SO No:</label>
                    <input v-model="formData.soNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter SO number" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Address Ref No:</label>
                    <input v-model="formData.addressRefNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter address ref number" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Cust Ref No:</label>
                    <input v-model="formData.custRefNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter customer ref number" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Remarks:</label>
                    <input v-model="formData.remarks" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter remarks" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Despatch:</label>
                    <select v-model="formData.despatch" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                      <option value="">Select despatch</option>
                      <option value="despatch1">Despatch 1</option>
                      <option value="despatch2">Despatch 2</option>
                    </select>
                  </div>
                </div>

                <!-- Middle Column -->
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">DO Date:</label>
                    <input v-model="formData.doDate" type="date" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-3">Deliver at:</label>
                    <div class="space-y-2">
                      <label class="flex items-center">
                        <input v-model="formData.deliverAt" type="radio" value="billing" class="mr-2" />
                        <span class="text-sm text-[rgb(var(--text-color))]">Billing address</span>
                      </label>
                      <label class="flex items-center">
                        <input v-model="formData.deliverAt" type="radio" value="delivery" class="mr-2" />
                        <span class="text-sm text-[rgb(var(--text-color))]">Delivery address</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Deliver Through:</label>
                    <input v-model="formData.deliverThrough" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter deliver through" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Disc%:</label>
                    <input v-model="formData.discPercent" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder=".00" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Cust Ref Date:</label>
                    <input v-model="formData.custRefDate" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter customer ref date" />
                  </div>
                </div>

                <!-- Right Column - Credit Limits -->
                <div class="space-y-4">
                  <div class="bg-gray-50 p-4 rounded-lg border border-[rgb(var(--border-color))]">
                    <h4 class="text-sm font-medium text-blue-600 mb-4">Credit Limits</h4>
                    <div class="space-y-3">
                      <div>
                        <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-1">CL Approved:</label>
                        <input v-model="formData.clApproved" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder=".00" />
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-1">CL Used:</label>
                        <input v-model="formData.clUsed" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder=".00" />
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-1">CL Available:</label>
                        <input v-model="formData.clAvailable" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder=".00" />
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-1">CL Over Write:</label>
                        <input v-model="formData.clOverWrite" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter CL over write" />
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-1">Credit Period:</label>
                        <input v-model="formData.creditPeriod" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter credit period" />
                      </div>
                    </div>
                  </div>
                  
                  <!-- Status Checkboxes -->
                  <div class="space-y-3">
                    <label class="flex items-center">
                      <input v-model="formData.invoiced" type="checkbox" class="mr-2" />
                      <span class="text-sm font-medium text-[rgb(var(--text-color))]">Invoiced</span>
                    </label>
                    <label class="flex items-center">
                      <input v-model="formData.cancelled" type="checkbox" class="mr-2" />
                      <span class="text-sm font-medium text-[rgb(var(--text-color))]">Cancelled</span>
                    </label>
                  </div>
                </div>
              </div>

              <!-- Discount Type and QOH -->
              <div class="mt-6 grid grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Disc Type:</label>
                  <select v-model="formData.discType" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                    <option value="EX-Stock">EX-Stock</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">QOH:</label>
                  <input v-model="formData.qoh" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter QOH" />
                </div>
              </div>
            </div>

            <!-- Item Details Table -->
            <div class="mb-8">
              <h3 class="text-lg font-medium text-[rgb(var(--text-color))] mb-4">Item Details</h3>
              <div class="overflow-x-auto">
                <table class="w-full border border-[rgb(var(--border-color))] rounded-lg">
                  <thead class="bg-gray-50">
                    <tr>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))] w-48">Part No & Name</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Ref No</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Qty</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Canc Qty</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Price Disc %</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Net Price</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Amount (Ex. GST)</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">GST Tax Code & Rate</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">GST Amount</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Amount (Inc. GST)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in itemDetailsData" :key="index" class="hover:bg-gray-50">
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.partNoName" type="text" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" placeholder="Part No & Name" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.refNo" type="text" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" placeholder="Ref No" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.qty" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" placeholder="0" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.cancQty" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" placeholder="0" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.priceDiscPercent" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" placeholder="0.00" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.netPrice" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" placeholder="0.00" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.amountExGst" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" placeholder="0.00" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.gstTaxCodeRate" type="text" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" placeholder="Tax code & rate" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.gstAmount" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" placeholder="0.00" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.amountIncGst" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" placeholder="0.00" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Bottom Section -->
            <div class="mb-8">
              <div class="grid grid-cols-3 gap-8">
                <!-- Summary/Audit Section -->
                <div class="space-y-4">
                  <h4 class="text-sm font-medium text-[rgb(var(--text-color))]">Summary/Audit</h4>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Created By:</label>
                    <input v-model="formData.createdBy" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter created by" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Modified By:</label>
                    <input v-model="formData.modifiedBy" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter modified by" />
                  </div>
                </div>

                <!-- Additional Charges / Amounts -->
                <div class="space-y-4">
                  <h4 class="text-sm font-medium text-[rgb(var(--text-color))]">Additional Charges / Amounts</h4>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Additional Charges:</label>
                    <input v-model="formData.additionalCharges" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder=".00" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Reprint Reasons:</label>
                    <input v-model="formData.reprintReasons" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter reprint reasons" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Spares Amount:</label>
                    <input v-model="formData.sparesAmount" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Net Amount:</label>
                    <input v-model="formData.netAmount" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                  </div>
                </div>

                <!-- Empty column for spacing -->
                <div></div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex justify-center space-x-4 pt-6 pb-4 border-t">
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
              <rs-button
                variant="info"
                @click="handlePrint"
              >
                Print
              </rs-button>
              <rs-button
                variant="info"
                @click="handlePrintNoListPrice"
              >
                Print - No List Price
              </rs-button>
              <rs-button
                variant="info"
                @click="handleAuth"
              >
                Auth....
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
  title: "Spares DOs",
});

const { $swal } = useNuxtApp();

// Form data
const formData = ref({
  // Header/General Details
  locationCode: '',
  doNo: '',
  partyCode: '',
  soNo: '',
  addressRefNo: '',
  custRefNo: '',
  remarks: '',
  despatch: '',
  doDate: '2022-06-24',
  deliverAt: 'billing',
  deliverThrough: '',
  discPercent: '.00',
  custRefDate: '',
  
  // Credit Limits
  clApproved: '.00',
  clUsed: '.00',
  clAvailable: '.00',
  clOverWrite: '',
  creditPeriod: '',
  
  // Status
  invoiced: false,
  cancelled: false,
  
  // Discount Type and QOH
  discType: 'EX-Stock',
  qoh: '',
  
  // Summary/Audit
  createdBy: '',
  modifiedBy: '',
  
  // Additional Charges / Amounts
  additionalCharges: '.00',
  reprintReasons: '',
  sparesAmount: '0.00',
  netAmount: '0.00'
});

// Item details data
const itemDetailsData = ref([
  { partNoName: '', refNo: '', qty: '', cancQty: '', priceDiscPercent: '', netPrice: '', amountExGst: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '' },
  { partNoName: '', refNo: '', qty: '', cancQty: '', priceDiscPercent: '', netPrice: '', amountExGst: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '' },
  { partNoName: '', refNo: '', qty: '', cancQty: '', priceDiscPercent: '', netPrice: '', amountExGst: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '' },
  { partNoName: '', refNo: '', qty: '', cancQty: '', priceDiscPercent: '', netPrice: '', amountExGst: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '' },
  { partNoName: '', refNo: '', qty: '', cancQty: '', priceDiscPercent: '', netPrice: '', amountExGst: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '' },
  { partNoName: '', refNo: '', qty: '', cancQty: '', priceDiscPercent: '', netPrice: '', amountExGst: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '' }
]);

// Form submission
const handleSubmit = async (formData) => {
  try {
    // Process form submission
    console.log('Form submitted:', { formData, itemDetailsData: itemDetailsData.value });
    
    $swal.fire({
      title: 'Success!',
      text: 'Spares delivery order has been saved successfully.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  } catch (error) {
    console.error('Error submitting form:', error);
    $swal.fire({
      title: 'Error!',
      text: 'An error occurred while saving the delivery order.',
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
        if (key === 'doDate') {
          formData.value[key] = '2022-06-24';
        } else if (key === 'discPercent' || key === 'clApproved' || key === 'clUsed' || key === 'clAvailable' || key === 'additionalCharges') {
          formData.value[key] = '.00';
        } else if (key === 'deliverAt') {
          formData.value[key] = 'billing';
        } else if (key === 'discType') {
          formData.value[key] = 'EX-Stock';
        } else if (key === 'invoiced' || key === 'cancelled') {
          formData.value[key] = false;
        } else if (key === 'sparesAmount' || key === 'netAmount') {
          formData.value[key] = '0.00';
        } else {
          formData.value[key] = '';
        }
      });
      
      // Reset item details data
      itemDetailsData.value.forEach(item => {
        item.partNoName = '';
        item.refNo = '';
        item.qty = '';
        item.cancQty = '';
        item.priceDiscPercent = '';
        item.netPrice = '';
        item.amountExGst = '';
        item.gstTaxCodeRate = '';
        item.gstAmount = '';
        item.amountIncGst = '';
      });
    }
  });
};

// Refresh handler
const handleRefresh = () => {
  // Reset form data
  Object.keys(formData.value).forEach(key => {
    if (key === 'doDate') {
      formData.value[key] = '2022-06-24';
    } else if (key === 'discPercent' || key === 'clApproved' || key === 'clUsed' || key === 'clAvailable' || key === 'additionalCharges') {
      formData.value[key] = '.00';
    } else if (key === 'deliverAt') {
      formData.value[key] = 'billing';
    } else if (key === 'discType') {
      formData.value[key] = 'EX-Stock';
    } else if (key === 'invoiced' || key === 'cancelled') {
      formData.value[key] = false;
    } else if (key === 'sparesAmount' || key === 'netAmount') {
      formData.value[key] = '0.00';
    } else {
      formData.value[key] = '';
    }
  });
  
  // Reset item details data
  itemDetailsData.value.forEach(item => {
    item.partNoName = '';
    item.refNo = '';
    item.qty = '';
    item.cancQty = '';
    item.priceDiscPercent = '';
    item.netPrice = '';
    item.amountExGst = '';
    item.gstTaxCodeRate = '';
    item.gstAmount = '';
    item.amountIncGst = '';
  });

  $swal.fire({
    title: 'Refreshed!',
    text: 'Form has been refreshed successfully.',
    icon: 'success',
    timer: 1500,
    showConfirmButton: false
  });
};

// Action handlers
const handlePrint = () => {
  $swal.fire({
    title: 'Print',
    text: 'Print functionality will be implemented.',
    icon: 'info',
    confirmButtonText: 'OK'
  });
};

const handlePrintNoListPrice = () => {
  $swal.fire({
    title: 'Print - No List Price',
    text: 'Print without list price functionality will be implemented.',
    icon: 'info',
    confirmButtonText: 'OK'
  });
};

const handleAuth = () => {
  $swal.fire({
    title: 'Authorization',
    text: 'Authorization functionality will be implemented.',
    icon: 'info',
    confirmButtonText: 'OK'
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
      case 'p':
        event.preventDefault();
        handlePrint();
        break;
      case 'a':
        event.preventDefault();
        handleAuth();
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
