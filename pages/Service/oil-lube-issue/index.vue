<template>
  <div>
    <rs-card>
      <template #header>
        <div class="flex">
          <Icon class="mr-2 flex justify-center" name="ic:outline-oil-barrel"></Icon>
          Oil & Lube Requisitions
        </div>
      </template>
      <template #body>
        <div class="space-y-6">
          <FormKit type="form" :actions="false" @submit="handleSubmit">
            <!-- Requisition Details Section -->
            <div class="grid grid-cols-3 gap-6 mb-8">
              <!-- Left Column -->
              <div class="space-y-4">
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
                <FormKit
                  type="text"
                  name="requisitionNo"
                  label="Requisition No"
                  placeholder="Enter requisition number"
                />
                <FormKit
                  type="text"
                  name="jobNo"
                  label="Job No"
                  placeholder="Enter job number"
                />
                <FormKit
                  type="text"
                  name="campaign"
                  label="Campaign"
                  placeholder="Enter campaign"
                />
                <FormKit
                  type="text"
                  name="package"
                  label="Package"
                  placeholder="Enter package"
                />
              </div>

              <!-- Middle Column -->
              <div class="space-y-4">
                <FormKit
                  type="date"
                  name="date"
                  label="Date"
                  :value="new Date().toISOString().split('T')[0]"
                />
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
                <FormKit
                  type="date"
                  name="date2"
                  label="Date"
                />
                <FormKit
                  type="number"
                  name="discountPercent"
                  label="Discount %"
                  :value="0.00"
                  step="0.01"
                />
              </div>

              <!-- Right Column -->
              <div class="space-y-4">
                <FormKit
                  type="text"
                  name="createdBy1"
                  label="Created By"
                  placeholder="Enter created by"
                />
                <FormKit
                  type="text"
                  name="createdBy2"
                  label="Created By"
                  placeholder="Enter created by"
                />
                <FormKit
                  type="text"
                  name="modifiedBy1"
                  label="Modified By"
                  placeholder="Enter modified by"
                />
                <FormKit
                  type="text"
                  name="modifiedBy2"
                  label="Modified By"
                  placeholder="Enter modified by"
                />
              </div>
            </div>

            <!-- Customer/Vehicle Details Section -->
            <div class="grid grid-cols-2 gap-6 mb-8">
              <!-- Left Column - Customer/Vehicle Details -->
              <div class="space-y-4">
                <FormKit
                  type="text"
                  name="mechanic"
                  label="Mechanic"
                  placeholder="Enter mechanic name"
                />
                <FormKit
                  type="text"
                  name="oldRefNo"
                  label="Old Ref No"
                  placeholder="Enter old reference number"
                />
                <FormKit
                  type="text"
                  name="regnNo"
                  label="Regn No"
                  placeholder="Enter registration number"
                />
                <FormKit
                  type="text"
                  name="modelCode"
                  label="Model Code"
                  placeholder="Enter model code"
                />
                <FormKit
                  type="time"
                  name="requestTime"
                  label="Request Time"
                />
                <FormKit
                  type="date"
                  name="issueDate"
                  label="Issue Date"
                />
                <FormKit
                  type="time"
                  name="issueTime"
                  label="Issue Time"
                />
                <FormKit
                  type="text"
                  name="partName"
                  label="Part Name"
                  placeholder="Enter part name"
                />
              </div>

              <!-- Right Column - Financial & Stock Details -->
              <div class="space-y-4">
                <div class="grid grid-cols-2 gap-4">
                  <FormKit
                    type="number"
                    name="sparesAmt"
                    label="Spares Amt"
                    :value="0.00"
                    step="0.01"
                  />
                  <FormKit
                    type="number"
                    name="olAmount"
                    label="O/L Amount"
                    :value="0.00"
                    step="0.01"
                  />
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <FormKit
                    type="number"
                    name="sparesAmtWarranty"
                    label="Spares Amt Warranty"
                    :value="0.00"
                    step="0.01"
                  />
                  <FormKit
                    type="number"
                    name="olAmountWarranty"
                    label="O/L Amount Warranty"
                    :value="0.00"
                    step="0.01"
                  />
                </div>
                <div class="grid grid-cols-4 gap-2">
                  <FormKit
                    type="number"
                    name="inStock"
                    label="In Stock"
                    :value="0"
                  />
                  <FormKit
                    type="number"
                    name="minLvl"
                    label="Min Lvl"
                    :value="0"
                  />
                  <FormKit
                    type="number"
                    name="maxLvl"
                    label="Max Lvl"
                    :value="0"
                  />
                  <FormKit
                    type="number"
                    name="qtyAvl"
                    label="Qty Avl"
                    :value="0"
                  />
                </div>
                <div class="space-y-2">
                  <FormKit
                    type="number"
                    name="amount1"
                    label=""
                    :value="0.00"
                    step="0.01"
                  />
                  <FormKit
                    type="number"
                    name="amount2"
                    label=""
                    :value="0.00"
                    step="0.01"
                  />
                  <FormKit
                    type="number"
                    name="amount3"
                    label=""
                    :value="0.00"
                    step="0.01"
                  />
                  <FormKit
                    type="number"
                    name="amount4"
                    label=""
                    :value="0.00"
                    step="0.01"
                  />
                  <FormKit
                    type="number"
                    name="amount5"
                    label=""
                    :value="0.00"
                    step="0.01"
                  />
                  <FormKit
                    type="number"
                    name="amount6"
                    label=""
                    :value="0.00"
                    step="0.01"
                  />
                </div>
              </div>
            </div>

            <!-- Part Details Table Section -->
            <div class="mb-8">
              <h3 class="text-lg font-semibold mb-4">Part Details</h3>
              <RsTable
                :headers="partHeaders"
                :data="partData"
                :show-pagination="false"
                :show-search="false"
                :show-sort="false"
              >
                <template #body>
                  <tr v-for="(item, index) in partData" :key="index" class="border-b">
                    <td class="px-4 py-2">
                      <FormKit
                        type="text"
                        :name="`partNo_${index}`"
                        placeholder="Enter part number"
                        outer-class="mb-0"
                      />
                    </td>
                    <td class="px-4 py-2">
                      <FormKit
                        type="select"
                        :name="`ol_${index}`"
                        :options="[
                          { label: 'Select', value: '' },
                          { label: 'Oil', value: 'oil' },
                          { label: 'Lube', value: 'lube' }
                        ]"
                        outer-class="mb-0"
                      />
                    </td>
                    <td class="px-4 py-2 text-center">
                      <FormKit
                        type="checkbox"
                        :name="`war_${index}`"
                        outer-class="mb-0"
                      />
                    </td>
                    <td class="px-4 py-2 text-center">
                      <FormKit
                        type="checkbox"
                        :name="`int_${index}`"
                        outer-class="mb-0"
                      />
                    </td>
                    <td class="px-4 py-2">
                      <FormKit
                        type="text"
                        :name="`dept_${index}`"
                        placeholder="Dept"
                        outer-class="mb-0"
                      />
                    </td>
                    <td class="px-4 py-2">
                      <FormKit
                        type="text"
                        :name="`dealer_${index}`"
                        placeholder="Dealer"
                        outer-class="mb-0"
                      />
                    </td>
                    <td class="px-4 py-2 text-center">
                      <FormKit
                        type="checkbox"
                        :name="`dum_${index}`"
                        outer-class="mb-0"
                      />
                    </td>
                    <td class="px-4 py-2">
                      <FormKit
                        type="text"
                        :name="`bin_${index}`"
                        placeholder="Bin"
                        outer-class="mb-0"
                      />
                    </td>
                    <td class="px-4 py-2">
                      <FormKit
                        type="text"
                        :name="`labCode_${index}`"
                        placeholder="Lab Code"
                        outer-class="mb-0"
                      />
                    </td>
                    <td class="px-4 py-2">
                      <FormKit
                        type="text"
                        :name="`tag_${index}`"
                        placeholder="Tag"
                        outer-class="mb-0"
                      />
                    </td>
                    <td class="px-4 py-2">
                      <div class="grid grid-cols-3 gap-1">
                        <FormKit
                          type="number"
                          :name="`qtyReqd_${index}`"
                          placeholder="Reqd"
                          :value="index === 0 ? 0 : ''"
                          outer-class="mb-0"
                        />
                        <FormKit
                          type="number"
                          :name="`qtyIssd_${index}`"
                          placeholder="Issd"
                          :value="index === 0 ? 0 : ''"
                          outer-class="mb-0"
                        />
                        <FormKit
                          type="number"
                          :name="`qtyRetn_${index}`"
                          placeholder="Retn"
                          :value="index === 0 ? 0 : ''"
                          outer-class="mb-0"
                        />
                      </div>
                    </td>
                    <td class="px-4 py-2">
                      <FormKit
                        type="number"
                        :name="`price_${index}`"
                        :value="index === 0 ? 0.00 : ''"
                        step="0.01"
                        outer-class="mb-0"
                      />
                    </td>
                    <td class="px-4 py-2">
                      <FormKit
                        type="number"
                        :name="`disPercent_${index}`"
                        :value="index === 0 ? 0.00 : ''"
                        step="0.01"
                        outer-class="mb-0"
                      />
                    </td>
                    <td class="px-4 py-2">
                      <FormKit
                        type="number"
                        :name="`netPrice_${index}`"
                        :value="index === 0 ? 0.00 : ''"
                        step="0.01"
                        outer-class="mb-0"
                      />
                    </td>
                    <td class="px-4 py-2">
                      <FormKit
                        type="number"
                        :name="`amount_${index}`"
                        :value="index === 0 ? 0.00 : ''"
                        step="0.01"
                        outer-class="mb-0"
                      />
                    </td>
                    <td class="px-4 py-2 text-center">
                      <FormKit
                        type="checkbox"
                        :name="`checkbox_${index}`"
                        :value="index === 0"
                        outer-class="mb-0"
                      />
                    </td>
                    <td class="px-4 py-2">
                      <span class="text-sm">WIP</span>
                    </td>
                    <td class="px-4 py-2">
                      <FormKit
                        type="text"
                        :name="`gstTaxCode_${index}`"
                        placeholder="GST Tax Code & Rate"
                        outer-class="mb-0"
                      />
                    </td>
                    <td class="px-4 py-2">
                      <FormKit
                        type="number"
                        :name="`gstAmount_${index}`"
                        :value="index === 0 ? 0.00 : ''"
                        step="0.01"
                        outer-class="mb-0"
                      />
                    </td>
                  </tr>
                </template>
              </RsTable>
            </div>

            <!-- Footer Section -->
            <div class="grid grid-cols-3 gap-6 mb-8">
              <div class="space-y-4">
                <FormKit
                  type="text"
                  name="createdByFooter"
                  label="Created By"
                  placeholder="Enter created by"
                />
                <FormKit
                  type="text"
                  name="modifiedByFooter"
                  label="Modified By"
                  placeholder="Enter modified by"
                />
              </div>
              <div class="space-y-4">
                <FormKit
                  type="number"
                  name="total"
                  label="Total"
                  :value="0.00"
                  step="0.01"
                />
              </div>
              <div class="space-y-4">
                <p class="text-red-600 text-sm">
                  Note: Spare Requisitions View In Spares Module.
                </p>
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
                variant="warning"
                @click="handleCheckRegn"
              >
                Chk Regn
              </rs-button>
              <rs-button
                variant="primary"
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
  title: "Oil & Lube Requisitions",
});

