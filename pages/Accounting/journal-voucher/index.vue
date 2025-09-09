<template>
  <div>
    <LayoutsBreadcrumb />
    <rs-card>
      <template #header>
        <div class="flex">
          <Icon class="mr-2 flex justify-center" name="ic:outline-receipt"></Icon>
          Journal Vouchers
        </div>
      </template>
      <template #body>
        <div class="space-y-6">
          <FormKit type="form" :actions="false" @submit="handleSubmit">
            <!-- Header Section - General Voucher Information -->
            <div class="space-y-4 mb-8">
              <!-- Row 1 -->
              <div class="grid grid-cols-3 gap-4">
                <FormKit
                  type="text"
                  name="location"
                  label="Location"
                  placeholder="Enter location"
                />
                <FormKit
                  type="date"
                  name="voucherDate"
                  label="Voucher Date"
                  :value="new Date().toISOString().split('T')[0]"
                />
                <FormKit
                  type="text"
                  name="dept"
                  label="Dept"
                  placeholder="Enter department"
                />
              </div>

              <!-- Row 2 -->
              <div class="grid grid-cols-3 gap-4">
                <FormKit
                  type="text"
                  name="voucherNo"
                  label="Voucher No"
                  placeholder="Enter voucher number"
                />
                <FormKit
                  type="text"
                  name="jvType"
                  label="JV Type"
                  :value="'M'"
                />
                <FormKit
                  type="text"
                  name="manualJvSNo"
                  label="Manual JV SNo"
                  placeholder="Enter manual JV serial number"
                />
              </div>

              <!-- Row 3 -->
              <div class="grid grid-cols-3 gap-4">
                <FormKit
                  type="text"
                  name="jvRefNo"
                  label="JV Ref No"
                  placeholder="Enter JV reference number"
                />
                <FormKit
                  type="select"
                  name="paymentType"
                  label="Payment Type"
                  :options="[
                    { label: 'Select Payment Type', value: '' },
                    { label: 'Cash', value: 'cash' },
                    { label: 'Credit', value: 'credit' },
                    { label: 'Bank', value: 'bank' }
                  ]"
                />
                <FormKit
                  type="text"
                  name="invoiceNo"
                  label="Invoice No"
                  placeholder="Enter invoice number"
                />
              </div>

              <!-- Row 4 -->
              <div class="grid grid-cols-2 gap-4">
                <FormKit
                  type="select"
                  name="invoiceType"
                  label="Invoice Type"
                  :options="[
                    { label: 'Select Invoice Type', value: '' },
                    { label: 'Sales', value: 'sales' },
                    { label: 'Purchase', value: 'purchase' },
                    { label: 'Service', value: 'service' }
                  ]"
                />
                <FormKit
                  type="text"
                  name="gstAccountCode"
                  label="GST Account Code"
                  placeholder="Enter GST account code"
                />
              </div>
            </div>

            <!-- Account Details Grid Section -->
            <div class="mb-8">
              <h3 class="text-lg font-semibold mb-4">Account Details</h3>
              <div class="overflow-x-auto">
                <table class="w-full border-collapse border border-gray-300">
                  <thead class="bg-gray-100">
                    <tr>
                      <th class="border border-gray-300 px-2 py-2 text-left">Account Code</th>
                      <th class="border border-gray-300 px-2 py-2 text-center">Sub Type</th>
                      <th class="border border-gray-300 px-2 py-2 text-center">Loc</th>
                      <th class="border border-gray-300 px-2 py-2 text-center">Dept</th>
                      <th class="border border-gray-300 px-2 py-2 text-left">Account Name</th>
                      <th class="border border-gray-300 px-2 py-2 text-left">Particulars</th>
                      <th class="border border-gray-300 px-2 py-2 text-center">Amount (Ex. GST)</th>
                      <th class="border border-gray-300 px-2 py-2 text-center">Dr/Cr</th>
                      <th class="border border-gray-300 px-2 py-2 text-center">GST Tax Code & Rate (%)</th>
                      <th class="border border-gray-300 px-2 py-2 text-center">GST Amount</th>
                      <th class="border border-gray-300 px-2 py-2 text-center">Amount (Inc. GST)</th>
                      <th class="border border-gray-300 px-2 py-2 text-center">GST Only</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in accountData" :key="index" class="border-b">
                      <td class="border border-gray-300 px-2 py-2">
                        <div class="flex">
                          <FormKit
                            type="text"
                            :name="`accountCode_${index}`"
                            placeholder="Account Code"
                            outer-class="flex-1 mb-0"
                          />
                          <Icon name="ic:outline-keyboard-arrow-down" class="ml-2 text-gray-400" />
                        </div>
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
                          :name="`accountName_${index}`"
                          placeholder="Account Name"
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
                          :name="`amountExGst_${index}`"
                          placeholder="Amount (Ex. GST)"
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
                          :name="`amountIncGst_${index}`"
                          placeholder="Amount (Inc. GST)"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="checkbox"
                          :name="`gstOnly_${index}`"
                          label=""
                          outer-class="mb-0"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Debit/Credit Totals Section -->
            <div class="mb-8">
              <div class="grid grid-cols-2 gap-4">
                <FormKit
                  type="number"
                  name="debitAmount"
                  label="Debit Amount"
                  :value="0.00"
                  step="0.01"
                />
                <FormKit
                  type="number"
                  name="creditAmount"
                  label="Credit Amount"
                  :value="0.00"
                  step="0.01"
                />
              </div>
            </div>

            <!-- Action Buttons Section -->
            <div class="space-y-4 pt-6 border-t">
              <!-- General Actions Row -->
              <div class="flex flex-wrap gap-2">
                <rs-button variant="secondary-outline" @click="handleCancel">Cancel</rs-button>
                <rs-button variant="info" @click="handleRefresh">Refresh</rs-button>
                <rs-button variant="success" btn-type="submit">Save</rs-button>
                <rs-button variant="primary" @click="handlePrint">Print</rs-button>
              </div>

              <!-- Specific Actions Rows -->
              <div class="flex flex-wrap gap-2">
                <rs-button variant="info" @click="handleAdvances">Advances</rs-button>
                <rs-button variant="info" @click="handleAsset">Asset</rs-button>
                <rs-button variant="info" @click="handleElec">Elec..</rs-button>
                <rs-button variant="info" @click="handleWater">Water..</rs-button>
                <rs-button variant="info" @click="handleTel">Tel..</rs-button>
                <rs-button variant="info" @click="handleSpAgent">Sp Agent</rs-button>
                <rs-button variant="info" @click="handleFreight">Freight</rs-button>
                <rs-button variant="info" @click="handleInsurance">Insurance</rs-button>
                <rs-button variant="info" @click="handleAssembly">Assembly</rs-button>
                <rs-button variant="info" @click="handleAcsry">Acsry..</rs-button>
                <rs-button variant="info" @click="handleBodyBld">Body Bld..</rs-button>
                <rs-button variant="info" @click="handleLocCont">Loc Cont</rs-button>
                <rs-button variant="info" @click="handleCKDPur">CKD Pur..</rs-button>
                <rs-button variant="info" @click="handleSpPur">Sp Pur..</rs-button>
                <rs-button variant="info" @click="handleVehcInv">Vehc Inv..</rs-button>
                <rs-button variant="info" @click="handleSprRec">Spr Rec..</rs-button>
                <rs-button variant="info" @click="handleJobRec">Job Rec..</rs-button>
                <rs-button variant="info" @click="handleSpClm">Sp Clm...</rs-button>
                <rs-button variant="info" @click="handleCKDClm">CKD Clm...</rs-button>
                <rs-button variant="info" @click="handleSpExt">Sp Ext..</rs-button>
                <rs-button variant="info" @click="handleRemarks">Remarks</rs-button>
                <rs-button variant="info" @click="handleLCDisc">LC Disc..</rs-button>
                <rs-button variant="info" @click="handleLCChg">LC Chg..</rs-button>
                <rs-button variant="info" @click="handleSprAlloc">Spr Alloc..</rs-button>
                <rs-button variant="info" @click="handleHPInv">HP Inv..</rs-button>
                <rs-button variant="info" @click="handleName">Name</rs-button>
                <rs-button variant="info" @click="handleBVORec">BVO Rec..</rs-button>
                <rs-button variant="info" @click="handleGIRec">GI Rec..</rs-button>
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
  title: "Journal Vouchers",
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

