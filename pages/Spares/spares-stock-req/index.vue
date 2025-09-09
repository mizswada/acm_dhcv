<template>
  <div>
    <rs-card>
      <template #header>
        <div class="flex">
          <Icon class="mr-2 flex justify-center" name="ic:outline-inventory"></Icon>
          Spares Stock Requests
        </div>
      </template>
      <template #body>
        <div class="space-y-6">
          <FormKit type="form" :actions="false" @submit="handleSubmit">
            <!-- Request Details Section -->
            <div class="space-y-6 mb-8">
              <!-- First row with 3 columns -->
              <div class="grid grid-cols-3 gap-6">
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
                    name="requestNo"
                    label="Request No"
                    placeholder="Enter request number"
                  />
                  <FormKit
                    type="text"
                    name="toLocation"
                    label="To Location"
                    placeholder="Enter destination location"
                  />
                  <FormKit
                    type="date"
                    name="orderingDate"
                    label="Ordering Date"
                  />
                  <FormKit
                    type="text"
                    name="category"
                    label="Category"
                    placeholder="Enter category"
                  />
                </div>

                <!-- Middle Column -->
                <div class="space-y-4">
                <FormKit
                  type="textarea"
                  name="remarks"
                  label="Remarks"
                  placeholder="Enter remarks"
                  rows="3"
                />
                <FormKit
                  type="date"
                  name="requestDate"
                  label="Request Date"
                  :value="new Date().toISOString().split('T')[0]"
                />
                
                <!-- Row of 5 smaller input fields -->
                <div class="grid grid-cols-5 gap-2 mt-4">
                  <FormKit
                    type="text"
                    name="workshopQty"
                    label="Workshop Qty"
                    placeholder="0"
                    outer-class="mb-0"
                  />
                  <FormKit
                    type="text"
                    name="minLvl"
                    label="Min Lvl"
                    placeholder="0"
                    outer-class="mb-0"
                  />
                  <FormKit
                    type="text"
                    name="avl"
                    label="Avl"
                    placeholder="0"
                    outer-class="mb-0"
                  />
                  <FormKit
                    type="text"
                    name="tag"
                    label="Tag"
                    placeholder="Enter tag"
                    outer-class="mb-0"
                  />
                  <FormKit
                    type="text"
                    name="bin"
                    label="Bin"
                    placeholder="Enter bin"
                    outer-class="mb-0"
                  />
                </div>
              </div>

              <!-- Right Column -->
              <div class="space-y-4">
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
                <FormKit
                  type="date"
                  name="lastRecDate"
                  label="Last Rec Date"
                />
                <FormKit
                  type="date"
                  name="lastIssDate"
                  label="Last Iss Date"
                />
              </div>
              </div>

              <!-- Stock, Max Lvl, and Class in one row spanning full width -->
              <div class="grid grid-cols-3 gap-6">
                <FormKit
                  type="text"
                  name="stock"
                  label="Stock"
                  placeholder="Enter stock"
                />
                <FormKit
                  type="text"
                  name="maxLvl"
                  label="Max Lvl"
                  placeholder="Enter max level"
                />
                <FormKit
                  type="text"
                  name="class"
                  label="Class"
                  :value="'F'"
                  placeholder="Enter class"
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
                      <th class="border border-gray-300 px-3 py-2 text-left w-1/3">Part No & Name</th>
                      <th class="border border-gray-300 px-3 py-2 text-left">Stock</th>
                      <th class="border border-gray-300 px-3 py-2 text-left">Bin</th>
                      <th class="border border-gray-300 px-3 py-2 text-left">Tag</th>
                      <th class="border border-gray-300 px-3 py-2 text-left">Qty Reqs</th>
                      <th class="border border-gray-300 px-3 py-2 text-left">Qty Alloc</th>
                      <th class="border border-gray-300 px-3 py-2 text-left">Price</th>
                      <th class="border border-gray-300 px-3 py-2 text-left">Amount</th>
                      <th class="border border-gray-300 px-3 py-2 text-left">Pending Qty</th>
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
                          type="text"
                          :name="`itemDetails.${index}.stock`"
                          placeholder="Enter stock"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-3 py-2">
                        <FormKit
                          type="text"
                          :name="`itemDetails.${index}.bin`"
                          placeholder="Enter bin"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-3 py-2">
                        <FormKit
                          type="text"
                          :name="`itemDetails.${index}.tag`"
                          placeholder="Enter tag"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-3 py-2">
                        <FormKit
                          type="number"
                          :name="`itemDetails.${index}.qtyReqs`"
                          placeholder="0"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-3 py-2">
                        <FormKit
                          type="number"
                          :name="`itemDetails.${index}.qtyAlloc`"
                          placeholder="0"
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
                          :name="`itemDetails.${index}.amount`"
                          placeholder="0.00"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-3 py-2">
                        <FormKit
                          type="number"
                          :name="`itemDetails.${index}.pendingQty`"
                          placeholder="0"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Total and Action Buttons Section -->
            <div class="flex justify-between items-center pt-6 border-t">
              <!-- Total Field -->
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

              <!-- Action Buttons -->
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
                  variant="info"
                  @click="handlePrint"
                >
                  Print
                </rs-button>
                <rs-button
                  variant="warning"
                  @click="handleAllocate"
                >
                  Allocate
                </rs-button>
                <rs-button
                  variant="primary"
                  @click="handleOrder"
                >
                  Order
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
  title: "Spares Stock Requests",
});

const { $swal } = useNuxtApp();

// Initialize item details with 6 empty rows
const itemDetails = ref(Array(6).fill({}));

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

const handlePrint = () => {
  // Logic to handle print action
  console.log('Print action triggered');
};

const handleAllocate = () => {
  // Logic to handle allocate action
  console.log('Allocate action triggered');
};

const handleOrder = () => {
  // Logic to handle order action
  console.log('Order action triggered');
};

const handleSubmit = async (formData) => {
  try {
    console.log('Form submitted:', formData);
    // Logic to handle form submission
    $swal.fire({
      title: 'Success!',
      text: 'Spares Stock Request saved successfully!',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  } catch (error) {
    console.error('Error submitting form:', error);
    $swal.fire({
      title: 'Error!',
      text: 'Failed to save Spares Stock Request. Please try again.',
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }
};
</script>

<style scoped>
/* Add any additional styles here */
</style>