<template>
  <div>
    <rs-card>
      <template #header>
        <div class="flex">
          <Icon class="mr-2 flex justify-center" name="ic:outline-account-balance-wallet"></Icon>
          Cash Clearings
        </div>
      </template>
      <template #body>
        <div class="space-y-6">
          <FormKit type="form" :actions="false" @submit="handleSubmit">
            <!-- Header Section - Input Fields -->
            <div class="grid grid-cols-4 gap-6 mb-8">
              <!-- Left-aligned fields -->
              <div class="space-y-4">
                <div class="flex items-center space-x-2">
                  <span class="text-sm font-medium w-20">Location:</span>
                  <FormKit
                    type="text"
                    name="location1"
                    placeholder="Location 1"
                    outer-class="flex-1 mb-0"
                  />
                  <FormKit
                    type="text"
                    name="location2"
                    placeholder="Location 2"
                    outer-class="flex-1 mb-0"
                  />
                </div>
                <div class="flex items-center space-x-2">
                  <span class="text-sm font-medium w-20">Clearing No:</span>
                  <FormKit
                    type="text"
                    name="clearingNo"
                    placeholder="Enter clearing number"
                    outer-class="flex-1 mb-0"
                  />
                </div>
                <div class="flex items-center space-x-2">
                  <span class="text-sm font-medium w-20">Check Date:</span>
                  <FormKit
                    type="date"
                    name="checkDate"
                    placeholder="Enter check date"
                    outer-class="flex-1 mb-0"
                  />
                </div>
              </div>

              <!-- Right-aligned field -->
              <div class="flex justify-end">
                <div class="flex items-center space-x-2">
                  <span class="text-sm font-medium">Date:</span>
                  <FormKit
                    type="date"
                    name="date"
                    :value="new Date().toISOString().split('T')[0]"
                    outer-class="mb-0"
                  />
                </div>
              </div>
            </div>

            <!-- Tabular Data Entry Section -->
            <div class="mb-8">
              <h3 class="text-lg font-semibold mb-4">Cash Clearing Entries</h3>
              <div class="overflow-x-auto">
                <table class="w-full border-collapse border border-gray-300">
                  <thead class="bg-gray-100">
                    <tr>
                      <th class="border border-gray-300 px-3 py-2 text-left w-1/4">Voucher</th>
                      <th class="border border-gray-300 px-3 py-2 text-left w-1/3">Particulars</th>
                      <th class="border border-gray-300 px-3 py-2 text-left w-1/4">Amount</th>
                      <th class="border border-gray-300 px-3 py-2 text-center w-16">Bank In</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in clearingData" :key="index" class="border-b">
                      <td class="border border-gray-300 px-3 py-2">
                        <FormKit
                          type="text"
                          :name="`voucher_${index}`"
                          placeholder="Enter voucher"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-3 py-2">
                        <FormKit
                          type="text"
                          :name="`particulars_${index}`"
                          placeholder="Enter particulars"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-3 py-2">
                        <div class="flex items-center space-x-2">
                          <FormKit
                            type="number"
                            :name="`amount_${index}`"
                            placeholder="Enter amount"
                            step="0.01"
                            outer-class="flex-1 mb-0"
                          />
                          <Icon name="ic:outline-keyboard-arrow-down" class="text-gray-400" />
                        </div>
                      </td>
                      <td class="border border-gray-300 px-3 py-2 text-center">
                        <FormKit
                          type="checkbox"
                          :name="`bankIn_${index}`"
                          :value="index === 0"
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
                <span class="text-lg font-medium">Total:</span>
                <FormKit
                  type="number"
                  name="total"
                  placeholder="0.00"
                  step="0.01"
                  :value="calculatedTotal"
                  outer-class="w-48 mb-0"
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
  title: "Cash Clearings",
});

const { $swal } = useNuxtApp();

// Cash Clearing Table Data (5 rows)
const clearingData = ref([
  { voucher: '', particulars: '', amount: 0, bankIn: true },
  { voucher: '', particulars: '', amount: 0, bankIn: false },
  { voucher: '', particulars: '', amount: 0, bankIn: false },
  { voucher: '', particulars: '', amount: 0, bankIn: false },
  { voucher: '', particulars: '', amount: 0, bankIn: false }
]);

// Calculate total amount
const calculatedTotal = computed(() => {
  return clearingData.value.reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0).toFixed(2);
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
  clearingData.value = clearingData.value.map(() => ({
    voucher: '',
    particulars: '',
    amount: 0,
    bankIn: false
  }));
  // Set first row bankIn to true
  clearingData.value[0].bankIn = true;
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