const { $swal } = useNuxtApp();

// Part Details Table Headers
const partHeaders = ref([
  { key: 'partNo', label: 'Part No' },
  { key: 'ol', label: 'O/L' },
  { key: 'war', label: 'War' },
  { key: 'int', label: 'Int' },
  { key: 'dept', label: 'Dept' },
  { key: 'dealer', label: 'Dealer' },
  { key: 'dum', label: 'Dum' },
  { key: 'bin', label: 'Bin' },
  { key: 'labCode', label: 'Lab Code' },
  { key: 'tag', label: 'Tag' },
  { key: 'qty', label: 'Qty' },
  { key: 'price', label: 'Price' },
  { key: 'disPercent', label: 'Dis. %' },
  { key: 'netPrice', label: 'Net Price' },
  { key: 'amount', label: 'Amount' },
  { key: 'checkbox', label: '' },
  { key: 'wip', label: 'WIP' },
  { key: 'gstTaxCode', label: 'GST Tax Code & Rate' },
  { key: 'gstAmount', label: 'GST Amount' }
]);

// Part Details Table Data (7 rows)
const partData = ref([
  {}, {}, {}, {}, {}, {}, {}
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

const handleCheckRegn = () => {
  // Logic to check registration
};

const handlePrint = () => {
  // Logic to print
};

const handleJV = () => {
  // Logic to handle Journal Voucher
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
