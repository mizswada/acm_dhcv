<template>
    <div>
      <LayoutsBreadcrumb />
      <rs-card>
        <template #header>
          <div class="flex items-center justify-between">
            <div class="flex">
              <Icon class="mr-2 flex justify-center" name="ic:outline-inventory"></Icon>
              Local Content Parts
            </div>
            <div class="flex items-center space-x-4">
              <span class="text-sm font-medium" :class="isEditMode ? 'text-green-600' : 'text-gray-500'">
                {{ isEditMode ? 'EDIT MODE' : 'VIEW MODE' }}
              </span>
              <span class="text-xs text-gray-400">(F7: Query | F8: Execute Query)</span>
            </div>
          </div>
        </template>
        <template #body>
          <div class="space-y-6">
        <!-- Query and Execute Query Buttons at Top -->
        <div class="flex justify-start space-x-4 mb-6">
          <!-- <rs-button
            variant="primary"
            @click="handleNew"
            v-if="!isQueryMode"
          >
            New
          </rs-button> -->
          <rs-button
            variant="primary"
            @click="handleQuery"
          >
            Query (F7)
          </rs-button>
          <rs-button
            variant="warning"
            @click="handleExecuteQuery"
          >
            Execute Query (F8)
          </rs-button>
          
          <!-- Vendor management buttons (only show in query mode) -->
          <div v-if="isQueryMode" class="flex items-center space-x-2 ml-4 pl-4 border-l border-gray-300">
            <span class="text-xs text-gray-500 mr-2">Query Mode Active</span>
            <button
              @click="addVendorLine"
              class="px-3 py-1 text-sm bg-green-500 hover:bg-green-600 text-white rounded"
            >
              + Add Vendor
            </button>
            <button
              @click="removeSelectedVendor"
              :disabled="!selectedVendorIndex"
              class="px-3 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              - Remove Selected
            </button>
            <button
              @click="removeVendorLine"
              class="px-3 py-1 text-sm bg-orange-500 hover:bg-orange-600 text-white rounded"
            >
              - Remove Last
            </button>
          </div>
        </div>


        <!-- Query Prepared Indicator -->
        <div v-if="isQueryPrepared && !isQueryMode" class="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
          <div class="flex items-center space-x-2">
            <div class="w-2 h-2 bg-green-500 rounded-full"></div>
            <span class="text-sm font-medium text-green-800">
              Query Prepared
            </span>
            <span v-if="queryFilter" class="text-xs text-green-600">
              - Filter: {{ queryFilter }}
            </span>
            <span v-else class="text-xs text-green-600">
              - All Parts
            </span>
            <span class="text-xs text-blue-600 font-medium ml-2">
              Press F8 to execute query and enter edit mode
            </span>
          </div>
        </div>

        <!-- Query Navigation (shown when in query mode) -->
        <div v-if="isQueryMode" class="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div class="flex justify-between items-center">
            <div class="flex items-center space-x-4">
              <span class="text-sm font-medium text-blue-800">
                Query Mode - Record {{ currentPartIndex + 1 }} of {{ queryResults.length }}
              </span>
              <span v-if="queryFilter" class="text-xs text-blue-600">
                Filtered by: {{ queryFilter }}
              </span>
              <span class="text-xs text-orange-600 font-medium">
                ✏️ Edit Mode: You can edit vendor data only
              </span>
            </div>
            <div class="flex items-center space-x-2">
              <button
                v-if="currentPartIndex > 0"
                @click="prevPart"
                class="px-3 py-1 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded"
              >
                &#8249; Previous
              </button>
              <button
                v-if="currentPartIndex < queryResults.length - 1"
                @click="nextPart"
                class="px-3 py-1 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded"
              >
                Next &#8250;
              </button>
              <button
                @click="exitQueryMode"
                class="px-3 py-1 text-sm bg-gray-500 hover:bg-gray-600 text-white rounded"
              >
                Exit Query
              </button>
            </div>
          </div>
        </div>

        <!-- Top form fields -->
            <div class="grid grid-cols-6 gap-4">
                             <!-- Row 1 -->
               <div>
                 <FormKit
                   type="text"
                   label="Part No"
                   v-model="form.partNo"
                   placeholder="Enter part number"
                   :readonly="!isEditMode"
                   @focus="partNoFocused = true"
                   @blur="partNoFocused = false"
                 >
                   <template #suffix>
                     <button
                       v-if="partNoFocused"
                       type="button"
                       class="text-xs bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded mr-1"
                       @click="openPartModal"
                       @mousedown.prevent
                     >
                       F9
                     </button>
                   </template>
                 </FormKit>
               </div>
          <div class="col-span-2">
                <FormKit
                  type="text"
                  label="Part Name"
                  v-model="form.partName"
                  placeholder="Enter part name"
                  :readonly="!isEditMode"
                />
              </div>
              <div>
                <FormKit
                  type="text"
                  label="Vendor Part Code"
                  v-model="form.vendorPartCode"
                  placeholder="Enter vendor part code"
                  :readonly="!isEditMode"
                />
          </div>
          <div>
                <FormKit
                  type="text"
                  label="Tag"
                  v-model="form.tag"
                  placeholder="Enter tag"
                  :readonly="!isEditMode"
                />
          </div>
          <div>
                <FormKit
                  type="text"
                  label="Part Type"
                  v-model="form.partType"
                  placeholder="Select part type"
                  :readonly="!isEditMode"
                  @focus="partTypeFocused = true"
                  @blur="partTypeFocused = false"
                >
                  <template #suffix>
                    <button
                      v-if="partTypeFocused"
                      type="button"
                      class="text-xs bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded mr-1"
                      @click="openPartTypeModal"
                      @mousedown.prevent
                    >
                      ▼
                    </button>
                  </template>
                </FormKit>
          </div>
  
              <!-- Row 2 -->
          <div>
                <FormKit
                  type="text"
                  label="Category Code"
                  v-model="form.categoryCode"
                  placeholder="Enter category code"
                  :readonly="!isEditMode"
                />
          </div>
              <div class="col-span-2">
                <FormKit
                  type="text"
                  label="Category Name"
                  v-model="form.categoryName"
                  placeholder="Enter category name"
                  :readonly="!isEditMode"
                />
          </div>
          <div>
                <FormKit
                  type="text"
                  label="Group Code"
                  v-model="form.groupCode"
                  placeholder="Enter group code"
                  :readonly="!isEditMode"
                />
          </div>
              <div class="col-span-2">
                <FormKit
                  type="text"
                  label="Group Name"
                  v-model="form.groupName"
                  placeholder="Enter group name"
                  :readonly="!isEditMode"
                />
          </div>
        </div>
  
            <!-- Prices (Row 3 & 4 stay same as my last update) -->
            <div class="grid grid-cols-6 gap-4">
              <!-- Row 3 -->
          <div>
                <FormKit
                  type="number"
                  label="Duty Percent"
                  v-model="form.dutyPercent"
                  placeholder="0"
                  step="0.01"
                  :readonly="!isEditMode"
                />
          </div>
          <div>
                <FormKit
                  type="number"
                  label="Yen Price"
                  v-model="form.yenPrice"
                  placeholder="0"
                  step="0.01"
                  :readonly="!isEditMode"
                />
              </div>
              <div class="flex items-center space-x-2 pt-6">
                <div class="flex items-center">
                  <span class="text-sm font-medium mr-2">Taxable:</span>
                  <input 
                    v-model="form.taxable" 
                    type="checkbox" 
                    :disabled="!isEditMode"
                    class="w-4 h-4 text-primary border-gray-400 rounded focus:ring-primary"
                  />
                </div>
          </div>
          <div>
                <FormKit
                  type="number"
                  label="RM Cost Price"
                  v-model="form.rmCostPrice"
                  placeholder="0"
                  step="0.01"
                  :readonly="!isEditMode"
                />
          </div>
          <div>
                <FormKit
                  type="date"
                  label="Date of Creation"
                  v-model="form.dateCreated"
                  :readonly="!isEditMode"
                />
          </div>
  
              <!-- Row 4 -->
          <div>
                <FormKit
                  type="number"
                  label="RM Sale Price"
                  v-model="form.rmSalePrice"
                  placeholder="0"
                  step="0.01"
                  :readonly="!isEditMode"
                />
              </div>
              <div class="col-span-2">
                <FormKit
                  type="text"
                  label="Specifications"
                  v-model="form.specifications"
                  placeholder="Enter specifications"
                  :readonly="!isEditMode"
                />
          </div>
              <div class="col-span-2">
                <FormKit
                  type="text"
                  label="Superceded By"
                  v-model="form.supercededBy"
                  placeholder="Enter superceded by"
                  :readonly="!isEditMode"
                />
          </div>
        </div>
  
        <!-- Vendor Table -->
        <div class="mt-6">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-lg font-medium">Vendors</h3>
              <div class="flex items-center space-x-2">
                <span class="text-sm text-gray-600">
                  Page {{ currentVendorPage }} of {{ totalVendorPages }}
                </span>
                <button
                  v-if="currentVendorPage < totalVendorPages"
                  @click="nextVendorPage"
                  class="px-3 py-1 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded"
                >
                  &#8250;
                </button>
                <button
                  v-if="currentVendorPage > 1"
                  @click="prevVendorPage"
                  class="px-3 py-1 text-sm bg-gray-500 hover:bg-gray-600 text-white rounded"
                >
                  &#8249;
                </button>
              </div>
            </div>
            
            <div class="overflow-x-auto">
              <table class="w-full border border-gray-200 rounded-lg">
                <thead class="bg-gray-50">
                  <tr>
                    <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Vendor Code</th>
                    <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Vendor Name</th>
                    <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Price</th>
                    <th class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Preferred</th>
                    <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Model Code</th>
                    <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Qty</th>
              </tr>
            </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                  <tr 
                    v-for="(vendor, index) in paginatedVendors" 
                    :key="index" 
                    class="hover:bg-gray-50 cursor-pointer"
                    :class="{
                      'bg-blue-100 border-blue-300': selectedVendorIndex === (currentVendorPage - 1) * vendorsPerPage + index,
                      'hover:bg-gray-50': selectedVendorIndex !== (currentVendorPage - 1) * vendorsPerPage + index
                    }"
                    @click="selectVendorRow((currentVendorPage - 1) * vendorsPerPage + index)"
                  >
                    <td class="px-4 py-3 border-b">
                      <div class="flex items-center space-x-2">
                        <FormKit
                          type="text"
                          v-model="vendor.code"
                          placeholder="Enter vendor code"
                          :classes="{ input: 'border-0 shadow-none flex-1' }"
                          :readonly="!isEditMode && !isQueryMode"
                        />
                        <button
                          type="button"
                          @click="openVendorModal(index)"
                          class="px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          :disabled="!isEditMode && !isQueryMode"
                        >
                          F9
                        </button>
                      </div>
                    </td>
                    <td class="px-4 py-3 border-b">
                      <FormKit
                        type="text"
                        v-model="vendor.name"
                        placeholder="Enter vendor name"
                        :classes="{ input: 'border-0 shadow-none' }"
                        :readonly="!isEditMode && !isQueryMode"
                      />
                </td>
                    <td class="px-4 py-3 border-b">
                      <FormKit
                        type="number"
                        v-model="vendor.price"
                        placeholder="0"
                        step="0.01"
                        :classes="{ input: 'border-0 shadow-none' }"
                        :readonly="!isEditMode && !isQueryMode"
                      />
                </td>
                    <td class="px-4 py-3 text-center border-b">
                      <input 
                        v-model="vendor.preferred" 
                        type="checkbox" 
                        :disabled="!isEditMode && !isQueryMode"
                        class="w-4 h-4 text-primary border-gray-400 rounded focus:ring-primary"
                      />
                    </td>
                    <td class="px-4 py-3 border-b">
                      <FormKit
                        type="text"
                        v-model="vendor.modelCode"
                        placeholder="Enter model code"
                        :classes="{ input: 'border-0 shadow-none' }"
                        :readonly="!isEditMode && !isQueryMode"
                      />
                </td>
                    <td class="px-4 py-3 border-b">
                      <FormKit
                        type="number"
                        v-model="vendor.qty"
                        placeholder="0"
                        :classes="{ input: 'border-0 shadow-none' }"
                        :readonly="!isEditMode && !isQueryMode"
                      />
                </td>
              </tr>
            </tbody>
          </table>
            </div>
        </div>

  
        <!-- Action Buttons -->
          <div class="flex justify-end space-x-4 pt-6 border-t">
            <rs-button
              variant="secondary-outline"
              @click="handleClose"
            >
              Close
            </rs-button>
            <rs-button
              variant="info"
              @click="handleRefresh"
            >
              Refresh
            </rs-button>
            <rs-button
              variant="success"
              @click="handleSave"
            >
              {{ isQueryMode ? 'Save & Exit Query' : 'Save' }}
            </rs-button>
        </div>
      </div>
        </template>
      </rs-card>

      <!-- Part Selection Modal -->
      <rs-modal v-model="showPartModal" title="Select Part">
        <template #body>
          <div class="max-h-96 overflow-y-auto">
            <div class="mb-4">
              <FormKit
                type="text"
                placeholder="Search parts..."
                v-model="searchQuery"
                :classes="{ input: 'border border-gray-300 rounded px-3 py-2' }"
              />
            </div>
            
            <table class="w-full border border-gray-200 rounded-lg">
                              <thead class="bg-gray-50">
                  <tr>
                    <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Part No</th>
                    <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Part Name</th>
              </tr>
            </thead>
                              <tbody class="bg-white divide-y divide-gray-200">
                  <tr 
                    v-for="part in filteredParts" 
                    :key="part.partNo" 
                    class="cursor-pointer"
                    :class="{ 
                      'bg-blue-800 text-white': selectedPartInModal?.partNo === part.partNo,
                      'hover:bg-gray-50': selectedPartInModal?.partNo !== part.partNo
                    }"
                    @click="selectPartAndCloseModal(part)"
                  >
                    <td class="px-4 py-3 border-b">{{ part.partNo }}</td>
                    <td class="px-4 py-3 border-b">{{ part.partName }}</td>
                  </tr>
                </tbody>
            </table>
          </div>
        </template>
        <template #footer>
          <div class="flex justify-end space-x-2">
            <rs-button variant="secondary-outline" @click="closePartModal">
              Cancel
            </rs-button>
          </div>
        </template>
      </rs-modal>

      <!-- Vendor Selection Modal -->
      <rs-modal v-model="showVendorModal" title="Select Vendor">
        <template #body>
          <div class="max-h-96 overflow-y-auto">
            <div class="mb-4">
              <FormKit
                type="text"
                placeholder="Search vendors..."
                v-model="vendorSearchQuery"
                :classes="{ input: 'border border-gray-300 rounded px-3 py-2' }"
              />
            </div>
            
            <table class="w-full border border-gray-200 rounded-lg">
              <thead class="bg-gray-50">
                <tr>
                  <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Vendor Code</th>
                  <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Vendor Name</th>
                  <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Price</th>
                  <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Model Code</th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr 
                  v-for="vendor in filteredVendors" 
                  :key="vendor.code" 
                  class="cursor-pointer"
                  :class="{ 
                    'bg-blue-800 text-white': selectedVendorInModal?.code === vendor.code,
                    'hover:bg-gray-50': selectedVendorInModal?.code !== vendor.code
                  }"
                  @click="selectVendorAndCloseModal(vendor)"
                >
                  <td class="px-4 py-3 border-b">{{ vendor.code }}</td>
                  <td class="px-4 py-3 border-b">{{ vendor.name }}</td>
                  <td class="px-4 py-3 border-b">{{ vendor.price }}</td>
                  <td class="px-4 py-3 border-b">{{ vendor.modelCode }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </template>
        <template #footer>
          <div class="flex justify-end space-x-2">
            <rs-button variant="secondary-outline" @click="closeVendorModal">
              Cancel
            </rs-button>
          </div>
        </template>
      </rs-modal>

      <!-- Part Type Selection Modal -->
      <rs-modal v-model="showPartTypeModal" title="Select Part Type">
        <template #body>
          <div class="max-h-96 overflow-y-auto">
            <div class="space-y-2">
              <div 
                v-for="partType in partTypes" 
                :key="partType.value"
                class="p-3 border border-gray-200 rounded cursor-pointer"
                :class="{ 
                  'bg-blue-800 text-white': selectedPartType?.value === partType.value,
                  'hover:bg-gray-50': selectedPartType?.value !== partType.value
                }"
                @click="selectPartTypeAndCloseModal(partType)"
              >
                <div class="font-medium">{{ partType.label }}</div>
                <div class="text-sm opacity-75">{{ partType.description }}</div>
              </div>
            </div>
          </div>
        </template>
        <template #footer>
          <div class="flex justify-end space-x-2">
            <rs-button variant="secondary-outline" @click="closePartTypeModal">
              Cancel
            </rs-button>
          </div>
        </template>
      </rs-modal>
    </div>
  </template>
  
  <script setup>
