<template>
  <div>
    <LayoutsBreadcrumb />
    <rs-card>
      <template #header>
        <div class="flex">
          <Icon class="mr-2 flex justify-center" name="ic:outline-work"></Icon>
          Job Labors
        </div>
      </template>
      <template #body>
        <div class="space-y-6">
          <FormKit type="form" :actions="false" @submit="handleSubmit">
            <!-- General Job Information Section -->
            <div class="grid grid-cols-6 gap-4 mb-8">
              <!-- Row 1 -->
              <div>
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
              <div>
                <FormKit
                  type="date"
                  name="date"
                  label="Date"
                  :value="new Date().toISOString().split('T')[0]"
                />
              </div>
              <div class="col-span-2">
                <FormKit
                  type="text"
                  name="laborDescription"
                  label="Labor Description"
                  placeholder="Enter labor description"
                />
              </div>

              <!-- Row 2 -->
              <div class="col-span-2">
                <FormKit
                  type="text"
                  name="mechanicName"
                  label="Mechanic Name"
                  placeholder="Enter mechanic name"
                />
              </div>
              <div class="col-span-2">
                <FormKit
                  type="text"
                  name="partyName"
                  label="Party Name"
                  placeholder="Enter party name"
                />
              </div>
              <div>
                <FormKit
                  type="time"
                  name="timeOut"
                  label="Time Out"
                />
              </div>
              <div>
                <FormKit
                  type="time"
                  name="timeIn"
                  label="Time In"
                />
              </div>

              <!-- Row 3 -->
              <div class="col-span-2">
                <FormKit
                  type="text"
                  name="driverName"
                  label="Driver Name"
                  placeholder="Enter driver name"
                />
              </div>
              <div>
                <FormKit
                  type="text"
                  name="createdBy"
                  label="Created By"
                  placeholder="Enter created by"
                />
              </div>
              <div>
                <FormKit
                  type="text"
                  name="modifiedBy"
                  label="Modified By"
                  placeholder="Enter modified by"
                />
              </div>
              <div class="col-span-2"></div>
            </div>

            <!-- Labor Details Grid Section -->
            <div class="mb-8">
              <h3 class="text-lg font-semibold mb-4">Labor Details</h3>
              <div class="overflow-x-auto">
                <table class="w-full border-collapse border border-gray-300">
                  <thead class="bg-gray-100">
                    <tr>
                      <th class="border border-gray-300 px-4 py-2 text-left">Labor</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Mech</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Std Hrs</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Chrgd Hrs</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">& Amt</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Act Hrs</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Vendor & Cost</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Internal</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Warr</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Dept</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Taxable</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Dealer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in laborData" :key="index" class="border-b">
                      <td class="border border-gray-300 px-4 py-2">
                        <div class="flex items-center space-x-2">
                          <FormKit
                            type="checkbox"
                            :name="`sublet_${index}`"
                            :value="index === 0"
                            outer-class="mb-0"
                          />
                          <span class="text-sm">Sublet</span>
                        </div>
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="text"
                          :name="`mech_${index}`"
                          placeholder="Mech"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="number"
                          :name="`stdHrs_${index}`"
                          placeholder="Std Hrs"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="number"
                          :name="`chrgdHrs_${index}`"
                          placeholder="Chrgd Hrs"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="number"
                          :name="`amt_${index}`"
                          placeholder="& Amt"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="number"
                          :name="`actHrs_${index}`"
                          placeholder="Act Hrs"
                          step="0.01"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="text"
                          :name="`vendorCost_${index}`"
                          placeholder="Vendor & Cost"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2 text-center">
                        <div class="flex items-center justify-center space-x-2">
                          <FormKit
                            type="checkbox"
                            :name="`internal_${index}`"
                            :value="index === 0"
                            outer-class="mb-0"
                          />
                          <span class="text-sm">Internal</span>
                        </div>
                      </td>
                      <td class="border border-gray-300 px-2 py-2 text-center">
                        <div class="flex items-center justify-center space-x-2">
                          <FormKit
                            type="checkbox"
                            :name="`warr_${index}`"
                            :value="index === 0"
                            outer-class="mb-0"
                          />
                          <span class="text-sm">Warr</span>
                        </div>
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="text"
                          :name="`dept_${index}`"
                          placeholder="Dept"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2 text-center">
                        <div class="flex items-center justify-center space-x-2">
                          <FormKit
                            type="checkbox"
                            :name="`taxable_${index}`"
                            :value="index === 0"
                            outer-class="mb-0"
                          />
                          <span class="text-sm">Taxable</span>
                        </div>
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="text"
                          :name="`dealer_${index}`"
                          placeholder="Dealer"
                          outer-class="mb-0"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <!-- Start Time / End Time -->
              <div class="grid grid-cols-2 gap-4 mt-4">
                <FormKit
                  type="time"
                  name="startTime"
                  label="Start Time"
                />
                <FormKit
                  type="time"
                  name="endTime"
                  label="End Time"
                />
              </div>
            </div>

            <!-- Overtime Section -->
            <div class="mb-8">
              <h3 class="text-lg font-semibold mb-4">Overtime</h3>
              <div class="overflow-x-auto">
                <table class="w-full border-collapse border border-gray-300">
                  <thead class="bg-gray-100">
                    <tr>
                      <th class="border border-gray-300 px-4 py-2 text-center">In Date</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">In Time</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Out Date</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Out Time</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Total Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in overtimeData" :key="index" class="border-b">
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="date"
                          :name="`inDate_${index}`"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="time"
                          :name="`inTime_${index}`"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="date"
                          :name="`outDate_${index}`"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="time"
                          :name="`outTime_${index}`"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="time"
                          :name="`totalTime_${index}`"
                          outer-class="mb-0"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Audit Information Section -->
            <div class="grid grid-cols-2 gap-6 mb-8">
              <!-- Left Column - Audit Information -->
              <div class="space-y-4">
                <h4 class="text-lg font-semibold">Audit Information</h4>
                <FormKit
                  type="text"
                  name="createdByAudit"
                  label="Created by"
                  placeholder="Enter created by"
                />
                <FormKit
                  type="text"
                  name="modifiedByAudit"
                  label="Modified by"
                  placeholder="Enter modified by"
                />
              </div>
              <div class="space-y-4">
                <!-- Empty space for balance -->
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
                variant="warning"
                @click="handleChkRegn"
              >
                ChkRegn
              </rs-button>
              <rs-button
                variant="secondary"
                @click="handleRemarks"
              >
                Remarks..
              </rs-button>
              <rs-button
                variant="info"
                @click="handleJBHist"
              >
                JB Hist
              </rs-button>
              <rs-button
                variant="primary"
                @click="handleVehicles"
              >
                Vehicles
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
  title: "Job Labors",
});

const { $swal } = useNuxtApp();

// Labor Details Table Data (5 rows)
const laborData = ref([
  {}, {}, {}, {}, {}
]);

// Overtime Table Data (5 rows)
const overtimeData = ref([
  {}, {}, {}, {}, {}
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

const handleChkRegn = () => {
  // Logic to check registration
};

const handleRemarks = () => {
  // Logic to handle remarks
};

const handleJBHist = () => {
  // Logic to handle job history
};

const handleVehicles = () => {
  // Logic to handle vehicles
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
