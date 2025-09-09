<template>
  <div>
    <rs-card>
      <template #header>
        <div class="flex">
          <Icon class="mr-2 flex justify-center" name="ic:outline-undo"></Icon>
          Spare Purchase Returns
        </div>
      </template>
      <template #body>
        <div class="space-y-6">
          <FormKit type="form" :actions="false" @submit="handleSubmit">
            <!-- General Information Section -->
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
                  name="party"
                  label="Party"
                  placeholder="Enter party name"
                />
                <FormKit
                  type="select"
                  name="paymentType"
                  label="Payment Type"
                  :options="[
                    { label: 'Credit', value: 'Credit' },
                    { label: 'Cash', value: 'Cash' },
                    { label: 'Bank Transfer', value: 'Bank Transfer' },
                    { label: 'Cheque', value: 'Cheque' }
                  ]"
                  :value="'Credit'"
                />
                <FormKit
                  type="text"
                  name="vendorRefNo"
                  label="Vendor Ref No"
                  placeholder="Enter vendor reference number"
                />
              </div>

              <!-- Middle Column -->
              <div class="space-y-4">
                <FormKit
                  type="date"
                  name="returnDate"
                  label="Return Date"
                  :value="new Date().toISOString().split('T')[0]"
                />
                <FormKit
                  type="text"
                  name="purchaseNo"
                  label="Purchase No"
                  placeholder="Enter purchase number"
                />
                <FormKit
                  type="select"
                  name="returnMode"
                  label="Return Mode"
                  :options="[
                    { label: 'Incorrect Mode', value: 'Incorrect Mode' },
                    { label: 'Defective', value: 'Defective' },
                    { label: 'Wrong Item', value: 'Wrong Item' },
                    { label: 'Over Supply', value: 'Over Supply' }
                  ]"
                  :value="'Incorrect Mode'"
                />
              </div>

              <!-- Right Column -->
              <div class="space-y-4">
                <FormKit
                  type="text"
                  name="createdBy"
                  label="Created By"
                  placeholder="Enter creator name"
                />
                <FormKit
                  type="text"
                  name="modifiedBy"
                  label="Modified By"
                  placeholder="Enter modifier name"
                />
              </div>
            </div>

            <!-- Item Details Table -->
            <div class="mb-8">
              <h3 class="text-lg font-semibold mb-4">Item Details</h3>
              <div class="overflow-x-auto">
                <table class="w-full border border-gray-300">
                  <thead class="bg-gray-100">
                    <tr>
                      <th class="border border-gray-300 px-3 py-2 text-left w-1/2">Part No & Name</th>
                      <th class="border border-gray-300 px-3 py-2 text-left">Qty</th>
                      <th class="border border-gray-300 px-3 py-2 text-left">Price</th>
                      <th class="border border-gray-300 px-3 py-2 text-left">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in itemDetails" :key="index">
                      <td class="border border-gray-300 px-3 py-2">
                        <FormKit
                          type="text"
                          :name="`itemDetails.${index}.partNoAndName`"
                          placeholder="Enter part number and name"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-3 py-2">
                        <FormKit
                          type="number"
                          :name="`itemDetails.${index}.qty`"
                          placeholder="0"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-3 py-2">
                        <FormKit
                          type="number"
                          :name="`itemDetails.${index}.price`"
                          placeholder="0.00"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-3 py-2">
                        <FormKit
                          type="number"
                          :name="`itemDetails.${index}.amount`"
                          placeholder="0.00"
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
            <div class="flex justify-end mb-8">
              <div class="w-64">
                <FormKit
                  type="number"
                  name="returnTotal"
                  label="Return Total"
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
                variant="info"
                @click="handlePrint"
              >
                Print
              </rs-button>
              <rs-button
                variant="secondary"
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
  title: "Spares Purchase Returns",
});

const { $swal } = useNuxtApp();

// Initialize item details with 5 empty rows
const itemDetails = ref(Array(5).fill({}));

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
  window.location.reload();
};

const handlePrint = () => {
  // Logic to handle print action
  console.log('Print action triggered');
};

const handleJV = () => {
  // Logic to handle JV action
  console.log('JV action triggered');
};

const handleSubmit = async (formData) => {
  try {
    console.log('Form submitted:', formData);
    // Logic to handle form submission
    $swal.fire({
      title: 'Success!',
      text: 'Spare Purchase Return saved successfully!',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  } catch (error) {
    console.error('Error submitting form:', error);
    $swal.fire({
      title: 'Error!',
      text: 'Failed to save Spare Purchase Return. Please try again.',
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }
};
</script>

<style scoped>
/* Add any additional styles here */
</style>