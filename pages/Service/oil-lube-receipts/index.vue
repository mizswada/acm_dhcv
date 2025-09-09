<template>
  <div>
    <LayoutsBreadcrumb />
    <rs-card>
      <template #header>
        <div class="flex">
          <Icon class="mr-2 flex justify-center" name="ic:outline-inventory"></Icon>
          Oil/Lubes Receipt
        </div>
      </template>
      <template #body>
        <div class="space-y-6">
          <FormKit type="form" :actions="false" @submit="handleSubmit">
            <!-- General Receipt Information Section -->
            <div class="grid grid-cols-6 gap-4 mb-8">
              <!-- Row 1 -->
              <div>
                <FormKit
                  type="select"
                  name="location"
                  label="Location"
                  :options="[
                    { label: 'Select Location', value: '' },
                    { label: 'Main Workshop', value: 'main' },
                    { label: 'Branch A', value: 'branch_a' }
                  ]"
                />
              </div>
              <div>
                <FormKit
                  type="text"
                  name="purchaseNo"
                  label="Purchase No"
                  placeholder="Enter purchase number"
                />
              </div>
              <div>
                <FormKit
                  type="text"
                  name="party"
                  label="Party"
                  placeholder="Enter party name"
                />
              </div>
              <div>
                <FormKit
                  type="select"
                  name="credit"
                  label="Credit"
                  :options="[
                    { label: 'Select Credit', value: '' },
                    { label: 'Yes', value: 'yes' },
                    { label: 'No', value: 'no' }
                  ]"
                />
              </div>
              <div>
                <FormKit
                  type="date"
                  name="date"
                  label="Date"
                  :value="new Date().toISOString().split('T')[0]"
                />
              </div>
              <div>
                <FormKit
                  type="select"
                  name="oilLubricants"
                  label="Oils/Lubricants"
                  :options="[
                    { label: 'Select Type', value: '' },
                    { label: 'Oil', value: 'oil' },
                    { label: 'Lubricant', value: 'lubricant' }
                  ]"
                />
              </div>

              <!-- Row 2 -->
              <div>
                <FormKit
                  type="text"
                  name="poLocation"
                  label="PO Location"
                  placeholder="Enter PO location"
                />
              </div>
              <div>
                <FormKit
                  type="text"
                  name="vendorDONo"
                  label="Vendor DO No"
                  placeholder="Enter vendor DO number"
                />
              </div>
              <div>
                <FormKit
                  type="text"
                  name="vendorInvoiceNo"
                  label="Vendor Invoice No"
                  placeholder="Enter vendor invoice number"
                />
              </div>
              <div>
                <FormKit
                  type="select"
                  name="freightMode"
                  label="Freight Mode"
                  :options="[
                    { label: 'Select Freight Mode', value: '' },
                    { label: 'Sea', value: 'sea' },
                    { label: 'Air', value: 'air' },
                    { label: 'Road', value: 'road' }
                  ]"
                />
              </div>
              <div>
                <FormKit
                  type="text"
                  name="poNo"
                  label="PO No"
                  placeholder="Enter PO number"
                />
              </div>
              <div>
                <FormKit
                  type="date"
                  name="poDate"
                  label="PO Date"
                />
              </div>

              <!-- Row 3 -->
              <div>
                <FormKit
                  type="date"
                  name="doDate"
                  label="DO Date"
                />
              </div>
              <div>
                <FormKit
                  type="date"
                  name="invDate"
                  label="Inv Date"
                />
              </div>
              <div>
                <FormKit
                  type="number"
                  name="discountPercent"
                  label="Discount %"
                  :value="0.00"
                  step="0.01"
                />
              </div>
              <div class="col-span-3"></div>
            </div>

            <!-- Part Details Section -->
            <div class="mb-8">
              <h3 class="text-lg font-semibold mb-4">Part Details</h3>
              
              <!-- Top Row Input Fields -->
              <div class="grid grid-cols-4 gap-4 mb-4">
                <div class="col-span-2">
                  <FormKit
                    type="text"
                    name="partName"
                    label="Part Name"
                    placeholder="Enter part name"
                  />
                </div>
                <div>
                  <FormKit
                    type="text"
                    name="bin"
                    label="Bin"
                    placeholder="Enter bin"
                  />
                </div>
                <div>
                  <FormKit
                    type="text"
                    name="tag"
                    label="Tag"
                    placeholder="Enter tag"
                  />
                </div>
              </div>

              <!-- Pending Qty Field -->
              <div class="mb-4">
                <FormKit
                  type="number"
                  name="pendingQty"
                  label="Pending Qty"
                  :value="0"
                />
              </div>

              <!-- Part Details Table -->
              <div class="overflow-x-auto">
                <table class="w-full border-collapse border border-gray-300">
                  <thead class="bg-gray-100">
                    <tr>
                      <th class="border border-gray-300 px-4 py-2 text-left">Part No</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Case Qty</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Inv Qty</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Recv</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Recv Date</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Yen Price</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Price</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Disc %</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Net Price</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Amount</th>
                      <th class="border border-gray-300 px-4 py-2 text-left">GST Tax Code & Rate</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">GST Amount</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Amount (Inc. GST)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in partData" :key="index" class="border-b">
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="text"
                          :name="`partNo_${index}`"
                          placeholder="Enter part number"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="number"
                          :name="`caseQty_${index}`"
                          placeholder="Case Qty"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="number"
                          :name="`invQty_${index}`"
                          placeholder="Inv Qty"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="number"
                          :name="`recv_${index}`"
                          placeholder="Recv"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="date"
                          :name="`recvDate_${index}`"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="number"
                          :name="`yenPrice_${index}`"
                          placeholder="Yen Price"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="number"
                          :name="`price_${index}`"
                          placeholder="Price"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="number"
                          :name="`discPercent_${index}`"
                          placeholder="Disc %"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="number"
                          :name="`netPrice_${index}`"
                          placeholder="Net Price"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="number"
                          :name="`amount_${index}`"
                          placeholder="Amount"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="text"
                          :name="`gstTaxCode_${index}`"
                          placeholder="GST Tax Code & Rate"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="number"
                          :name="`gstAmount_${index}`"
                          placeholder="GST Amount"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="number"
                          :name="`amountIncGst_${index}`"
                          placeholder="Amount (Inc. GST)"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- Total Count Field -->
              <div class="mt-4">
                <FormKit
                  type="number"
                  name="totalCount"
                  label="Total Count"
                  :value="0"
                />
              </div>
            </div>

            <!-- Summary and Payment Information Section -->
            <div class="grid grid-cols-3 gap-6 mb-8">
              <!-- Left Column - Payment Information -->
              <div class="space-y-4">
                <FormKit
                  type="number"
                  name="paymentAmt"
                  label="Payment Amt"
                  :value="0.00"
                  step="0.01"
                />
                <FormKit
                  type="text"
                  name="bankCode"
                  label="Bank Code"
                  placeholder="Enter bank code"
                />
                <FormKit
                  type="text"
                  name="chequeNo"
                  label="Cheque No"
                  placeholder="Enter cheque number"
                />
                <FormKit
                  type="date"
                  name="chequeDate"
                  label="Date"
                />
              </div>

              <!-- Middle Column - Tax Information -->
              <div class="space-y-4">
                <FormKit
                  type="number"
                  name="salesTaxPercent"
                  label="Sales Tax %"
                  :value="0.00"
                  step="0.01"
                />
                <FormKit
                  type="number"
                  name="pendingAmt"
                  label="Pending Amt"
                  :value="0.00"
                  step="0.01"
                />
              </div>

              <!-- Right Column - Amount Summary -->
              <div class="space-y-4">
                <FormKit
                  type="number"
                  name="sparesAmount"
                  label="Spares Amount"
                  :value="0.00"
                  step="0.01"
                />
                <FormKit
                  type="number"
                  name="salesTaxAmount"
                  label="Sales Tax Amount"
                  :value="0.00"
                  step="0.01"
                />
                <FormKit
                  type="number"
                  name="netAmount"
                  label="Net Amount"
                  :value="0.00"
                  step="0.01"
                />
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
                variant="warning"
                @click="handleRecv"
              >
                Recv
              </rs-button>
              <rs-button
                variant="secondary"
                @click="handlePayments"
              >
                Payments..
              </rs-button>
              <rs-button
                variant="primary"
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
            </div>
          </FormKit>
        </div>
      </template>
    </rs-card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useNuxtApp } from '#app';

definePageMeta({
  title: "Oil/Lubes Receipt",
});

const { $swal } = useNuxtApp();

// Part Details Table Data (multiple rows)
const partData = ref([
  {}, {}, {}, {}, {}, {}, {}, {}
]);

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
  // Logic to refresh the form
};

const handleRecv = () => {
  // Logic to receive
};

const handlePayments = () => {
  // Logic to handle payments
};

const handlePrint = () => {
  // Logic to print
};

const handleJV = () => {
  // Logic to handle journal voucher
};

const handleSubmit = async (formData) => {
  try {
    // Logic to handle form submission
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
