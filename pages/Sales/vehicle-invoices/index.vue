<template> 
    <div>
    <rs-card>
      <template #header>
        <div class="flex items-center space-x-2">
          <Icon name="heroicons:document-text" class="w-5 h-5" />
          <h2 class="text-lg font-semibold text-[rgb(var(--text-color))]">Vehicle Invoices</h2>
        </div>
      </template>

      <template #body>
        <div class="space-y-6">
          <FormKit
            type="form"
            @submit="handleSubmit"
            :actions="false"
          >
            <!-- Invoice Header Details Section -->
            <div class="mb-8">
              <h3 class="text-lg font-medium text-[rgb(var(--text-color))] mb-4">Invoice Header Details</h3>
              <div class="grid grid-cols-4 gap-6">
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Location:</label>
                  <input v-model="formData.location" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter location" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">MI Code:</label>
                  <div class="relative">
                    <input v-model="formData.miCode" type="text" class="w-full px-3 py-2 pr-8 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="45101" />
                    <Icon name="heroicons:chevron-down" class="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">BVO No:</label>
                  <input v-model="formData.bvoNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter BVO number" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Invoice Date:</label>
                  <input v-model="formData.invoiceDate" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="22/06/2022" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Invoice No:</label>
                  <input v-model="formData.invoiceNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter invoice number" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Customer Code:</label>
                  <input v-model="formData.customerCode" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter customer code" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">VO Date:</label>
                  <input v-model="formData.voDate" type="date" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">DN No:</label>
                  <input v-model="formData.dnNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter DN number" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">VO No:</label>
                  <input v-model="formData.voNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter VO number" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Model:</label>
                  <input v-model="formData.model" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter model" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Private:</label>
                  <select v-model="formData.private" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                    <option value="Private">Private</option>
                    <option value="Commercial">Commercial</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Amt:</label>
                  <input v-model="formData.amt" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Body:</label>
                  <input v-model="formData.body" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter body" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Body GST Tax:</label>
                  <input v-model="formData.bodyGstTax" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter body GST tax" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Body GST Amount:</label>
                  <input v-model="formData.bodyGstAmount" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">DL Margin:</label>
                  <input v-model="formData.dlMargin" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Color:</label>
                  <input v-model="formData.color" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter color" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Qty:</label>
                  <input v-model="formData.qty" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter quantity" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Salesman:</label>
                  <input v-model="formData.salesman" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter salesman" />
                </div>
                <div></div>
                <div class="col-span-4">
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Remarks:</label>
                  <input v-model="formData.remarks" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter remarks" />
                </div>
              </div>
            </div>

            <!-- Financial Summary Section -->
            <div class="mb-8">
              <h3 class="text-lg font-medium text-[rgb(var(--text-color))] mb-4">Financial Summary</h3>
              <div class="grid grid-cols-3 gap-6">
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Gross Amount:</label>
                  <input v-model="formData.grossAmount" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder=".00" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Discount:</label>
                  <input v-model="formData.discount" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder=".00" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Net Amt:</label>
                  <input v-model="formData.netAmt" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder=".00" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Total GST Amt:</label>
                  <input v-model="formData.totalGstAmt" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder=".00" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Disc. GST:</label>
                  <input v-model="formData.discGst" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder=".00" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Net Amt (Inc GST):</label>
                  <input v-model="formData.netAmtIncGst" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder=".00" />
                </div>
              </div>
            </div>

            <!-- HP Details Section -->
            <div class="mb-8">
              <h3 class="text-lg font-medium text-[rgb(var(--text-color))] mb-4">HP Details</h3>
              <div class="grid grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">HP Party:</label>
                  <input v-model="formData.hpParty" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter HP party" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Interest Rate:</label>
                  <input v-model="formData.interestRate" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder=".00" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">HP Ref No:</label>
                  <input v-model="formData.hpRefNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter HP reference number" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Loan Term:</label>
                  <input v-model="formData.loanTerm" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder=".00" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">HP Amount:</label>
                  <input v-model="formData.hpAmount" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder=".00" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Hp Charges Amt:</label>
                  <input v-model="formData.hpChargesAmt" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder=".00" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">HP Pending Amt:</label>
                  <input v-model="formData.hpPendingAmt" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder=".00" />
                </div>
                <div></div>
              </div>
            </div>

            <!-- Payment Details Section -->
            <div class="mb-8">
              <h3 class="text-lg font-medium text-[rgb(var(--text-color))] mb-4">Payment Details</h3>
              <div class="space-y-6">
                <!-- First row - 3 columns -->
                <div class="grid grid-cols-3 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Booking Amount:</label>
                    <input v-model="formData.bookingAmount" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder=".00" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Payment Type:</label>
                    <select v-model="formData.paymentType" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                      <option value="Cash">Cash</option>
                      <option value="Cheque">Cheque</option>
                      <option value="Card">Card</option>
                      <option value="Bank Transfer">Bank Transfer</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Payment Amt:</label>
                    <input v-model="formData.paymentAmt" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder=".00" />
                  </div>
                </div>
                <!-- Subsequent rows - 2 columns -->
                <div class="grid grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Bank Code:</label>
                    <input v-model="formData.bankCode" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter bank code" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Clearing Bank:</label>
                    <input v-model="formData.clearingBank" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter clearing bank" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Cheque No:</label>
                    <input v-model="formData.chequeNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter cheque number" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Chq Date:</label>
                    <input v-model="formData.chqDate" type="date" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Card No:</label>
                    <input v-model="formData.cardNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter card number" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Card Type:</label>
                    <select v-model="formData.cardType" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                      <option value="">Select card type</option>
                      <option value="Visa">Visa</option>
                      <option value="Mastercard">Mastercard</option>
                      <option value="American Express">American Express</option>
                    </select>
                  </div>
                  <div>
                    <label class="flex items-center space-x-2">
                      <input v-model="formData.cancelled" type="checkbox" class="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary/20" />
                      <span class="text-sm font-medium text-[rgb(var(--text-color))]">Cancelled</span>
                    </label>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Pending Amt:</label>
                    <input v-model="formData.pendingAmt" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder=".00" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Created By:</label>
                    <input v-model="formData.createdBy" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter created by" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Curr Balance:</label>
                    <input v-model="formData.currBalance" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-gray-100" placeholder="Current balance" readonly />
                  </div>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="space-y-4 pt-6 border-t">
              <!-- Main Actions Row -->
              <div class="flex justify-center space-x-4">
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
                  variant="warning"
                  @click="handleCharges"
                >
                  Charges
                </rs-button>
                <rs-button
                  variant="warning"
                  @click="handleDiscounts"
                >
                  Discounts
                </rs-button>
                <rs-button
                  variant="info"
                  @click="handleChassis"
                >
                  Chassis..
                </rs-button>
                <rs-button
                  variant="success"
                  btn-type="submit"
                >
                  Save
                </rs-button>
                <rs-button
                  variant="info"
                  @click="handleCheques"
                >
                  Cheques
                </rs-button>
                <rs-button
                  variant="info"
                  @click="handlePrint"
                >
                  Print..
                </rs-button>
                <rs-button
                  variant="info"
                  @click="handlePrnNet"
                >
                  Prn Net..
                </rs-button>
                <rs-button
                  variant="info"
                  @click="handleJV"
                >
                  JV
                </rs-button>
              </div>
              <!-- Record-Specific Actions Row -->
              <div class="flex justify-center space-x-4">
                <rs-button
                  variant="info"
                  @click="handleBvoRec"
                >
                  Bvo Rec
                </rs-button>
                <rs-button
                  variant="info"
                  @click="handleHpRec"
                >
                  HP Rec
                </rs-button>
                <rs-button
                  variant="info"
                  @click="handleVehRec"
                >
                  Veh Rec
                </rs-button>
                <rs-button
                  variant="info"
                  @click="handlePrint1"
                >
                  Print..1
                </rs-button>
              </div>
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
    title: "Vehicle Invoices",
});