import { reactive, ref, computed, onMounted, onUnmounted } from "vue";

definePageMeta({
  title: "Local Content Parts",
});

// Modal state
const showPartModal = ref(false);
const showVendorModal = ref(false);
const searchQuery = ref("");
const vendorSearchQuery = ref("");
const selectedPartInModal = ref(null);
const selectedVendorInModal = ref(null);
const currentVendorRowIndex = ref(null);

// Part Type modal state
const showPartTypeModal = ref(false);
const selectedPartType = ref(null);

// Field focus state
const partNoFocused = ref(false);
const partTypeFocused = ref(false);
const isEditMode = ref(false);

// Vendor pagination state
const currentVendorPage = ref(1);
const vendorsPerPage = 4;

// Query functionality state
const queryResults = ref([]);
const queryFilter = ref("");
const isQueryMode = ref(false);
const currentPartIndex = ref(0);
const isQueryPrepared = ref(false);
const selectedVendorIndex = ref(null);

// Part types data
const partTypes = ref([
  {
    value: "Local Content Sp",
    label: "Local Content Sp",
    description: "Locally sourced and manufactured parts"
  },
  {
    value: "Imported",
    label: "Imported",
    description: "Parts imported from overseas suppliers"
  },
  {
    value: "OEM",
    label: "OEM (Original Equipment Manufacturer)",
    description: "Original equipment manufacturer parts"
  },
  {
    value: "Aftermarket",
    label: "Aftermarket",
    description: "Non-OEM replacement parts"
  },
  {
    value: "Refurbished",
    label: "Refurbished",
    description: "Restored and tested used parts"
  }
]);

