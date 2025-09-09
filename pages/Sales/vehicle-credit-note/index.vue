<template>
  <div>
    <rs-card>
      <template #header>
        <div class="flex items-center space-x-2">
          <Icon name="heroicons:receipt-refund" class="w-5 h-5" />
          <h2 class="text-lg font-semibold text-[rgb(var(--text-color))]">Credit Notes</h2>
        </div>
      </template>

      <template #body>
        <div class="space-y-6">
          <FormKit
            type="form"
            @submit="handleSubmit"
            :actions="false"
          >
            <!-- Credit Note Header Details Section -->
            <div class="mb-8">
              <h3 class="text-lg font-medium text-[rgb(var(--text-color))] mb-4">Credit Note Header Details</h3>
              <div class="grid grid-cols-4 gap-6">
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Location:</label>
                  <input v-model="formData.location" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter location" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">C/N No:</label>
                  <input v-model="formData.cnNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter C/N number" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Party Code:</label>
                  <input v-model="formData.partyCode" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter party code" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">D/N No:</label>
                  <input v-model="formData.dnNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter D/N number" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Invoice No:</label>
                  <input v-model="formData.invoiceNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter invoice number" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Model Code:</label>
                  <input v-model="formData.modelCode" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter model code" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">MI Code:</label>
                  <div class="relative">
                    <input v-model="formData.miCode" type="text" class="w-full px-3 py-2 pr-8 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="45101" />
                    <Icon name="heroicons:chevron-down" class="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Date:</label>
                  <input v-model="formData.date" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter date" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Date:</label>
                  <input v-model="formData.date2" type="date" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Created By:</label>
                  <input v-model="formData.createdBy" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter created by" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">C/N Date:</label>
                  <input v-model="formData.cnDate" type="date" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Dept:</label>
                  <input v-model="formData.dept" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter department" />
                </div>
                <div></div>
              </div>
            </div>

            <!-- Discount and Remarks Section -->
            <div class="mb-8">
              <h3 class="text-lg font-medium text-[rgb(var(--text-color))] mb-4">Discount and Remarks</h3>
              <div class="space-y-4">
                <!-- Discount Row -->
                <div class="grid grid-cols-6 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Discount:</label>
                    <input v-model="formData.discount" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder=".00" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Bdy Amt:</label>
                    <input v-model="formData.bdyAmt" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder=".00" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">GST Tax Code & Rate:</label>
                    <div class="flex space-x-2">
                      <input v-model="formData.gstTaxCode" type="text" class="flex-1 px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Code" />
                      <input v-model="formData.gstRate" type="text" class="flex-1 px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Rate" />
                    </div>
                  </div>
                </div>
                <!-- Disc GST Row -->
                <div class="grid grid-cols-6 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Disc GST:</label>
                    <input v-model="formData.discGst" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder=".00" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Bdy GST:</label>
                    <input v-model="formData.bdyGst" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder=".00" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Total Amt (Inc. GST):</label>
                    <input v-model="formData.totalAmtIncGst" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder=".00" />
                  </div>
                </div>
                <!-- Remarks Row -->
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Remarks:</label>
                  <input v-model="formData.remarks" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter remarks" />
                </div>
              </div>
            </div>

            <!-- Charges Section -->
            <div class="mb-8">
              <h3 class="text-lg font-medium text-[rgb(var(--text-color))] mb-4">Charges</h3>
              <div class="overflow-x-auto">
                <table class="w-full border border-[rgb(var(--border-color))] rounded-lg">
                  <thead class="bg-gray-50">
                    <tr>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))] w-48">Charge Code & Name</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Amount (Ex. GST)</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">GST Tax Code & Rate</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">GST Amount</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Total Amount (Inc. GST)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(charge, index) in chargesData" :key="index" class="hover:bg-gray-50">
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <div class="flex space-x-2">
                          <input v-model="charge.chargeCode" type="text" class="flex-1 px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" placeholder="Code" />
                          <input v-model="charge.chargeName" type="text" class="flex-1 px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" placeholder="Name" />
                        </div>
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="charge.amountExGst" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" placeholder="0.00" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="charge.gstTaxCodeRate" type="text" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" placeholder="Tax code & rate" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="charge.gstAmount" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" placeholder="0.00" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="charge.totalAmountIncGst" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" placeholder="0.00" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- Charges Totals -->
              <div class="grid grid-cols-2 gap-6 mt-4">
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Charges Amount:</label>
                  <input v-model="formData.chargesAmount" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Charges Amt (Inc. GST):</label>
                  <input v-model="formData.chargesAmtIncGst" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                </div>
              </div>
            </div>

            <!-- Part No & Name Section -->
            <div class="mb-8">
              <h3 class="text-lg font-medium text-[rgb(var(--text-color))] mb-4">Part No & Name</h3>
              <div class="overflow-x-auto">
                <table class="w-full border border-[rgb(var(--border-color))] rounded-lg">
                  <thead class="bg-gray-50">
                    <tr>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))] w-48">Part No & Name</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Qty</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Amount</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Total Amount</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">GST Tax Code & Rate</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">GST Amount</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Total Amount (Inc. GST)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(part, index) in partsData" :key="index" class="hover:bg-gray-50">
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <div class="flex space-x-2">
                          <input v-model="part.partNo" type="text" class="flex-1 px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" placeholder="Part No" />
                          <input v-model="part.partName" type="text" class="flex-1 px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" placeholder="Part Name" />
                        </div>
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="part.qty" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" placeholder="0" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="part.amount" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" placeholder="0.00" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="part.totalAmount" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" placeholder="0.00" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="part.gstTaxCodeRate" type="text" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" placeholder="Tax code & rate" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="part.gstAmount" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" placeholder="0.00" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="part.totalAmountIncGst" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" placeholder="0.00" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- Accessory Totals -->
              <div class="grid grid-cols-2 gap-6 mt-4">
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Acsry Amount:</label>
                  <input v-model="formData.acsryAmount" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Acsry Amt (Inc. GST):</label>
                  <input v-model="formData.acsryAmtIncGst" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                </div>
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
                @click="handleGiAlloc"
              >
                GI Alloc...
              </rs-button>
              <rs-button
                variant="info"
                @click="handleJV"
              >
                JV
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
  title: "Vehicle Credit Note",
});

