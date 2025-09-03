<template>
  <div>
    <LayoutsBreadcrumb />
    <rs-card>
      <template #header>
        <div class="flex">
          <Icon class="mr-2 flex justify-center" name="ic:outline-receipt"></Icon>
          Quotations
        </div>
      </template>
      <template #body>
        <div class="space-y-6">
          <FormKit type="form" :actions="false" @submit="handleSubmit">
            <!-- Top form fields -->
            <div class="grid grid-cols-6 gap-4">
              <!-- Row 1 -->
              <div class="col-span-2">
                <FormKit
                  type="text"
                  name="locationCodeName"
                  label="Location Code & Name"
                  :validation="[ ['required'] ]"
                  placeholder="Enter location code and name"
                />
              </div>
              <div>
                <FormKit
                  type="text"
                  name="quotationNo"
                  label="Quotation No"
                  :validation="[ ['required'] ]"
                  placeholder="Enter quotation number"
                />
              </div>
              <div>
                <FormKit
                  type="text"
                  name="enquiryNo"
                  label="Enquiry No"
                  :validation="[ ['required'] ]"
                  placeholder="Enter enquiry number"
                />
              </div>
              <div>
                <FormKit
                  type="text"
                  name="tenderSerialNo"
                  label="Tender Serial No"
                  :validation="[ ['required'] ]"
                  placeholder="Enter tender serial number"
                />
              </div>

              <!-- Row 2 -->
              <div class="col-span-2">
                <FormKit
                  type="text"
                  name="partyCodeName"
                  label="Party Code & Name"
                  :validation="[ ['required'] ]"
                  placeholder="Enter party code and name"
                />
              </div>
              <div class="col-span-2">
                <FormKit
                  type="text"
                  name="salesmanCodeName"
                  label="Salesman Code & Name"
                  :validation="[ ['required'] ]"
                  placeholder="Enter salesman code and name"
                />
              </div>
              <div>
                <FormKit
                  type="date"
                  name="quotationDate"
                  label="Quotation Date"
                  :validation="[ ['required'] ]"
                />
              </div>
              <div>
                <FormKit
                  type="date"
                  name="dated"
                  label="Dated"
                  :validation="[ ['required'] ]"
                />
              </div>

              <!-- Row 3 -->
              <div>
                <FormKit
                  type="text"
                  name="tenderNo"
                  label="Tender No"
                  :validation="[ ['required'] ]"
                  placeholder="Enter tender number"
                />
              </div>
              <div>
                <FormKit
                  type="text"
                  name="businessRegNo"
                  label="Business Registration No"
                  placeholder="Enter business registration number"
                />
              </div>
              <div>
                <FormKit
                  type="text"
                  name="nricNo"
                  label="NRIC No"
                  placeholder="Enter NRIC number"
                />
              </div>
              <div>
                <FormKit
                  type="text"
                  name="oldIcNo"
                  label="Old IC No"
                  placeholder="Enter old IC number"
                />
              </div>
              <div>
                <FormKit
                  type="select"
                  name="partyCategory"
                  label="Party Category"
                  :options="['Hot', 'Cold', 'Warm']"
                  placeholder="Select party category"
                />
              </div>
              <div>
                <FormKit
                  type="text"
                  name="modelName"
                  label="Model Name"
                  :validation="[ ['required'] ]"
                  placeholder="Enter model name"
                />
              </div>

              <!-- Row 4 -->
              <div class="col-span-3">
                <FormKit
                  type="textarea"
                  name="quotationRemarks"
                  label="Quotation Remarks"
                  placeholder="Enter remarks"
                />
              </div>
              <div class="col-span-3">
                <FormKit
                  type="text"
                  name="bodyDescription"
                  label="Body Description"
                  :validation="[ ['required'] ]"
                  placeholder="Enter body description"
                />
              </div>
            </div>

            <!-- Itemized Section -->
            <div class="mt-6 bg-gray-100 p-4 rounded-lg">
              <div class="flex justify-between items-center mb-4">
                <h3 class="text-lg font-medium">Itemized Section</h3>
              </div>
              <div class="grid grid-cols-6 gap-4">
                <!-- Row 1 -->
                <div>
                  <FormKit
                    type="text"
                    name="modelCode"
                    label="Model Code"
                    :validation="[ ['required'] ]"
                    placeholder="Enter model code"
                  />
                </div>
                <div>
                  <FormKit
                    type="select"
                    name="bodyType"
                    label="Body Type"
                    :options="['Type A', 'Type B', 'Type C']"
                    placeholder="Select body type"
                  />
                </div>
                <div>
                  <FormKit
                    type="number"
                    name="qty"
                    label="Qty"
                    :validation="[ ['required'], ['min', 0] ]"
                    placeholder="Enter quantity"
                  />
                </div>
                <div>
                  <FormKit
                    type="number"
                    name="bodyAmount"
                    label="Body Amount"
                    :validation="[ ['required'], ['min', 0] ]"
                    placeholder="Enter body amount"
                  />
                </div>
                <div>
                  <FormKit
                    type="text"
                    name="bodyGstTaxCodeRate"
                    label="Body GST Tax Code & Rate"
                    placeholder="Enter GST tax code and rate"
                  />
                </div>
                <div>
                  <FormKit
                    type="number"
                    name="grossAmount"
                    label="Gross Amount"
                    :validation="[ ['required'], ['min', 0] ]"
                    placeholder="Enter gross amount"
                  />
                </div>

                <!-- Row 2 -->
                <div>
                  <FormKit
                    type="number"
                    name="discount"
                    label="Discount"
                    :validation="[ ['min', 0] ]"
                    placeholder="Enter discount"
                  />
                </div>
                <div>
                  <FormKit
                    type="number"
                    name="netAmountGstAmount"
                    label="Net Amount GST Amount"
                    :validation="[ ['required'], ['min', 0] ]"
                    placeholder="Enter net amount after GST"
                  />
                </div>
                <div>
                  <FormKit
                    type="number"
                    name="total"
                    label="Total"
                    :validation="[ ['required'], ['min', 0] ]"
                    placeholder="Enter total amount"
                  />
                </div>
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
  title: "Quotations",
});

const { $swal } = useNuxtApp();

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