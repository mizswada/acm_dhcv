<template>
  <div>
    <rs-card>
      <template #header>
        <div class="flex">
          <Icon class="mr-2 flex justify-center" name="ic:outline-description"></Icon>
          OPC Decisions
        </div>
      </template>
      <template #body>
        <div class="space-y-6">
          <FormKit type="form" :actions="false" @submit="handleSubmit">
            <!-- Top Section Form Fields -->
            <div class="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">OPC Decision No:</label>
                <input 
                  v-model="formData.opcDecisionNo" 
                  type="text" 
                  class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  placeholder="Enter OPC Decision No"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">OPC Decision Date:</label>
                <input 
                  v-model="formData.opcDecisionDate" 
                  type="date" 
                  class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Created By:</label>
                <input 
                  v-model="formData.createdBy" 
                  type="text" 
                  class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  placeholder="Enter created by"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Vendor Code & Name:</label>
                <input 
                  v-model="formData.vendorCodeName" 
                  type="text" 
                  class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  placeholder="Enter vendor code & name"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Modified By:</label>
                <input 
                  v-model="formData.modifiedBy" 
                  type="text" 
                  class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  placeholder="Enter modified by"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Remarks:</label>
                <input 
                  v-model="formData.remarks" 
                  type="text" 
                  class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  placeholder="Enter remarks"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Model Name:</label>
                <input 
                  v-model="formData.modelName" 
                  type="text" 
                  class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  placeholder="Enter model name"
                />
              </div>
              <div class="flex items-end">
                <div class="flex items-center gap-2">
                  <input 
                    v-model="formData.cancelled" 
                    type="checkbox" 
                    id="cancelled"
                    class="rounded border-[rgb(var(--border-color))] focus:ring-2 focus:ring-primary/20"
                  />
                  <label for="cancelled" class="text-sm font-medium text-[rgb(var(--text-color))]">
                    Cancelled
                  </label>
                </div>
              </div>
            </div>

            <!-- Data Entry Table -->
            <div class="overflow-x-auto mb-6">
              <table class="w-full border-collapse">
                <thead>
                  <tr class="border-b border-[rgb(var(--border-color))]">
                    <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">
                      Model Code
                    </th>
                    <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">
                      Qty
                    </th>
                    <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">
                      Delivery Date
                    </th>
                    <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">
                      Remarks
                    </th>
                    <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">
                      Cancs Qty
                    </th>
                    <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))]">
                      Pending Qty
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in opcItems" :key="index" class="border-b border-[rgb(var(--border-color))]">
                    <!-- Model Code -->
                    <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                      <select 
                        v-model="item.modelCode" 
                        class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      >
                        <option value="">Select Model Code</option>
                        <option value="MC001">MC001</option>
                        <option value="MC002">MC002</option>
                        <option value="MC003">MC003</option>
                      </select>
                    </td>
                    
                    <!-- Qty -->
                    <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                      <input 
                        v-model="item.qty" 
                        type="number" 
                        class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="Enter quantity"
                      />
                    </td>
                    
                    <!-- Delivery Date -->
                    <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                      <input 
                        v-model="item.deliveryDate" 
                        type="date" 
                        class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      />
                    </td>
                    
                    <!-- Remarks -->
                    <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                      <input 
                        v-model="item.remarks" 
                        type="text" 
                        class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="Enter remarks"
                      />
                    </td>
                    
                    <!-- Cancs Qty -->
                    <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                      <input 
                        v-model="item.cancsQty" 
                        type="number" 
                        class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="Enter cancelled quantity"
                      />
                    </td>
                    
                    <!-- Pending Qty -->
                    <td class="py-3 px-4">
                      <input 
                        v-model="item.pendingQty" 
                        type="number" 
                        class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="Enter pending quantity"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Bottom Section -->
            <div class="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Created By:</label>
                <input 
                  v-model="formData.createdByBottom" 
                  type="text" 
                  class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  placeholder="Enter created by"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Modified By:</label>
                <input 
                  v-model="formData.modifiedByBottom" 
                  type="text" 
                  class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  placeholder="Enter modified by"
                />
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex justify-center space-x-4 pt-6 pb-4 pr-4 border-t border-[rgb(var(--border-color))]">
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
                @click="handleAdvice"
              >
                Advice
              </rs-button>
            </div>
          </FormKit>
        </div>
      </template>
    </rs-card>
  </div>
