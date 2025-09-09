<template>
  <div>
    <rs-card>
      <template #header>
        <div class="flex">
          <Icon class="mr-2 flex justify-center" name="ic:outline-receipt"></Icon>
          Bank Payment Advice
        </div>
      </template>
      <template #body>
        <div class="space-y-6">
          <FormKit type="form" :actions="false" @submit="handleSubmit">
            <!-- Top Section - Voucher Details -->
            <div class="grid grid-cols-2 gap-6 mb-8">
              <!-- Left Column -->
              <div class="space-y-4">
                <FormKit
                  type="text"
                  name="locationCode"
                  label="Location Code"
                  placeholder="Enter location code"
                />
                <FormKit
                  type="text"
                  name="adviceNo"
                  label="Advice No"
                  placeholder="Enter advice number"
                />
                <FormKit
                  type="text"
                  name="voucherNo"
                  label="Voucher No"
                  placeholder="Enter voucher number"
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
                  type="text"
                  name="particulars"
                  label="Particulars"
                  placeholder="Enter particulars"
                />
                <div class="flex items-center space-x-2">
                  <FormKit
                    type="number"
                    name="bankAmount"
                    label="Bank Amount"
                    step="0.01"
                    outer-class="flex-1"
                  />
                  <span class="text-sm text-gray-500">.00 Dr</span>
                  <FormKit
                    type="text"
                    name="bankAmount2"
                    placeholder="Enter amount"
                    outer-class="flex-1"
                  />
                </div>
              </div>

              <!-- Right Column -->
              <div class="space-y-4">
                <div class="flex items-center space-x-2">
                  <FormKit
                    type="date"
                    name="voucherDate"
                    label="Voucher Date"
                    :value="new Date().toISOString().split('T')[0]"
                    outer-class="flex-1"
                  />
                  <rs-button
                    variant="primary"
                    size="sm"
                    @click="handleRIMV"
                  >
                    RIMV
                  </rs-button>
                </div>
                <FormKit
                  type="date"
                  name="dated"
                  label="Dated"
                  placeholder="Enter date"
                />
                <div class="flex items-center space-x-2">
                  <FormKit
                    type="checkbox"
                    name="cancelled"
                    label="Cancelled"
                  />
                </div>
              </div>
            </div>

            <!-- Middle Section - Department, Location, and GST -->
            <div class="space-y-4 mb-8">
              <FormKit
                type="text"
                name="departmentName"
                label="Department Name"
                placeholder="Enter department name"
              />
              <FormKit
                type="text"
                name="locationName"
                label="Location Name"
                placeholder="Enter location name"
              />
              <FormKit
                type="text"
                name="gstAccountCode"
                label="GST Account Code"
                placeholder="Enter GST account code"
              />
            </div>

            <!-- Account Entries Grid Section -->
            <div class="mb-8">
              <h3 class="text-lg font-semibold mb-4">Account Entries</h3>
              <div class="overflow-x-auto">
                <table class="w-full border-collapse border border-gray-300">
                  <thead class="bg-gray-100">
                    <tr>
                      <th class="border border-gray-300 px-2 py-2 text-left">Account Code</th>
                      <th class="border border-gray-300 px-2 py-2 text-center">Sub Type</th>
                      <th class="border border-gray-300 px-2 py-2 text-left">Account Name</th>
                      <th class="border border-gray-300 px-2 py-2 text-center">Loc</th>
                      <th class="border border-gray-300 px-2 py-2 text-center">Dept</th>
                      <th class="border border-gray-300 px-2 py-2 text-left">Particulars</th>
                      <th class="border border-gray-300 px-2 py-2 text-center">Ex. GST Amount</th>
                      <th class="border border-gray-300 px-2 py-2 text-center">Dr/Cr</th>
                      <th class="border border-gray-300 px-2 py-2 text-center">GST Tax Code & Rate (%)</th>
                      <th class="border border-gray-300 px-2 py-2 text-center">GST Amount</th>
                      <th class="border border-gray-300 px-2 py-2 text-center">Incl. GST Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in accountData" :key="index" class="border-b">
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="text"
                          :name="`accountCode_${index}`"
                          placeholder="Account Code"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <div class="flex">
                          <FormKit
                            type="text"
                            :name="`subType_${index}`"
                            placeholder="Sub Type"
                            outer-class="flex-1 mb-0"
                          />
                          <Icon name="ic:outline-keyboard-arrow-down" class="ml-2 text-gray-400" />
                        </div>
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="text"
                          :name="`accountName_${index}`"
                          placeholder="Account Name"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="text"
                          :name="`loc_${index}`"
                          placeholder="Loc"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="text"
                          :name="`dept_${index}`"
                          placeholder="Dept"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="text"
                          :name="`particulars_${index}`"
                          placeholder="Particulars"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="number"
                          :name="`exGstAmount_${index}`"
                          placeholder="Ex. GST Amount"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <div class="flex space-x-2">
                          <FormKit
                            type="radio"
                            :name="`drCr_${index}`"
                            value="dr"
                            label="Dr"
                            outer-class="mb-0"
                          />
                          <FormKit
                            type="radio"
                            :name="`drCr_${index}`"
                            value="cr"
                            label="Cr"
                            outer-class="mb-0"
                          />
                        </div>
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="text"
                          :name="`gstCodeRate_${index}`"
                          placeholder="Code & Rate (%)"
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
                          :name="`inclGstAmount_${index}`"
                          placeholder="Incl. GST Amount"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex justify-center space-x-4 pt-6 border-t">
              <rs-button
                variant="info"
                @click="handleRefresh"
              >
                Refresh
              </rs-button>
              <rs-button
                variant="secondary-outline"
                @click="handleCancel"
              >
                Cancel
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
                @click="handleRemAdvice"
              >
                Rem Advice
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
  title: "Bank Payment Advice",
});

const { $swal } = useNuxtApp();

// Account Entries Table Data (4 rows)
const accountData = ref([
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

const handleRIMV = () => {
  // Logic to handle RIMV
};

const handlePrint = () => {
  // Logic to print
};

const handleRemAdvice = () => {
  // Logic to handle Rem Advice
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