const { $swal } = useNuxtApp();

// Form data
const formData = ref({
  // Invoice Header Details
  location: '',
  miCode: '45101',
  bvoNo: '',
  invoiceDate: '22/06/2022',
  invoiceNo: '',
  customerCode: '',
  voDate: '',
  dnNo: '',
  voNo: '',
  model: '',
  private: 'Private',
  amt: '0.00',
  body: '',
  bodyGstTax: '',
  bodyGstAmount: '0.00',
  dlMargin: '0.00',
  color: '',
  qty: '',
  salesman: '',
  remarks: '',
  
  // Financial Summary
  grossAmount: '.00',
  discount: '.00',
  netAmt: '.00',
  totalGstAmt: '.00',
  discGst: '.00',
  netAmtIncGst: '.00',
  
  // HP Details
  hpParty: '',
  interestRate: '.00',
  hpRefNo: '',
  loanTerm: '.00',
  hpAmount: '.00',
  hpChargesAmt: '.00',
  hpPendingAmt: '.00',
  
  // Payment Details
  bookingAmount: '.00',
  paymentType: 'Cash',
  paymentAmt: '.00',
  bankCode: '',
  clearingBank: '',
  chequeNo: '',
  chqDate: '',
  cardNo: '',
  cardType: '',
  cancelled: false,
  pendingAmt: '.00',
  createdBy: '',
  currBalance: ''
});

