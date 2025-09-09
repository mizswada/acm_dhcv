<template>
  <div>
    <rs-card>
      <template #header>
        <div class="flex">
          <Icon class="mr-2 flex justify-center" name="ic:outline-build"></Icon>
          Assembly
        </div>
      </template>
      <template #body>
        <div class="space-y-6">
          <FormKit type="form" :actions="false" @submit="handleSubmit">
            <!-- Top form fields -->
            <div class="grid grid-cols-6 gap-4">
              <!-- Row 1 -->
              <div>
                                 <FormKit
                   type="text"
                   name="serialNo"
                   label="Serial No"
                   v-model="formData.serialNo"
                   :validation="[ ['required'] ]"
                   placeholder="Enter serial number"
                 />
              </div>
              <div class="col-span-2">
                                 <FormKit
                   type="text"
                   name="vendorCodeName"
                   label="Vendor Code & Name"
                   v-model="formData.vendorCodeName"
                   :validation="[ ['required'] ]"
                   placeholder="Enter vendor code and name"
                 />
              </div>
              <div>
                                 <FormKit
                   type="text"
                   name="colorName"
                   label="Color Name"
                   v-model="formData.colorName"
                   :validation="[ ['required'] ]"
                   placeholder="Enter color name"
                 />
              </div>
              <div>
                                 <FormKit
                   type="date"
                   name="productionDate"
                   label="Production Date"
                   v-model="formData.productionDate"
                   :validation="[ ['required'] ]"
                 />
              </div>
            </div>

            <!-- Data Entry Table -->
            <div class="mt-6 bg-gray-100 p-4 rounded-lg">
              <div class="flex justify-between items-center mb-4">
                <h3 class="text-lg font-medium">Data Entry Table</h3>
              </div>
              <div class="overflow-x-auto bg-white rounded-lg shadow-sm">
                <rs-table :data="tableData" :columns="tableColumns" />
              </div>
            </div>

            <!-- Damaged Part Entry -->
            <div class="mt-6 bg-gray-100 p-4 rounded-lg">
              <div class="flex justify-between items-center mb-4">
                <h3 class="text-lg font-medium">Damaged Part Entry</h3>
              </div>
              <div class="grid grid-cols-6 gap-4">
                <div class="col-span-2">
                                     <FormKit
                     type="text"
                     name="damagedPartNoName"
                     label="Damaged Part No & Name"
                     v-model="formData.damagedPartNoName"
                     :validation="[ ['required'] ]"
                     placeholder="Enter part number and name"
                   />
                </div>
                <div>
                                     <FormKit
                     type="number"
                     name="qty"
                     label="Qty"
                     v-model="formData.qty"
                     :validation="[ ['required'], ['min', 0] ]"
                     placeholder="Enter quantity"
                   />
                </div>
                <div>
                                     <FormKit
                     type="number"
                     name="rmPrice"
                     label="RM Price"
                     v-model="formData.rmPrice"
                     :validation="[ ['required'], ['min', 0] ]"
                     placeholder="Enter RM price"
                   />
                </div>
                <div>
                                     <FormKit
                     type="number"
                     name="rmAmount"
                     label="RM Amount"
                     v-model="formData.rmAmount"
                     :validation="[ ['required'], ['min', 0] ]"
                     placeholder="Enter RM amount"
                   />
                </div>
                <div class="flex items-center space-x-2 pt-6">
                  <div class="flex items-center">
                    <span class="text-sm font-medium mr-2">Claim Settled:</span>
                                         <FormKit
                       type="checkbox"
                       name="claimSettled"
                       v-model="formData.claimSettled"
                       label=""
                     />
                  </div>
                </div>
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
import { ref } from 'vue';
import { useNuxtApp } from '#app';

definePageMeta({
  title: "Assembly",
});

const { $swal } = useNuxtApp();

// Form data
const formData = ref({
  serialNo: 'ASM001',
  vendorCodeName: 'VENDOR001 - ABC Auto Parts',
  colorName: 'Metallic Red',
  productionDate: '2024-01-15',
  damagedPartNoName: 'P001 - Engine Oil Filter',
  qty: 2,
  rmPrice: 45.50,
  rmAmount: 91.00,
  claimSettled: true
});

const tableData = ref([
  {
    modelCode: 'MC001',
    chassisNo: 'CH001',
    receipt: 'R001',
    lotNo: 'L001',
    colour: 'Red',
    amount: 15000.00,
    gstCode: 'GST01',
    taxRate: 6.0,
    gstAmount: 900.00,
    amountIncGst: 15900.00,
    completionDue: '2024-01-15',
    dateActual: '2024-01-12'
  },
  {
    modelCode: 'MC002',
    chassisNo: 'CH002',
    receipt: 'R002',
    lotNo: 'L002',
    colour: 'Blue',
    amount: 18000.00,
    gstCode: 'GST01',
    taxRate: 6.0,
    gstAmount: 1080.00,
    amountIncGst: 19080.00,
    completionDue: '2024-01-20',
    dateActual: '2024-01-18'
  },
  {
    modelCode: 'MC003',
    chassisNo: 'CH003',
    receipt: 'R003',
    lotNo: 'L003',
    colour: 'White',
    amount: 12000.00,
    gstCode: 'GST01',
    taxRate: 6.0,
    gstAmount: 720.00,
    amountIncGst: 12720.00,
    completionDue: '2024-01-25',
    dateActual: '2024-01-22'
  },
  {
    modelCode: 'MC004',
    chassisNo: 'CH004',
    receipt: 'R004',
    lotNo: 'L004',
    colour: 'Black',
    amount: 20000.00,
    gstCode: 'GST01',
    taxRate: 6.0,
    gstAmount: 1200.00,
    amountIncGst: 21200.00,
    completionDue: '2024-01-30',
    dateActual: '2024-01-28'
  }
]);
const tableColumns = ref([
  { name: 'Model Code', field: 'modelCode', width: '120px' },
  { name: 'Chassis No', field: 'chassisNo', width: '120px' },
  { name: 'Receipt', field: 'receipt', width: '100px' },
  { name: 'Lot No', field: 'lotNo', width: '100px' },
  { name: 'Colour', field: 'colour', width: '100px' },
  { name: 'Amount', field: 'amount', width: '100px' },
  { name: 'GST Code', field: 'gstCode', width: '100px' },
  { name: 'Tax Rate', field: 'taxRate', width: '100px' },
  { name: 'GST Amount', field: 'gstAmount', width: '120px' },
  { name: 'Amount (Inc GST)', field: 'amountIncGst', width: '130px' },
  { name: 'Completion Due', field: 'completionDue', width: '120px' },
  { name: 'Date Actual', field: 'dateActual', width: '120px' },
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