// Hardcoded master data for parts
const masterParts = ref([
  {
    partNo: "P001",
    partName: "Engine Oil Filter",
    vendorPartCode: "V001",
    tag: "ENGINE",
    partType: "Local Content Sp",
    categoryCode: "C001",
    categoryName: "Engine Parts",
    groupCode: "G001",
    groupName: "Engine Components",
    dutyPercent: 5.5,
    yenPrice: 1500,
    taxable: true,
    rmCostPrice: 45.50,
    dateCreated: "2022-01-15",
    rmSalePrice: 55.00,
    specifications: "High quality oil filter for engine protection",
    supercededBy: "",
    vendors: [
      { code: "VENDOR001", name: "ABC Auto Parts", price: 45.50, preferred: true, modelCode: "MC001", qty: 100 },
      { code: "VENDOR002", name: "XYZ Components", price: 47.00, preferred: false, modelCode: "MC002", qty: 50 },
      { code: "VENDOR007", name: "Engine Specialists", price: 46.00, preferred: false, modelCode: "MC009", qty: 75 },
      { code: "VENDOR008", name: "Auto Supply Co", price: 48.50, preferred: false, modelCode: "MC010", qty: 60 },
      { code: "VENDOR009", name: "Parts Direct", price: 44.00, preferred: false, modelCode: "MC011", qty: 90 },
      { code: "VENDOR010", name: "Quality Filters", price: 49.00, preferred: false, modelCode: "MC012", qty: 40 },
    ]
  },
  {
    partNo: "P002",
    partName: "Brake Pad Set",
    vendorPartCode: "V002",
    tag: "BRAKE",
    partType: "Imported",
    categoryCode: "C002",
    categoryName: "Brake System",
    groupCode: "G002",
    groupName: "Brake Components",
    dutyPercent: 8.0,
    yenPrice: 3200,
    taxable: true,
    rmCostPrice: 120.00,
    dateCreated: "2022-02-20",
    rmSalePrice: 150.00,
    specifications: "Premium brake pads for superior stopping power",
    supercededBy: "",
    vendors: [
      { code: "VENDOR003", name: "Brake Masters Ltd", price: 120.00, preferred: true, modelCode: "MC003", qty: 25 },
    ]
  },
  {
    partNo: "P003",
    partName: "Air Filter Element",
    vendorPartCode: "V003",
    tag: "AIR",
    partType: "Local Content Sp",
    categoryCode: "C003",
    categoryName: "Air System",
    groupCode: "G003",
    groupName: "Air Components",
    dutyPercent: 3.0,
    yenPrice: 800,
    taxable: true,
    rmCostPrice: 25.00,
    dateCreated: "2022-03-10",
    rmSalePrice: 35.00,
    specifications: "High efficiency air filter for clean air intake",
    supercededBy: "",
    vendors: [
      { code: "VENDOR001", name: "ABC Auto Parts", price: 25.00, preferred: true, modelCode: "MC004", qty: 200 },
      { code: "VENDOR004", name: "Air Systems Inc", price: 26.50, preferred: false, modelCode: "MC005", qty: 75 },
    ]
  },
  {
    partNo: "P004",
    partName: "Spark Plug Set",
    vendorPartCode: "V004",
    tag: "IGNITION",
    partType: "Imported",
    categoryCode: "C004",
    categoryName: "Ignition System",
    groupCode: "G004",
    groupName: "Ignition Components",
    dutyPercent: 6.5,
    yenPrice: 1800,
    taxable: true,
    rmCostPrice: 65.00,
    dateCreated: "2022-04-05",
    rmSalePrice: 85.00,
    specifications: "Iridium spark plugs for optimal engine performance",
    supercededBy: "",
    vendors: [
      { code: "VENDOR005", name: "Ignition Pro", price: 65.00, preferred: true, modelCode: "MC006", qty: 50 },
    ]
  },
  {
    partNo: "P005",
    partName: "Transmission Fluid",
    vendorPartCode: "V005",
    tag: "TRANSMISSION",
    partType: "Local Content Sp",
    categoryCode: "C005",
    categoryName: "Transmission System",
    groupCode: "G005",
    groupName: "Transmission Components",
    dutyPercent: 4.0,
    yenPrice: 2500,
    taxable: true,
    rmCostPrice: 85.00,
    dateCreated: "2022-05-12",
    rmSalePrice: 105.00,
    specifications: "Premium transmission fluid for smooth gear shifting",
    supercededBy: "",
    vendors: [
      { code: "VENDOR002", name: "XYZ Components", price: 85.00, preferred: true, modelCode: "MC007", qty: 30 },
      { code: "VENDOR006", name: "Transmission Specialists", price: 88.00, preferred: false, modelCode: "MC008", qty: 20 },
    ]
  },
  {
    partNo: "P006",
    partName: "Battery 12V",
    vendorPartCode: "V006",
    tag: "ELECTRICAL",
    partType: "Imported",
    categoryCode: "C006",
    categoryName: "Electrical System",
    groupCode: "G006",
    groupName: "Battery Components",
    dutyPercent: 7.5,
    yenPrice: 4500,
    taxable: true,
    rmCostPrice: 180.00,
    dateCreated: "2022-06-15",
    rmSalePrice: 220.00,
    specifications: "High capacity 12V automotive battery",
    supercededBy: "",
    vendors: [
      { code: "VENDOR011", name: "Power Systems", price: 180.00, preferred: true, modelCode: "MC013", qty: 15 },
      { code: "VENDOR012", name: "Battery World", price: 185.00, preferred: false, modelCode: "MC014", qty: 25 },
    ]
  },
  {
    partNo: "P007",
    partName: "Radiator Cap",
    vendorPartCode: "V007",
    tag: "COOLING",
    partType: "Local Content Sp",
    categoryCode: "C007",
    categoryName: "Cooling System",
    groupCode: "G007",
    groupName: "Cooling Components",
    dutyPercent: 3.5,
    yenPrice: 600,
    taxable: true,
    rmCostPrice: 22.00,
    dateCreated: "2022-07-20",
    rmSalePrice: 28.00,
    specifications: "Pressure relief radiator cap for cooling system",
    supercededBy: "",
    vendors: [
      { code: "VENDOR013", name: "Cooling Solutions", price: 22.00, preferred: true, modelCode: "MC015", qty: 80 },
    ]
  },
  {
    partNo: "P008",
    partName: "Timing Belt",
    vendorPartCode: "V008",
    tag: "ENGINE",
    partType: "Imported",
    categoryCode: "C008",
    categoryName: "Engine Timing",
    groupCode: "G008",
    groupName: "Timing Components",
    dutyPercent: 6.0,
    yenPrice: 2800,
    taxable: true,
    rmCostPrice: 95.00,
    dateCreated: "2022-08-10",
    rmSalePrice: 125.00,
    specifications: "High strength timing belt for engine synchronization",
    supercededBy: "",
    vendors: [
      { code: "VENDOR014", name: "Timing Masters", price: 95.00, preferred: true, modelCode: "MC016", qty: 35 },
      { code: "VENDOR015", name: "Engine Parts Pro", price: 98.00, preferred: false, modelCode: "MC017", qty: 20 },
    ]
  },
  {
    partNo: "P009",
    partName: "Wheel Bearing",
    vendorPartCode: "V009",
    tag: "SUSPENSION",
    partType: "Local Content Sp",
    categoryCode: "C009",
    categoryName: "Suspension System",
    groupCode: "G009",
    groupName: "Wheel Components",
    dutyPercent: 5.5,
    yenPrice: 1800,
    taxable: true,
    rmCostPrice: 65.00,
    dateCreated: "2022-09-05",
    rmSalePrice: 85.00,
    specifications: "Precision wheel bearing for smooth wheel rotation",
    supercededBy: "",
    vendors: [
      { code: "VENDOR016", name: "Suspension Tech", price: 65.00, preferred: true, modelCode: "MC018", qty: 45 },
      { code: "VENDOR017", name: "Wheel Specialists", price: 67.00, preferred: false, modelCode: "MC019", qty: 30 },
    ]
  },
  {
    partNo: "P010",
    partName: "Fuel Filter",
    vendorPartCode: "V010",
    tag: "FUEL",
    partType: "Local Content Sp",
    categoryCode: "C010",
    categoryName: "Fuel System",
    groupCode: "G010",
    groupName: "Fuel Components",
    dutyPercent: 4.5,
    yenPrice: 1200,
    taxable: true,
    rmCostPrice: 42.00,
    dateCreated: "2022-10-12",
    rmSalePrice: 55.00,
    specifications: "High efficiency fuel filter for clean fuel delivery",
    supercededBy: "",
    vendors: [
      { code: "VENDOR018", name: "Fuel Systems Inc", price: 42.00, preferred: true, modelCode: "MC020", qty: 60 },
      { code: "VENDOR019", name: "Clean Fuel Co", price: 44.00, preferred: false, modelCode: "MC021", qty: 40 },
    ]
  },
  {
    partNo: "P011",
    partName: "Clutch Disc",
    vendorPartCode: "V011",
    tag: "CLUTCH",
    partType: "Imported",
    categoryCode: "C011",
    categoryName: "Clutch System",
    groupCode: "G011",
    groupName: "Clutch Components",
    dutyPercent: 8.5,
    yenPrice: 3500,
    taxable: true,
    rmCostPrice: 135.00,
    dateCreated: "2022-11-18",
    rmSalePrice: 175.00,
    specifications: "Heavy duty clutch disc for manual transmission",
    supercededBy: "",
    vendors: [
      { code: "VENDOR020", name: "Clutch Masters", price: 135.00, preferred: true, modelCode: "MC022", qty: 20 },
    ]
  },
  {
    partNo: "P012",
    partName: "Power Steering Fluid",
    vendorPartCode: "V012",
    tag: "STEERING",
    partType: "Local Content Sp",
    categoryCode: "C012",
    categoryName: "Steering System",
    groupCode: "G012",
    groupName: "Steering Components",
    dutyPercent: 4.0,
    yenPrice: 900,
    taxable: true,
    rmCostPrice: 32.00,
    dateCreated: "2022-12-03",
    rmSalePrice: 42.00,
    specifications: "Premium power steering fluid for smooth steering",
    supercededBy: "",
    vendors: [
      { code: "VENDOR021", name: "Steering Solutions", price: 32.00, preferred: true, modelCode: "MC023", qty: 50 },
      { code: "VENDOR022", name: "Fluid Specialists", price: 34.00, preferred: false, modelCode: "MC024", qty: 35 },
    ]
  },
  {
    partNo: "P013",
    partName: "Transmission Filter",
    vendorPartCode: "",
    tag: "",
    partType: "Local Content Sp",
    categoryCode: "",
    categoryName: "",
    groupCode: "",
    groupName: "",
    dutyPercent: 0,
    yenPrice: 0,
    taxable: false,
    rmCostPrice: 0,
    dateCreated: "",
    rmSalePrice: 0,
    specifications: "",
    supercededBy: "",
    vendors: [
      { code: "", name: "", price: 0, preferred: false, modelCode: "", qty: 0 }
    ]
  },
  {
    partNo: "P014",
    partName: "Radiator Cap",
    vendorPartCode: "",
    tag: "",
    partType: "Local Content Sp",
    categoryCode: "",
    categoryName: "",
    groupCode: "",
    groupName: "",
    dutyPercent: 0,
    yenPrice: 0,
    taxable: false,
    rmCostPrice: 0,
    dateCreated: "",
    rmSalePrice: 0,
    specifications: "",
    supercededBy: "",
    vendors: [
      { code: "", name: "", price: 0, preferred: false, modelCode: "", qty: 0 }
    ]
  },
  {
    partNo: "P015",
    partName: "Spark Plug",
    vendorPartCode: "",
    tag: "",
    partType: "Local Content Sp",
    categoryCode: "",
    categoryName: "",
    groupCode: "",
    groupName: "",
    dutyPercent: 0,
    yenPrice: 0,
    taxable: false,
    rmCostPrice: 0,
    dateCreated: "",
    rmSalePrice: 0,
    specifications: "",
    supercededBy: "",
    vendors: [
      { code: "", name: "", price: 0, preferred: false, modelCode: "", qty: 0 }
    ]
  }
]);