// Form submission
const handleSubmit = async (formData) => {
  try {
    // Process form submission
    console.log('Form submitted:', formData);
    
    $swal.fire({
      title: 'Success!',
      text: 'Vehicle invoice has been saved successfully.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  } catch (error) {
    console.error('Error submitting form:', error);
    $swal.fire({
      title: 'Error!',
      text: 'An error occurred while saving the vehicle invoice.',
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
        } else if (key === 'invoiceDate') {
          formData.value[key] = '22/06/2022';
        } else if (key === 'private') {
          formData.value[key] = 'Private';
        } else if (key === 'paymentType') {
          formData.value[key] = 'Cash';
        } else if (key === 'cancelled') {
          formData.value[key] = false;
        } else if (key === 'amt' || key === 'bodyGstAmount' || key === 'dlMargin' || 
                   key === 'grossAmount' || key === 'discount' || key === 'netAmt' || 
                   key === 'totalGstAmt' || key === 'discGst' || key === 'netAmtIncGst' ||
                   key === 'interestRate' || key === 'loanTerm' || key === 'hpAmount' || 
                   key === 'hpChargesAmt' || key === 'hpPendingAmt' || key === 'bookingAmount' || 
                   key === 'paymentAmt' || key === 'pendingAmt') {
          formData.value[key] = '.00';
        } else {
          formData.value[key] = '';
        }
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
    } else if (key === 'invoiceDate') {
      formData.value[key] = '22/06/2022';
    } else if (key === 'private') {
      formData.value[key] = 'Private';
    } else if (key === 'paymentType') {
      formData.value[key] = 'Cash';
    } else if (key === 'cancelled') {
      formData.value[key] = false;
    } else if (key === 'amt' || key === 'bodyGstAmount' || key === 'dlMargin' || 
               key === 'grossAmount' || key === 'discount' || key === 'netAmt' || 
               key === 'totalGstAmt' || key === 'discGst' || key === 'netAmtIncGst' ||
               key === 'interestRate' || key === 'loanTerm' || key === 'hpAmount' || 
               key === 'hpChargesAmt' || key === 'hpPendingAmt' || key === 'bookingAmount' || 
               key === 'paymentAmt' || key === 'pendingAmt') {
      formData.value[key] = '.00';
    } else {
      formData.value[key] = '';
    }
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
const handleCharges = () => {
  $swal.fire({
    title: 'Charges',
    text: 'Charges functionality will be implemented.',
    icon: 'info',
    confirmButtonText: 'OK'
  });
};

const handleDiscounts = () => {
  $swal.fire({
    title: 'Discounts',
    text: 'Discounts functionality will be implemented.',
    icon: 'info',
    confirmButtonText: 'OK'
  });
};

const handleChassis = () => {
  $swal.fire({
    title: 'Chassis',
    text: 'Chassis functionality will be implemented.',
    icon: 'info',
    confirmButtonText: 'OK'
  });
};

const handleCheques = () => {
  $swal.fire({
    title: 'Cheques',
    text: 'Cheques functionality will be implemented.',
    icon: 'info',
    confirmButtonText: 'OK'
  });
};

const handlePrint = () => {
  $swal.fire({
    title: 'Print',
    text: 'Print functionality will be implemented.',
    icon: 'info',
    confirmButtonText: 'OK'
  });
};

const handlePrnNet = () => {
  $swal.fire({
    title: 'Print Net',
    text: 'Print Net functionality will be implemented.',
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

const handleBvoRec = () => {
  $swal.fire({
    title: 'BVO Record',
    text: 'BVO Record functionality will be implemented.',
    icon: 'info',
    confirmButtonText: 'OK'
  });
};

const handleHpRec = () => {
  $swal.fire({
    title: 'HP Record',
    text: 'HP Record functionality will be implemented.',
    icon: 'info',
    confirmButtonText: 'OK'
  });
};

const handleVehRec = () => {
  $swal.fire({
    title: 'Vehicle Record',
    text: 'Vehicle Record functionality will be implemented.',
    icon: 'info',
    confirmButtonText: 'OK'
  });
};

const handlePrint1 = () => {
  $swal.fire({
    title: 'Print 1',
    text: 'Print 1 functionality will be implemented.',
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
      case 'h':
        event.preventDefault();
        handleCharges();
        break;
      case 'd':
        event.preventDefault();
        handleDiscounts();
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
