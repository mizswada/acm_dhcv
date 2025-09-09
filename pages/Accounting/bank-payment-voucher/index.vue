<template>
  <div>
    <LayoutsBreadcrumb />
    <rs-card>
      <template #header>
        <div class="flex">
          <Icon class="mr-2 flex justify-center" name="ic:outline-receipt"></Icon>
          Bank Payment Vouchers
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
                  type="textarea"
                  name="particulars"
                  label="Particulars"
                  placeholder="Enter particulars"
                  rows="2"
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
                <FormKit
                  type="date"
                  name="voucherDate"
                  label="Voucher Date"
                  :value="new Date().toISOString().split('T')[0]"
                />
                <rs-button
                  variant="primary"
                  size="sm"
                  @click="handleRIMV"
                >
                  RIMV
                </rs-button>
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

            <!-- Full Width Fields -->
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
                      <th class="border border-gray-300 px-2 py-2 text-center">Dr/Cr</th>
                      <th class="border border-gray-300 px-2 py-2 text-center" colspan="3">GST Tax</th>
                    </tr>
                    <tr>
                      <th colspan="7" class="border border-gray-300 px-2 py-1"></th>
                      <th class="border border-gray-300 px-2 py-1"></th>
                      <th class="border border-gray-300 px-2 py-2 text-center">Code & Rate (%)</th>
                      <th class="border border-gray-300 px-2 py-2 text-center">Amount</th>
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
                          placeholder="Amount"
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

            <!-- Bottom Section - Action Buttons (3 rows) -->
            <div class="space-y-4 pt-6 border-t">
              <!-- Row 1 -->
              <div class="flex flex-wrap gap-2">
                <rs-button variant="secondary-outline" @click="handleCancel">Cancel</rs-button>
                <rs-button variant="info" @click="handleRefresh">Refresh</rs-button>
                <rs-button variant="success" btn-type="submit">Save</rs-button>
                <rs-button variant="primary" @click="handlePrint">Print</rs-button>
                <rs-button variant="info" @click="handleRemAdvice">Rem Advice</rs-button>
                <rs-button variant="info" @click="handleAdvances">Advances</rs-button>
                <rs-button variant="info" @click="handleAsset">Asset</rs-button>
                <rs-button variant="info" @click="handleSpAgnt">Sp Agnt..</rs-button>
                <rs-button variant="info" @click="handleSIComm">SI Comm..</rs-button>
                <rs-button variant="info" @click="handleCKDPur">CKD Pur..</rs-button>
              </div>

              <!-- Row 2 -->
              <div class="flex flex-wrap gap-2">
                <rs-button variant="info" @click="handleFreight">Freight</rs-button>
                <rs-button variant="info" @click="handleInsurance">Insurance</rs-button>
                <rs-button variant="info" @click="handleAssembly">Assembly</rs-button>
                <rs-button variant="info" @click="handleAcsry">Acsry..</rs-button>
                <rs-button variant="info" @click="handleBodyBld">Body Bld..</rs-button>
                <rs-button variant="info" @click="handleInsSales">Ins Sales</rs-button>
                <rs-button variant="info" @click="handleLocCont">Loc Cont..</rs-button>
                <rs-button variant="info" @click="handleExtLab">Ext Lab..</rs-button>
                <rs-button variant="info" @click="handleSpPur">Sp Pur..</rs-button>
                <rs-button variant="info" @click="handleTelPh">Tel Ph..</rs-button>
              </div>

              <!-- Row 3 -->
              <div class="flex flex-wrap gap-2">
                <rs-button variant="info" @click="handleStaff">Staff</rs-button>
                <rs-button variant="info" @click="handleTravel">Travel</rs-button>
                <rs-button variant="info" @click="handleRemarks">Remarks</rs-button>
                <rs-button variant="info" @click="handleAdvice">Advice</rs-button>
                <rs-button variant="info" @click="handleSalesTax">Sales Tax..</rs-button>
                <rs-button variant="info" @click="handleExcise">Excise..</rs-button>
                <rs-button variant="info" @click="handleName">Name</rs-button>
                <rs-button variant="info" @click="handleLCDisc">LC Disc..</rs-button>
                <rs-button variant="info" @click="handleBRVAlloc">BRV Alloc</rs-button>
                <rs-button variant="info" @click="handleRefund">Refund</rs-button>
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
  title: "Bank Payment Vouchers",
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

const handleRIMV = () => {
  // Logic to handle RIMV
};

const handlePrint = () => {
  // Logic to print
};

// Row 1 button handlers
const handleRemAdvice = () => { /* Logic */ };
const handleAdvances = () => { /* Logic */ };
const handleAsset = () => { /* Logic */ };
const handleSpAgnt = () => { /* Logic */ };
const handleSIComm = () => { /* Logic */ };
const handleCKDPur = () => { /* Logic */ };

// Row 2 button handlers
const handleFreight = () => { /* Logic */ };
const handleInsurance = () => { /* Logic */ };
const handleAssembly = () => { /* Logic */ };
const handleAcsry = () => { /* Logic */ };
const handleBodyBld = () => { /* Logic */ };
const handleInsSales = () => { /* Logic */ };
const handleLocCont = () => { /* Logic */ };
const handleExtLab = () => { /* Logic */ };
const handleSpPur = () => { /* Logic */ };
const handleTelPh = () => { /* Logic */ };

// Row 3 button handlers
const handleStaff = () => { /* Logic */ };
const handleTravel = () => { /* Logic */ };
const handleRemarks = () => { /* Logic */ };
const handleAdvice = () => { /* Logic */ };
const handleSalesTax = () => { /* Logic */ };
const handleExcise = () => { /* Logic */ };
const handleName = () => { /* Logic */ };
const handleLCDisc = () => { /* Logic */ };
const handleBRVAlloc = () => { /* Logic */ };
const handleRefund = () => { /* Logic */ };

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
