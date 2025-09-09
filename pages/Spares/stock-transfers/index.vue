<template>
  <div>
    <LayoutsBreadcrumb />
    <rs-card>
      <template #header>
        <div class="flex">
          <Icon class="mr-2 flex justify-center" name="ic:outline-swap-horiz"></Icon>
          Stock Transfer
        </div>
      </template>
      <template #body>
        <div class="space-y-6">
          <FormKit type="form" :actions="false" @submit="handleSubmit">
            <!-- General Information Section -->
            <div class="space-y-6 mb-8">
              <!-- First row - Location and Transfer details -->
              <div class="grid grid-cols-4 gap-4">
                <!-- Location with two adjacent fields -->
                <div class="col-span-2">
                  <label class="block text-sm font-medium mb-2">Location</label>
                  <div class="grid grid-cols-2 gap-2">
                    <FormKit
                      type="text"
                      name="location1"
                      placeholder="Enter location"
                      outer-class="mb-0"
                    />
                    <FormKit
                      type="text"
                      name="location2"
                      placeholder="Enter location"
                      outer-class="mb-0"
                    />
                  </div>
                </div>

                <FormKit
                  type="text"
                  name="transferNo"
                  label="Transfer No"
                  placeholder="Enter transfer number"
                />
                <FormKit
                  type="date"
                  name="transferDate"
                  label="Transfer Date"
                  :value="new Date().toISOString().split('T')[0]"
                />
              </div>

              <!-- Second row - Request Location and Request details -->
              <div class="grid grid-cols-4 gap-4">
                <!-- Request Location with two adjacent fields -->
                <div class="col-span-2">
                  <label class="block text-sm font-medium mb-2">Request Location</label>
                  <div class="grid grid-cols-2 gap-2">
                    <FormKit
                      type="text"
                      name="requestLocation1"
                      placeholder="Enter request location"
                      outer-class="mb-0"
                    />
                    <FormKit
                      type="text"
                      name="requestLocation2"
                      placeholder="Enter request location"
                      outer-class="mb-0"
                    />
                  </div>
                </div>

                <FormKit
                  type="text"
                  name="requestNo"
                  label="Request No"
                  placeholder="Enter request number"
                />
                <FormKit
                  type="date"
                  name="requestDate"
                  label="Request Date"
                />
              </div>

              <!-- Third row - Customer and other details -->
              <div class="grid grid-cols-4 gap-4">
                <FormKit
                  type="text"
                  name="customer"
                  label="Customer"
                  placeholder="Enter customer name"
                />
                <FormKit
                  type="text"
                  name="createdBy"
                  label="Created By"
                  placeholder="Enter creator name"
                />
                <FormKit
                  type="text"
                  name="modifiedBy"
                  label="Modified By"
                  placeholder="Enter modifier name"
                />
                <div class="grid grid-cols-2 gap-2">
                  <FormKit
                    type="text"
                    name="bin"
                    label="Bin"
                    placeholder="Enter bin"
                    outer-class="mb-0"
                  />
                  <FormKit
                    type="text"
                    name="tag"
                    label="Tag"
                    placeholder="Enter tag"
                    outer-class="mb-0"
                  />
                </div>
              </div>

              <!-- Fourth row - Remarks (full width) -->
              <FormKit
                type="textarea"
                name="remarks"
                label="Remarks"
                placeholder="Enter remarks"
                rows="3"
              />
            </div>

            <!-- Item Details Table -->
            <div class="mb-8">
              <h3 class="text-lg font-semibold mb-4">Item Details</h3>
              <div class="overflow-x-auto">
                <table class="w-full border border-gray-300">
                  <thead class="bg-gray-100">
                    <tr>
                      <th class="border border-gray-300 px-3 py-2 text-left w-1/3">Part No & Name</th>
                      <th class="border border-gray-300 px-3 py-2 text-left">Send</th>
                      <th class="border border-gray-300 px-3 py-2 text-left">Recv</th>
                      <th class="border border-gray-300 px-3 py-2 text-left">Receipt Date</th>
                      <th class="border border-gray-300 px-3 py-2 text-left">Price</th>
                      <th class="border border-gray-300 px-3 py-2 text-left">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in itemDetails" :key="index">
                      <td class="border border-gray-300 px-3 py-2">
                        <FormKit
                          type="text"
                          :name="`itemDetails.${index}.partNoAndName`"
                          placeholder="Enter part number and name"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-3 py-2">
                        <FormKit
                          type="number"
                          :name="`itemDetails.${index}.send`"
                          placeholder="0"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-3 py-2">
                        <FormKit
                          type="number"
                          :name="`itemDetails.${index}.recv`"
                          placeholder="0"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-3 py-2">
                        <FormKit
                          type="date"
                          :name="`itemDetails.${index}.receiptDate`"
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
                          :name="`itemDetails.${index}.amount`"
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

            <!-- Summary and Action Buttons Section -->
            <div class="flex justify-between items-start pt-6 border-t">
              <!-- Left side - Total and Audit fields -->
              <div class="space-y-4">
                <!-- Total field -->
                <div class="flex items-center space-x-4">
                  <label class="text-sm font-medium">Total:</label>
                  <FormKit
                    type="number"
                    name="total"
                    :value="0.00"
                    step="0.01"
                    outer-class="mb-0 w-32"
                  />
                </div>

                <!-- Audit fields -->
                <div class="grid grid-cols-2 gap-4">
                  <FormKit
                    type="text"
                    name="auditCreatedBy"
                    label="Created By"
                    placeholder="Enter creator name"
                  />
                  <FormKit
                    type="text"
                    name="auditModifiedBy"
                    label="Modified By"
                    placeholder="Enter modifier name"
                  />
                </div>
              </div>

              <!-- Right side - Action Buttons -->
              <div class="flex space-x-4">
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
                  variant="info"
                  @click="handlePrint"
                >
                  Print
                </rs-button>
                <rs-button
                  variant="warning"
                  @click="handlePrintDO"
                >
                  Print DO..
                </rs-button>
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
  title: "Stock Transfers",
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

const handlePrint = () => {
  // Logic to handle print action
  console.log('Print action triggered');
};

const handlePrintDO = () => {
  // Logic to handle print DO action
  console.log('Print DO action triggered');
};

const handleSubmit = async (formData) => {
  try {
    console.log('Form submitted:', formData);
    // Logic to handle form submission
    $swal.fire({
      title: 'Success!',
      text: 'Stock Transfer saved successfully!',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  } catch (error) {
    console.error('Error submitting form:', error);
    $swal.fire({
      title: 'Error!',
      text: 'Failed to save Stock Transfer. Please try again.',
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }
};
</script>

<style scoped>
/* Add any additional styles here */
</style>