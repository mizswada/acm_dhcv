<template>
  <div>
    <rs-card>
      <template #header>
        <div class="flex">
          <Icon class="mr-2 flex justify-center" name="ic:outline-calendar-today"></Icon>
          Service Bookings
        </div>
      </template>
      <template #body>
        <div class="space-y-6">
          <FormKit type="form" :actions="false" @submit="handleSubmit">
            <!-- Top Input Fields Section -->
            <div class="grid grid-cols-6 gap-4 mb-8">
              <!-- Row 1 -->
              <div>
                <FormKit
                  type="text"
                  name="locationCode"
                  label="Location Code"
                  placeholder="Enter location code"
                />
              </div>
              <div class="col-span-2">
                <FormKit
                  type="text"
                  name="locationName"
                  label="Location Name"
                  placeholder="Enter location name"
                />
              </div>
              <div class="col-span-3">
                <FormKit
                  type="date"
                  name="bookingForDate"
                  label="Booking For Date"
                  :value="new Date().toISOString().split('T')[0]"
                />
              </div>
            </div>

            <!-- Main Booking Details Grid Section -->
            <div class="mb-8">
              <h3 class="text-lg font-semibold mb-4">Booking Details</h3>
              <div class="overflow-x-auto">
                <table class="w-full border-collapse border border-gray-300">
                  <thead class="bg-gray-100">
                    <tr>
                      <th class="border border-gray-300 px-4 py-2 text-left">Booking No & Date</th>
                      <th class="border border-gray-300 px-4 py-2 text-left">Model Code</th>
                      <th class="border border-gray-300 px-4 py-2 text-left">Regn No</th>
                      <th class="border border-gray-300 px-4 py-2 text-left">Chassis No</th>
                      <th class="border border-gray-300 px-4 py-2 text-left">Time</th>
                      <th class="border border-gray-300 px-4 py-2 text-left">Repair Code & Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in bookingData" :key="index" class="border-b">
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="text"
                          :name="`bookingNoDate_${index}`"
                          placeholder="Enter booking no & date"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="text"
                          :name="`modelCode_${index}`"
                          placeholder="Enter model code"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="text"
                          :name="`regnNo_${index}`"
                          placeholder="Enter registration number"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="text"
                          :name="`chassisNo_${index}`"
                          placeholder="Enter chassis number"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="time"
                          :name="`time_${index}`"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="text"
                          :name="`repairCodeDesc_${index}`"
                          placeholder="Enter repair code & description"
                          outer-class="mb-0"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Defect Code & Description Section -->
            <div class="mb-8">
              <h3 class="text-lg font-semibold mb-4">Defect Code & Description</h3>
              <div class="overflow-x-auto">
                <table class="w-full border-collapse border border-gray-300">
                  <thead class="bg-gray-100">
                    <tr>
                      <th class="border border-gray-300 px-4 py-2 text-left">Code</th>
                      <th class="border border-gray-300 px-4 py-2 text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in defectData" :key="index" class="border-b">
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="text"
                          :name="`defectCode_${index}`"
                          placeholder="Enter defect code"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="text"
                          :name="`defectDescription_${index}`"
                          placeholder="Enter defect description"
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
                @click="handlePrint"
              >
                Print
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
  title: "Service Bookings",
});

const { $swal } = useNuxtApp();

// Booking Details Table Data (8 rows)
const bookingData = ref([
  {}, {}, {}, {}, {}, {}, {}, {}
]);

// Defect Details Table Data (4 rows)
const defectData = ref([
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