<template>
  <div>
    <LayoutsBreadcrumb />
    <rs-card>
      <template #header>
        <div class="flex">
          <Icon class="mr-2 flex justify-center" name="ic:outline-shopping-cart"></Icon>
          Miscellaneous POs
        </div>
      </template>
      <template #body>
        <div class="space-y-6">
          <FormKit type="form" :actions="false" @submit="handleSubmit">
            <!-- Top Section - PO Details -->
            <div class="grid grid-cols-2 gap-6 mb-8">
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
                  name="poNo"
                  label="PO No"
                  placeholder="Enter PO number"
                />
                <div class="grid grid-cols-2 gap-4">
                  <FormKit
                    type="date"
                    name="date"
                    label="Date"
                    :value="new Date().toISOString().split('T')[0]"
                  />
                  <FormKit
                    type="text"
                    name="prNo"
                    label="PR No"
                    placeholder="Enter PR number"
                  />
                </div>
                <FormKit
                  type="text"
                  name="department"
                  label="Department"
                  placeholder="Enter department"
                />
                <FormKit
                  type="text"
                  name="party"
                  label="Party"
                  placeholder="Enter party"
                />
                <div class="flex space-x-4">
                  <div class="flex items-center space-x-2">
                    <FormKit
                      type="checkbox"
                      name="cso"
                      label="CSO"
                    />
                  </div>
                  <div class="flex items-center space-x-2">
                    <FormKit
                      type="checkbox"
                      name="received"
                      label="Received"
                    />
                  </div>
                  <div class="flex items-center space-x-2">
                    <FormKit
                      type="checkbox"
                      name="cancelled"
                      label="Cancelled"
                    />
                  </div>
                </div>
                <FormKit
                  type="date"
                  name="deliveryDate"
                  label="Delivery date"
                  placeholder="Enter delivery date"
                />
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
                  type="date"
                  name="creationDate"
                  label="Creation Date"
                  :value="new Date().toISOString().split('T')[0]"
                />
                <FormKit
                  type="text"
                  name="modifiedBy"
                  label="Modified By"
                  placeholder="Enter modified by"
                />
                <FormKit
                  type="date"
                  name="modifyDate"
                  label="Modify Date"
                  :value="new Date().toISOString().split('T')[0]"
                />
                <FormKit
                  type="text"
                  name="currency"
                  label="Currency"
                  placeholder="Enter currency"
                />
                <FormKit
                  type="text"
                  name="deliveryAddress"
                  label="Delivery Address"
                  placeholder="Enter delivery address"
                />
              </div>
            </div>

            <!-- Middle Section - Line Items Grid -->
            <div class="mb-8">
              <h3 class="text-lg font-semibold mb-4">Line Items</h3>
              <div class="overflow-x-auto">
                <table class="w-full border-collapse border border-gray-300">
                  <thead class="bg-gray-100">
                    <tr>
                      <th class="border border-gray-300 px-2 py-2 text-center">S No</th>
                      <th class="border border-gray-300 px-2 py-2 text-left">Description</th>
                      <th class="border border-gray-300 px-2 py-2 text-center">Qty</th>
                      <th class="border border-gray-300 px-2 py-2 text-center">Rate</th>
                      <th class="border border-gray-300 px-2 py-2 text-center">Amount (Ex. GST)</th>
                      <th class="border border-gray-300 px-2 py-2 text-center">Oth Curr Amt</th>
                      <th class="border border-gray-300 px-2 py-2 text-center">GST Tax Code & Rate (%)</th>
                      <th class="border border-gray-300 px-2 py-2 text-center">GST Amount</th>
                      <th class="border border-gray-300 px-2 py-2 text-center">Amount (Inc. GST)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in lineItems" :key="index" class="border-b">
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="text"
                          :name="`sNo_${index}`"
                          placeholder="S No"
                          outer-class="mb-0 w-16"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="text"
                          :name="`description_${index}`"
                          placeholder="Description"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="number"
                          :name="`qty_${index}`"
                          placeholder="Qty"
                          step="0.01"
                          outer-class="mb-0 w-20"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="number"
                          :name="`rate_${index}`"
                          placeholder="Rate"
                          step="0.01"
                          outer-class="mb-0 w-20"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="number"
                          :name="`amountExGst_${index}`"
                          placeholder="Amount (Ex. GST)"
                          step="0.01"
                          outer-class="mb-0 w-24"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="number"
                          :name="`othCurrAmt_${index}`"
                          placeholder="Oth Curr Amt"
                          step="0.01"
                          outer-class="mb-0 w-24"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="text"
                          :name="`gstCodeRate_${index}`"
                          placeholder="Code & Rate (%)"
                          outer-class="mb-0 w-24"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="number"
                          :name="`gstAmount_${index}`"
                          placeholder="GST Amount"
                          step="0.01"
                          outer-class="mb-0 w-20"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="number"
                          :name="`amountIncGst_${index}`"
                          placeholder="Amount (Inc. GST)"
                          step="0.01"
                          outer-class="mb-0 w-24"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Bottom Section - Totals and Actions -->
            <div class="grid grid-cols-2 gap-6 mb-8">
              <!-- Left Side - Additional Charges and Audit Info -->
              <div class="space-y-4">
                <FormKit
                  type="number"
                  name="additionalCharges"
                  label="Additional Charges"
                  step="0.01"
                  placeholder="Enter additional charges"
                />
                <FormKit
                  type="text"
                  name="createdByBottom"
                  label="Created By"
                  placeholder="Enter created by"
                />
                <FormKit
                  type="text"
                  name="modifiedByBottom"
                  label="Modified By"
                  placeholder="Enter modified by"
                />
              </div>

              <!-- Right Side - Totals -->
              <div class="space-y-4">
                <FormKit
                  type="number"
                  name="totalAmount"
                  label="Total Amount"
                  step="0.01"
                  placeholder="Enter total amount"
                />
                <div class="flex items-center space-x-2">
                  <span class="text-sm text-gray-500">.00</span>
                </div>
                <FormKit
                  type="number"
                  name="netAmount"
                  label="Net Amount"
                  step="0.01"
                  placeholder="Enter net amount"
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
                variant="info"
                @click="handleAddress"
              >
                Address
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
import { ref } from 'vue';
import { useNuxtApp } from '#app';

definePageMeta({
  title: "Miscellaneous POs",
});

const { $swal } = useNuxtApp();

// Line Items Table Data (4 rows)
const lineItems = ref([
  {}, {}, {}, {}
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

const handleAddress = () => {
  // Logic to handle address
};

const handlePrint = () => {
  // Logic to print
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