<template> 
    <div>
    <rs-card>
      <template #header>
        <div class="flex">
          <Icon class="mr-2 flex justify-center" name="ic:outline-work"></Icon>
          Job Order
        </div>
      </template>
      <template #body>
        <div class="space-y-6">
          <FormKit type="form" :actions="false" @submit="handleSubmit">
            <!-- General Job Information Section -->
            <div class="grid grid-cols-3 gap-6 mb-8">
              <!-- Left Column - Job & Customer Details -->
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
                  type="select"
                  name="jobType"
                  label="Job Type"
                  :options="[
                    { label: 'Select Job Type', value: '' },
                    { label: 'Repair', value: 'repair' },
                    { label: 'Maintenance', value: 'maintenance' }
                  ]"
                />
                <FormKit
                  type="select"
                  name="paymentType"
                  label="Payment Type"
                  :options="[
                    { label: 'Select Payment Type', value: '' },
                    { label: 'Cash', value: 'cash' },
                    { label: 'Credit', value: 'credit' }
                  ]"
                />
                <FormKit
                  type="text"
                  name="customerCode"
                  label="Customer Code"
                  placeholder="Enter customer code"
                />
                <FormKit
                  type="text"
                  name="regnNo"
                  label="Regn No"
                  placeholder="Enter registration number"
                />
                <FormKit
                  type="text"
                  name="kadKeluarga"
                  label="Kad Keluarga"
                  placeholder="Enter Kad Keluarga"
                />
                <FormKit
                  type="text"
                  name="chassisNo"
                  label="Chassis No"
                  placeholder="Enter chassis number"
                />
                <FormKit
                  type="text"
                  name="campaign"
                  label="Campaign"
                  placeholder="Enter campaign"
                />
                <FormKit
                  type="text"
                  name="mechanic"
                  label="Mechanic"
                  placeholder="Enter mechanic name"
                />
                <FormKit
                  type="text"
                  name="supervisor"
                  label="Supervisor"
                  placeholder="Enter supervisor name"
                />
                <FormKit
                  type="date"
                  name="deliveryDate"
                  label="Delivery Date"
                />
                <FormKit
                  type="date"
                  name="invoiceDate"
                  label="Invoice Date"
                />
                <FormKit
                  type="textarea"
                  name="visualCheck"
                  label="Visual Check"
                  placeholder="Enter visual check details"
                  rows="3"
                />
                <FormKit
                  type="text"
                  name="model"
                  label="Model"
                  placeholder="Enter vehicle model"
                />
                <FormKit
                  type="date"
                  name="massaEffective"
                  label="Massa Effective"
                />
                <FormKit
                  type="date"
                  name="massaExpiry"
                  label="Massa Expiry"
                />
                <FormKit
                  type="text"
                  name="engNo"
                  label="Eng No"
                  placeholder="Enter engine number"
                />
                <FormKit
                  type="number"
                  name="mileage"
                  label="Mileage"
                  placeholder="Enter mileage"
                />
                <FormKit
                  type="text"
                  name="package"
                  label="Package"
                  placeholder="Enter package"
                />
              </div>

              <!-- Middle Column - Job Specifics & Vehicle Details -->
              <div class="space-y-4">
                <FormKit
                  type="text"
                  name="oldRefNo"
                  label="Old Ref No"
                  placeholder="Enter old reference number"
                />
                <FormKit
                  type="text"
                  name="jobNo"
                  label="Job No"
                  placeholder="Enter job number"
                />
                <FormKit
                  type="date"
                  name="date"
                  label="Date"
                  :value="new Date().toISOString().split('T')[0]"
                />
                <FormKit
                  type="time"
                  name="inTime"
                  label="In Time"
                />
                <FormKit
                  type="select"
                  name="jobClass"
                  label="Job Class"
                  :options="[
                    { label: 'Select Job Class', value: '' },
                    { label: 'Standard', value: 'standard' },
                    { label: 'Premium', value: 'premium' }
                  ]"
                />
                <FormKit
                  type="select"
                  name="repType"
                  label="Rep Type"
                  :options="[
                    { label: 'Select Repair Type', value: '' },
                    { label: 'Warranty', value: 'warranty' },
                    { label: 'Customer Pay', value: 'customer_pay' }
                  ]"
                />
                <FormKit
                  type="text"
                  name="bookingNo"
                  label="Booking No"
                  placeholder="Enter booking number"
                />
                <FormKit
                  type="date"
                  name="bookingDt"
                  label="Booking Dt"
                />
                <FormKit
                  type="number"
                  name="estAmt"
                  label="Est Amt"
                  :value="0.00"
                  step="0.01"
                />
                <FormKit
                  type="text"
                  name="poNo"
                  label="PO No"
                  placeholder="Enter PO number"
                />
                <FormKit
                  type="time"
                  name="jobStartTime"
                  label="Job Start time"
                />
                <div class="flex items-center space-x-2">
                  <FormKit
                    type="checkbox"
                    name="vehicleReady"
                    label="Vehicle Ready"
                  />
                </div>
                <FormKit
                  type="date"
                  name="readyDate"
                  label="Ready Date"
                />
                <FormKit
                  type="time"
                  name="readyTime"
                  label="Ready Time"
                />
                <div class="flex items-center space-x-2">
                  <FormKit
                    type="checkbox"
                    name="delivered"
                    label="Delivered"
                  />
                </div>
                <FormKit
                  type="number"
                  name="nextVisitMileage"
                  label="Next Visit Mileage"
                  :value="0"
                />
                <FormKit
                  type="date"
                  name="nextVisitDate"
                  label="Next Visit Date"
                />
              </div>

              <!-- Right Column - Credit Limits -->
              <div class="space-y-4 bg-gray-100 p-4 rounded-lg">
                <h4 class="text-blue-600 font-semibold">Credit Limits</h4>
                <FormKit
                  type="number"
                  name="clApproved"
                  label="CL Approved"
                  :value="0.00"
                  step="0.01"
                />
                <FormKit
                  type="number"
                  name="clUsed"
                  label="CL Used"
                  :value="0.00"
                  step="0.01"
                />
                <FormKit
                  type="number"
                  name="clAvailable"
                  label="CL Availabe"
                  :value="0.00"
                  step="0.01"
                />
                <FormKit
                  type="number"
                  name="clOverWrt"
                  label="CL Over Wrt"
                  step="0.01"
                />
                <FormKit
                  type="number"
                  name="crPeriod"
                  label="CR Period"
                />
                <FormKit
                  type="number"
                  name="periodUsed"
                  label="Period Used"
                />
                <FormKit
                  type="date"
                  name="oldInvDt"
                  label="Old Inv Dt."
                />
                <FormKit
                  type="text"
                  name="oldInvNo"
                  label="Old Inv No."
                  placeholder="Enter old invoice number"
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
                  type="text"
                  name="jobCloseBy"
                  label="Job Close by"
                  placeholder="Enter job closer name"
                />
              </div>
            </div>

            <!-- Defect & Remarks Section -->
            <div class="grid grid-cols-2 gap-6 mb-8">
              <!-- Left Side - Defect Code & Description -->
              <div>
                <h3 class="text-lg font-semibold mb-4">Defect Code & Description</h3>
                <div class="space-y-4">
                  <div v-for="(defect, index) in defectCodes" :key="index" class="flex gap-2">
                    <FormKit
                      type="text"
                      :name="`defectCodes.${index}.code`"
                      placeholder="Enter defect code"
                      outer-class="mb-0 flex-1"
                    />
                    <FormKit
                      type="select"
                      :name="`defectCodes.${index}.description`"
                      :options="[
                        { label: 'Select Description', value: '' },
                        { label: 'Engine Issue', value: 'engine' },
                        { label: 'Brake Problem', value: 'brake' }
                      ]"
                      outer-class="mb-0 flex-1"
                    />
                  </div>
                </div>
              </div>

              <!-- Right Side - Remarks -->
              <div>
                <h3 class="text-lg font-semibold mb-4">Remarks</h3>
                <div class="space-y-4">
                  <div class="flex items-center space-x-2">
                    <FormKit
                      type="checkbox"
                      name="cancelled"
                      label="Cancelled"
                    />
                  </div>
                  <FormKit
                    type="textarea"
                    name="remarks"
                    placeholder="Enter remarks"
                    rows="6"
                  />
                  
                  <!-- Checkbox pairs -->
                  <div class="space-y-2">
                    <div class="flex items-center space-x-4">
                      <div class="flex items-center space-x-2">
                        <FormKit
                          type="checkbox"
                          name="major1"
                          label="Major"
                          :value="true"
                        />
                        <FormKit
                          type="checkbox"
                          name="repeat1"
                          label="Repeat"
                          :value="true"
                        />
                      </div>
                    </div>
                    <div class="flex items-center space-x-4">
                      <div class="flex items-center space-x-2">
                        <FormKit
                          type="checkbox"
                          name="major2"
                          label="Major"
                        />
                        <FormKit
                          type="checkbox"
                          name="repeat2"
                          label="Repeat"
                        />
                      </div>
                    </div>
                    <div class="flex items-center space-x-4">
                      <div class="flex items-center space-x-2">
                        <FormKit
                          type="checkbox"
                          name="major3"
                          label="Major"
                        />
                        <FormKit
                          type="checkbox"
                          name="repeat3"
                          label="Repeat"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex justify-between items-center pt-6 border-t">
              <!-- Main Action Buttons -->
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
                  @click="handleChkRegn"
                >
                  ChkRegn
                </rs-button>
                <rs-button
                  variant="primary"
                  @click="handleCoupon"
                >
                  Coupon
                </rs-button>
                <rs-button
                  variant="secondary"
                  @click="handleJBHist"
                >
                  JB Hist
                </rs-button>
                <rs-button
                  variant="info"
                  @click="handleVehicles"
                >
                  Vehicles
                </rs-button>
                <rs-button
                  variant="warning"
                  @click="handleJobLbr"
                >
                  Job Lbr..
                </rs-button>
                <rs-button
                  variant="primary"
                  @click="handleQuotation"
                >
                  Quotation
                </rs-button>
              </div>

              <!-- Right Side Buttons -->
              <div class="flex flex-col space-y-2">
                <rs-button
                  variant="danger"
                  @click="handleJobClose"
                >
                  Job-Close
                </rs-button>
                <rs-button
                  variant="secondary"
                  @click="handleCSVFile"
                >
                  CSV File
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
    title: "Job Cards",
});

const { $swal } = useNuxtApp();

// Initialize defect codes with 3 empty rows
const defectCodes = ref(Array(3).fill({}));

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
  window.location.reload();
};

const handlePrint = () => console.log('Print action triggered');
const handleChkRegn = () => console.log('ChkRegn action triggered');
const handleCoupon = () => console.log('Coupon action triggered');
const handleJBHist = () => console.log('JB Hist action triggered');
const handleVehicles = () => console.log('Vehicles action triggered');
const handleJobLbr = () => console.log('Job Lbr action triggered');
const handleQuotation = () => console.log('Quotation action triggered');
const handleJobClose = () => console.log('Job Close action triggered');
const handleCSVFile = () => console.log('CSV File action triggered');

const handleSubmit = async (formData) => {
  try {
    console.log('Form submitted:', formData);
    $swal.fire({
      title: 'Success!',
      text: 'Job Order saved successfully!',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  } catch (error) {
    console.error('Error submitting form:', error);
    $swal.fire({
      title: 'Error!',
      text: 'Failed to save Job Order. Please try again.',
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
