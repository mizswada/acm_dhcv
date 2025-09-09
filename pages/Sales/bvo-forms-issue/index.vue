<template>
  <div>
    <rs-card>
      <template #header>
        <div class="flex">
          <Icon class="mr-2 flex justify-center" name="ic:outline-description"></Icon>
          BVO Forms Issue
        </div>
      </template>
      <template #body>
        <div class="space-y-6">
          <FormKit type="form" :actions="false" @submit="handleSubmit">
            <!-- Top Section - Salesman and Location Details -->
            <div class="grid grid-cols-2 gap-6 mb-8">
              <div>
                <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Salesman Code & Name:</label>
                <div class="flex space-x-2">
                  <input v-model="formData.salesmanCode" type="text" class="w-24 px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Code" />
                  <input v-model="formData.salesmanName" type="text" class="flex-1 px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Name" />
                </div>
              </div>
              <div>
                <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Location Code & Name:</label>
                <input v-model="formData.locationCodeName" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter location code and name" />
              </div>
            </div>

            <!-- Main Data Entry Table - BVO Form Issuance -->
            <div class="space-y-4 mb-8">
              <div class="overflow-x-auto">
                <table class="w-full border-collapse border border-[rgb(var(--border-color))]">
                  <thead>
                    <tr class="bg-gray-50">
                      <th class="border border-[rgb(var(--border-color))] px-3 py-2 text-left text-sm font-medium text-[rgb(var(--text-color))]">Location Code & Name</th>
                      <th class="border border-[rgb(var(--border-color))] px-3 py-2 text-left text-sm font-medium text-[rgb(var(--text-color))]">From No</th>
                      <th class="border border-[rgb(var(--border-color))] px-3 py-2 text-left text-sm font-medium text-[rgb(var(--text-color))]">To No</th>
                      <th class="border border-[rgb(var(--border-color))] px-3 py-2 text-left text-sm font-medium text-[rgb(var(--text-color))]">Issue Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in bvoForms" :key="index">
                      <td class="border border-[rgb(var(--border-color))] px-3 py-2">
                        <input v-model="item.locationCodeName" type="text" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary" placeholder="Location code and name" />
                      </td>
                      <td class="border border-[rgb(var(--border-color))] px-3 py-2">
                        <input v-model="item.fromNo" type="text" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary" placeholder="From number" />
                      </td>
                      <td class="border border-[rgb(var(--border-color))] px-3 py-2">
                        <input v-model="item.toNo" type="text" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary" placeholder="To number" />
                      </td>
                      <td class="border border-[rgb(var(--border-color))] px-3 py-2">
                        <input v-model="item.issueDate" type="date" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Cancelled BVO Section -->
            <div class="space-y-4 mb-8">
              <h3 class="text-lg font-semibold text-[rgb(var(--text-color))]">Cancelled BVO</h3>
              <div class="overflow-x-auto">
                <table class="w-full border-collapse border border-[rgb(var(--border-color))]">
                  <thead>
                    <tr class="bg-gray-50">
                      <th class="border border-[rgb(var(--border-color))] px-3 py-2 text-left text-sm font-medium text-[rgb(var(--text-color))]">Cancelled Bvo No</th>
                      <th class="border border-[rgb(var(--border-color))] px-3 py-2 text-left text-sm font-medium text-[rgb(var(--text-color))]">Cancellation Date</th>
                      <th class="border border-[rgb(var(--border-color))] px-3 py-2 text-left text-sm font-medium text-[rgb(var(--text-color))]">Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in cancelledBvo" :key="index">
                      <td class="border border-[rgb(var(--border-color))] px-3 py-2">
                        <input v-model="item.cancelledBvoNo" type="text" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary" placeholder="Cancelled BVO number" />
                      </td>
                      <td class="border border-[rgb(var(--border-color))] px-3 py-2">
                        <input v-model="item.cancellationDate" type="date" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary" />
                      </td>
                      <td class="border border-[rgb(var(--border-color))] px-3 py-2">
                        <input v-model="item.remarks" type="text" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary" placeholder="Enter remarks" />
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
  title: "BVO Forms Issue",
});

const { $swal } = useNuxtApp();

// Form data
const formData = ref({
  salesmanCode: '',
  salesmanName: '',
  locationCodeName: ''
});

// BVO Forms data (8 rows)
const bvoForms = ref([
  { locationCodeName: '', fromNo: '', toNo: '', issueDate: '' },
  { locationCodeName: '', fromNo: '', toNo: '', issueDate: '' },
  { locationCodeName: '', fromNo: '', toNo: '', issueDate: '' },
  { locationCodeName: '', fromNo: '', toNo: '', issueDate: '' },
  { locationCodeName: '', fromNo: '', toNo: '', issueDate: '' },
  { locationCodeName: '', fromNo: '', toNo: '', issueDate: '' },
  { locationCodeName: '', fromNo: '', toNo: '', issueDate: '' },
  { locationCodeName: '', fromNo: '', toNo: '', issueDate: '' }
]);

// Cancelled BVO data (6 rows)
const cancelledBvo = ref([
  { cancelledBvoNo: '', cancellationDate: '', remarks: '' },
  { cancelledBvoNo: '', cancellationDate: '', remarks: '' },
  { cancelledBvoNo: '', cancellationDate: '', remarks: '' },
  { cancelledBvoNo: '', cancellationDate: '', remarks: '' },
  { cancelledBvoNo: '', cancellationDate: '', remarks: '' },
  { cancelledBvoNo: '', cancellationDate: '', remarks: '' }
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
        formData.value[key] = '';
      });
      
      bvoForms.value.forEach(item => {
        Object.keys(item).forEach(key => {
          item[key] = '';
        });
      });
      
      cancelledBvo.value.forEach(item => {
        Object.keys(item).forEach(key => {
          item[key] = '';
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

const handleSubmit = async (formData) => {
  try {
    // Validate that at least one BVO form has data
    const hasBvoData = bvoForms.value.some(item => 
      item.locationCodeName || item.fromNo || item.toNo || item.issueDate
    );

    if (!hasBvoData) {
      $swal.fire({
        title: 'Validation Error',
        text: 'Please enter at least one BVO form issuance!',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      return;
    }

    $swal.fire({
      title: 'Success!',
      text: 'BVO forms issue saved successfully!',
      icon: 'success',
      confirmButtonText: 'OK'
    }).then(() => {
      // Logic to handle successful save
    });
  } catch (error) {
    console.error('Error submitting form:', error);
    $swal.fire({
      title: 'Error!',
      text: 'An error occurred while saving the BVO forms issue.',
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