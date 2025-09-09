<template>
  <div>
    <rs-card>
      <template #header>
        <div class="flex">
          <Icon class="mr-2 flex justify-center" name="ic:outline-receipt"></Icon>
          Model Charges
        </div>
      </template>
      <template #body>
        <div class="space-y-6">
          <FormKit type="form" :actions="false" @submit="handleSubmit">
            <!-- GST Output Tax Name Field -->
            <div class="mb-6">
              <div class="flex items-center gap-4">
                <label class="text-lg font-semibold text-[rgb(var(--text-color))] whitespace-nowrap">
                  GST Output Tax Name:
                </label>
                <input 
                  v-model="gstOutputTaxName" 
                  type="text" 
                  class="flex-1 px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  placeholder="Enter GST Output Tax Name"
                />
              </div>
            </div>

            <!-- Data Entry Table -->
            <div class="overflow-x-auto">
              <table class="w-full border-collapse">
                <thead>
                  <tr class="border-b border-[rgb(var(--border-color))]">
                    <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">
                      Charge Code & Description
                    </th>
                    <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">
                      Account Code & Name
                    </th>
                    <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">
                      Profit Account Code & Name
                    </th>
                    <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))]">
                      Def GST Output Tax Code & Rate
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(charge, index) in modelCharges" :key="index" class="border-b border-[rgb(var(--border-color))]">
                    <!-- Charge Code & Description -->
                    <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                      <div class="space-y-2">
                        <input 
                          v-model="charge.chargeCode" 
                          type="text" 
                          class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          placeholder="Enter charge code"
                        />
                        <select 
                          v-model="charge.chargeDescription" 
                          class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        >
                          <option value="">Select description</option>
                          <option value="standard">Standard</option>
                          <option value="premium">Premium</option>
                          <option value="basic">Basic</option>
                        </select>
                      </div>
                    </td>
                    
                    <!-- Account Code & Name -->
                    <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                      <div class="space-y-2">
                        <input 
                          v-model="charge.accountCode" 
                          type="text" 
                          class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          placeholder="Enter account code"
                        />
                        <input 
                          v-model="charge.accountName" 
                          type="text" 
                          class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          placeholder="Enter account name"
                        />
                      </div>
                    </td>
                    
                    <!-- Profit Account Code & Name -->
                    <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                      <div class="space-y-2">
                        <input 
                          v-model="charge.profitAccountCode" 
                          type="text" 
                          class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          placeholder="Enter profit account code"
                        />
                        <input 
                          v-model="charge.profitAccountName" 
                          type="text" 
                          class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          placeholder="Enter profit account name"
                        />
                      </div>
                    </td>
                    
                    <!-- Def GST Output Tax Code & Rate -->
                    <td class="py-3 px-4">
                      <div class="space-y-2">
                        <div class="flex items-center gap-2">
                          <input 
                            v-model="charge.saleCheckbox" 
                            type="checkbox" 
                            id="sale-{{ index }}"
                            class="rounded border-[rgb(var(--border-color))] focus:ring-2 focus:ring-primary/20"
                          />
                          <label for="sale-{{ index }}" class="text-sm font-medium text-[rgb(var(--text-color))]">
                            Sale
                          </label>
                        </div>
                        <input 
                          v-model="charge.gstOutputTaxCode" 
                          type="text" 
                          class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          placeholder="Enter GST output tax code"
                        />
                        <input 
                          v-model="charge.gstOutputTaxRate" 
                          type="number" 
                          step="0.01"
                          class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                          placeholder="Enter GST output tax rate"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
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
  title: "Model Charges",
});

const { $swal } = useNuxtApp();

// GST Output Tax Name
const gstOutputTaxName = ref('');

// Model Charges data structure
const modelCharges = ref([
  {
    chargeCode: '',
    chargeDescription: '',
    accountCode: '',
    accountName: '',
    profitAccountCode: '',
    profitAccountName: '',
    saleCheckbox: false,
    gstOutputTaxCode: '',
    gstOutputTaxRate: ''
  },
  {
    chargeCode: '',
    chargeDescription: '',
    accountCode: '',
    accountName: '',
    profitAccountCode: '',
    profitAccountName: '',
    saleCheckbox: false,
    gstOutputTaxCode: '',
    gstOutputTaxRate: ''
  },
  {
    chargeCode: '',
    chargeDescription: '',
    accountCode: '',
    accountName: '',
    profitAccountCode: '',
    profitAccountName: '',
    saleCheckbox: false,
    gstOutputTaxCode: '',
    gstOutputTaxRate: ''
  },
  {
    chargeCode: '',
    chargeDescription: '',
    accountCode: '',
    accountName: '',
    profitAccountCode: '',
    profitAccountName: '',
    saleCheckbox: false,
    gstOutputTaxCode: '',
    gstOutputTaxRate: ''
  },
  {
    chargeCode: '',
    chargeDescription: '',
    accountCode: '',
    accountName: '',
    profitAccountCode: '',
    profitAccountName: '',
    saleCheckbox: false,
    gstOutputTaxCode: '',
    gstOutputTaxRate: ''
  },
  {
    chargeCode: '',
    chargeDescription: '',
    accountCode: '',
    accountName: '',
    profitAccountCode: '',
    profitAccountName: '',
    saleCheckbox: false,
    gstOutputTaxCode: '',
    gstOutputTaxRate: ''
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
      gstOutputTaxName.value = '';
      modelCharges.value.forEach(charge => {
        charge.chargeCode = '';
        charge.chargeDescription = '';
        charge.accountCode = '';
        charge.accountName = '';
        charge.profitAccountCode = '';
        charge.profitAccountName = '';
        charge.saleCheckbox = false;
        charge.gstOutputTaxCode = '';
        charge.gstOutputTaxRate = '';
      });
    }
  });
};

const handleRefresh = () => {
  // Reload or refresh data
  console.log('Refreshing model charges data...');
};

const handleSubmit = async (formData) => {
  try {
    // Save model charges data
    const validCharges = modelCharges.value.filter(charge => 
      charge.chargeCode.trim() !== '' || 
      charge.chargeDescription !== '' ||
      charge.accountCode.trim() !== '' || 
      charge.accountName.trim() !== '' ||
      charge.profitAccountCode.trim() !== '' || 
      charge.profitAccountName.trim() !== '' ||
      charge.gstOutputTaxCode.trim() !== '' || 
      charge.gstOutputTaxRate !== ''
    );
    
    if (validCharges.length === 0 && gstOutputTaxName.value.trim() === '') {
      $swal.fire({
        title: 'No Data',
        text: 'Please enter at least one model charge\'s information or GST Output Tax Name before saving.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      return;
    }
    
    console.log('Saving model charges:', { gstOutputTaxName: gstOutputTaxName.value, charges: validCharges });
    $swal.fire({
      title: 'Success!',
      text: 'Model charges saved successfully!',
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
        case 'r':
          event.preventDefault();
          handleRefresh();
          break;
        case 's':
          event.preventDefault();
          handleSubmit();
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