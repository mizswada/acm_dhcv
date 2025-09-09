<template> 
    <div>
    <rs-card>
      <template #header>
        <div class="flex items-center space-x-2">
          <Icon name="heroicons:shopping-cart" class="w-5 h-5" />
          <h2 class="text-lg font-semibold text-[rgb(var(--text-color))]">Spares SOs</h2>
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
              <h3 class="text-lg font-medium text-[rgb(var(--text-color))] mb-4">Sales Order Details</h3>
              <div class="grid grid-cols-2 gap-8">
                <!-- Left Column -->
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Location:</label>
                    <input v-model="formData.location" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter location" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">SO No:</label>
                    <input v-model="formData.soNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter SO number" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Customer:</label>
                    <input v-model="formData.customer" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter customer" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Customer Order No:</label>
                    <input v-model="formData.customerOrderNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter customer order number" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Quotation Location:</label>
                    <input v-model="formData.quotationLocation" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter quotation location" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Quotation No:</label>
                    <input v-model="formData.quotationNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter quotation number" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Payment Terms:</label>
                    <input v-model="formData.paymentTerms" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter payment terms" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Discount %:</label>
                    <input v-model="formData.discountPercent" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="00" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Part Name:</label>
                    <input v-model="formData.partName" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter part name" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Last Rec Date:</label>
                    <input v-model="formData.lastRecDate" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter last received date" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Last Iss Date:</label>
                    <input v-model="formData.lastIssDate" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter last issued date" />
                  </div>
                </div>

                <!-- Right Column -->
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Order Date:</label>
                    <input v-model="formData.orderDate" type="date" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Customer Order Date:</label>
                    <input v-model="formData.customerOrderDate" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter customer order date" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Delivery Date:</label>
                    <input v-model="formData.deliveryDate" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter delivery date" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Indent:</label>
                    <select v-model="formData.indent" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                      <option value="">Select indent</option>
                      <option value="indent1">Indent 1</option>
                      <option value="indent2">Indent 2</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Credit Limit:</label>
                    <input v-model="formData.creditLimit" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="00" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Current Balance:</label>
                    <input v-model="formData.currentBalance" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="00" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Created:</label>
                    <input v-model="formData.created" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter created by" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Modified:</label>
                    <input v-model="formData.modified" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter modified by" />
                  </div>
                </div>
              </div>

              <!-- Delivery Address Options -->
              <div class="mt-6">
                <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-3">Deliver At:</label>
                <div class="flex space-x-6">
                  <label class="flex items-center">
                    <input v-model="formData.deliverAt" type="radio" value="billing" class="mr-2" />
                    <span class="text-sm text-[rgb(var(--text-color))]">Billing Address</span>
                  </label>
                  <label class="flex items-center">
                    <input v-model="formData.deliverAt" type="radio" value="delivery" class="mr-2" />
                    <span class="text-sm text-[rgb(var(--text-color))]">Delivery Address</span>
                  </label>
                </div>
              </div>

              <!-- Invoiced Checkbox -->
              <div class="mt-4">
                <label class="flex items-center">
                  <input v-model="formData.invoiced" type="checkbox" class="mr-2" />
                  <span class="text-sm font-medium text-[rgb(var(--text-color))]">Invoiced</span>
                </label>
              </div>

              <!-- Part-Specific Details -->
              <div class="mt-6 grid grid-cols-4 gap-4">
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Workshop Qty:</label>
                  <input v-model="formData.workshopQty" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter workshop quantity" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Class:</label>
                  <input v-model="formData.class" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="F" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Stock:</label>
                  <input v-model="formData.stock" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter stock" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Min Lvl:</label>
                  <input v-model="formData.minLvl" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter min level" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Max Lvl:</label>
                  <input v-model="formData.maxLvl" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter max level" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Bin:</label>
                  <input v-model="formData.bin" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter bin" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Tag:</label>
                  <input v-model="formData.tag" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter tag" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Avl:</label>
                  <input v-model="formData.avl" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter available" />
                </div>
              </div>
            </div>

            <!-- Data Grid / Table Section -->
            <div class="mb-8">
              <h3 class="text-lg font-medium text-[rgb(var(--text-color))] mb-4">Spare Parts Line Items</h3>
              <div class="overflow-x-auto">
                <table class="w-full border border-[rgb(var(--border-color))] rounded-lg">
                  <thead class="bg-gray-50">
                    <tr>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Part No</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Ref No</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Qty</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Alloc</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Price</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Disc. %</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Net Price</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Amount (Ex. GST)</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">GST Tax Code & Rate</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">GST Amount</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Amount (Inc. GST)</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Pending Qty</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in lineItemsData" :key="index" class="hover:bg-gray-50">
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.partNo" type="text" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" placeholder="Part No" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.refNo" type="text" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" placeholder="Ref No" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.qty" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" placeholder="0" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.alloc" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" placeholder="0" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.price" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" placeholder="0.00" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.discPercent" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" placeholder="0.00" />
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
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.pendingQty" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" placeholder="0" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <!-- Summary Field -->
              <div class="flex justify-end mt-4">
                <div class="flex items-center space-x-4">
                  <label class="text-sm font-medium text-[rgb(var(--text-color))]">Spares Amount:</label>
                  <input v-model="formData.sparesAmount" type="number" step="0.01" class="w-32 px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
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
                @click="handlePrintDO"
              >
                Print DO
              </rs-button>
              <rs-button
                variant="info"
                @click="handleEnquiry"
              >
                Enquiry
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
    title: "Spares SOs",
});

