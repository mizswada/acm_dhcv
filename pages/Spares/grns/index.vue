<template>
  <div>
    <LayoutsBreadcrumb />
    <rs-card>
      <template #header>
        <div class="flex">
          <Icon class="mr-2 flex justify-center" name="ic:outline-inventory-2"></Icon>
          GRNs
        </div>
      </template>
      <template #body>
        <div class="space-y-6">
          <FormKit type="form" :actions="false" @submit="handleSubmit">
            <!-- General Information Section -->
            <div class="grid grid-cols-3 gap-6 mb-8">
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
                  name="purchaseNo"
                  label="Purchase No"
                  placeholder="Enter purchase number"
                />
                <FormKit
                  type="text"
                  name="party"
                  label="Party"
                  placeholder="Enter party name"
                />
                <FormKit
                  type="text"
                  name="poLocation"
                  label="PO Location"
                  placeholder="Enter PO location"
                />
                <FormKit
                  type="text"
                  name="vendorDONo"
                  label="Vendor DO No"
                  placeholder="Enter vendor DO number"
                />
                <FormKit
                  type="text"
                  name="vendorInvoiceNo"
                  label="Vendor Invoice No"
                  placeholder="Enter vendor invoice number"
                />
                <FormKit
                  type="text"
                  name="partName"
                  label="Part Name"
                  placeholder="Enter part name"
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
                  type="text"
                  name="poNo"
                  label="PO No"
                  placeholder="Enter PO number"
                />
                <FormKit
                  type="date"
                  name="doDate"
                  label="DO Date"
                />
                <FormKit
                  type="date"
                  name="invDate"
                  label="Inv Date"
                />
                <FormKit
                  type="number"
                  name="discountPercent"
                  label="Discount %"
                  :value="0.00"
                  step="0.01"
                />
                <FormKit
                  type="text"
                  name="bin"
                  label="Bin"
                  placeholder="Enter bin location"
                />
              </div>

              <!-- Right Column -->
              <div class="space-y-4">
                <FormKit
                  type="text"
                  name="credit"
                  label="Credit"
                  placeholder="Enter credit information"
                />
                <FormKit
                  type="select"
                  name="freightMode"
                  label="Freight Mode"
                  :options="[
                    { label: 'Sea', value: 'Sea' },
                    { label: 'Air', value: 'Air' },
                    { label: 'Road', value: 'Road' },
                    { label: 'Rail', value: 'Rail' }
                  ]"
                  :value="'Sea'"
                />
                <FormKit
                  type="text"
                  name="createdBy"
                  label="Created by"
                  placeholder="Enter creator name"
                />
                <FormKit
                  type="text"
                  name="modifiedBy"
                  label="Modified by"
                  placeholder="Enter modifier name"
                />
                <FormKit
                  type="number"
                  name="pendingQty"
                  label="Pending Qty"
                  placeholder="Enter pending quantity"
                />
                <FormKit
                  type="text"
                  name="tag"
                  label="Tag"
                  placeholder="Enter tag"
                />
              </div>
            </div>

            <!-- Item Details Table -->
            <div class="mb-8">
              <h3 class="text-lg font-semibold mb-4">Item Details</h3>
              <div class="overflow-x-auto">
                <table class="w-full border border-gray-300">
                  <thead class="bg-gray-100">
                    <tr>
                      <th class="border border-gray-300 px-3 py-2 text-left">Part No</th>
                      <th class="border border-gray-300 px-3 py-2 text-left">Case Qty</th>
                      <th class="border border-gray-300 px-3 py-2 text-left">Inv Qty</th>
                      <th class="border border-gray-300 px-3 py-2 text-left">Recv Recv Date</th>
                      <th class="border border-gray-300 px-3 py-2 text-left">Yen Price</th>
                      <th class="border border-gray-300 px-3 py-2 text-left">Price</th>
                      <th class="border border-gray-300 px-3 py-2 text-left">Disc %</th>
                      <th class="border border-gray-300 px-3 py-2 text-left">Net Price</th>
                      <th class="border border-gray-300 px-3 py-2 text-left">Amount (Ex. GST)</th>
                      <th class="border border-gray-300 px-3 py-2 text-left">GST Tax Code & Rate</th>
                      <th class="border border-gray-300 px-3 py-2 text-left">GST Amount</th>
                      <th class="border border-gray-300 px-3 py-2 text-left">Amount (Inc. GST)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in itemDetails" :key="index">
                      <td class="border border-gray-300 px-3 py-2">
                        <FormKit
                          type="text"
                          :name="`itemDetails.${index}.partNo`"
                          placeholder="Enter part number"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-3 py-2">
                        <FormKit
                          type="number"
                          :name="`itemDetails.${index}.caseQty`"
                          placeholder="0"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-3 py-2">
                        <FormKit
                          type="number"
                          :name="`itemDetails.${index}.invQty`"
                          placeholder="0"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-3 py-2">
                        <FormKit
                          type="date"
                          :name="`itemDetails.${index}.recvDate`"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-3 py-2">
                        <FormKit
                          type="number"
                          :name="`itemDetails.${index}.yenPrice`"
                          placeholder="0.00"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-3 py-2">
                        <FormKit
                          type="number"
                          :name="`itemDetails.${index}.price`"
                          placeholder="0.00"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-3 py-2">
                        <FormKit
                          type="number"
                          :name="`itemDetails.${index}.discPercent`"
                          placeholder="0.00"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-3 py-2">
                        <FormKit
                          type="number"
                          :name="`itemDetails.${index}.netPrice`"
                          placeholder="0.00"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-3 py-2">
                        <FormKit
                          type="number"
                          :name="`itemDetails.${index}.amountExGst`"
                          placeholder="0.00"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-3 py-2">
                        <FormKit
                          type="text"
                          :name="`itemDetails.${index}.gstTaxCode`"
                          placeholder="Enter GST code"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-3 py-2">
                        <FormKit
                          type="number"
                          :name="`itemDetails.${index}.gstAmount`"
                          placeholder="0.00"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-3 py-2">
                        <FormKit
                          type="number"
                          :name="`itemDetails.${index}.amountIncGst`"
                          placeholder="0.00"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Summary and Payment Information Section -->
            <div class="grid grid-cols-2 gap-6 mb-8">
              <!-- Left Column -->
              <div class="space-y-4">
                <FormKit
                  type="number"
                  name="salesTaxPercent"
                  label="Sales Tax %"
                  :value="0.00"
                  step="0.01"
                />
                <FormKit
                  type="number"
                  name="paymentAmt"
                  label="Payment Amt"
                  :value="0.00"
                  step="0.01"
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
              </div>

              <!-- Right Column -->
              <div class="space-y-4">
                <FormKit
                  type="number"
                  name="sparesAmount"
                  label="Spares Amount"
                  :value="0.00"
                  step="0.01"
                />
                <FormKit
                  type="number"
                  name="salesTaxAmount"
                  label="Sales Tax Amount"
                  :value="0.00"
                  step="0.01"
                />
                <FormKit
                  type="number"
                  name="pendingAmt"
                  label="Pending Amt"
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
                  type="date"
                  name="paymentDate"
                  label="Date"
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
                @click="handleRecv"
              >
                Recv
              </rs-button>
              <rs-button
                variant="warning"
                @click="handlePayments"
              >
                Payments..
              </rs-button>
              <rs-button
                variant="info"
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
              <rs-button
                variant="primary-outline"
                @click="handleUpload"
              >
                Upload
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
  title: "GRNs",
});

const { $swal } = useNuxtApp();

// Initialize item details with 5 empty rows
const itemDetails = ref(Array(5).fill({}));

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
  window.location.reload();
};

const handleRecv = () => {
  // Logic to handle receive action
  console.log('Receive action triggered');
};

const handlePayments = () => {
  // Logic to handle payments action
  console.log('Payments action triggered');
};

const handlePrint = () => {
  // Logic to handle print action
  console.log('Print action triggered');
};

const handleJV = () => {
  // Logic to handle JV action
  console.log('JV action triggered');
};

const handleUpload = () => {
  // Logic to handle upload action
  console.log('Upload action triggered');
};

const handleSubmit = async (formData) => {
  try {
    console.log('Form submitted:', formData);
    // Logic to handle form submission
    $swal.fire({
      title: 'Success!',
      text: 'GRN saved successfully!',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  } catch (error) {
    console.error('Error submitting form:', error);
    $swal.fire({
      title: 'Error!',
      text: 'Failed to save GRN. Please try again.',
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }
};
</script>

<style scoped>
/* Add any additional styles here */
</style>