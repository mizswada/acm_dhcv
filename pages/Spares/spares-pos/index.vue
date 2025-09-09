<template>
  <div>
    <LayoutsBreadcrumb />
    <rs-card>
      <template #header>
        <div class="flex items-center space-x-2">
          <Icon name="heroicons:shopping-bag" class="w-5 h-5" />
          <h2 class="text-lg font-semibold text-[rgb(var(--text-color))]">Spares POs</h2>
        </div>
      </template>

      <template #body>
        <div class="space-y-6">
          <FormKit
            type="form"
            @submit="handleSubmit"
            :actions="false"
          >
            <!-- General PO Details Section -->
            <div class="mb-8">
              <h3 class="text-lg font-medium text-[rgb(var(--text-color))] mb-4">General PO Details</h3>
              <div class="grid grid-cols-2 gap-8">
                <!-- Left Column -->
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Location:</label>
                    <input v-model="formData.location" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">PO No:</label>
                    <input v-model="formData.poNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Vendor:</label>
                    <input v-model="formData.vendor" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Delivery Date:</label>
                    <input v-model="formData.deliveryDate" type="date" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Discount %:</label>
                    <input v-model="formData.discountPercent" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Packing List No:</label>
                    <input v-model="formData.packingListNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Order Ack No:</label>
                    <input v-model="formData.orderAckNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div class="flex items-center space-x-2">
                    <input v-model="formData.enableExcel" type="checkbox" class="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary" />
                    <label class="text-sm font-medium text-[rgb(var(--text-color))]">Enable Excel</label>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Remarks:</label>
                    <input v-model="formData.remarks" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <rs-button variant="info" size="sm" @click="handleUploadExcel">Upload Excel</rs-button>
                  </div>
                </div>

                <!-- Right Column -->
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">PR No:</label>
                    <input v-model="formData.prNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Prefix:</label>
                    <input v-model="formData.prefix" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Date:</label>
                    <input v-model="formData.date" type="date" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Vendor:</label>
                    <input v-model="formData.vendor2" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Payment Terms:</label>
                    <input v-model="formData.paymentTerms" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Freight Mode:</label>
                    <select v-model="formData.freightMode" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                      <option value="Land">Land</option>
                      <option value="Air">Air</option>
                      <option value="Sea">Sea</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Packing List Date:</label>
                    <input v-model="formData.packingListDate" type="date" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Order Ack Date:</label>
                    <input v-model="formData.orderAckDate" type="date" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  
                  <!-- Top Right Buttons & Checkboxes -->
                  <div class="space-y-4">
                    <div class="flex space-x-2">
                      <rs-button variant="info" size="sm" @click="handleOpenPDF">Open PDF</rs-button>
                      <rs-button variant="info" size="sm" @click="handleUpload">UPLOAD</rs-button>
                    </div>
                    <div class="space-y-2">
                      <div class="flex items-center space-x-2">
                        <input v-model="formData.invoiced" type="checkbox" class="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary" />
                        <label class="text-sm font-medium text-[rgb(var(--text-color))]">Invoiced</label>
                      </div>
                      <div class="flex items-center space-x-2">
                        <input v-model="formData.cancelled" type="checkbox" class="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary" />
                        <label class="text-sm font-medium text-[rgb(var(--text-color))]">Cancelled</label>
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
              
              <!-- Data Entry Table -->
              <div class="overflow-x-auto">
                <table class="w-full border border-[rgb(var(--border-color))] rounded-lg">
                  <thead>
                    <tr class="bg-gray-50">
                      <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-[rgb(var(--border-color))]">Part No</th>
                      <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-[rgb(var(--border-color))]">Qty</th>
                      <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-[rgb(var(--border-color))]">RM Price</th>
                      <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-[rgb(var(--border-color))]">Yen Price</th>
                      <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-[rgb(var(--border-color))]">Disc %</th>
                      <th class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-[rgb(var(--border-color))]" colspan="2">RM</th>
                      <th class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-[rgb(var(--border-color))]" colspan="2">Yen</th>
                      <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-[rgb(var(--border-color))]">RM Amount</th>
                      <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-[rgb(var(--border-color))]">Yen Amount</th>
                      <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-[rgb(var(--border-color))]">GST Tax Code & Rate</th>
                      <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-[rgb(var(--border-color))]">GST Amount</th>
                      <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-[rgb(var(--border-color))]">Amount (Inc. GST)</th>
                      <th class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-[rgb(var(--border-color))]" colspan="2">Canc Qty</th>
                    </tr>
                    <tr class="bg-gray-50">
                      <th class="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-[rgb(var(--border-color))]">Net Price</th>
                      <th class="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-[rgb(var(--border-color))]">Net Price</th>
                      <th class="px-4 py-2 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-[rgb(var(--border-color))]">Pnd Qty</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in lineItemsData" :key="index" class="hover:bg-gray-50">
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.partNo" type="text" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.qty" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.rmPrice" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.yenPrice" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.discPercent" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.rmNetPrice" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.yenNetPrice" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.rmAmount" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.yenAmount" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" />
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
                        <input v-model="item.cancQty" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.pndQty" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Summary Section -->
            <div class="mb-8">
              <h3 class="text-lg font-medium text-[rgb(var(--text-color))] mb-4">Summary</h3>
              <div class="grid grid-cols-5 gap-4">
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Sales Tax:</label>
                  <input v-model="formData.salesTax" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                </div>
                <div class="flex items-end">
                  <span class="text-sm font-medium text-[rgb(var(--text-color))] mb-2">%</span>
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Sales Tax Amt:</label>
                  <input v-model="formData.salesTaxAmt" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Spares Amount:</label>
                  <input v-model="formData.sparesAmount" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Net Amount:</label>
                  <input v-model="formData.netAmount" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex justify-end space-x-4 pt-6 border-t">
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
                @click="handleGenerate"
              >
                Generate
              </rs-button>
              <rs-button
                variant="info"
                @click="handleEnquiry"
              >
                Enquiry
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
  title: "Spares POs",
});

