<template> 
    <div>
    <LayoutsBreadcrumb />
    <rs-card>
      <template #header>
        <div class="flex">
          <Icon class="mr-2 flex justify-center" name="ic:outline-receipt"></Icon>
          Service Invoices
        </div>
      </template>
      <template #body>
        <div class="space-y-6">
          <FormKit type="form" :actions="false" @submit="handleSubmit">
            <!-- General Details Section -->
            <div class="grid grid-cols-6 gap-4 mb-8">
              <!-- Row 1 -->
              <div class="col-span-2">
                <FormKit
                  type="select"
                  name="location"
                  label="Location"
                  :options="[
                    { label: 'Select Location', value: '' },
                    { label: 'Main Workshop', value: 'main' },
                    { label: 'Branch A', value: 'branch_a' }
                  ]"
                />
              </div>
              <div>
                <FormKit
                  type="text"
                  name="invoiceNo"
                  label="Invoice No"
                  placeholder="Enter invoice number"
                />
              </div>
              <div>
                <FormKit
                  type="text"
                  name="party"
                  label="Party"
                  placeholder="Enter party name"
                />
              </div>
              <div>
                <FormKit
                  type="text"
                  name="campaign"
                  label="Campaign"
                  placeholder="Enter campaign"
                />
              </div>
              <div>
                <FormKit
                  type="text"
                  name="creditLimitOvr"
                  label="Credit Limit Ovr"
                  placeholder="Enter credit limit override"
                />
              </div>

              <!-- Row 2 -->
              <div>
                <FormKit
                  type="date"
                  name="date"
                  label="Date"
                  :value="new Date().toISOString().split('T')[0]"
                />
              </div>
              <div>
                <FormKit
                  type="select"
                  name="jobClass"
                  label="Job Class"
                  :options="[
                    { label: 'Select Job Class', value: '' },
                    { label: 'Internal', value: 'internal' },
                    { label: 'External', value: 'external' }
                  ]"
                />
              </div>
              <div>
                <FormKit
                  type="text"
                  name="poNo"
                  label="PO No"
                  placeholder="Enter PO number"
                />
              </div>
              <div>
                <FormKit
                  type="text"
                  name="option"
                  label="Option"
                  placeholder="Enter option"
                />
              </div>
              <div>
                <FormKit
                  type="select"
                  name="regular"
                  label="Regular"
                  :options="[
                    { label: 'Select Type', value: '' },
                    { label: 'Regular', value: 'regular' },
                    { label: 'Emergency', value: 'emergency' }
                  ]"
                />
              </div>
              <div>
                <FormKit
                  type="text"
                  name="jobNo"
                  label="Job No"
                  placeholder="Enter job number"
                />
              </div>

              <!-- Row 3 -->
              <div>
                <FormKit
                  type="text"
                  name="jobDate"
                  label="Job Date"
                  placeholder="Enter job date"
                />
              </div>
              <div>
                <FormKit
                  type="text"
                  name="currBalance"
                  label="Curr Balance"
                  placeholder="Enter current balance"
                />
              </div>
              <div>
                <div class="flex items-center space-x-4 pt-6">
                  <div class="flex items-center space-x-2">
                    <FormKit
                      type="radio"
                      name="drCr"
                      value="dr"
                      label="Dr"
                    />
                  </div>
                  <div class="flex items-center space-x-2">
                    <FormKit
                      type="radio"
                      name="drCr"
                      value="cr"
                      label="Cr"
                    />
                  </div>
                </div>
              </div>
              <div>
                <FormKit
                  type="text"
                  name="gatePassNo"
                  label="Gate Pass No"
                  placeholder="Enter gate pass number"
                />
              </div>
              <div>
                <FormKit
                  type="select"
                  name="payment"
                  label="Payment"
                  :options="[
                    { label: 'Select Payment', value: '' },
                    { label: 'Cash', value: 'cash' },
                    { label: 'Credit', value: 'credit' }
                  ]"
                />
              </div>
              <div>
                <FormKit
                  type="select"
                  name="miCode"
                  label="MI Code"
                  :options="[
                    { label: 'Select MI Code', value: '' },
                    { label: '45201', value: '45201' },
                    { label: '45202', value: '45202' }
                  ]"
                />
              </div>
            </div>

            <!-- Financial Breakdown Section -->
            <div class="mb-8">
              <h3 class="text-lg font-semibold mb-4">Cash/Credit</h3>
              <div class="overflow-x-auto">
                <table class="w-full border-collapse border border-gray-300">
                  <thead class="bg-gray-100">
                    <tr>
                      <th class="border border-gray-300 px-4 py-2 text-left">Line Items</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Cash/Credit</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">GST</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Dealers</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">GST</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Warranty</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">GST</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Internal</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">GST</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in financialItems" :key="index">
                      <td class="border border-gray-300 px-4 py-2 font-medium">{{ item.label }}</td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          v-if="item.showCashCredit"
                          type="number"
                          :name="`cashCredit_${item.key}`"
                          :value="0.00"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          v-if="item.showCashCredit"
                          type="number"
                          :name="`cashCreditGst_${item.key}`"
                          :value="0.00"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          v-if="item.showDealers"
                          type="number"
                          :name="`dealers_${item.key}`"
                          :value="0.00"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          v-if="item.showDealers"
                          type="number"
                          :name="`dealersGst_${item.key}`"
                          :value="0.00"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          v-if="item.showWarranty"
                          type="number"
                          :name="`warranty_${item.key}`"
                          :value="0.00"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          v-if="item.showWarranty"
                          type="number"
                          :name="`warrantyGst_${item.key}`"
                          :value="0.00"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          v-if="item.showInternal"
                          type="number"
                          :name="`internal_${item.key}`"
                          :value="0.00"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          v-if="item.showInternal"
                          type="number"
                          :name="`internalGst_${item.key}`"
                          :value="0.00"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Summary and Payment Details Section -->
            <div class="grid grid-cols-2 gap-6 mb-8">
              <!-- Left Column - Summary Totals -->
              <div class="space-y-4">
                <h4 class="text-lg font-semibold">Summary</h4>
                <FormKit
                  type="number"
                  name="roundOff"
                  label="Round Off"
                  :value="0.00"
                  step="0.01"
                />
                <FormKit
                  type="number"
                  name="netAmount"
                  label="Net Amount"
                  :value="0.00"
                  step="0.01"
                />
                <FormKit
                  type="number"
                  name="paymentAmount"
                  label="Payment Amount"
                  :value="0.00"
                  step="0.01"
                />
                <FormKit
                  type="number"
                  name="pendingAmount"
                  label="Pending Amount"
                  :value="0.00"
                  step="0.01"
                />
              </div>

              <!-- Right Column - Payment Information -->
              <div class="space-y-4">
                <h4 class="text-lg font-semibold">Payment Information</h4>
                <FormKit
                  type="text"
                  name="dealer"
                  label="Dealer"
                  placeholder="Enter dealer"
                />
                <FormKit
                  type="text"
                  name="bankCode"
                  label="Bank Code"
                  placeholder="Enter bank code"
                />
                <FormKit
                  type="text"
                  name="clearingBank"
                  label="Clearing Bank"
                  placeholder="Enter clearing bank"
                />
                <FormKit
                  type="number"
                  name="insTaxableAmt"
                  label="Ins Taxable Amt"
                  :value="0.00"
                  step="0.01"
                />
                <FormKit
                  type="text"
                  name="chequeNo"
                  label="Cheque No"
                  placeholder="Enter cheque number"
                />
                <FormKit
                  type="date"
                  name="chequeDate"
                  label="Cheque Date"
                />
              </div>
            </div>

            <!-- Remarks and Audit Information Section -->
            <div class="grid grid-cols-2 gap-6 mb-8">
              <!-- Left Column - Remarks -->
              <div class="space-y-4">
                <FormKit
                  type="textarea"
                  name="remarks"
                  label="Remarks"
                  placeholder="Enter remarks"
                  rows="4"
                />
                <FormKit
                  type="text"
                  name="cardNo"
                  label="Card No"
                  placeholder="Enter card number"
                />
              </div>

              <!-- Right Column - Audit Information -->
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
                <FormKit
                  type="text"
                  name="perfomaNo"
                  label="Perfoma No."
                  placeholder="Enter perfoma number"
                />
              </div>
            </div>

            <!-- Journal Voucher and Cancellation Section -->
            <div class="grid grid-cols-2 gap-6 mb-8">
              <!-- Left Column - Journal Voucher -->
              <div class="space-y-4">
                <FormKit
                  type="text"
                  name="jvNo"
                  label="JV No"
                  placeholder="Enter JV number"
                />
                <div class="flex items-center space-x-2">
                  <FormKit
                    type="checkbox"
                    name="cancelled"
                    label="Cancelled"
                  />
                </div>
              </div>

              <!-- Right Column - Cancellation Details -->
              <div class="space-y-4">
                <FormKit
                  type="text"
                  name="cancNo"
                  label="Canc No"
                  placeholder="Enter cancellation number"
                />
                <FormKit
                  type="date"
                  name="cancDate"
                  label="Canc Date"
                />
                <FormKit
                  type="text"
                  name="reprintReason"
                  label="Reprint Reason"
                  placeholder="Enter reprint reason"
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
                variant="primary"
                @click="handlePrintNoDt"
              >
                Print No Dt
              </rs-button>
              <rs-button
                variant="warning"
                @click="handleChkRegn"
              >
                Chk Regn
              </rs-button>
              <rs-button
                variant="secondary"
                @click="handleChargeTo"
              >
                Charge To.
              </rs-button>
              <rs-button
                variant="info"
                @click="handlePayDet"
              >
                Pay Det..
              </rs-button>
              <rs-button
                variant="primary"
                @click="handlePrintEx"
              >
                Print Ex
              </rs-button>
              <rs-button
                variant="primary"
                @click="handlePrintInt"
              >
                Print Int
              </rs-button>
              <rs-button
                variant="primary"
                @click="handlePrintDI"
              >
                Print DI
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
  title: "Job Invoices",
});