const { $swal } = useNuxtApp();

// Form data
const formData = ref({
  // Header/General Details
  location: '',
  soNo: '',
  customer: '',
  customerOrderNo: '',
  quotationLocation: '',
  quotationNo: '',
  paymentTerms: '',
  discountPercent: '00',
  partName: '',
  lastRecDate: '',
  lastIssDate: '',
  orderDate: '2022-06-24',
  customerOrderDate: '',
  deliveryDate: '',
  indent: '',
  creditLimit: '00',
  currentBalance: '00',
  created: '',
  modified: '',
  
  // Delivery Address
  deliverAt: 'billing',
  
  // Invoiced
  invoiced: false,
  
  // Part-Specific Details
  workshopQty: '',
  class: 'F',
  stock: '',
  minLvl: '',
  maxLvl: '',
  bin: '',
  tag: '',
  avl: '',
  
  // Summary
  sparesAmount: '0.00'
});

// Line items data
const lineItemsData = ref([
  { partNo: '', refNo: '', qty: '', alloc: '', price: '', discPercent: '', netPrice: '', amountExGst: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '', pendingQty: '' },
  { partNo: '', refNo: '', qty: '', alloc: '', price: '', discPercent: '', netPrice: '', amountExGst: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '', pendingQty: '' },
  { partNo: '', refNo: '', qty: '', alloc: '', price: '', discPercent: '', netPrice: '', amountExGst: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '', pendingQty: '' },
  { partNo: '', refNo: '', qty: '', alloc: '', price: '', discPercent: '', netPrice: '', amountExGst: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '', pendingQty: '' },
  { partNo: '', refNo: '', qty: '', alloc: '', price: '', discPercent: '', netPrice: '', amountExGst: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '', pendingQty: '' },
  { partNo: '', refNo: '', qty: '', alloc: '', price: '', discPercent: '', netPrice: '', amountExGst: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '', pendingQty: '' },
  { partNo: '', refNo: '', qty: '', alloc: '', price: '', discPercent: '', netPrice: '', amountExGst: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '', pendingQty: '' },
  { partNo: '', refNo: '', qty: '', alloc: '', price: '', discPercent: '', netPrice: '', amountExGst: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '', pendingQty: '' },
  { partNo: '', refNo: '', qty: '', alloc: '', price: '', discPercent: '', netPrice: '', amountExGst: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '', pendingQty: '' },
  { partNo: '', refNo: '', qty: '', alloc: '', price: '', discPercent: '', netPrice: '', amountExGst: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '', pendingQty: '' }
]);

// Form submission
const handleSubmit = async (formData) => {
  try {
    // Process form submission
    console.log('Form submitted:', { formData, lineItemsData: lineItemsData.value });
    
    $swal.fire({
      title: 'Success!',
      text: 'Spares sales order has been saved successfully.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  } catch (error) {
    console.error('Error submitting form:', error);
    $swal.fire({
      title: 'Error!',
      text: 'An error occurred while saving the sales order.',
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
        if (key === 'orderDate') {
          formData.value[key] = '2022-06-24';
        } else if (key === 'discountPercent' || key === 'creditLimit' || key === 'currentBalance') {
          formData.value[key] = '00';
        } else if (key === 'class') {
          formData.value[key] = 'F';
        } else if (key === 'deliverAt') {
          formData.value[key] = 'billing';
        } else if (key === 'invoiced') {
          formData.value[key] = false;
        } else if (key === 'sparesAmount') {
          formData.value[key] = '0.00';
        } else {
          formData.value[key] = '';
        }
      });
      
      // Reset line items data
      lineItemsData.value.forEach(item => {
        item.partNo = '';
        item.refNo = '';
        item.qty = '';
        item.alloc = '';
        item.price = '';
        item.discPercent = '';
        item.netPrice = '';
        item.amountExGst = '';
        item.gstTaxCodeRate = '';
        item.gstAmount = '';
        item.amountIncGst = '';
        item.pendingQty = '';
      });
    }
  });
};

// Refresh handler
const handleRefresh = () => {
  // Reset form data
  Object.keys(formData.value).forEach(key => {
    if (key === 'orderDate') {
      formData.value[key] = '2022-06-24';
    } else if (key === 'discountPercent' || key === 'creditLimit' || key === 'currentBalance') {
      formData.value[key] = '00';
    } else if (key === 'class') {
      formData.value[key] = 'F';
    } else if (key === 'deliverAt') {
      formData.value[key] = 'billing';
    } else if (key === 'invoiced') {
      formData.value[key] = false;
    } else if (key === 'sparesAmount') {
      formData.value[key] = '0.00';
    } else {
      formData.value[key] = '';
    }
  });
  
  // Reset line items data
  lineItemsData.value.forEach(item => {
    item.partNo = '';
    item.refNo = '';
    item.qty = '';
    item.alloc = '';
    item.price = '';
    item.discPercent = '';
    item.netPrice = '';
    item.amountExGst = '';
    item.gstTaxCodeRate = '';
    item.gstAmount = '';
    item.amountIncGst = '';
    item.pendingQty = '';
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

const handlePrintDO = () => {
  $swal.fire({
    title: 'Print Delivery Order',
    text: 'Print DO functionality will be implemented.',
    icon: 'info',
    confirmButtonText: 'OK'
  });
};

const handleEnquiry = () => {
  $swal.fire({
    title: 'Enquiry',
    text: 'Enquiry functionality will be implemented.',
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
      case 'd':
        event.preventDefault();
        handlePrintDO();
        break;
      case 'q':
        event.preventDefault();
        handleEnquiry();
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
