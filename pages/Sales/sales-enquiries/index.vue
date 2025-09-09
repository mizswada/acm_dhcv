<template>
  <div>
    <rs-card>
      <template #header>
        <div class="flex">
          <Icon class="mr-2 flex justify-center" name="ic:outline-search"></Icon>
          Sales Enquiries
        </div>
      </template>
      <template #body>
        <div class="space-y-6">
          <FormKit type="form" :actions="false" @submit="handleSubmit">
            <!-- Top Section - Enquiry Header Details -->
            <div class="grid grid-cols-2 gap-6 mb-8">
              <!-- Left Column -->
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Location Code & Name:</label>
                  <input v-model="formData.locationCodeName" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter location code and name" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Enquiry No:</label>
                  <input v-model="formData.enquiryNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter enquiry number" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Customer Type:</label>
                  <select v-model="formData.customerType" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                    <option value="Existing">Existing</option>
                    <option value="New">New</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Party Code (Existing):</label>
                  <input v-model="formData.partyCode" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter party code" />
                </div>
              </div>

              <!-- Right Column -->
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Enquiry Date:</label>
                  <input v-model="formData.enquiryDate" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="22/06/2022" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Status:</label>
                  <select v-model="formData.status" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Name & Address (New):</label>
                  <textarea v-model="formData.nameAddress" rows="4" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter name and address"></textarea>
                </div>
              </div>
            </div>

            <!-- Middle Section - Contact & Sales Information -->
            <div class="grid grid-cols-2 gap-6 mb-8">
              <!-- Left Column -->
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Contact Person:</label>
                  <input v-model="formData.contactPerson" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter contact person" />
                </div>
                <div class="flex space-x-4">
                  <div class="flex-1">
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Phone (Hand):</label>
                    <input v-model="formData.phoneHand" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter hand phone" />
                  </div>
                  <div class="flex-1">
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">(Office):</label>
                    <input v-model="formData.phoneOffice" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter office phone" />
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Salesman Code & Name:</label>
                  <input v-model="formData.salesmanCodeName" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter salesman code and name" />
                </div>
              </div>

              <!-- Right Column -->
              <div class="space-y-4">
                <div class="flex space-x-4">
                  <div class="flex-1">
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Business:</label>
                    <div class="flex">
                      <input v-model="formData.business" type="text" class="flex-1 px-3 py-2 border border-[rgb(var(--border-color))] rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter business" />
                      <select class="px-2 py-2 border border-l-0 border-[rgb(var(--border-color))] rounded-r-md bg-gray-50">
                        <option>▼</option>
                      </select>
                    </div>
                  </div>
                  <div class="flex-1">
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Source:</label>
                    <div class="flex">
                      <input v-model="formData.source" type="text" class="flex-1 px-3 py-2 border border-[rgb(var(--border-color))] rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter source" />
                      <select class="px-2 py-2 border border-l-0 border-[rgb(var(--border-color))] rounded-r-md bg-gray-50">
                        <option>▼</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Remarks Section -->
            <div class="mb-8">
              <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Remarks:</label>
              <textarea v-model="formData.remarks" rows="3" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter remarks"></textarea>
            </div>

            <!-- Requirement Data Entry Table -->
            <div class="space-y-4 mb-8">
              <h3 class="text-lg font-semibold text-[rgb(var(--text-color))]">Requirment</h3>
              <div class="overflow-x-auto">
                <table class="w-full border-collapse border border-[rgb(var(--border-color))]">
                  <thead>
                    <tr class="bg-gray-50">
                      <th class="border border-[rgb(var(--border-color))] px-3 py-2 text-left text-sm font-medium text-[rgb(var(--text-color))]">Model Code</th>
                      <th class="border border-[rgb(var(--border-color))] px-3 py-2 text-left text-sm font-medium text-[rgb(var(--text-color))]">Body Type</th>
                      <th class="border border-[rgb(var(--border-color))] px-3 py-2 text-left text-sm font-medium text-[rgb(var(--text-color))]">Color Code</th>
                      <th class="border border-[rgb(var(--border-color))] px-3 py-2 text-left text-sm font-medium text-[rgb(var(--text-color))]">Qty</th>
                      <th class="border border-[rgb(var(--border-color))] px-3 py-2 text-left text-sm font-medium text-[rgb(var(--text-color))]">Finance Required</th>
                      <th class="border border-[rgb(var(--border-color))] px-3 py-2 text-left text-sm font-medium text-[rgb(var(--text-color))]">Demo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in requirements" :key="index">
                      <td class="border border-[rgb(var(--border-color))] px-3 py-2">
                        <div class="flex">
                          <input v-model="item.modelCode" type="text" class="flex-1 px-2 py-1 border border-[rgb(var(--border-color))] rounded-l focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary" placeholder="Model code" />
                          <select class="px-2 py-1 border border-l-0 border-[rgb(var(--border-color))] rounded-r bg-gray-50">
                            <option>▼</option>
                          </select>
                        </div>
                      </td>
                      <td class="border border-[rgb(var(--border-color))] px-3 py-2">
                        <input v-model="item.bodyType" type="text" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary" placeholder="Body type" />
                      </td>
                      <td class="border border-[rgb(var(--border-color))] px-3 py-2">
                        <input v-model="item.colorCode" type="text" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary" placeholder="Color code" />
                      </td>
                      <td class="border border-[rgb(var(--border-color))] px-3 py-2">
                        <input v-model="item.qty" type="number" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary" placeholder="0" />
                      </td>
                      <td class="border border-[rgb(var(--border-color))] px-3 py-2 text-center">
                        <input v-model="item.financeRequired" type="checkbox" class="mr-2" />
                      </td>
                      <td class="border border-[rgb(var(--border-color))] px-3 py-2 text-center">
                        <input v-model="item.demo" type="checkbox" class="mr-2" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Action Buttons - Bottom Center -->
            <div class="flex justify-center space-x-4 pt-6 pb-4 border-t border-[rgb(var(--border-color))]">
              <rs-button variant="secondary-outline" @click="handleCancel">Cancel</rs-button>
              <rs-button variant="info" @click="handleRefresh">Refresh</rs-button>
              <rs-button variant="success" btn-type="submit">Save</rs-button>
              <rs-button variant="success" @click="handleFollowup">Follow-up</rs-button>
              <rs-button variant="success" @click="handleExistUnit">Exist..Unit</rs-button>
            </div>
          </FormKit>
        </div>
      </template>
    </rs-card>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useNuxtApp } from '#app';

