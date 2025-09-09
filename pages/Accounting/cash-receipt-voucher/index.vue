<template>
  <div>
    <LayoutsBreadcrumb />
    <rs-card>
      <template #header>
        <div class="flex">
          <Icon class="mr-2 flex justify-center" name="ic:outline-receipt"></Icon>
          Cash Receipt Vouchers
        </div>
      </template>
      <template #body>
        <div class="space-y-6">
          <FormKit type="form" :actions="false" @submit="handleSubmit">
            <!-- Top Section - General Voucher Information -->
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
                  name="voucherNo"
                  label="Voucher No"
                  placeholder="Enter voucher number"
                />
                <FormKit
                  type="textarea"
                  name="particulars"
                  label="Particulars"
                  placeholder="Enter particulars"
                  rows="3"
                />
                <div class="flex items-center space-x-2">
                  <FormKit
                    type="number"
                    name="cashAmount"
                    label="Cash Amount"
                    step="0.01"
                    outer-class="flex-1"
                  />
                  <span class="text-sm text-gray-500">.00</span>
                  <span class="text-sm text-gray-500">Dr</span>
                </div>
              </div>

              <!-- Right Column -->
              <div class="space-y-4">
                <FormKit
                  type="date"
                  name="voucherDate"
                  label="Voucher Date"
                  :value="new Date().toISOString().split('T')[0]"
                />
              </div>
            </div>

            <!-- Full Width Fields -->
            <div class="space-y-4 mb-8">
              <FormKit
                type="text"
                name="deptName"
                label="Dept Name"
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

            <!-- Middle Section - Account Details Grid -->
            <div class="mb-8">
              <h3 class="text-lg font-semibold mb-4">Account Details</h3>
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
                      <th class="border border-gray-300 px-2 py-2 text-center">Dr Cr</th>
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
                        <FormKit
                          type="select"
                          :name="`subType_${index}`"
                          :options="[
                            { label: 'Select Type', value: '' },
                            { label: 'Type A', value: 'type_a' },
                            { label: 'Type B', value: 'type_b' }
                          ]"
                          outer-class="mb-0"
                        />
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

            <!-- Bottom Section - Action Buttons (2 rows) -->
            <div class="space-y-4 pt-6 border-t">
              <!-- Row 1 -->
              <div class="flex flex-wrap gap-2">
                <rs-button variant="secondary-outline" @click="handleCancel">Cancel</rs-button>
                <rs-button variant="info" @click="handleRefresh">Refresh</rs-button>
                <rs-button variant="success" btn-type="submit">Save</rs-button>
                <rs-button variant="primary" @click="handlePrint">Print</rs-button>
                <rs-button variant="info" @click="handlePrintCV">Print CV</rs-button>
                <rs-button variant="info" @click="handleTravel">Travel</rs-button>
                <rs-button variant="info" @click="handleAdvances">Advances</rs-button>
                <rs-button variant="info" @click="handleAsset">Asset</rs-button>
                <rs-button variant="info" @click="handleName">Name</rs-button>
              </div>

              <!-- Row 2 -->
              <div class="flex flex-wrap gap-2">
                <rs-button variant="info" @click="handleVehcInv">Vehc Inv..</rs-button>
                <rs-button variant="info" @click="handleGIRec">GI Rec..</rs-button>
                <rs-button variant="info" @click="handleHPInv">HP Inv..</rs-button>
                <rs-button variant="info" @click="handleSprRec">Spr Rec..</rs-button>
                <rs-button variant="info" @click="handleJobRec">Job Rec..</rs-button>
                <rs-button variant="info" @click="handleInsrRec">Insr Rec..</rs-button>
                <rs-button variant="info" @click="handleAdvice">Advice</rs-button>
                <rs-button variant="info" @click="handleBYORec">BYO Rec</rs-button>
                <rs-button variant="info" @click="handleRemarks">Remarks</rs-button>
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
  title: "Cash Receipt Vouchers",
});

const { $swal } = useNuxtApp();

// Account Details Table Data (4 rows)
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


const handlePrint = () => {
  // Logic to print
};

// Row 1 button handlers
const handlePrintCV = () => { /* Logic */ };
const handleTravel = () => { /* Logic */ };
const handleAdvances = () => { /* Logic */ };
const handleAsset = () => { /* Logic */ };
const handleName = () => { /* Logic */ };

// Row 2 button handlers
const handleVehcInv = () => { /* Logic */ };
const handleGIRec = () => { /* Logic */ };
const handleHPInv = () => { /* Logic */ };
const handleSprRec = () => { /* Logic */ };
const handleJobRec = () => { /* Logic */ };
const handleInsrRec = () => { /* Logic */ };
const handleAdvice = () => { /* Logic */ };
const handleBYORec = () => { /* Logic */ };
const handleRemarks = () => { /* Logic */ };

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