const { $swal } = useNuxtApp();

// Form data
const formData = ref({
  // Credit Note Header Details
  location: '',
  cnNo: '',
  partyCode: '',
  dnNo: '',
  invoiceNo: '',
  modelCode: '',
  miCode: '45101',
  date: '',
  date2: '',
  createdBy: '',
  cnDate: '',
  dept: '',
  
  // Discount and Remarks
  discount: '.00',
  bdyAmt: '.00',
  gstTaxCode: '',
  gstRate: '',
  discGst: '.00',
  bdyGst: '.00',
  totalAmtIncGst: '.00',
  remarks: '',
  
  // Charges Totals
  chargesAmount: '0.00',
  chargesAmtIncGst: '0.00',
  
  // Accessory Totals
  acsryAmount: '0.00',
  acsryAmtIncGst: '0.00'
});

// Charges data
const chargesData = ref([
  { chargeCode: '', chargeName: '', amountExGst: '', gstTaxCodeRate: '', gstAmount: '', totalAmountIncGst: '' },
  { chargeCode: '', chargeName: '', amountExGst: '', gstTaxCodeRate: '', gstAmount: '', totalAmountIncGst: '' }
]);

// Parts data
const partsData = ref([
  { partNo: '', partName: '', qty: '', amount: '', totalAmount: '', gstTaxCodeRate: '', gstAmount: '', totalAmountIncGst: '' },
  { partNo: '', partName: '', qty: '', amount: '', totalAmount: '', gstTaxCodeRate: '', gstAmount: '', totalAmountIncGst: '' }
]);

// Form submission
const handleSubmit = async (formData) => {
  try {
    // Process form submission
    console.log('Form submitted:', { formData, chargesData: chargesData.value, partsData: partsData.value });
    
    $swal.fire({
      title: 'Success!',
      text: 'Credit note has been saved successfully.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  } catch (error) {
    console.error('Error submitting form:', error);
    $swal.fire({
      title: 'Error!',
      text: 'An error occurred while saving the credit note.',
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
        if (key === 'miCode') {
          formData.value[key] = '45101';
        } else if (key === 'discount' || key === 'bdyAmt' || key === 'discGst' || key === 'bdyGst' || 
                   key === 'totalAmtIncGst' || key === 'chargesAmount' || key === 'chargesAmtIncGst' ||
                   key === 'acsryAmount' || key === 'acsryAmtIncGst') {
          formData.value[key] = '.00';
        } else {
          formData.value[key] = '';
        }
      });
      
      // Reset charges data
      chargesData.value.forEach(charge => {
        charge.chargeCode = '';
        charge.chargeName = '';
        charge.amountExGst = '';
        charge.gstTaxCodeRate = '';
        charge.gstAmount = '';
        charge.totalAmountIncGst = '';
      });
      
      // Reset parts data
      partsData.value.forEach(part => {
        part.partNo = '';
        part.partName = '';
        part.qty = '';
        part.amount = '';
        part.totalAmount = '';
        part.gstTaxCodeRate = '';
        part.gstAmount = '';
        part.totalAmountIncGst = '';
      });
    }
  });
};

// Refresh handler
const handleRefresh = () => {
  // Reset form data
  Object.keys(formData.value).forEach(key => {
    if (key === 'miCode') {
      formData.value[key] = '45101';
    } else if (key === 'discount' || key === 'bdyAmt' || key === 'discGst' || key === 'bdyGst' || 
               key === 'totalAmtIncGst' || key === 'chargesAmount' || key === 'chargesAmtIncGst' ||
               key === 'acsryAmount' || key === 'acsryAmtIncGst') {
      formData.value[key] = '.00';
    } else {
      formData.value[key] = '';
    }
  });
  
  // Reset charges data
  chargesData.value.forEach(charge => {
    charge.chargeCode = '';
    charge.chargeName = '';
    charge.amountExGst = '';
    charge.gstTaxCodeRate = '';
    charge.gstAmount = '';
    charge.totalAmountIncGst = '';
  });
  
  // Reset parts data
  partsData.value.forEach(part => {
    part.partNo = '';
    part.partName = '';
    part.qty = '';
    part.amount = '';
    part.totalAmount = '';
    part.gstTaxCodeRate = '';
    part.gstAmount = '';
    part.totalAmountIncGst = '';
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

const handleGiAlloc = () => {
  $swal.fire({
    title: 'General Item Allocation',
    text: 'General Item Allocation functionality will be implemented.',
    icon: 'info',
    confirmButtonText: 'OK'
  });
};

const handleJV = () => {
  $swal.fire({
    title: 'Journal Voucher',
    text: 'Journal Voucher functionality will be implemented.',
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
      case 'j':
        event.preventDefault();
        handleJV();
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
