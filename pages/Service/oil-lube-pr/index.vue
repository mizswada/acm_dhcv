<template>
  <div>
    <rs-card>
      <template #header>
        <div class="flex">
          <Icon class="mr-2 flex justify-center" name="ic:outline-undo"></Icon>
          Oil/Lub Purchase Returns
        </div>
      </template>
      <template #body>
        <div class="space-y-6">
          <FormKit type="form" :actions="false" @submit="handleSubmit">
            <!-- General Return Information Section -->
            <div class="grid grid-cols-2 gap-6 mb-8">
              <!-- Left Column -->
              <div class="space-y-4">
                <div class="grid grid-cols-2 gap-2">
                  <FormKit
                    type="select"
                    name="location1"
                    label="Location"
                    :options="[
                      { label: 'Select Location', value: '' },
                      { label: 'Main Workshop', value: 'main' },
                      { label: 'Branch A', value: 'branch_a' }
                    ]"
                  />
                  <FormKit
                    type="select"
                    name="location2"
                    label="Location"
                    :options="[
                      { label: 'Select Location', value: '' },
                      { label: 'Main Workshop', value: 'main' },
                      { label: 'Branch A', value: 'branch_a' }
                    ]"
                  />
                </div>
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
                    { label: 'Select Payment Type', value: '' },
                    { label: 'Credit', value: 'credit' },
                    { label: 'Cash', value: 'cash' }
                  ]"
                />
                <FormKit
                  type="text"
                  name="vendorRefNo"
                  label="Vendor Ref No"
                  placeholder="Enter vendor reference number"
                />
              </div>

              <!-- Right Column -->
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
                    { label: 'Select Return Mode', value: '' },
                    { label: 'Incorrect Mode', value: 'incorrect' },
                    { label: 'Defective', value: 'defective' },
                    { label: 'Wrong Item', value: 'wrong_item' }
                  ]"
                />
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

            <!-- Item Details Grid Section -->
            <div class="mb-8">
              <h3 class="text-lg font-semibold mb-4">Item Details</h3>
              <div class="overflow-x-auto">
                <table class="w-full border-collapse border border-gray-300">
                  <thead class="bg-gray-100">
                    <tr>
                      <th class="border border-gray-300 px-4 py-2 text-left">Part No & Name</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Qty</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Price</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in itemData" :key="index" class="border-b">
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="text"
                          :name="`partNoName_${index}`"
                          placeholder="Enter part number & name"
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
                          :name="`price_${index}`"
                          placeholder="Price"
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
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Summary Section -->
            <div class="mb-8">
              <div class="flex items-center space-x-4">
                <FormKit
                  type="number"
                  name="returnTotal"
                  label="Return Total"
                  :value="0.00"
                  step="0.01"
                />
                <span class="text-sm text-gray-500">.00</span>
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
  title: "Oil/Lub Purchase Returns",
});

const { $swal } = useNuxtApp();

// Item Details Table Data (5 rows)
const itemData = ref([
  {}, {}, {}, {}, {}
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