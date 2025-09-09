<template>
  <div>
    <rs-card>
      <template #header>
        <div class="flex items-center space-x-2">
          <Icon name="heroicons:x-circle" class="w-5 h-5" />
          <h2 class="text-lg font-semibold text-[rgb(var(--text-color))]">Vehicle Invoice Cancellation</h2>
        </div>
      </template>

      <template #body>
        <div class="space-y-6">
          <FormKit
            type="form"
            @submit="handleSubmit"
            :actions="false"
          >
            <!-- Invoice Details Section -->
            <div class="mb-8">
              <h3 class="text-lg font-medium text-[rgb(var(--text-color))] mb-4">Invoice Details</h3>
              <div class="grid grid-cols-4 gap-6">
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Location Code:</label>
                  <input v-model="formData.locationCode" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter location code" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Cancellation No:</label>
                  <input v-model="formData.cancellationNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter cancellation number" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Date:</label>
                  <input v-model="formData.date" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="22/06/2022" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Inv No:</label>
                  <input v-model="formData.invNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter invoice number" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Dt:</label>
                  <input v-model="formData.dt" type="date" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Party:</label>
                  <input v-model="formData.party" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter party" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Model:</label>
                  <input v-model="formData.model" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter model" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Prv Com:</label>
                  <select v-model="formData.prvCom" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                    <option value="Private">Private</option>
                    <option value="Commercial">Commercial</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Body:</label>
                  <input v-model="formData.body" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter body" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Body Amount:</label>
                  <input v-model="formData.bodyAmount" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder=".00" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Body GST Tax:</label>
                  <input v-model="formData.bodyGstTax" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter body GST tax" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Amount:</label>
                  <input v-model="formData.amount" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Dealer Margin:</label>
                  <input v-model="formData.dealerMargin" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder=".00" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Qty:</label>
                  <input v-model="formData.qty" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="1" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Color:</label>
                  <input v-model="formData.color" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter color" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Salesman:</label>
                  <input v-model="formData.salesman" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter salesman" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Cancel Remarks:</label>
                  <input v-model="formData.cancelRemarks" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter cancellation remarks" />
                </div>
              </div>
            </div>

            <!-- Financials Section -->
            <div class="mb-8">
              <h3 class="text-lg font-medium text-[rgb(var(--text-color))] mb-4">Financials</h3>
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
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Net Amount:</label>
                  <input v-model="formData.netAmount" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder=".00" />
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

            <!-- HP and Payment Details Section -->
            <div class="mb-8">
              <h3 class="text-lg font-medium text-[rgb(var(--text-color))] mb-4">HP and Payment Details</h3>
              <div class="grid grid-cols-4 gap-6">
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">HP Party:</label>
                  <input v-model="formData.hpParty" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter HP party" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">HP Amount:</label>
                  <input v-model="formData.hpAmount" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder=".00" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Hp Charges:</label>
                  <input v-model="formData.hpCharges" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder=".00" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Hp Net Amt:</label>
                  <input v-model="formData.hpNetAmt" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder=".00" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Deposit Amount:</label>
                  <input v-model="formData.depositAmount" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder=".00" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Payment Amount:</label>
                  <input v-model="formData.paymentAmount" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder=".00" />
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
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Bank:</label>
                  <input v-model="formData.bank" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter bank" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Pending Amount:</label>
                  <input v-model="formData.pendingAmount" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder=".00" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Dept:</label>
                  <input v-model="formData.dept" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter department" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Created By:</label>
                  <input v-model="formData.createdBy" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter created by" />
                </div>
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
                variant="warning"
                @click="handleCharges"
              >
                Charges
              </rs-button>
              <rs-button
                variant="info"
                @click="handleChassis"
              >
                Chassis
              </rs-button>
              <rs-button
                variant="info"
                @click="handlePrint"
              >
                Print
              </rs-button>
              <rs-button
                variant="info"
                @click="handleJV"
              >
                JV
              </rs-button>
              <rs-button
                variant="info"
                @click="handleVehcRec"
              >
                Vehc Rec
              </rs-button>
              <rs-button
                variant="info"
                @click="handleHpRec"
              >
                HP Rec
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
  title: "Vehicle Invoices Cancellation",
});

const { $swal } = useNuxtApp();

// Form data
const formData = ref({
  // Invoice Details
  locationCode: '',
  cancellationNo: '',
  date: '22/06/2022',
  invNo: '',
  dt: '',
  party: '',
  model: '',
  prvCom: 'Private',
  body: '',
  bodyAmount: '.00',
  bodyGstTax: '',
  amount: '0.00',
  dealerMargin: '.00',
  qty: '1',
  color: '',
  salesman: '',
  cancelRemarks: '',
  
  // Financials
  grossAmount: '.00',
  discount: '.00',
  netAmount: '.00',
  totalGstAmt: '.00',
  discGst: '.00',
  netAmtIncGst: '.00',
  
  // HP and Payment Details
  hpParty: '',
  hpAmount: '.00',
  hpCharges: '.00',
  hpNetAmt: '.00',
  depositAmount: '.00',
  paymentAmount: '.00',
  paymentType: 'Cash',
  bank: '',
  pendingAmount: '.00',
  dept: '',
  createdBy: ''
});

// Form submission
const handleSubmit = async (formData) => {
  try {
    // Process form submission
    console.log('Form submitted:', formData);
    
    $swal.fire({
      title: 'Success!',
      text: 'Vehicle invoice cancellation has been saved successfully.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  } catch (error) {
    console.error('Error submitting form:', error);
    $swal.fire({
      title: 'Error!',
      text: 'An error occurred while saving the vehicle invoice cancellation.',
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
          formData.value[key] = '22/06/2022';
        } else if (key === 'prvCom') {
          formData.value[key] = 'Private';
        } else if (key === 'paymentType') {
          formData.value[key] = 'Cash';
        } else if (key === 'qty') {
          formData.value[key] = '1';
        } else if (key === 'bodyAmount' || key === 'amount' || key === 'dealerMargin' || 
                   key === 'grossAmount' || key === 'discount' || key === 'netAmount' || 
                   key === 'totalGstAmt' || key === 'discGst' || key === 'netAmtIncGst' ||
                   key === 'hpAmount' || key === 'hpCharges' || key === 'hpNetAmt' || 
                   key === 'depositAmount' || key === 'paymentAmount' || key === 'pendingAmount') {
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
    if (key === 'date') {
      formData.value[key] = '22/06/2022';
    } else if (key === 'prvCom') {
      formData.value[key] = 'Private';
    } else if (key === 'paymentType') {
      formData.value[key] = 'Cash';
    } else if (key === 'qty') {
      formData.value[key] = '1';
    } else if (key === 'bodyAmount' || key === 'amount' || key === 'dealerMargin' || 
               key === 'grossAmount' || key === 'discount' || key === 'netAmount' || 
               key === 'totalGstAmt' || key === 'discGst' || key === 'netAmtIncGst' ||
               key === 'hpAmount' || key === 'hpCharges' || key === 'hpNetAmt' || 
               key === 'depositAmount' || key === 'paymentAmount' || key === 'pendingAmount') {
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

const handleChassis = () => {
  $swal.fire({
    title: 'Chassis',
    text: 'Chassis functionality will be implemented.',
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

const handleJV = () => {
  $swal.fire({
    title: 'Journal Voucher',
    text: 'Journal Voucher functionality will be implemented.',
    icon: 'info',
    confirmButtonText: 'OK'
  });
};

const handleVehcRec = () => {
  $swal.fire({
    title: 'Vehicle Record',
    text: 'Vehicle Record functionality will be implemented.',
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