const { $swal } = useNuxtApp();

// Financial breakdown items
const financialItems = ref([
  { key: 'sparesAmount', label: 'Spares Amount', showCashCredit: true, showDealers: true, showWarranty: true, showInternal: true },
  { key: 'olAmount', label: 'O/L Amount', showCashCredit: true, showDealers: false, showWarranty: true, showInternal: true },
  { key: 'oilAmount', label: 'Oil Amount', showCashCredit: false, showDealers: true, showWarranty: false, showInternal: false },
  { key: 'laborAmount', label: 'Labor Amount', showCashCredit: true, showDealers: true, showWarranty: true, showInternal: true },
  { key: 'laborAmtSublet', label: 'Labor Amt Sublet', showCashCredit: true, showDealers: true, showWarranty: false, showInternal: false },
  { key: 'subletAmt', label: 'Sublet Amt', showCashCredit: false, showDealers: false, showWarranty: false, showInternal: true },
  { key: 'pkgAmount', label: 'Pkg Amount', showCashCredit: true, showDealers: false, showWarranty: false, showInternal: false },
  { key: 'pkgDiscount', label: 'Pkg Discount', showCashCredit: true, showDealers: false, showWarranty: false, showInternal: false },
  { key: 'totalGst', label: 'Total GST', showCashCredit: true, showDealers: true, showWarranty: true, showInternal: true },
  { key: 'totalAmount', label: 'Total Amount', showCashCredit: true, showDealers: true, showWarranty: false, showInternal: true },
  { key: 'osAmount', label: 'O/SAmount', showCashCredit: true, showDealers: false, showWarranty: false, showInternal: false },
  { key: 'spOl', label: 'SP-O/L', showCashCredit: false, showDealers: false, showWarranty: true, showInternal: false },
  { key: 'labAmt', label: 'Lab Amt', showCashCredit: false, showDealers: false, showWarranty: true, showInternal: false }
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

const handlePrintNoDt = () => {
  // Logic to print without date
};

const handleChkRegn = () => {
  // Logic to check registration
};

const handleChargeTo = () => {
  // Logic to handle charge to
};

const handlePayDet = () => {
  // Logic to handle payment details
};

const handlePrintEx = () => {
  // Logic to print external
};

const handlePrintInt = () => {
  // Logic to print internal
};

const handlePrintDI = () => {
  // Logic to print DI
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
