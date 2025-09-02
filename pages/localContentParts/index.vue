<template>
    <div>
      <LayoutsBreadcrumb />
      <rs-card>
        <template #header>
          <div class="flex">
            <Icon class="mr-2 flex justify-center" name="ic:outline-inventory"></Icon>
            Local Content Parts
          </div>
        </template>
        <template #body>
          <div class="space-y-6">
        <!-- Top form fields -->
            <div class="grid grid-cols-6 gap-4">
                             <!-- Row 1 -->
               <div>
                 <FormKit
                   type="text"
                   label="Part No"
                   v-model="form.partNo"
                   placeholder="Enter part number"
                   readonly
                 >
                   <template #suffix>
                     <button
                       type="button"
                       class="text-xs bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded mr-1"
                       @click="openPartModal"
                     >
                       F7
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
                  readonly
                />
              </div>
              <div>
                <FormKit
                  type="text"
                  label="Vendor Part Code"
                  v-model="form.vendorPartCode"
                  placeholder="Enter vendor part code"
                  readonly
                />
          </div>
          <div>
                <FormKit
                  type="text"
                  label="Tag"
                  v-model="form.tag"
                  placeholder="Enter tag"
                  readonly
                />
          </div>
          <div>
                <FormKit
                  type="text"
                  label="Part Type"
                  v-model="form.partType"
                  placeholder="Select part type"
                  readonly
                  @click="openPartTypeModal"
                >
                  <template #suffix>
                    <button
                      type="button"
                      class="text-xs bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded mr-1"
                      @click="openPartTypeModal"
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
                  readonly
                />
          </div>
              <div class="col-span-2">
                <FormKit
                  type="text"
                  label="Category Name"
                  v-model="form.categoryName"
                  placeholder="Enter category name"
                  readonly
                />
          </div>
          <div>
                <FormKit
                  type="text"
                  label="Group Code"
                  v-model="form.groupCode"
                  placeholder="Enter group code"
                  readonly
                />
          </div>
              <div class="col-span-2">
                <FormKit
                  type="text"
                  label="Group Name"
                  v-model="form.groupName"
                  placeholder="Enter group name"
                  readonly
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
                  readonly
                />
          </div>
          <div>
                <FormKit
                  type="number"
                  label="Yen Price"
                  v-model="form.yenPrice"
                  placeholder="0"
                  step="0.01"
                  readonly
                />
              </div>
              <div class="flex items-center space-x-2 pt-6">
                <div class="flex items-center">
                  <span class="text-sm font-medium mr-2">Taxable:</span>
                  <div class="w-4 h-4 border border-gray-400 rounded-sm flex items-center justify-center bg-white">
                    <span v-if="form.taxable" class="text-gray-800 text-xs font-bold">✓</span>
                  </div>
                </div>
          </div>
          <div>
                <FormKit
                  type="number"
                  label="RM Cost Price"
                  v-model="form.rmCostPrice"
                  placeholder="0"
                  step="0.01"
                  readonly
                />
          </div>
          <div>
                <FormKit
                  type="date"
                  label="Date of Creation"
                  v-model="form.dateCreated"
                  readonly
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
                  readonly
                />
              </div>
              <div class="col-span-2">
                <FormKit
                  type="text"
                  label="Specifications"
                  v-model="form.specifications"
                  placeholder="Enter specifications"
                  readonly
                />
          </div>
              <div class="col-span-2">
                <FormKit
                  type="text"
                  label="Superceded By"
                  v-model="form.supercededBy"
                  placeholder="Enter superceded by"
                  readonly
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
                  <tr v-for="(vendor, index) in paginatedVendors" :key="index" class="hover:bg-gray-50">
                    <td class="px-4 py-3 border-b">
                      <FormKit
                        type="text"
                        v-model="vendor.code"
                        placeholder="Enter vendor code"
                        :classes="{ input: 'border-0 shadow-none' }"
                        readonly
                      />
                    </td>
                    <td class="px-4 py-3 border-b">
                      <FormKit
                        type="text"
                        v-model="vendor.name"
                        placeholder="Enter vendor name"
                        :classes="{ input: 'border-0 shadow-none' }"
                        readonly
                      />
                </td>
                    <td class="px-4 py-3 border-b">
                      <FormKit
                        type="number"
                        v-model="vendor.price"
                        placeholder="0"
                        step="0.01"
                        :classes="{ input: 'border-0 shadow-none' }"
                        readonly
                      />
                </td>
                    <td class="px-4 py-3 text-center border-b">
                      <div class="w-4 h-4 border border-gray-400 rounded-sm flex items-center justify-center mx-auto bg-white">
                        <span v-if="vendor.preferred" class="text-gray-800 text-xs font-bold">✓</span>
                      </div>
                </td>
                    <td class="px-4 py-3 border-b">
                      <FormKit
                        type="text"
                        v-model="vendor.modelCode"
                        placeholder="Enter model code"
                        :classes="{ input: 'border-0 shadow-none' }"
                        readonly
                      />
                </td>
                    <td class="px-4 py-3 border-b">
                      <FormKit
                        type="number"
                        v-model="vendor.qty"
                        placeholder="0"
                        :classes="{ input: 'border-0 shadow-none' }"
                        readonly
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
                    @click="selectedPartInModal = part"
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
            <button
              v-if="selectedPartInModal"
              @click="confirmPartSelection"
              class="px-4 py-2 text-sm bg-green-500 hover:bg-green-600 text-white rounded"
            >
              F8
            </button>
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
                @click="selectedPartType = partType"
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
            <button
              v-if="selectedPartType"
              @click="confirmPartTypeSelection"
              class="px-4 py-2 text-sm bg-green-500 hover:bg-green-600 text-white rounded"
            >
              F8
            </button>
          </div>
        </template>
      </rs-modal>
    </div>
  </template>
  
  <script setup>
import { reactive, ref, computed, onMounted } from "vue";

definePageMeta({
  title: "Local Content Parts",
});

// Modal state
const showPartModal = ref(false);
const searchQuery = ref("");
const selectedPartInModal = ref(null);

// Part Type modal state
const showPartTypeModal = ref(false);
const selectedPartType = ref(null);

// Vendor pagination state
const currentVendorPage = ref(1);
const vendorsPerPage = 4;

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
  }
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

const confirmPartSelection = () => {
  if (selectedPartInModal.value) {
    selectPart(selectedPartInModal.value);
  }
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
  // Populate form with selected part data
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
  
  closePartModal();
};

// Load first part data on component mount (view mode)
onMounted(() => {
  if (masterParts.value.length > 0) {
    selectPart(masterParts.value[0]);
  }
});

const handleClose = () => {
  // Close the form (could navigate back or close modal)
  console.log("Closing form...");
};

const handleRefresh = () => {
  // Refresh form data (could be API call)
  console.log("Refreshing form data...");
  // Reload the first part data
  if (masterParts.value.length > 0) {
    selectPart(masterParts.value[0]);
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
</script>