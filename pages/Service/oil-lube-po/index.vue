<template>
  <div>
    <rs-card>
      <template #header>
        <div class="flex">
          <Icon class="mr-2 flex justify-center" name="ic:outline-shopping-cart"></Icon>
          Oil/Lubes POs
        </div>
      </template>
      <template #body>
        <div class="space-y-6">
          <FormKit type="form" :actions="false" @submit="handleSubmit">
            <!-- Top Section - PO Details and Audit Trail -->
            <div class="grid grid-cols-3 gap-6 mb-8">
              <!-- Left Column - PO Details -->
              <div class="space-y-4">
                <div class="flex items-center space-x-4">
                  <FormKit
                    type="select"
                    name="poType"
                    label="PO Type"
                    :options="[
                      { label: 'Select PO Type', value: '' },
                      { label: 'Oil/Lubricant', value: 'oil_lubricant' },
                      { label: 'Spares', value: 'spares' },
                      { label: 'Accessories', value: 'accessories' }
                    ]"
                  />
                </div>
                <div class="flex items-center space-x-4">
                  <FormKit
                    type="checkbox"
                    name="invoiced"
                    label="Invoiced"
                  />
                  <FormKit
                    type="checkbox"
                    name="cancelled"
                    label="Cancelled"
                  />
                </div>
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
                <FormKit
                  type="text"
                  name="poNo"
                  label="PO No"
                  placeholder="Enter PO number"
                />
                <FormKit
                  type="text"
                  name="vendor"
                  label="Vendor"
                  placeholder="Enter vendor name"
                />
                <FormKit
                  type="date"
                  name="deliveryDate"
                  label="Delivery Date"
                />
                <FormKit
                  type="number"
                  name="discountPercent"
                  label="Discount %"
                  :value="0.00"
                  step="0.01"
                />
                <FormKit
                  type="number"
                  name="packingListNo"
                  label="Packing List No"
                  :value="0"
                />
                <FormKit
                  type="text"
                  name="orderAckNo"
                  label="Order Ack No"
                  placeholder="Enter order acknowledgment number"
                />
                <FormKit
                  type="text"
                  name="attention"
                  label="Attention"
                  placeholder="Enter attention"
                />
                <FormKit
                  type="text"
                  name="partName"
                  label="Part Name"
                  placeholder="Enter part name"
                />
              </div>

              <!-- Middle Column - Additional Details -->
              <div class="space-y-4">
                <FormKit
                  type="text"
                  name="prNo"
                  label="PR No"
                  placeholder="Enter PR number"
                />
                <FormKit
                  type="text"
                  name="prefix"
                  label="Prefix"
                  placeholder="Enter prefix"
                />
                <FormKit
                  type="date"
                  name="date"
                  label="Date"
                  :value="new Date().toISOString().split('T')[0]"
                />
                <FormKit
                  type="text"
                  name="paymentTerms"
                  label="Payment Terms"
                  placeholder="Enter payment terms"
                />
                <FormKit
                  type="select"
                  name="freightMode"
                  label="Freight Mode"
                  :options="[
                    { label: 'Select Freight Mode', value: '' },
                    { label: 'Air', value: 'air' },
                    { label: 'Sea', value: 'sea' },
                    { label: 'Road', value: 'road' }
                  ]"
                />
                <FormKit
                  type="date"
                  name="packingListDate"
                  label="Packing List Date"
                />
                <FormKit
                  type="date"
                  name="orderAckDate"
                  label="Order Ack Date"
                />
                <FormKit
                  type="textarea"
                  name="remarks"
                  label="Remarks"
                  placeholder="Enter remarks"
                  rows="3"
                />
              </div>

              <!-- Right Column - Audit Trail -->
              <div class="space-y-4">
                <FormKit
                  type="text"
                  name="createdBy1"
                  label="Created by"
                  placeholder="Enter created by"
                />
                <FormKit
                  type="text"
                  name="modifiedBy1"
                  label="Modified by"
                  placeholder="Enter modified by"
                />
                <FormKit
                  type="text"
                  name="createdBy2"
                  label="Created by"
                  placeholder="Enter created by"
                />
                <FormKit
                  type="text"
                  name="modifiedBy2"
                  label="Modified by"
                  placeholder="Enter modified by"
                />
              </div>
            </div>

            <!-- Middle Section - Line Item Table -->
            <div class="mb-8">
              <h3 class="text-lg font-semibold mb-4">Line Items</h3>
              <div class="overflow-x-auto">
                <table class="w-full border-collapse border border-gray-300">
                  <thead class="bg-gray-100">
                    <tr>
                      <th class="border border-gray-300 px-4 py-2 text-left">Part No</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Qty</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">RM Price</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Yen Price</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Disc %</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">RM Net Price</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Yen Net Price</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">RM Amount</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Yen Amount</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Canc</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Pnd</th>
                      <th class="border border-gray-300 px-4 py-2 text-left">GST Tax Code & Rate</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">GST Amount</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Amount (Inc. GST)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in lineItemData" :key="index" class="border-b">
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
                          :name="`qty_${index}`"
                          placeholder="Qty"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="number"
                          :name="`rmPrice_${index}`"
                          placeholder="RM Price"
                          step="0.01"
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
                          :name="`discPercent_${index}`"
                          placeholder="Disc %"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="number"
                          :name="`rmNetPrice_${index}`"
                          placeholder="RM Net Price"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="number"
                          :name="`yenNetPrice_${index}`"
                          placeholder="Yen Net Price"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="number"
                          :name="`rmAmount_${index}`"
                          placeholder="RM Amount"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="number"
                          :name="`yenAmount_${index}`"
                          placeholder="Yen Amount"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2 text-center">
                        <FormKit
                          type="checkbox"
                          :name="`canc_${index}`"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2 text-center">
                        <FormKit
                          type="checkbox"
                          :name="`pnd_${index}`"
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
            </div>

            <!-- Bottom Section - Summary and Actions -->
            <div class="grid grid-cols-3 gap-6 mb-8">
              <!-- Left Column - Summary Fields -->
              <div class="space-y-4">
                <div class="flex items-center space-x-4">
                  <FormKit
                    type="number"
                    name="salesTaxPercent"
                    label="Sales Tax"
                    :value="0.00"
                    step="0.01"
                  />
                  <span class="text-sm">%</span>
                </div>
                <FormKit
                  type="number"
                  name="salesTaxAmt"
                  label="Sales Tax Amt"
                  :value="0.00"
                  step="0.01"
                />
              </div>

              <!-- Middle Column - Amount Fields -->
              <div class="space-y-4">
                <FormKit
                  type="number"
                  name="sparesAmount"
                  label="Spares Amount"
                  :value="0.00"
                  step="0.01"
                />
              </div>

              <!-- Right Column - Net Amount -->
              <div class="space-y-4">
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
            <div class="flex justify-center space-x-4 pt-6 border-t">
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
              <rs-button
                variant="warning"
                @click="handleGenerate"
              >
                Generate
              </rs-button>
              <rs-button
                variant="secondary"
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
import { ref } from 'vue';
import { useNuxtApp } from '#app';

definePageMeta({
  title: "Oil/Lubes POs",
});

const { $swal } = useNuxtApp();

// Line Item Table Data (multiple rows)
const lineItemData = ref([
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

const handlePrint = () => {
  // Logic to print
};

const handleGenerate = () => {
  // Logic to generate
};

const handleEnquiry = () => {
  // Logic to enquiry
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
