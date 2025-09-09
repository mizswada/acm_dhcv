<template>
  <div>
    <rs-card>
      <template #header>
        <div class="flex">
          <Icon class="mr-2 flex justify-center" name="ic:outline-description"></Icon>
          Tenders
        </div>
      </template>
      <template #body>
        <div class="space-y-6">
          <FormKit type="form" :actions="false" @submit="handleSubmit">
            <!-- Top Section - Tender Details & Deposit Information -->
            <div class="grid grid-cols-4 gap-4 mb-8">
              <div>
                <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Serial No:</label>
                <input v-model="formData.serialNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter serial number" />
              </div>
              <div>
                <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Customer Code & Name:</label>
                <div class="flex space-x-2">
                  <input v-model="formData.customerCode" type="text" class="flex-1 px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Code" />
                  <input v-model="formData.customerName" type="text" class="flex-1 px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Name" />
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Tender No:</label>
                <input v-model="formData.tenderNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter tender number" />
              </div>
              <div>
                <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Tender Date:</label>
                <input v-model="formData.tenderDate" type="date" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
              </div>
              <div>
                <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Tender Closing Date:</label>
                <input v-model="formData.tenderClosingDate" type="date" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
              </div>
              <div>
                <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Expected Decision Date:</label>
                <input v-model="formData.expectedDecisionDate" type="date" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
              </div>
              <div>
                <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Deposit Amt Required:</label>
                <input v-model="formData.depositAmtRequired" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
              </div>
              <div class="flex items-center space-x-2 pt-6">
                <div class="flex items-center">
                  <input v-model="formData.refundable" type="checkbox" class="mr-2" />
                  <span class="text-sm font-medium">Refundable</span>
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Refund Due Date:</label>
                <input v-model="formData.refundDueDate" type="date" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
              </div>
              <div>
                <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Deposit Mode:</label>
                <select v-model="formData.depositMode" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                  <option value="Cash">Cash</option>
                  <option value="Cheque">Cheque</option>
                  <option value="Bank Transfer">Bank Transfer</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Voucher No:</label>
                <input v-model="formData.voucherNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter voucher number" />
              </div>
              <div>
                <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Rcpt No:</label>
                <input v-model="formData.rcptNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter receipt number" />
              </div>
              <div class="flex items-center space-x-2 pt-6">
                <div class="flex items-center">
                  <input v-model="formData.depositMade" type="checkbox" class="mr-2" />
                  <span class="text-sm font-medium">Deposit Made</span>
                </div>
              </div>
              <div class="flex items-center space-x-2 pt-6">
                <div class="flex items-center">
                  <input v-model="formData.depositClaimed" type="checkbox" class="mr-2" />
                  <span class="text-sm font-medium">Deposit Claimed</span>
                </div>
              </div>
            </div>

            <!-- Remarks Section -->
            <div class="grid grid-cols-2 gap-6 mb-8">
              <div>
                <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Tender Remarks:</label>
                <textarea v-model="formData.tenderRemarks" rows="3" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter tender remarks"></textarea>
              </div>
              <div>
                <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Post Tender Remarks:</label>
                <textarea v-model="formData.postTenderRemarks" rows="3" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter post tender remarks"></textarea>
              </div>
            </div>

            <!-- Model & Body Description Section -->
            <div class="grid grid-cols-2 gap-6 mb-8">
              <div>
                <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Model Name:</label>
                <input v-model="formData.modelName" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter model name" />
              </div>
              <div>
                <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Body Description:</label>
                <input v-model="formData.bodyDescription" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter body description" />
              </div>
            </div>

            <!-- Item Details Table -->
            <div class="space-y-4 mb-8">
              <div class="overflow-x-auto">
                <table class="w-full border-collapse border border-[rgb(var(--border-color))]">
                  <thead>
                    <tr class="bg-gray-50">
                      <th class="border border-[rgb(var(--border-color))] px-3 py-2 text-left text-sm font-medium text-[rgb(var(--text-color))]">Model Code</th>
                      <th class="border border-[rgb(var(--border-color))] px-3 py-2 text-left text-sm font-medium text-[rgb(var(--text-color))]">Body Typ</th>
                      <th class="border border-[rgb(var(--border-color))] px-3 py-2 text-left text-sm font-medium text-[rgb(var(--text-color))]">Qty</th>
                      <th class="border border-[rgb(var(--border-color))] px-3 py-2 text-left text-sm font-medium text-[rgb(var(--text-color))]">Price</th>
                      <th class="border border-[rgb(var(--border-color))] px-3 py-2 text-left text-sm font-medium text-[rgb(var(--text-color))]">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in itemDetails" :key="index">
                      <td class="border border-[rgb(var(--border-color))] px-3 py-2">
                        <div class="flex">
                          <input v-model="item.modelCode" type="text" class="flex-1 px-2 py-1 border border-[rgb(var(--border-color))] rounded-l focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary" placeholder="Model code" />
                          <select class="px-2 py-1 border border-l-0 border-[rgb(var(--border-color))] rounded-r bg-gray-50">
                            <option>▼</option>
                          </select>
                        </div>
                      </td>
                      <td class="border border-[rgb(var(--border-color))] px-3 py-2">
                        <input v-model="item.bodyTyp" type="text" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary" placeholder="Body type" />
                      </td>
                      <td class="border border-[rgb(var(--border-color))] px-3 py-2">
                        <input v-model="item.qty" type="number" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary" placeholder="0" />
                      </td>
                      <td class="border border-[rgb(var(--border-color))] px-3 py-2">
                        <input v-model="item.price" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                      </td>
                      <td class="border border-[rgb(var(--border-color))] px-3 py-2">
                        <input v-model="item.amount" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Bottom Section - Totals and Status -->
            <div class="flex justify-between items-end mb-8">
              <!-- Left Side - Status & Quote Prepared -->
              <div class="flex space-x-6">
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Status:</label>
                  <select v-model="formData.status" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                    <option value="In Process">In Process</option>
                    <option value="Submitted">Submitted</option>
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Quot Prepared:</label>
                  <div class="flex items-center space-x-2">
                    <input v-model="formData.quotPrepared" type="checkbox" class="mr-2" />
                    <input v-model="formData.quotPreparedValue" type="text" class="px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="No" />
                  </div>
                </div>
              </div>

              <!-- Right Side - Totals -->
              <div class="flex space-x-6">
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Total:</label>
                  <input v-model="totals.total" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Additional Charges:</label>
                  <input v-model="totals.additionalCharges" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Total Amount:</label>
                  <input v-model="totals.totalAmount" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                </div>
              </div>
            </div>

            <!-- Action Buttons - Bottom Center -->
            <div class="flex justify-center space-x-4 pt-6 pb-4 border-t border-[rgb(var(--border-color))]">
              <rs-button variant="secondary-outline" @click="handleCancel">Cancel</rs-button>
              <rs-button variant="info" @click="handleRefresh">Refresh</rs-button>
              <rs-button variant="success" btn-type="submit">Save</rs-button>
              <rs-button variant="success" @click="handleColors">Colors</rs-button>
              <rs-button variant="success" @click="handleFollowup">Followup..</rs-button>
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
  title: "Tenders",
});

