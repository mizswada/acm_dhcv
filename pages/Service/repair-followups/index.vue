<template>
  <div>
    <LayoutsBreadcrumb />
    <rs-card>
      <template #header>
        <div class="flex">
          <Icon class="mr-2 flex justify-center" name="ic:outline-build"></Icon>
          Repair Followups
        </div>
      </template>
      <template #body>
        <div class="space-y-6">
          <FormKit type="form" :actions="false" @submit="handleSubmit">
            <!-- General Information Section -->
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
              <div>
                <FormKit
                  type="date"
                  name="invoiceDate"
                  label="Invoice Date"
                  :value="new Date().toISOString().split('T')[0]"
                />
              </div>
              <div>
                <FormKit
                  type="text"
                  name="contactPerson"
                  label="Contact Person"
                  placeholder="Enter contact person"
                />
              </div>
              <div>
                <FormKit
                  type="text"
                  name="telephoneNo"
                  label="Telephone No"
                  placeholder="Enter telephone number"
                />
              </div>

              <!-- Row 2 -->
              <div class="col-span-2">
                <FormKit
                  type="text"
                  name="partyName"
                  label="Party Name"
                  placeholder="Enter party name"
                />
              </div>
              <div class="col-span-4">
                <FormKit
                  type="textarea"
                  name="repairDescription"
                  label="Repair Description"
                  placeholder="Enter repair description"
                  rows="3"
                />
              </div>
            </div>

            <!-- Repair Details Table Section -->
            <div class="mb-8">
              <h3 class="text-lg font-semibold mb-4">Repair Details</h3>
              <div class="overflow-x-auto">
                <table class="w-full border-collapse border border-gray-300">
                  <thead class="bg-gray-100">
                    <tr>
                      <th class="border border-gray-300 px-4 py-2 text-left">Job No</th>
                      <th class="border border-gray-300 px-4 py-2 text-left">Job Date</th>
                      <th class="border border-gray-300 px-4 py-2 text-left">Party Code</th>
                      <th class="border border-gray-300 px-4 py-2 text-left">Regn No</th>
                      <th class="border border-gray-300 px-4 py-2 text-left">Model Code</th>
                      <th class="border border-gray-300 px-4 py-2 text-left">Repair Code</th>
                      <th class="border border-gray-300 px-4 py-2 text-left">Next Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in repairData" :key="index" class="border-b">
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="text"
                          :name="`jobNo_${index}`"
                          placeholder="Enter job number"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="date"
                          :name="`jobDate_${index}`"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="text"
                          :name="`partyCode_${index}`"
                          placeholder="Enter party code"
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
                          :name="`modelCode_${index}`"
                          placeholder="Enter model code"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="text"
                          :name="`repairCode_${index}`"
                          placeholder="Enter repair code"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="date"
                          :name="`nextDate_${index}`"
                          outer-class="mb-0"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- First Audit Fields Section -->
            <div class="grid grid-cols-2 gap-6 mb-8">
              <div class="space-y-4">
                <FormKit
                  type="text"
                  name="createdBy1"
                  label="Created By"
                  placeholder="Enter created by"
                />
              </div>
              <div class="space-y-4">
                <FormKit
                  type="text"
                  name="modifiedBy1"
                  label="Modified By"
                  placeholder="Enter modified by"
                />
              </div>
            </div>

            <!-- Defect Details Table Section -->
            <div class="mb-8">
              <h3 class="text-lg font-semibold mb-4">Defect Details</h3>
              <div class="overflow-x-auto">
                <table class="w-full border-collapse border border-gray-300">
                  <thead class="bg-gray-100">
                    <tr>
                      <th class="border border-gray-300 px-4 py-2 text-left">Defect Code & Description</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Type</th>
                      <th class="border border-gray-300 px-4 py-2 text-center">Sublet</th>
                      <th class="border border-gray-300 px-4 py-2 text-left">Vendor</th>
                      <th class="border border-gray-300 px-4 py-2 text-left">Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in defectData" :key="index" class="border-b">
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="text"
                          :name="`defectCode_${index}`"
                          placeholder="Enter defect code & description"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="select"
                          :name="`defectType_${index}`"
                          :options="[
                            { label: 'Select Type', value: '' },
                            { label: 'Mechanical', value: 'mechanical' },
                            { label: 'Electrical', value: 'electrical' },
                            { label: 'Body', value: 'body' }
                          ]"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2 text-center">
                        <div class="flex items-center justify-center space-x-2">
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
                          :name="`vendor_${index}`"
                          placeholder="Enter vendor"
                          outer-class="mb-0"
                        />
                      </td>
                      <td class="border border-gray-300 px-2 py-2">
                        <FormKit
                          type="text"
                          :name="`remarks_${index}`"
                          placeholder="Enter remarks"
                          outer-class="mb-0"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Second Audit Fields Section -->
            <div class="grid grid-cols-2 gap-6 mb-8">
              <div class="space-y-4">
                <FormKit
                  type="text"
                  name="createdBy2"
                  label="Created By"
                  placeholder="Enter created by"
                />
              </div>
              <div class="space-y-4">
                <FormKit
                  type="text"
                  name="modifiedBy2"
                  label="Modified By"
                  placeholder="Enter modified by"
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
  title: "Repair Followups",
});

const { $swal } = useNuxtApp();

// Repair Details Table Data (4 rows)
const repairData = ref([
  {}, {}, {}, {}
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