// Master vendors data for F9 selection
const masterVendors = ref([
  { code: "VENDOR001", name: "Auto Parts Inc", price: 25.50, modelCode: "MC001", qty: 100 },
  { code: "VENDOR002", name: "Brake Systems Ltd", price: 45.00, modelCode: "MC002", qty: 75 },
  { code: "VENDOR003", name: "Engine Components Co", price: 120.00, modelCode: "MC003", qty: 50 },
  { code: "VENDOR004", name: "Transmission Parts", price: 200.00, modelCode: "MC004", qty: 30 },
  { code: "VENDOR005", name: "Suspension Tech", price: 65.00, modelCode: "MC005", qty: 45 },
  { code: "VENDOR006", name: "Wheel Specialists", price: 67.00, modelCode: "MC006", qty: 30 },
  { code: "VENDOR007", name: "Fuel Systems Inc", price: 42.00, modelCode: "MC007", qty: 60 },
  { code: "VENDOR008", name: "Clean Fuel Co", price: 44.00, modelCode: "MC008", qty: 40 },
  { code: "VENDOR009", name: "Clutch Masters", price: 135.00, modelCode: "MC009", qty: 20 },
  { code: "VENDOR010", name: "Steering Solutions", price: 32.00, modelCode: "MC010", qty: 50 },
  { code: "VENDOR011", name: "Fluid Specialists", price: 34.00, modelCode: "MC011", qty: 35 },
  { code: "VENDOR012", name: "Electrical Parts Co", price: 28.00, modelCode: "MC012", qty: 80 },
  { code: "VENDOR013", name: "Cooling Systems", price: 55.00, modelCode: "MC013", qty: 25 },
  { code: "VENDOR014", name: "Exhaust Components", price: 75.00, modelCode: "MC014", qty: 40 },
  { code: "VENDOR015", name: "Interior Parts Ltd", price: 35.00, modelCode: "MC015", qty: 60 }
]);

