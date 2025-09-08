<template>
  <div>
    <LayoutsBreadcrumb />
    
    <rs-card>
      <template #header>
        <div class="flex items-center space-x-2">
          <Icon name="heroicons:document-text" class="w-5 h-5" />
          <h2 class="text-lg font-semibold text-[rgb(var(--text-color))]">Documentation Clearance Request</h2>
        </div>
      </template>

      <template #body>
        <div class="space-y-6">
          <FormKit
            type="form"
            @submit="handleSubmit"
            :actions="false"
          >
            <!-- Request Details Section -->
            <div class="grid grid-cols-4 gap-6 mb-8">
              <div>
                <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Location Code:</label>
                <input v-model="formData.locationCode" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter location code" />
              </div>
              <div>
                <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Request Date:</label>
                <input v-model="formData.requestDate" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="22/06/2022" />
              </div>
              <div>
                <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Request No:</label>
                <input v-model="formData.requestNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter request number" />
              </div>
              <div></div>
              <div class="col-span-2">
                <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Body Description:</label>
                <input v-model="formData.bodyDescription" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter body description" />
              </div>
              <div class="col-span-2">
                <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Color Description:</label>
                <input v-model="formData.colorDescription" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter color description" />
              </div>
              <div class="col-span-2">
                <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Model Name:</label>
                <input v-model="formData.modelName" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter model name" />
              </div>
            </div>

            <!-- Data Entry Table Section -->
            <div class="mt-8">
              <h3 class="text-lg font-medium text-[rgb(var(--text-color))] mb-4">Documentation Details</h3>
              <div class="overflow-x-auto">
                <table class="w-full border border-[rgb(var(--border-color))] rounded-lg">
                  <thead class="bg-gray-50">
                    <tr>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))] w-20">
                        <div class="writing-mode-vertical text-center">Cancelled</div>
                      </th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">BVO No</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Model</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Chassis No</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">EDRF No</th>
                      <th class="px-4 py-3 text-center text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))] w-20">
                        <div class="transform -rotate-45 origin-center">
                          <div class="flex items-center justify-center space-x-1">
                            <span>Insured</span>
                            <input type="checkbox" class="w-3 h-3" checked />
                          </div>
                        </div>
                      </th>
                      <th class="px-4 py-3 text-center text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))] w-20">
                        <div class="transform -rotate-45 origin-center">
                          <div class="flex items-center justify-center space-x-1">
                            <span>Control Docs</span>
                            <input type="checkbox" class="w-3 h-3" checked />
                          </div>
                        </div>
                      </th>
                      <th class="px-4 py-3 text-center text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))] w-20">
                        <div class="transform -rotate-45 origin-center">
                          <div class="flex items-center justify-center space-x-1">
                            <span>Regn Fee</span>
                            <input type="checkbox" class="w-3 h-3" />
                          </div>
                        </div>
                      </th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">CCD-Regional</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Regional-Customer</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Sale Lett No</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Manf Cert No</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in tableData" :key="index" class="hover:bg-gray-50">
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))] text-center">
                        <input v-model="item.cancelled" type="checkbox" class="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary/20" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.bvoNo" type="text" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" placeholder="BVO number" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.model" type="text" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" placeholder="Model" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.chassisNo" type="text" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" placeholder="Chassis number" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.edrfNo" type="text" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" placeholder="EDRF number" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))] text-center">
                        <input v-model="item.insured" type="checkbox" class="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary/20" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))] text-center">
                        <input v-model="item.controlDocs" type="checkbox" class="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary/20" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))] text-center">
                        <input v-model="item.regnFee" type="checkbox" class="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary/20" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.ccdRegional" type="text" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" placeholder="CCD-Regional" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.regionalCustomer" type="text" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" placeholder="Regional-Customer" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.saleLettNo" type="text" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" placeholder="Sale letter number" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.manfCertNo" type="text" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" placeholder="Manufacturer cert number" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex justify-center space-x-4 pt-6 pb-4 border-t">
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
import { ref, onMounted, onUnmounted } from 'vue';
import { useNuxtApp } from '#app';

definePageMeta({
  title: "Documentation Clearance Request",
});

const { $swal } = useNuxtApp();

// Form data
const formData = ref({
  locationCode: '',
  requestDate: '22/06/2022',
  requestNo: '',
  bodyDescription: '',
  colorDescription: '',
  modelName: ''
});

