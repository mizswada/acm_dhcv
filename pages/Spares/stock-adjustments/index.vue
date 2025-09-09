<template>
  <div>
    <LayoutsBreadcrumb />
    <rs-card>
      <template #header>
        <div class="flex">
          <Icon class="mr-2 flex justify-center" name="ic:outline-inventory-2"></Icon>
          Stock Adjustments Spares
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
                  name="adjustmentNo"
                  label="Adjustment No"
                  placeholder="Enter adjustment number"
                />
                <FormKit
                  type="select"
                  name="reason"
                  label="Reason"
                  :options="[
                    { label: 'Excess Stock', value: 'Excess Stock' },
                    { label: 'Shortage', value: 'Shortage' },
                    { label: 'Damaged', value: 'Damaged' },
                    { label: 'Expired', value: 'Expired' },
                    { label: 'Theft', value: 'Theft' },
                    { label: 'Other', value: 'Other' }
                  ]"
                  :value="'Excess Stock'"
                />
              </div>

              <!-- Middle Column -->
              <div class="space-y-4">
                <FormKit
                  type="date"
                  name="adjustmentDate"
                  label="Adjustment Date"
                  :value="new Date().toISOString().split('T')[0]"
                />
                <FormKit
                  type="textarea"
                  name="remarks"
                  label="Remarks"
                  placeholder="Enter remarks"
                  rows="3"
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
                      <th class="border border-gray-300 px-3 py-2 text-left w-1/4">Part No & Name</th>
                      <th class="border border-gray-300 px-3 py-2 text-left">Qty</th>
                      <th class="border border-gray-300 px-3 py-2 text-left">Rate</th>
                      <th class="border border-gray-300 px-3 py-2 text-left">Amount</th>
                      <th class="border border-gray-300 px-3 py-2 text-left w-1/4">Remarks</th>
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
                          :name="`itemDetails.${index}.rate`"
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
                      <td class="border border-gray-300 px-3 py-2">
                        <FormKit
                          type="text"
                          :name="`itemDetails.${index}.remarks`"
                          placeholder="Enter remarks"
                          outer-class="mb-0"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Summary and Action Buttons Section -->
            <div class="flex justify-between items-center pt-6 border-t">
              <!-- Total Field -->
              <div class="flex items-center space-x-4">
                <label class="text-sm font-medium">Total:</label>
                <FormKit
                  type="number"
                  name="total"
                  :value="0.00"
                  step="0.01"
                  outer-class="mb-0 w-32"
                />
              </div>

              <!-- Action Buttons -->
              <div class="flex space-x-4">
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
              </div>
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
  title: "Stock Adjustments",
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

const handleSubmit = async (formData) => {
  try {
    console.log('Form submitted:', formData);
    // Logic to handle form submission
    $swal.fire({
      title: 'Success!',
      text: 'Stock Adjustment saved successfully!',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  } catch (error) {
    console.error('Error submitting form:', error);
    $swal.fire({
      title: 'Error!',
      text: 'Failed to save Stock Adjustment. Please try again.',
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }
};
</script>

<style scoped>
/* Add any additional styles here */
</style>