// Computed property for filtered parts
const filteredParts = computed(() => {
  if (!searchQuery.value) {
    return masterParts.value;
  }
  return masterParts.value.filter(part => 
    part.partNo.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    part.partName.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// Computed property for filtered vendors
const filteredVendors = computed(() => {
  if (!vendorSearchQuery.value) {
    return masterVendors.value;
  }
  return masterVendors.value.filter(vendor => 
    vendor.code.toLowerCase().includes(vendorSearchQuery.value.toLowerCase()) ||
    vendor.name.toLowerCase().includes(vendorSearchQuery.value.toLowerCase())
  );
});

// Computed properties for vendor pagination
const totalVendorPages = computed(() => {
  return Math.ceil(form.vendors.length / vendorsPerPage);
});

const paginatedVendors = computed(() => {
  const start = (currentVendorPage.value - 1) * vendorsPerPage;
  const end = start + vendorsPerPage;
  return form.vendors.slice(start, end);
});

  
  const form = reactive({
  partNo: "",
    partName: "",
    vendorPartCode: "",
    tag: "",
    partType: "Local Content Sp",
  categoryCode: "",
  categoryName: "",
  groupCode: "",
  groupName: "",
    dutyPercent: 0,
    yenPrice: 0,
    taxable: false,
    rmCostPrice: 0,
    dateCreated: "2022-06-22",
    rmSalePrice: 0,
    specifications: "",
  supercededBy: "",
    vendors: [
    { code: "", name: "", price: 0, preferred: false, modelCode: "", qty: 0 },
    { code: "", name: "", price: 0, preferred: false, modelCode: "", qty: 0 },
    { code: "", name: "", price: 0, preferred: false, modelCode: "", qty: 0 },
    ],
  });

// Modal functions
const openPartModal = () => {
  showPartModal.value = true;
  searchQuery.value = "";
  selectedPartInModal.value = null;
};

const closePartModal = () => {
  showPartModal.value = false;
  searchQuery.value = "";
  selectedPartInModal.value = null;
};

// Vendor modal functions
const openVendorModal = (vendorIndex) => {
  currentVendorRowIndex.value = vendorIndex;
  showVendorModal.value = true;
  selectedVendorInModal.value = null;
  vendorSearchQuery.value = "";
};

const closeVendorModal = () => {
  showVendorModal.value = false;
  selectedVendorInModal.value = null;
  currentVendorRowIndex.value = null;
  vendorSearchQuery.value = "";
};

const selectVendorAndCloseModal = (vendor) => {
  if (currentVendorRowIndex.value !== null) {
    // Get the actual index in the form.vendors array
    const actualIndex = (currentVendorPage.value - 1) * vendorsPerPage + currentVendorRowIndex.value;
    
    // Populate the vendor data for the selected row
    if (form.vendors[actualIndex]) {
      form.vendors[actualIndex].code = vendor.code;
      form.vendors[actualIndex].name = vendor.name;
      form.vendors[actualIndex].price = vendor.price;
      form.vendors[actualIndex].modelCode = vendor.modelCode;
      form.vendors[actualIndex].qty = vendor.qty;
    }
  }
  closeVendorModal();
};

const confirmPartSelection = () => {
  if (selectedPartInModal.value) {
    selectPart(selectedPartInModal.value);
  }
};

// Direct selection and close modal functions
const selectPartAndCloseModal = (part) => {
  selectPart(part);
  closePartModal();
};

const selectPartTypeAndCloseModal = (partType) => {
  form.partType = partType.value;
  closePartTypeModal();
};

// Part Type modal functions
const openPartTypeModal = () => {
  showPartTypeModal.value = true;
  selectedPartType.value = null;
};

const closePartTypeModal = () => {
  showPartTypeModal.value = false;
  selectedPartType.value = null;
};

const confirmPartTypeSelection = () => {
  if (selectedPartType.value) {
    form.partType = selectedPartType.value.value;
    closePartTypeModal();
  }
};

const selectPart = (part) => {
  // Populate Part No and Part Name when selecting from modal
  form.partNo = part.partNo;
  form.partName = part.partName;
  
  // Clear all other fields
  form.vendorPartCode = "";
  form.tag = "";
  form.partType = "Local Content Sp";
  form.categoryCode = "";
  form.categoryName = "";
  form.groupCode = "";
  form.groupName = "";
  form.dutyPercent = 0;
  form.yenPrice = 0;
  form.taxable = false;
  form.rmCostPrice = 0;
  form.dateCreated = "2022-06-22";
  form.rmSalePrice = 0;
  form.specifications = "";
  form.supercededBy = "";
  form.vendors = [
    { code: "", name: "", price: 0, preferred: false, modelCode: "", qty: 0 },
    { code: "", name: "", price: 0, preferred: false, modelCode: "", qty: 0 },
    { code: "", name: "", price: 0, preferred: false, modelCode: "", qty: 0 },
  ];
  
  // Reset vendor pagination to first page
  currentVendorPage.value = 1;
  
  closePartModal();
};

// Function to load complete part data (used by F8 execute query)
const loadCompletePartData = (part) => {
  // Populate form with complete selected part data
  Object.assign(form, {
    partNo: part.partNo,
    partName: part.partName,
    vendorPartCode: part.vendorPartCode,
    tag: part.tag,
    partType: part.partType,
    categoryCode: part.categoryCode,
    categoryName: part.categoryName,
    groupCode: part.groupCode,
    groupName: part.groupName,
    dutyPercent: part.dutyPercent,
    yenPrice: part.yenPrice,
    taxable: part.taxable,
    rmCostPrice: part.rmCostPrice,
    dateCreated: part.dateCreated,
    rmSalePrice: part.rmSalePrice,
    specifications: part.specifications,
    supercededBy: part.supercededBy,
    vendors: [...part.vendors], // Copy vendors array
  });
  
  // Reset vendor pagination to first page
  currentVendorPage.value = 1;
};

// Load empty form on component mount (no data loaded initially)
onMounted(() => {
  // Start with empty form - no data loaded initially
  resetForm();
  
  // Enable edit mode for new data entry
  isEditMode.value = true;
  
  // Add keyboard event listener for F9 key
  document.addEventListener('keydown', handleKeyDown);
});

// Clean up event listener on unmount
onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown);
});

