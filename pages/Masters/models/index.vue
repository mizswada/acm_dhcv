<template>
  <div>
    <rs-card>
      <template #header>
        <div class="flex">
          <Icon class="mr-2 flex justify-center" name="ic:outline-directions-car"></Icon>
          Models
        </div>
      </template>
      <template #body>
        <div class="space-y-6">
          <FormKit type="form" :actions="false" @submit="handleSubmit">
            <div class="grid grid-cols-6 gap-4">
              <!-- Row 1 -->
              <div class="col-span-2">
                <FormKit
                  type="text"
                  name="modelCode"
                  label="Model Code & Description"
                  :validation="[ ['required'] ]"
                  placeholder="Enter model code and description"
                />
              </div>
              <div>
                <FormKit
                  type="text"
                  name="modelCategory"
                  label="Model Category"
                  :validation="[ ['required'] ]"
                  placeholder="Enter model category"
                />
              </div>
              <div>
                <FormKit
                  type="number"
                  name="yenPrice"
                  label="Yen Price"
                  :validation="[ ['required'], ['min', 0] ]"
                  placeholder="Enter price in yen"
                />
              </div>
              <div>
                <FormKit
                  type="number"
                  name="accessoryFittingCharges"
                  label="Accessory Fitting Charges"
                  :validation="[ ['required'], ['min', 0] ]"
                  placeholder="Enter fitting charges"
                />
              </div>
              <div>
                <FormKit
                  type="number"
                  name="wheelBase"
                  label="Wheel Base"
                  :validation="[ ['required'], ['min', 0] ]"
                  placeholder="Enter wheel base"
                />
              </div>

              <!-- Row 2 -->
              <div class="col-span-3">
                <FormKit
                  type="textarea"
                  name="specs"
                  label="Specs"
                  :validation="[ ['required'] ]"
                  placeholder="Enter additional specifications"
                />
              </div>
              <div>
                <FormKit
                  type="text"
                  name="year"
                  label="Year"
                  :validation="[ ['required'], ['length', 4, 4] ]"
                  placeholder="Enter model year"
                />
              </div>
              <div>
                <FormKit
                  type="text"
                  name="chassisNumberPrefix"
                  label="Chassis Number Prefix"
                  :validation="[ ['required'] ]"
                  placeholder="Enter chassis number prefix"
                />
              </div>
              <div>
                <FormKit
                  type="text"
                  name="groupCode"
                  label="Group Code"
                  :validation="[ ['required'] ]"
                  placeholder="Enter group code"
                />
              </div>

              <!-- Row 3 -->
              <div>
                <FormKit
                  type="number"
                  name="shippingTime"
                  label="Shipping Time"
                  :validation="[ ['required'], ['min', 0] ]"
                  placeholder="Enter shipping time"
                />
              </div>
              <div>
                <FormKit
                  type="number"
                  name="assemblyTime"
                  label="Assembly Time"
                  :validation="[ ['required'], ['min', 0] ]"
                  placeholder="Enter assembly time"
                />
              </div>
              <div>
                <FormKit
                  type="number"
                  name="commission"
                  label="Commission"
                  :validation="[ ['required'], ['min', 0] ]"
                  placeholder="Enter commission"
                />
              </div>
              <div>
                <FormKit
                  type="number"
                  name="dealerMargin"
                  label="Dealer Margin"
                  :validation="[ ['required'], ['min', 0] ]"
                  placeholder="Enter dealer margin"
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
              <div class="flex items-center space-x-2 pt-6">
                <div class="flex items-center">
                  <span class="text-sm font-medium mr-2">ACM Model:</span>
                  <FormKit
                    type="checkbox"
                    name="acmModel"
                    label=""
                  />
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
  title: "Models",
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