</template>

<script setup>
import { useNuxtApp } from '#app';

definePageMeta({
  title: "OPC Decisions",
});

const { $swal } = useNuxtApp();

// Form data structure
const formData = ref({
  opcDecisionNo: '',
  opcDecisionDate: '',
  createdBy: '',
  vendorCodeName: '',
  modifiedBy: '',
  remarks: '',
  modelName: '',
  cancelled: false,
  createdByBottom: '',
  modifiedByBottom: ''
});

// OPC Items data structure
const opcItems = ref([
  {
    modelCode: '',
    qty: '',
    deliveryDate: '',
    remarks: '',
    cancsQty: '',
    pendingQty: ''
  },
  {
    modelCode: '',
    qty: '',
    deliveryDate: '',
    remarks: '',
    cancsQty: '',
    pendingQty: ''
  },
  {
    modelCode: '',
    qty: '',
    deliveryDate: '',
    remarks: '',
    cancsQty: '',
    pendingQty: ''
  },
  {
    modelCode: '',
    qty: '',
    deliveryDate: '',
    remarks: '',
    cancsQty: '',
    pendingQty: ''
  },
  {
    modelCode: '',
    qty: '',
    deliveryDate: '',
    remarks: '',
    cancsQty: '',
    pendingQty: ''
  },
  {
    modelCode: '',
    qty: '',
    deliveryDate: '',
    remarks: '',
    cancsQty: '',
    pendingQty: ''
  }
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
      // Reset all form data
      formData.value = {
        opcDecisionNo: '',
        opcDecisionDate: '',
        createdBy: '',
        vendorCodeName: '',
        modifiedBy: '',
        remarks: '',
        modelName: '',
        cancelled: false,
        createdByBottom: '',
        modifiedByBottom: ''
      };
      opcItems.value.forEach(item => {
        item.modelCode = '';
        item.qty = '';
        item.deliveryDate = '';
        item.remarks = '';
        item.cancsQty = '';
        item.pendingQty = '';
      });
    }
  });
};

const handleRefresh = () => {
  // Reload or refresh data
  console.log('Refreshing OPC decisions data...');
};

const handleAdvice = () => {
  // Handle advice action
  console.log('Generating advice...');
  $swal.fire({
    title: 'Advice Generated!',
    text: 'OPC advice has been generated successfully.',
    icon: 'success',
    confirmButtonText: 'OK'
  });
};

const handleSubmit = async (formData) => {
  try {
    // Save OPC decisions data
    const validItems = opcItems.value.filter(item => 
      item.modelCode !== '' || 
      item.qty !== '' ||
      item.deliveryDate !== '' ||
      item.remarks.trim() !== '' ||
      item.cancsQty !== '' ||
      item.pendingQty !== ''
    );
    
    if (validItems.length === 0 && formData.opcDecisionNo.trim() === '') {
      $swal.fire({
        title: 'No Data',
        text: 'Please enter at least one OPC decision\'s information before saving.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      return;
    }
    
    console.log('Saving OPC decisions:', { formData: formData.value, items: validItems });
    $swal.fire({
      title: 'Success!',
      text: 'OPC decisions saved successfully!',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  } catch (error) {
    console.error('Error submitting form:', error);
    $swal.fire({
      title: 'Error!',
      text: 'An error occurred while saving the data.',
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }
};

// Keyboard shortcuts
onMounted(() => {
  const handleKeyDown = (event) => {
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
          handleSubmit();
          break;
        case 'a':
          event.preventDefault();
          handleAdvice();
          break;
      }
    }
  };
  
  document.addEventListener('keydown', handleKeyDown);
  
  onUnmounted(() => {
    document.removeEventListener('keydown', handleKeyDown);
  });
});
</script>