const { $swal } = useNuxtApp();

// Form data
const formData = ref({
  // General PO Details
  location: '',
  poNo: '',
  vendor: '',
  deliveryDate: '',
  discountPercent: '00',
  packingListNo: '0',
  orderAckNo: '',
  enableExcel: false,
  remarks: '',
  prNo: '',
  prefix: '',
  date: '2022-06-24',
  vendor2: '',
  paymentTerms: '',
  freightMode: 'Land',
  packingListDate: '',
  orderAckDate: '',
  invoiced: false,
  cancelled: false,
  partName: '',
  // Summary
  salesTax: '',
  salesTaxAmt: '00',
  sparesAmount: '00',
  netAmount: '00'
});

// Line items data
const lineItemsData = ref([
  { partNo: '', qty: '', rmPrice: '', yenPrice: '', discPercent: '', rmNetPrice: '', yenNetPrice: '', rmAmount: '', yenAmount: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '', cancQty: '', pndQty: '' },
  { partNo: '', qty: '', rmPrice: '', yenPrice: '', discPercent: '', rmNetPrice: '', yenNetPrice: '', rmAmount: '', yenAmount: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '', cancQty: '', pndQty: '' },
  { partNo: '', qty: '', rmPrice: '', yenPrice: '', discPercent: '', rmNetPrice: '', yenNetPrice: '', rmAmount: '', yenAmount: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '', cancQty: '', pndQty: '' },
  { partNo: '', qty: '', rmPrice: '', yenPrice: '', discPercent: '', rmNetPrice: '', yenNetPrice: '', rmAmount: '', yenAmount: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '', cancQty: '', pndQty: '' },
  { partNo: '', qty: '', rmPrice: '', yenPrice: '', discPercent: '', rmNetPrice: '', yenNetPrice: '', rmAmount: '', yenAmount: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '', cancQty: '', pndQty: '' },
  { partNo: '', qty: '', rmPrice: '', yenPrice: '', discPercent: '', rmNetPrice: '', yenNetPrice: '', rmAmount: '', yenAmount: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '', cancQty: '', pndQty: '' },
  { partNo: '', qty: '', rmPrice: '', yenPrice: '', discPercent: '', rmNetPrice: '', yenNetPrice: '', rmAmount: '', yenAmount: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '', cancQty: '', pndQty: '' },
  { partNo: '', qty: '', rmPrice: '', yenPrice: '', discPercent: '', rmNetPrice: '', yenNetPrice: '', rmAmount: '', yenAmount: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '', cancQty: '', pndQty: '' }
]);