definePageMeta({
  title: "Sales Enquiries",
});

const { $swal } = useNuxtApp();

// Form data
const formData = ref({
  locationCodeName: '',
  enquiryNo: '',
  enquiryDate: '22/06/2022',
  customerType: 'Existing',
  status: 'Pending',
  partyCode: '',
  nameAddress: '',
  contactPerson: '',
  phoneHand: '',
  phoneOffice: '',
  business: '',
  source: '',
  salesmanCodeName: '',
  remarks: ''
});

// Requirements data
const requirements = ref([
  { modelCode: '', bodyType: '', colorCode: '', qty: '', financeRequired: false, demo: false },
  { modelCode: '', bodyType: '', colorCode: '', qty: '', financeRequired: false, demo: false },
  { modelCode: '', bodyType: '', colorCode: '', qty: '', financeRequired: false, demo: false },
  { modelCode: '', bodyType: '', colorCode: '', qty: '', financeRequired: false, demo: false },
  { modelCode: '', bodyType: '', colorCode: '', qty: '', financeRequired: false, demo: false },
  { modelCode: '', bodyType: '', colorCode: '', qty: '', financeRequired: false, demo: false }
]);

// Action handlers
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
      // Reset form data
      Object.keys(formData.value).forEach(key => {
        if (key === 'enquiryDate') {
          formData.value[key] = '22/06/2022';
        } else if (key === 'customerType') {
          formData.value[key] = 'Existing';
        } else if (key === 'status') {
          formData.value[key] = 'Pending';
        } else {
          formData.value[key] = '';
        }
      });
      
      requirements.value.forEach(item => {
        Object.keys(item).forEach(key => {
          if (typeof item[key] === 'boolean') {
            item[key] = false;
          } else {
            item[key] = '';
          }
        });
      });
    }
  });
};

const handleRefresh = () => {
  $swal.fire({
    title: 'Refresh',
    text: 'Form data will be refreshed!',
    icon: 'info',
    confirmButtonText: 'OK'
  }).then(() => {
    // Logic to refresh the form
  });
};

const handleFollowup = () => {
  $swal.fire({
    title: 'Follow-up',
    text: 'Follow-up action triggered!',
    icon: 'info',
    confirmButtonText: 'OK'
  }).then(() => {
    // Logic to handle Follow-up action
  });
};

const handleExistUnit = () => {
  $swal.fire({
    title: 'Existing Unit',
    text: 'Existing Unit action triggered!',
    icon: 'info',
    confirmButtonText: 'OK'
  }).then(() => {
    // Logic to handle Existing Unit action
  });
};

const handleSubmit = async (formData) => {
  try {
    // Validate that at least one requirement has data
    const hasRequirementData = requirements.value.some(item => 
      item.modelCode || item.bodyType || item.colorCode || item.qty
    );

    if (!hasRequirementData) {
      $swal.fire({
        title: 'Validation Error',
        text: 'Please enter at least one requirement!',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      return;
    }

    $swal.fire({
      title: 'Success!',
      text: 'Sales enquiry saved successfully!',
      icon: 'success',
      confirmButtonText: 'OK'
    }).then(() => {
      // Logic to handle successful save
    });
  } catch (error) {
    console.error('Error submitting form:', error);
    $swal.fire({
      title: 'Error!',
      text: 'An error occurred while saving the enquiry.',
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }
};

// Keyboard shortcuts
const handleKeyDown = (event) => {
  if (event.altKey) {
    switch (event.key.toLowerCase()) {
      case 'c':
        event.preventDefault();
        handleCancel();
        break;
      case 'r':
        event.preventDefault();
        handleRefresh();
        break;
      case 's':
        event.preventDefault();
        handleSubmit(formData.value);
        break;
      case 'f':
        event.preventDefault();
        handleFollowup();
        break;
      case 'e':
        event.preventDefault();
        handleExistUnit();
        break;
    }
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown);
});
</script>

<style scoped>
/* Add any additional styles here */
</style>