// Toggle edit mode function
const toggleEditMode = () => {
  isEditMode.value = !isEditMode.value;
  console.log('Edit mode toggled:', isEditMode.value ? 'ON' : 'OFF');
};

// Save changes and exit edit mode function
const saveChangesAndExitEditMode = () => {
  if (isEditMode.value) {
    // Here you would typically save the data to your backend
    console.log('Saving changes:', form);
    
    // Show success message
    if (typeof window !== 'undefined' && window.Swal) {
      window.Swal.fire({
        title: 'Success!',
        text: 'Changes saved successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    } else {
      alert('Changes saved successfully!');
    }
    
    // Exit edit mode
    isEditMode.value = false;
    console.log('Edit mode turned OFF - Changes saved');
  }
};

// Handle keyboard events
const handleKeyDown = (event) => {
  // Check if F7 key is pressed (keyCode 118 or key === 'F7')
  if (event.key === 'F7' || event.keyCode === 118) {
    event.preventDefault();
    handleQuery();
  }
  
  // Check if F9 key is pressed (keyCode 120 or key === 'F9')
  if (event.key === 'F9' || event.keyCode === 120) {
    // Check if Part No field is focused
    if (partNoFocused.value) {
      event.preventDefault();
      openPartModal();
    }
    // Check if Part Type field is focused
    else if (partTypeFocused.value) {
      event.preventDefault();
      openPartTypeModal();
    }
    // Check if a vendor code field is focused
    else if (event.target && event.target.placeholder === 'Enter vendor code') {
      event.preventDefault();
      // Find the vendor row index from the clicked element
      const vendorRow = event.target.closest('tr');
      if (vendorRow) {
        const vendorIndex = Array.from(vendorRow.parentNode.children).indexOf(vendorRow);
        openVendorModal(vendorIndex);
      }
    }
  }
  
  // Check if F8 key is pressed (keyCode 119 or key === 'F8')
  if (event.key === 'F8' || event.keyCode === 119) {
    event.preventDefault();
    handleExecuteQuery();
  }
};

const handleClose = () => {
  // Close the form (could navigate back or close modal)
};

const handleRefresh = () => {
  // Refresh form data (could be API call)
  // Reset form to empty state
  resetForm();
};

const handleNew = () => {
  // Generate next part code
  const nextPartCode = generateNextPartCode();
  
  // Check if part code already exists
  const existingPart = masterParts.value.find(part => part.partNo === nextPartCode);
  
  if (existingPart) {
    // If part exists but has no vendor data (empty vendors array or empty vendor code), load it for editing
    const hasVendorData = existingPart.vendors && existingPart.vendors.length > 0 && 
                         existingPart.vendors.some(vendor => vendor.code && vendor.name);
    
    if (!hasVendorData) {
      loadCompletePartData(existingPart);
    } else {
      // Part exists with data, show message
      if (typeof window !== 'undefined' && window.Swal) {
        window.Swal.fire({
          title: 'Part Exists',
          text: `Part ${nextPartCode} already exists with data. Use Query mode to edit it.`,
          icon: 'info',
          confirmButtonText: 'OK'
        });
      }
      return;
    }
  } else {
    // Create new part with empty data
    const newPart = {
      partNo: nextPartCode,
      partName: `New Part ${nextPartCode}`,
      vendorPartCode: "",
      tag: "",
      partType: "Local Content Sp",
      categoryCode: "",
      categoryName: "",
      groupCode: "",
      groupName: "",
      dutyPercent: 0,
      yenPrice: 0,
      taxable: false,
      rmCostPrice: 0,
      dateCreated: new Date().toISOString().split('T')[0], // Current date
      rmSalePrice: 0,
      specifications: "",
      supercededBy: "",
      vendors: [
        { code: "", name: "", price: 0, preferred: false, modelCode: "", qty: 0 }
      ]
    };
    
    // Add to master parts array
    masterParts.value.push(newPart);
    
    // Load the new part into the form
    loadCompletePartData(newPart);
  }
  
  // Show success message
  if (typeof window !== 'undefined' && window.Swal) {
    window.Swal.fire({
      title: 'New Part',
      text: `Ready to create part ${nextPartCode}. Fill in the details and click Save.`,
      icon: 'info',
      confirmButtonText: 'OK'
    });
  }
};

// Generate next part code (P016, P017, etc.)
const generateNextPartCode = () => {
  // Find the highest part number in the list
  let maxNumber = 0;
  masterParts.value.forEach(part => {
    const match = part.partNo.match(/^P(\d+)$/);
    if (match) {
      const number = parseInt(match[1]);
      if (number > maxNumber) {
        maxNumber = number;
      }
    }
  });
  
  // Return next part code
  const nextNumber = maxNumber + 1;
  return `P${nextNumber.toString().padStart(3, '0')}`;
};

const handleSave = () => {
  // Save form data (could be API call)
  
  if (isQueryMode.value) {
    // In query mode, save vendor edits and exit query mode
    // Here you would typically save the vendor data to your backend
    
    // Show success message
    if (typeof window !== 'undefined' && window.Swal) {
      window.Swal.fire({
        title: 'Saved!',
        text: 'Vendor data has been saved successfully',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        // Exit query mode after saving
        exitQueryMode();
      });
    } else {
      alert('Vendor data has been saved successfully');
      // Exit query mode after saving
      exitQueryMode();
    }
  } else {
    // Normal save (not in query mode) - Create new part
    if (form.partNo && form.partName) {
      // Check if part already exists
      const existingPart = masterParts.value.find(part => part.partNo === form.partNo);
      
      if (existingPart) {
        // Update existing part
        Object.assign(existingPart, {
          partNo: form.partNo,
          partName: form.partName,
          vendorPartCode: form.vendorPartCode,
          tag: form.tag,
          partType: form.partType,
          categoryCode: form.categoryCode,
          categoryName: form.categoryName,
          groupCode: form.groupCode,
          groupName: form.groupName,
          dutyPercent: form.dutyPercent,
          yenPrice: form.yenPrice,
          taxable: form.taxable,
          rmCostPrice: form.rmCostPrice,
          dateCreated: form.dateCreated,
          rmSalePrice: form.rmSalePrice,
          specifications: form.specifications,
          supercededBy: form.supercededBy,
          vendors: [...form.vendors]
        });
        
        // Show success message
        if (typeof window !== 'undefined' && window.Swal) {
          window.Swal.fire({
            title: 'Updated!',
            text: 'Part data has been updated successfully',
            icon: 'success',
            confirmButtonText: 'OK'
          });
        } else {
          alert('Part data has been updated successfully');
        }
      } else {
        // Create new part (this shouldn't happen now since we pre-create empty parts)
        const newPart = {
          partNo: form.partNo,
          partName: form.partName,
          vendorPartCode: form.vendorPartCode,
          tag: form.tag,
          partType: form.partType,
          categoryCode: form.categoryCode,
          categoryName: form.categoryName,
          groupCode: form.groupCode,
          groupName: form.groupName,
          dutyPercent: form.dutyPercent,
          yenPrice: form.yenPrice,
          taxable: form.taxable,
          rmCostPrice: form.rmCostPrice,
          dateCreated: form.dateCreated,
          rmSalePrice: form.rmSalePrice,
          specifications: form.specifications,
          supercededBy: form.supercededBy,
          vendors: [...form.vendors]
        };
        
        // Add to master parts array
        masterParts.value.push(newPart);
        
        // Show success message
        if (typeof window !== 'undefined' && window.Swal) {
          window.Swal.fire({
            title: 'Created!',
            text: 'New part has been created successfully',
            icon: 'success',
            confirmButtonText: 'OK'
          });
        } else {
          alert('New part has been created successfully');
        }
      }
    } else {
      // Show error message for missing required fields
      if (typeof window !== 'undefined' && window.Swal) {
        window.Swal.fire({
          title: 'Error!',
          text: 'Please fill in Part No and Part Name before saving',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      } else {
        alert('Please fill in Part No and Part Name before saving');
      }
    }
  }
};

// Vendor pagination functions
const nextVendorPage = () => {
  if (currentVendorPage.value < totalVendorPages.value) {
    currentVendorPage.value++;
  }
};

const prevVendorPage = () => {
  if (currentVendorPage.value > 1) {
    currentVendorPage.value--;
  }
};

// Vendor management functions for query mode
const addVendorLine = () => {
  // Add a new empty vendor line
  form.vendors.push({
    code: "",
    name: "",
    price: 0,
    preferred: false,
    modelCode: "",
    qty: 0
  });
  
  // Recalculate total pages
  const newTotalPages = Math.ceil(form.vendors.length / vendorsPerPage);
  
  // If we're on the last page and it's now full, move to the new last page
  if (currentVendorPage.value === totalVendorPages.value && newTotalPages > totalVendorPages.value) {
    currentVendorPage.value = newTotalPages;
  }
  
};

const removeVendorLine = () => {
  if (form.vendors.length > 1) { // Keep at least one vendor line
    form.vendors.pop();
    
    // Clear selection if it was the last item
    if (selectedVendorIndex.value >= form.vendors.length) {
      selectedVendorIndex.value = null;
    }
    
    // Adjust current page if needed
    const newTotalPages = Math.ceil(form.vendors.length / vendorsPerPage);
    if (currentVendorPage.value > newTotalPages) {
      currentVendorPage.value = newTotalPages;
    }
    
  } else {
    if (typeof window !== 'undefined' && window.Swal) {
      window.Swal.fire({
        title: 'Cannot Remove',
        text: 'At least one vendor line is required',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
    }
  }
};

// Vendor row selection functions
const selectVendorRow = (index) => {
  if (isQueryMode.value) {
    selectedVendorIndex.value = selectedVendorIndex.value === index ? null : index;
  }
};

const removeSelectedVendor = () => {
  if (selectedVendorIndex.value === null) {
    if (typeof window !== 'undefined' && window.Swal) {
      window.Swal.fire({
        title: 'No Selection',
        text: 'Please select a vendor row to remove',
        icon: 'info',
        confirmButtonText: 'OK'
      });
    }
    return;
  }

  if (form.vendors.length <= 1) {
    if (typeof window !== 'undefined' && window.Swal) {
      window.Swal.fire({
        title: 'Cannot Remove',
        text: 'At least one vendor line is required',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
    }
    return;
  }

  // Directly remove the selected vendor (no confirmation dialog)
  form.vendors.splice(selectedVendorIndex.value, 1);
  
  // Clear selection
  selectedVendorIndex.value = null;
  
  // Adjust current page if needed
  const newTotalPages = Math.ceil(form.vendors.length / vendorsPerPage);
  if (currentVendorPage.value > newTotalPages) {
    currentVendorPage.value = newTotalPages;
  }
};

// Reset form to empty state
const resetForm = () => {
  Object.assign(form, {
    partNo: "",
    partName: "",
    vendorPartCode: "",
    tag: "",
    partType: "Local Content Sp",
    categoryCode: "",
    categoryName: "",
    groupCode: "",
    groupName: "",
    dutyPercent: 0,
    yenPrice: 0,
    taxable: false,
    rmCostPrice: 0,
    dateCreated: "2022-06-22",
    rmSalePrice: 0,
    specifications: "",
    supercededBy: "",
    vendors: [
      { code: "", name: "", price: 0, preferred: false, modelCode: "", qty: 0 },
      { code: "", name: "", price: 0, preferred: false, modelCode: "", qty: 0 },
      { code: "", name: "", price: 0, preferred: false, modelCode: "", qty: 0 },
    ],
  });
  
  // Reset vendor pagination
  currentVendorPage.value = 1;
  
  // Exit query mode
  isQueryMode.value = false;
  isQueryPrepared.value = false;
  queryResults.value = [];
  currentPartIndex.value = 0;
  queryFilter.value = "";
  selectedVendorIndex.value = null;
  
  // Enable edit mode for new data entry
  isEditMode.value = true;
};

// Load current part from query results into form
const loadCurrentPart = () => {
  if (queryResults.value.length > 0 && currentPartIndex.value < queryResults.value.length) {
    const part = queryResults.value[currentPartIndex.value];
    loadCompletePartData(part);
  }
};

// Navigation functions for query mode
const nextPart = () => {
  if (currentPartIndex.value < queryResults.value.length - 1) {
    currentPartIndex.value++;
    loadCurrentPart();
  }
};

const prevPart = () => {
  if (currentPartIndex.value > 0) {
    currentPartIndex.value--;
    loadCurrentPart();
  }
};

const exitQueryMode = () => {
  isQueryMode.value = false;
  isQueryPrepared.value = false;
  queryResults.value = [];
  currentPartIndex.value = 0;
  queryFilter.value = "";
  selectedVendorIndex.value = null;
  // Don't reset form - keep the current data with vendor edits
  // resetForm(); // Commented out to preserve the edited data
};

// Query functionality functions
const handleQuery = () => {
  // F7 functionality - prepare query based on current form state
  // Store the current part number as filter for execute query
  queryFilter.value = form.partNo;
  
  // Show query prepared indicator
  isQueryPrepared.value = true;
};

const handleExecuteQuery = () => {
  // F8 functionality - execute the prepared query
  // Use form.partNo as fallback if queryFilter is empty
  const filterValue = queryFilter.value || form.partNo;
  
  // Check if we have a specific part code filter
  if (filterValue && filterValue.trim() !== '') {
    // Filter by specific part code (e.g., P008) - use exact match
    const filteredParts = masterParts.value.filter(part => 
      part.partNo.toLowerCase() === filterValue.toLowerCase()
    );
    
    console.log('Filtered parts for', filterValue, ':', filteredParts);
    
    if (filteredParts.length === 0) {
      if (typeof window !== 'undefined' && window.Swal) {
        window.Swal.fire({
          title: 'No Results!',
          text: `No parts found matching code: ${filterValue}`,
          icon: 'warning',
          confirmButtonText: 'OK'
        });
      }
      return;
    }
    
    // Load the specific part directly into form (no navigation needed)
    loadCompletePartData(filteredParts[0]);
    isQueryPrepared.value = false; // Hide query prepared indicator
    
    // Enter query mode for editing (even for single part)
    queryResults.value = [filteredParts[0]]; // Set as single item array
    isQueryMode.value = true;
    currentPartIndex.value = 0;
    
    console.log(`Query executed: Loaded specific part ${filteredParts[0].partNo}`);
    
    // Show success message
    if (typeof window !== 'undefined' && window.Swal) {
      window.Swal.fire({
        title: 'Query Executed!',
        text: `Loaded part: ${filteredParts[0].partNo} - ${filteredParts[0].partName}`,
        icon: 'success',
        confirmButtonText: 'OK'
      });
    }
    
  } else {
    // Show only parts with complete data if no filter (from latest - reverse order to show newest first)
    const partsWithData = masterParts.value.filter(part => {
      // Check if part has vendor data (complete data)
      return part.vendors && part.vendors.length > 0 && 
             part.vendors.some(vendor => vendor.code && vendor.name);
    });
    
    queryResults.value = [...partsWithData].reverse();
    
    // Enter query mode and load first part
    isQueryMode.value = true;
    isQueryPrepared.value = false; // Hide query prepared indicator
    currentPartIndex.value = 0;
    loadCurrentPart();
    
    console.log(`Query executed: Found ${queryResults.value.length} records with complete data`);
    
    // Show success message
    if (typeof window !== 'undefined' && window.Swal) {
      window.Swal.fire({
        title: 'Query Executed!',
        text: `Found ${queryResults.value.length} records with complete data. Use navigation buttons to browse.`,
        icon: 'success',
        confirmButtonText: 'OK'
      });
    }
  }
};

</script>