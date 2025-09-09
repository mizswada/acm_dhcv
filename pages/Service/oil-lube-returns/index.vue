<template>
  <div>
    <LayoutsBreadcrumb />
    <rs-card>
      <template #header>
        <div class="flex">
          <Icon class="mr-2 flex justify-center" name="ic:outline-undo"></Icon>
          Oil/Lubes Returns
        </div>
      </template>
      <template #body>
        <div class="space-y-6">
          <FormKit type="form" :actions="false" @submit="handleSubmit">
            <!-- Header Section - Return Details (3 columns) -->
            <div class="grid grid-cols-3 gap-6 mb-8">
              <!-- Left Column -->
              <div class="space-y-4">
                <FormKit
                  type="text"
                  name="location"
                  label="Location"
                  placeholder="Enter location"
                />
                <FormKit
                  type="text"
                  name="returnNo"
                  label="Return No"
                  placeholder="Enter return number"
                />
                <FormKit
                  type="text"
                  name="requisitionNo"
                  label="Requisition No"
                  placeholder="Enter requisition number"
                />
                <FormKit
                  type="text"
                  name="jobNo"
                  label="Job No"
                  placeholder="Enter job number"
                />
                <FormKit
                  type="text"
                  name="regnNo"
                  label="Regn No"
                  placeholder="Enter registration number"
                />
                <div class="flex items-center space-x-2">
                  <FormKit
                    type="number"
                    name="sparesAmt"
                    label="Spares Amt"
                    :value="0.00"
                    step="0.01"
                    outer-class="flex-1"
                  />
                  <span class="text-sm text-gray-500">.00</span>
                </div>
                <FormKit
                  type="select"
                  name="incorrectModel"
                  label="Incorrect Model"
                  :options="[
                    { label: 'Select Model', value: '' },
                    { label: 'Model A', value: 'model_a' },
                    { label: 'Model B', value: 'model_b' }
                  ]"
                />
              </div>

              <!-- Middle Column -->
              <div class="space-y-4">
                <FormKit
                  type="date"
                  name="date1"
                  label="Date"
                  :value="new Date().toISOString().split('T')[0]"
                />
                <FormKit
                  type="date"
                  name="date2"
                  label="Date"
                  placeholder="Enter date"
                />
                <FormKit
                  type="date"
                  name="date3"
                  label="Date"
                  placeholder="Enter date"
                />
                <FormKit
                  type="time"
                  name="time"
                  label="Time"
                  placeholder="Enter time"
                />
                <FormKit
                  type="select"
                  name="regular"
                  label="Regular"
                  :options="[
                    { label: 'Select Type', value: '' },
                    { label: 'Regular', value: 'regular' },
                    { label: 'Express', value: 'express' }
                  ]"
                />
                <FormKit
                  type="text"
                  name="modelCode"
                  label="Model Code"
                  placeholder="Enter model code"
                />
                <div class="flex items-center space-x-2">
                  <FormKit
                    type="number"
                    name="olAmount"
                    label="O/L Amount"
                    :value="0.00"
                    step="0.01"
                    outer-class="flex-1"
                  />
                  <span class="text-sm text-gray-500">.00</span>
                </div>
              </div>

              <!-- Right Column -->
              <div class="space-y-4">
                <FormKit
                  type="text"
                  name="createdBy"
                  label="Created By"
                  placeholder="Enter created by"
                />
                <FormKit
                  type="text"
                  name="modifiedBy"
                  label="Modified By"
                  placeholder="Enter modified by"
                />
              </div>
            </div>

            <!-- Middle Section - Part Details Table -->
            <div class="mb-8">
              <h3 class="text-lg font-semibold mb-4">Part Details</h3>
              <div class="overflow-x-auto">
                <table class="w-full border-collapse border border-gray-300">
                  <thead class="bg-gray-100">
                    <tr>
                      <th class="border border-gray-300 px-4 py-2 text-left">Part No & Name</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Bin</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Qty Ret</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Iss Qty</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Unit Price</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Total Price</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Cost Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in partData" :key="index" class="border-b">
                      <td class="border border-gray-300 px-2 py-2">
                        <div class="flex">
                          <FormKit
                            type="text"
                            :name="`partNoName_${index}`"
                            placeholder="Enter part number & name"
                            outer-class="flex-1 mb-0"
                          />
                          <Icon name="ic:outline-keyboard-arrow-down" class="ml-2 text-gray-400" />
                        </div>
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="text"
                          :name="`bin_${index}`"
                          placeholder="Bin"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="number"
                          :name="`qtyRet_${index}`"
                          placeholder="Qty Ret"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="number"
                          :name="`issQty_${index}`"
                          placeholder="Iss Qty"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="number"
                          :name="`unitPrice_${index}`"
                          placeholder="Unit Price"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="number"
                          :name="`totalPrice_${index}`"
                          placeholder="Total Price"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="number"
                          :name="`costPrice_${index}`"
                          placeholder="Cost Price"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <!-- Summary Fields Below Table -->
              <div class="flex items-center space-x-4 mt-4">
                <div class="flex items-center space-x-2">
                  <FormKit
                    type="number"
                    name="summaryAmount1"
                    :value="0.00"
                    step="0.01"
                    outer-class="w-32"
                  />
                  <span class="text-sm text-gray-500">.00</span>
                </div>
                <FormKit
                  type="number"
                  name="summaryAmount2"
                  placeholder="Enter amount"
                  step="0.01"
                  outer-class="w-32"
                />
              </div>
            </div>

            <!-- Footer Section - Action Buttons -->
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
              <rs-button
                variant="info"
                @click="handleEnquiry"
              >
                Enquiry
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
  title: "Oil/Lubes Returns",
});

const { $swal } = useNuxtApp();

// Part Details Table Data (6 rows)
const partData = ref([
  {}, {}, {}, {}, {}, {}
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

const handleEnquiry = () => {
  // Logic to handle enquiry
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