const { $swal } = useNuxtApp();

// Form data
const formData = ref({
  serialNo: '',
  customerCode: '',
  customerName: '',
  tenderNo: '',
  tenderDate: '',
  tenderClosingDate: '',
  expectedDecisionDate: '',
  depositAmtRequired: '0.00',
  refundable: false,
  refundDueDate: '',
  depositMode: 'Cash',
  voucherNo: '',
  rcptNo: '',
  depositMade: false,
  depositClaimed: false,
  tenderRemarks: '',
  postTenderRemarks: '',
  modelName: '',
  bodyDescription: '',
  status: 'In Process',
  quotPrepared: false,
  quotPreparedValue: 'No'
});

// Item details data
const itemDetails = ref([
  { modelCode: '', bodyTyp: '', qty: '', price: '', amount: '' },
  { modelCode: '', bodyTyp: '', qty: '', price: '', amount: '' },
  { modelCode: '', bodyTyp: '', qty: '', price: '', amount: '' },
  { modelCode: '', bodyTyp: '', qty: '', price: '', amount: '' }
]);

// Totals data
const totals = ref({
  total: '0.00',
  additionalCharges: '0.00',
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
        if (typeof formData.value[key] === 'boolean') {
          formData.value[key] = false;
        } else {
          formData.value[key] = '';
        }
      });
      formData.value.depositMode = 'Cash';
      formData.value.status = 'In Process';
      formData.value.quotPreparedValue = 'No';
      
      itemDetails.value.forEach(item => {
        Object.keys(item).forEach(key => {
          item[key] = '';
        });
      });
      
      totals.value.total = '0.00';
      totals.value.additionalCharges = '0.00';
      totals.value.totalAmount = '0.00';
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

const handleColors = () => {
  $swal.fire({
    title: 'Colors',
    text: 'Colors action triggered!',
    icon: 'info',
    confirmButtonText: 'OK'
  }).then(() => {
    // Logic to handle Colors action
  });
};

const handleFollowup = () => {
  $swal.fire({
    title: 'Followup',
    text: 'Followup action triggered!',
    icon: 'info',
    confirmButtonText: 'OK'
  }).then(() => {
    // Logic to handle Followup action
  });
};

const handleSubmit = async (formData) => {
  try {
    // Validate that at least one item detail has data
    const hasItemData = itemDetails.value.some(item => 
      item.modelCode || item.bodyTyp || item.qty || item.price || item.amount
    );

    if (!hasItemData) {
      $swal.fire({
        title: 'Validation Error',
        text: 'Please enter at least one item detail!',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      return;
    }

    $swal.fire({
      title: 'Success!',
      text: 'Tender saved successfully!',
      icon: 'success',
      confirmButtonText: 'OK'
    }).then(() => {
      // Logic to handle successful save
    });
  } catch (error) {
    console.error('Error submitting form:', error);
    $swal.fire({
      title: 'Error!',
      text: 'An error occurred while saving the tender.',
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
      case 'o':
        event.preventDefault();
        handleColors();
        break;
      case 'f':
        event.preventDefault();
        handleFollowup();
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