// Specific action button handlers
const handleAdvances = () => { /* Logic */ };
const handleAsset = () => { /* Logic */ };
const handleElec = () => { /* Logic */ };
const handleWater = () => { /* Logic */ };
const handleTel = () => { /* Logic */ };
const handleSpAgent = () => { /* Logic */ };
const handleFreight = () => { /* Logic */ };
const handleInsurance = () => { /* Logic */ };
const handleAssembly = () => { /* Logic */ };
const handleAcsry = () => { /* Logic */ };
const handleBodyBld = () => { /* Logic */ };
const handleLocCont = () => { /* Logic */ };
const handleCKDPur = () => { /* Logic */ };
const handleSpPur = () => { /* Logic */ };
const handleVehcInv = () => { /* Logic */ };
const handleSprRec = () => { /* Logic */ };
const handleJobRec = () => { /* Logic */ };
const handleSpClm = () => { /* Logic */ };
const handleCKDClm = () => { /* Logic */ };
const handleSpExt = () => { /* Logic */ };
const handleRemarks = () => { /* Logic */ };
const handleLCDisc = () => { /* Logic */ };
const handleLCChg = () => { /* Logic */ };
const handleSprAlloc = () => { /* Logic */ };
const handleHPInv = () => { /* Logic */ };
const handleName = () => { /* Logic */ };
const handleBVORec = () => { /* Logic */ };
const handleGIRec = () => { /* Logic */ };

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
