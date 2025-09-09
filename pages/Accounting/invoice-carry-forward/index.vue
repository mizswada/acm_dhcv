<template>
  <div>
    <LayoutsBreadcrumb />
    <rs-card>
      <template #header>
        <div class="flex">
          <Icon class="mr-2 flex justify-center" name="ic:outline-receipt-long"></Icon>
          Invoice Carry Forward
        </div>
      </template>
      <template #body>
        <div class="space-y-6">
          <FormKit type="form" :actions="false" @submit="handleSubmit">
            <!-- Top Section - Header Fields -->
            <div class="grid grid-cols-2 gap-8 mb-8">
              <!-- Left Column -->
              <div class="space-y-6">
                <div class="flex items-center space-x-4">
                  <span class="text-sm font-medium w-24">Location Code:</span>
                  <FormKit
                    type="text"
                    name="locationCode"
                    placeholder="Enter location code"
                    outer-class="flex-1 mb-0"
                  />
                </div>
                <div class="flex items-center space-x-4">
                  <span class="text-sm font-medium w-24">S No.:</span>
                  <FormKit
                    type="text"
                    name="sNo"
                    placeholder="Enter S No."
                    outer-class="flex-1 mb-0"
                  />
                </div>
                <div class="flex items-center space-x-4">
                  <span class="text-sm font-medium w-24">Party Code:</span>
                  <FormKit
                    type="text"
                    name="partyCode"
                    placeholder="Enter party code"
                    outer-class="flex-1 mb-0"
                  />
                </div>
              </div>

              <!-- Right Column -->
              <div class="space-y-6">
                <div class="flex items-center space-x-4">
                  <FormKit
                    type="text"
                    name="rightField1"
                    placeholder="Enter value"
                    outer-class="flex-1 mb-0"
                  />
                </div>
                <div class="flex items-center space-x-4">
                  <span class="text-sm font-medium w-24">ACCU Amount:</span>
                  <FormKit
                    type="number"
                    name="accuAmount"
                    placeholder="Enter amount"
                    step="0.01"
                    outer-class="flex-1 mb-0"
                  />
                  <span class="text-sm text-gray-500">.00</span>
                </div>
                <div class="flex items-center space-x-4">
                  <FormKit
                    type="text"
                    name="rightField3"
                    placeholder="Enter value"
                    outer-class="flex-1 mb-0"
                  />
                </div>
              </div>
            </div>

            <!-- Additional Fields Row -->
            <div class="flex justify-end space-x-6 mb-8">
              <div class="flex items-center space-x-2">
                <span class="text-sm font-medium">Invoice No:</span>
                <FormKit
                  type="text"
                  name="invoiceNo"
                  placeholder="Enter invoice number"
                  outer-class="w-48 mb-0"
                />
              </div>
              <div class="flex items-center space-x-2">
                <span class="text-sm font-medium">Invoice Type:</span>
                <FormKit
                  type="text"
                  name="invoiceType"
                  placeholder="Enter invoice type"
                  outer-class="w-48 mb-0"
                />
              </div>
            </div>

            <!-- Tabular Data Entry Grid Section -->
            <div class="mb-8">
              <h3 class="text-lg font-semibold mb-4">Invoice Entries</h3>
              <div class="overflow-x-auto">
                <table class="w-full border-collapse border border-gray-300">
                  <thead class="bg-gray-100">
                    <tr>
                      <th class="border border-gray-300 px-3 py-2 text-left">Invoice Date</th>
                      <th class="border border-gray-300 px-3 py-2 text-left">Posting Date</th>
                      <th class="border border-gray-300 px-3 py-2 text-left">Invoice No.</th>
                      <th class="border border-gray-300 px-3 py-2 text-left">Supp CN No.</th>
                      <th class="border border-gray-300 px-3 py-2 text-left">Due Date</th>
                      <th class="border border-gray-300 px-3 py-2 text-left">Invoice Amount</th>
                      <th class="border border-gray-300 px-3 py-2 text-left">Dr/Cr Pending Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in invoiceData" :key="index" class="border-b">
                      <td class="border border-gray-300 px-3 py-2">
                        <FormKit
                          type="date"
                          :name="`invoiceDate_${index}`"
                          placeholder="Invoice Date"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-3 py-2">
                        <FormKit
                          type="date"
                          :name="`postingDate_${index}`"
                          placeholder="Posting Date"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-3 py-2">
                        <FormKit
                          type="text"
                          :name="`invoiceNo_${index}`"
                          placeholder="Invoice No."
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-3 py-2">
                        <FormKit
                          type="text"
                          :name="`suppCnNo_${index}`"
                          placeholder="Supp CN No."
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-3 py-2">
                        <FormKit
                          type="date"
                          :name="`dueDate_${index}`"
                          placeholder="Due Date"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-3 py-2">
                        <FormKit
                          type="number"
                          :name="`invoiceAmount_${index}`"
                          placeholder="Invoice Amount"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-3 py-2">
                        <FormKit
                          type="number"
                          :name="`drCrPendingAmount_${index}`"
                          placeholder="Dr/Cr Pending Amount"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Summary Section -->
            <div class="mb-8">
              <div class="flex items-center space-x-4">
                <span class="text-lg font-medium">Total Amount:</span>
                <FormKit
                  type="number"
                  name="totalAmount"
                  placeholder="0.00"
                  step="0.01"
                  :value="calculatedTotal"
                  outer-class="w-48 mb-0"
                />
                <span class="text-sm text-gray-500">.00</span>
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
                variant="primary"
                @click="handlePrint"
              >
                Print
              </rs-button>
            </div>
          </FormKit>
        </div>
      </template>
    </rs-card>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useNuxtApp } from '#app';

definePageMeta({
  title: "Invoice Carry Forward",
});

const { $swal } = useNuxtApp();

// Invoice Table Data (5 rows)
const invoiceData = ref([
  { invoiceDate: '', postingDate: '', invoiceNo: '', suppCnNo: '', dueDate: '', invoiceAmount: 0, drCrPendingAmount: 0 },
  { invoiceDate: '', postingDate: '', invoiceNo: '', suppCnNo: '', dueDate: '', invoiceAmount: 0, drCrPendingAmount: 0 },
  { invoiceDate: '', postingDate: '', invoiceNo: '', suppCnNo: '', dueDate: '', invoiceAmount: 0, drCrPendingAmount: 0 },
  { invoiceDate: '', postingDate: '', invoiceNo: '', suppCnNo: '', dueDate: '', invoiceAmount: 0, drCrPendingAmount: 0 },
  { invoiceDate: '', postingDate: '', invoiceNo: '', suppCnNo: '', dueDate: '', invoiceAmount: 0, drCrPendingAmount: 0 }
]);

// Calculate total amount
const calculatedTotal = computed(() => {
  return invoiceData.value.reduce((sum, item) => sum + (parseFloat(item.invoiceAmount) || 0), 0).toFixed(2);
});

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
      // Logic to handle cancel action
    }
  });
};

const handleRefresh = () => {
  // Reset form data
  invoiceData.value = invoiceData.value.map(() => ({
    invoiceDate: '',
    postingDate: '',
    invoiceNo: '',
    suppCnNo: '',
    dueDate: '',
    invoiceAmount: 0,
    drCrPendingAmount: 0
  }));
};

const handlePrint = () => {
  // Logic to print
};

const handleSubmit = async (formData) => {
  try {
    // Logic to handle form submission
    console.log('Form submitted:', formData);
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};
</script>

<style scoped>
/* Add any additional styles here */
</style>