// Table data
const tableData = ref([
  { 
    cancelled: true, 
    bvoNo: '', 
    model: '', 
    chassisNo: '', 
    edrfNo: '', 
    insured: false, 
    controlDocs: false, 
    regnFee: false, 
    ccdRegional: '', 
    regionalCustomer: '', 
    saleLettNo: '', 
    manfCertNo: '' 
  },
  { 
    cancelled: false, 
    bvoNo: '', 
    model: '', 
    chassisNo: '', 
    edrfNo: '', 
    insured: false, 
    controlDocs: false, 
    regnFee: false, 
    ccdRegional: '', 
    regionalCustomer: '', 
    saleLettNo: '', 
    manfCertNo: '' 
  },
  { 
    cancelled: false, 
    bvoNo: '', 
    model: '', 
    chassisNo: '', 
    edrfNo: '', 
    insured: false, 
    controlDocs: false, 
    regnFee: false, 
    ccdRegional: '', 
    regionalCustomer: '', 
    saleLettNo: '', 
    manfCertNo: '' 
  },
  { 
    cancelled: false, 
    bvoNo: '', 
    model: '', 
    chassisNo: '', 
    edrfNo: '', 
    insured: false, 
    controlDocs: false, 
    regnFee: false, 
    ccdRegional: '', 
    regionalCustomer: '', 
    saleLettNo: '', 
    manfCertNo: '' 
  },
  { 
    cancelled: false, 
    bvoNo: '', 
    model: '', 
    chassisNo: '', 
    edrfNo: '', 
    insured: false, 
    controlDocs: false, 
    regnFee: false, 
    ccdRegional: '', 
    regionalCustomer: '', 
    saleLettNo: '', 
    manfCertNo: '' 
  }
]);

// Form submission
const handleSubmit = async (formData) => {
  try {
    // Validate that at least one row has data
    const hasData = tableData.value.some(item => 
      item.bvoNo || item.model || item.chassisNo || item.edrfNo || 
      item.ccdRegional || item.regionalCustomer || item.saleLettNo || item.manfCertNo
    );

    if (!hasData) {
      $swal.fire({
        title: 'Validation Error',
        text: 'Please enter at least one documentation detail.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      return;
    }

    // Process form submission
    console.log('Form submitted:', { formData, tableData: tableData.value });
    
    $swal.fire({
      title: 'Success!',
      text: 'Documentation clearance request has been saved successfully.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  } catch (error) {
    console.error('Error submitting form:', error);
    $swal.fire({
      title: 'Error!',
      text: 'An error occurred while saving the documentation clearance request.',
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }
};

// Cancel handler
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
        if (key === 'requestDate') {
          formData.value[key] = '22/06/2022';
        } else {
          formData.value[key] = '';
        }
      });
      
      // Reset table data
      tableData.value.forEach(item => {
        item.cancelled = false;
        item.bvoNo = '';
        item.model = '';
        item.chassisNo = '';
        item.edrfNo = '';
        item.insured = false;
        item.controlDocs = false;
        item.regnFee = false;
        item.ccdRegional = '';
        item.regionalCustomer = '';
        item.saleLettNo = '';
        item.manfCertNo = '';
      });
    }
  });
};

// Refresh handler
const handleRefresh = () => {
  // Reset form data
  Object.keys(formData.value).forEach(key => {
    if (key === 'requestDate') {
      formData.value[key] = '22/06/2022';
    } else {
      formData.value[key] = '';
    }
  });
  
  // Reset table data
  tableData.value.forEach(item => {
    item.cancelled = false;
    item.bvoNo = '';
    item.model = '';
    item.chassisNo = '';
    item.edrfNo = '';
    item.insured = false;
    item.controlDocs = false;
    item.regnFee = false;
    item.ccdRegional = '';
    item.regionalCustomer = '';
    item.saleLettNo = '';
    item.manfCertNo = '';
  });

  $swal.fire({
    title: 'Refreshed!',
    text: 'Form has been refreshed successfully.',
    icon: 'success',
    timer: 1500,
    showConfirmButton: false
  });
};

// Print handler
const handlePrint = () => {
  $swal.fire({
    title: 'Print Documentation',
    text: 'Documentation clearance request will be printed.',
    icon: 'info',
    confirmButtonText: 'OK'
  });
};

// Keyboard shortcuts
const handleKeydown = (event) => {
  if (event.altKey) {
    switch (event.key.toLowerCase()) {
      case 'c':
        event.preventDefault();
        handleCancel();
        break;
      case 'e':
        event.preventDefault();
        handleRefresh();
        break;
      case 's':
        event.preventDefault();
        document.querySelector('form').requestSubmit();
        break;
      case 'p':
        event.preventDefault();
        handlePrint();
        break;
    }
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown);
});
</script>

<style scoped>
.writing-mode-vertical {
  writing-mode: vertical-rl;
  text-orientation: mixed;
}
</style>