// Form submission
const handleSubmit = async (formData) => {
  try {
    console.log('Form submitted:', { formData, lineItemsData: lineItemsData.value });
    $swal.fire({
      title: 'Success!',
      text: 'Spares PO has been saved successfully.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  } catch (error) {
    console.error('Error submitting form:', error);
    $swal.fire({
      title: 'Error!',
      text: 'An error occurred while saving the PO.',
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
        if (key === 'date') {
          formData.value[key] = '2022-06-24';
        } else if (key === 'discountPercent' || key === 'packingListNo') {
          formData.value[key] = key === 'discountPercent' ? '00' : '0';
        } else if (key === 'salesTaxAmt' || key === 'sparesAmount' || key === 'netAmount') {
          formData.value[key] = '00';
        } else if (key === 'freightMode') {
          formData.value[key] = 'Land';
        } else if (key === 'enableExcel' || key === 'invoiced' || key === 'cancelled') {
          formData.value[key] = false;
        } else {
          formData.value[key] = '';
        }
      });
      
      // Reset line items data
      lineItemsData.value.forEach(item => {
        Object.keys(item).forEach(key => {
          item[key] = '';
        });
      });
    }
  });
};

// Refresh handler
const handleRefresh = () => {
  // Reset form data
  Object.keys(formData.value).forEach(key => {
    if (key === 'date') {
      formData.value[key] = '2022-06-24';
    } else if (key === 'discountPercent' || key === 'packingListNo') {
      formData.value[key] = key === 'discountPercent' ? '00' : '0';
    } else if (key === 'salesTaxAmt' || key === 'sparesAmount' || key === 'netAmount') {
      formData.value[key] = '00';
    } else if (key === 'freightMode') {
      formData.value[key] = 'Land';
    } else if (key === 'enableExcel' || key === 'invoiced' || key === 'cancelled') {
      formData.value[key] = false;
    } else {
      formData.value[key] = '';
    }
  });
  
  // Reset line items data
  lineItemsData.value.forEach(item => {
    Object.keys(item).forEach(key => {
      item[key] = '';
    });
  });
};

// Other handlers
const handleUploadExcel = () => {
  $swal.fire({
    title: 'Upload Excel',
    text: 'Excel upload functionality would be implemented here.',
    icon: 'info',
    confirmButtonText: 'OK'
  });
};

const handleOpenPDF = () => {
  $swal.fire({
    title: 'Open PDF',
    text: 'PDF opening functionality would be implemented here.',
    icon: 'info',
    confirmButtonText: 'OK'
  });
};

const handleUpload = () => {
  $swal.fire({
    title: 'Upload',
    text: 'Upload functionality would be implemented here.',
    icon: 'info',
    confirmButtonText: 'OK'
  });
};

const handlePrint = () => {
  $swal.fire({
    title: 'Print',
    text: 'Print functionality would be implemented here.',
    icon: 'info',
    confirmButtonText: 'OK'
  });
};

const handleGenerate = () => {
  $swal.fire({
    title: 'Generate',
    text: 'Generate functionality would be implemented here.',
    icon: 'info',
    confirmButtonText: 'OK'
  });
};

const handleEnquiry = () => {
  $swal.fire({
    title: 'Enquiry',
    text: 'Enquiry functionality would be implemented here.',
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
        // Trigger form submission
        const form = document.querySelector('form');
        if (form) {
          form.requestSubmit();
        }
        break;
      case 'p':
        event.preventDefault();
        handlePrint();
        break;
      case 'g':
        event.preventDefault();
        handleGenerate();
        break;
      case 'q':
        event.preventDefault();
        handleEnquiry();
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
