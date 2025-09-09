<template>
  <div>
    <rs-card>
      <template #header>
        <div class="flex">
          <Icon class="mr-2 flex justify-center" name="ic:outline-swap-horiz"></Icon>
          Fixed Asset Transfer
        </div>
      </template>
      <template #body>
        <div class="space-y-6">
          <FormKit type="form" :actions="false" @submit="handleSubmit">
            <!-- Header Section -->
            <div class="space-y-4 mb-8">
              <div class="grid grid-cols-3 gap-4">
                <FormKit
                  type="text"
                  name="transferNo"
                  label="Transfer No"
                  placeholder="Enter transfer number"
                />
                <FormKit
                  type="text"
                  name="fixedAsset"
                  label="Fixed Asset"
                  placeholder="Enter fixed asset"
                />
                <FormKit
                  type="date"
                  name="transferDate"
                  label="Transfer Date"
                  :value="new Date().toISOString().split('T')[0]"
                />
              </div>
              <FormKit
                type="textarea"
                name="description"
                label="Description"
                placeholder="Enter description"
                rows="3"
              />
            </div>

            <!-- From Section -->
            <div class="mb-8">
              <rs-card>
                <template #header>
                  <div class="flex">
                    <Icon class="mr-2 flex justify-center" name="ic:outline-arrow-back"></Icon>
                    From
                  </div>
                </template>
                <template #body>
                  <div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                      <div class="space-y-2">
                        <label class="text-sm font-medium">Category Code</label>
                        <div class="flex space-x-2">
                          <FormKit
                            type="text"
                            name="fromCategoryCode"
                            placeholder="Code"
                            outer-class="flex-1"
                          />
                          <FormKit
                            type="text"
                            name="fromCategoryDesc"
                            placeholder="Description"
                            outer-class="flex-1"
                          />
                        </div>
                      </div>
                      <div class="space-y-2">
                        <label class="text-sm font-medium">Subcategory Code</label>
                        <div class="flex space-x-2">
                          <FormKit
                            type="text"
                            name="fromSubcategoryCode"
                            placeholder="Code"
                            outer-class="flex-1"
                          />
                          <FormKit
                            type="text"
                            name="fromSubcategoryDesc"
                            placeholder="Description"
                            outer-class="flex-1"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                      <div class="space-y-2">
                        <label class="text-sm font-medium">Subsubcategory Code</label>
                        <div class="flex space-x-2">
                          <FormKit
                            type="text"
                            name="fromSubsubcategoryCode"
                            placeholder="Code"
                            outer-class="flex-1"
                          />
                          <FormKit
                            type="text"
                            name="fromSubsubcategoryDesc"
                            placeholder="Description"
                            outer-class="flex-1"
                          />
                        </div>
                      </div>
                      <div class="space-y-2">
                        <label class="text-sm font-medium">Location Code</label>
                        <div class="flex space-x-2">
                          <FormKit
                            type="text"
                            name="fromLocationCode"
                            placeholder="Code"
                            outer-class="flex-1"
                          />
                          <FormKit
                            type="text"
                            name="fromLocationDesc"
                            placeholder="Description"
                            outer-class="flex-1"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                      <div class="space-y-2">
                        <label class="text-sm font-medium">Dept Code</label>
                        <div class="flex space-x-2">
                          <FormKit
                            type="text"
                            name="fromDeptCode"
                            placeholder="Code"
                            outer-class="flex-1"
                          />
                          <FormKit
                            type="text"
                            name="fromDeptDesc"
                            placeholder="Description"
                            outer-class="flex-1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
              </rs-card>
            </div>

            <!-- To Section -->
            <div class="mb-8">
              <rs-card>
                <template #header>
                  <div class="flex">
                    <Icon class="mr-2 flex justify-center" name="ic:outline-arrow-forward"></Icon>
                    To
                  </div>
                </template>
                <template #body>
                  <div class="space-y-4">
                    <div class="grid grid-cols-2 gap-4">
                      <div class="space-y-2">
                        <label class="text-sm font-medium">Category Code</label>
                        <div class="flex space-x-2">
                          <FormKit
                            type="text"
                            name="toCategoryCode"
                            placeholder="Code"
                            outer-class="flex-1"
                          />
                          <FormKit
                            type="text"
                            name="toCategoryDesc"
                            placeholder="Description"
                            outer-class="flex-1"
                          />
                        </div>
                      </div>
                      <div class="space-y-2">
                        <label class="text-sm font-medium">Subcategory Code</label>
                        <div class="flex space-x-2">
                          <FormKit
                            type="text"
                            name="toSubcategoryCode"
                            placeholder="Code"
                            outer-class="flex-1"
                          />
                          <FormKit
                            type="text"
                            name="toSubcategoryDesc"
                            placeholder="Description"
                            outer-class="flex-1"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                      <div class="space-y-2">
                        <label class="text-sm font-medium">Subsubcategory Code</label>
                        <div class="flex space-x-2">
                          <FormKit
                            type="text"
                            name="toSubsubcategoryCode"
                            placeholder="Code"
                            outer-class="flex-1"
                          />
                          <FormKit
                            type="text"
                            name="toSubsubcategoryDesc"
                            placeholder="Description"
                            outer-class="flex-1"
                          />
                        </div>
                      </div>
                      <div class="space-y-2">
                        <label class="text-sm font-medium">Location Code</label>
                        <div class="flex space-x-2">
                          <FormKit
                            type="text"
                            name="toLocationCode"
                            placeholder="Code"
                            outer-class="flex-1"
                          />
                          <FormKit
                            type="text"
                            name="toLocationDesc"
                            placeholder="Description"
                            outer-class="flex-1"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                      <div class="space-y-2">
                        <label class="text-sm font-medium">Dept Code</label>
                        <div class="flex space-x-2">
                          <FormKit
                            type="text"
                            name="toDeptCode"
                            placeholder="Code"
                            outer-class="flex-1"
                          />
                          <FormKit
                            type="text"
                            name="toDeptDesc"
                            placeholder="Description"
                            outer-class="flex-1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
              </rs-card>
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
  title: "Fixed Asset Transfer",
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