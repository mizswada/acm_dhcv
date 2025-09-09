<template>
  <div>
    <LayoutsBreadcrumb />
    <rs-card>
      <template #header>
        <div class="flex">
          <Icon class="mr-2 flex justify-center" name="ic:outline-assessment"></Icon>
          Business Reports
        </div>
      </template>
      <template #body>
        <div class="space-y-6">
          <!-- Report Parameters -->
          <div v-if="showParameters" class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-lg font-semibold mb-4">Report Parameters</h3>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <FormKit
                  type="select"
                  name="reportType"
                  label="Report Type"
                  v-model="reportParams.reportType"
                  :options="reportTypes"
                  placeholder="Select report type"
                />
              </div>
              <div>
                <FormKit
                  type="date"
                  name="fromDate"
                  label="From Date"
                  v-model="reportParams.fromDate"
                  :value="getDefaultFromDate()"
                  placeholder="Select start date"
                />
              </div>
              <div>
                <FormKit
                  type="date"
                  name="toDate"
                  label="To Date"
                  v-model="reportParams.toDate"
                  :value="getDefaultToDate()"
                  placeholder="Select end date"
                />
              </div>
            </div>
            
            <!-- Additional Parameters based on Report Type -->
            <div v-if="reportParams.reportType" class="mt-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div v-if="reportParams.reportType === 'sales'">
                  <FormKit
                    type="select"
                    name="salesType"
                    label="Sales Type"
                    v-model="reportParams.salesType"
                    :options="salesTypes"
                    placeholder="Select sales type"
                  />
                </div>
                <div v-if="reportParams.reportType === 'inventory'">
                  <FormKit
                    type="select"
                    name="category"
                    label="Category"
                    v-model="reportParams.category"
                    :options="categories"
                    placeholder="Select category"
                  />
                </div>
                <div v-if="reportParams.reportType === 'financial'">
                  <FormKit
                    type="select"
                    name="accountType"
                    label="Account Type"
                    v-model="reportParams.accountType"
                    :options="accountTypes"
                    placeholder="Select account type"
                  />
                </div>
                <div v-if="reportParams.reportType === 'customer'">
                  <FormKit
                    type="select"
                    name="region"
                    label="Region"
                    v-model="reportParams.region"
                    :options="regions"
                    placeholder="Select region"
                  />
                </div>
              </div>
            </div>
            
            <div class="flex justify-end space-x-4 mt-6">
              <rs-button
                variant="info"
                @click="generateReport"
                :disabled="!reportParams.reportType"
              >
                Generate Report
              </rs-button>
              <rs-button
                variant="success"
                @click="exportToCSV"
                :disabled="!reportData.length"
              >
                Export to CSV
              </rs-button>
            </div>
          </div>

          <!-- Action Buttons (Back to Parameters & Export) -->
          <div v-if="!showParameters && reportData.length" class="flex justify-between items-center mb-4">
            <rs-button
              variant="secondary"
              @click="goBackToParameters"
              class="flex items-center space-x-2"
            >
              <Icon name="ic:outline-arrow-back" class="w-4 h-4" />
              <span>Back to Parameters</span>
            </rs-button>
            
            <rs-button
              variant="success"
              @click="exportToCSV"
              class="flex items-center space-x-2"
            >
              <Icon name="ic:outline-download" class="w-4 h-4" />
              <span>Export to CSV</span>
            </rs-button>
          </div>

          <!-- Report Summary -->
          <div v-if="reportData.length" class="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div class="bg-blue-50 p-4 rounded-lg">
              <div class="flex items-center">
                <Icon name="ic:outline-people" class="text-blue-600 text-2xl mr-3" />
                <div>
                  <p class="text-sm text-blue-600">Total Users</p>
                  <p class="text-2xl font-bold text-blue-800">{{ reportSummary.totalUsers }}</p>
                </div>
              </div>
            </div>
            <div class="bg-green-50 p-4 rounded-lg">
              <div class="flex items-center">
                <Icon name="ic:outline-check-circle" class="text-green-600 text-2xl mr-3" />
                <div>
                  <p class="text-sm text-green-600">Active Users</p>
                  <p class="text-2xl font-bold text-green-800">{{ reportSummary.activeUsers }}</p>
                </div>
              </div>
            </div>
            <div class="bg-yellow-50 p-4 rounded-lg">
              <div class="flex items-center">
                <Icon name="ic:outline-pause-circle" class="text-yellow-600 text-2xl mr-3" />
                <div>
                  <p class="text-sm text-yellow-600">Inactive Users</p>
                  <p class="text-2xl font-bold text-yellow-800">{{ reportSummary.inactiveUsers }}</p>
                </div>
              </div>
            </div>
            <div class="bg-purple-50 p-4 rounded-lg">
              <div class="flex items-center">
                <Icon name="ic:outline-admin-panel-settings" class="text-purple-600 text-2xl mr-3" />
                <div>
                  <p class="text-sm text-purple-600">Admin Users</p>
                  <p class="text-2xl font-bold text-purple-800">{{ reportSummary.adminUsers }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Report Data Table -->
          <div v-if="reportData.length" class="bg-white">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-lg font-semibold">{{ getReportTitle() }}</h3>
              <div class="text-sm text-gray-600">
                Generated on: {{ new Date().toLocaleString() }}
              </div>
            </div>
            
            <div class="overflow-x-auto">
              <table class="w-full border border-gray-200 rounded-lg">
                <thead class="bg-gray-50">
                  <tr>
                    <th v-for="header in getTableHeaders()" :key="header" class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">
                      {{ header }}
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="(item, index) in reportData" :key="index" class="hover:bg-gray-50">
                    <td v-for="(value, key) in getTableData(item)" :key="key" class="px-4 py-3 border-b text-sm text-gray-900">
                      <span v-if="key === 'status'" :class="getStatusBadgeClass(value)" class="px-2 py-1 text-xs font-medium rounded-full">
                        {{ value }}
                      </span>
                      <span v-else-if="key === 'totalAmount' || key === 'unitPrice' || key === 'totalValue' || key === 'balance'">
                        {{ formatCurrency(value) }}
                      </span>
                      <span v-else>{{ value }}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- No Data Message -->
          <div v-if="!reportData.length && !isLoading" class="text-center py-12">
            <Icon name="ic:outline-inbox" class="text-gray-400 text-6xl mx-auto mb-4" />
            <h3 class="text-lg font-medium text-gray-900 mb-2">No Report Data</h3>
            <p class="text-gray-500">Select parameters and click "Generate Report" to view data.</p>
          </div>

          <!-- Loading State -->
          <div v-if="isLoading" class="text-center py-12">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p class="text-gray-500">Generating report...</p>
          </div>
        </div>
      </template>
    </rs-card>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue';

definePageMeta({
  title: "Business Reports",
});

// Report parameters
const reportParams = reactive({
  reportType: '',
  fromDate: '',
  toDate: '',
  salesType: '',
  category: '',
  accountType: '',
  region: ''
});

// Loading state
const isLoading = ref(false);

// UI state
const showParameters = ref(true);

// Report types
const reportTypes = [
  { label: 'Sales Orders', value: 'sales' },
  { label: 'Inventory Report', value: 'inventory' },
  { label: 'Financial Report', value: 'financial' },
  { label: 'Customer Report', value: 'customer' },
  { label: 'Purchase Orders', value: 'purchase' },
  { label: 'Service Orders', value: 'service' }
];

// Sales types
const salesTypes = [
  { label: 'All Sales', value: 'all' },
  { label: 'Online Sales', value: 'online' },
  { label: 'Retail Sales', value: 'retail' },
  { label: 'Wholesale Sales', value: 'wholesale' },
  { label: 'Export Sales', value: 'export' }
];

// Categories
const categories = [
  { label: 'All Categories', value: 'all' },
  { label: 'Electronics', value: 'electronics' },
  { label: 'Automotive', value: 'automotive' },
  { label: 'Spare Parts', value: 'spare_parts' },
  { label: 'Accessories', value: 'accessories' }
];

// Account types
const accountTypes = [
  { label: 'All Accounts', value: 'all' },
  { label: 'Assets', value: 'assets' },
  { label: 'Liabilities', value: 'liabilities' },
  { label: 'Revenue', value: 'revenue' },
  { label: 'Expenses', value: 'expenses' }
];

// Regions
const regions = [
  { label: 'All Regions', value: 'all' },
  { label: 'North', value: 'north' },
  { label: 'South', value: 'south' },
  { label: 'East', value: 'east' },
  { label: 'West', value: 'west' }
];

// Default date functions
const getDefaultFromDate = () => {
  const currentYear = new Date().getFullYear();
  return `${currentYear}-01-01`;
};

const getDefaultToDate = () => {
  return new Date().toISOString().split('T')[0];
};

// Hardcoded report data
const reportData = ref([]);

// Report summary
const reportSummary = computed(() => {
  if (!reportData.value.length) {
    return {
      totalUsers: 0,
      activeUsers: 0,
      inactiveUsers: 0,
      adminUsers: 0
    };
  }

  return {
    totalUsers: reportData.value.length,
    activeUsers: reportData.value.filter(user => user.status === 'Active').length,
    inactiveUsers: reportData.value.filter(user => user.status === 'Inactive').length,
    adminUsers: reportData.value.filter(user => user.role === 'Admin').length
  };
});

// Hardcoded data for different report types
const hardcodedData = {
  sales: [
    // 2024 Data
    {
      orderId: 'SO-2024-001',
      customerName: 'ABC Motors Ltd',
      orderDate: '2024-01-15',
      totalAmount: 125000.00,
      status: 'Completed',
      salesType: 'wholesale',
      region: 'north'
    },
    {
      orderId: 'SO-2024-002',
      customerName: 'XYZ Auto Parts',
      orderDate: '2024-01-14',
      totalAmount: 85000.50,
      status: 'Pending',
      salesType: 'retail',
      region: 'south'
    },
    {
      orderId: 'SO-2024-003',
      customerName: 'Global Export Co',
      orderDate: '2024-01-13',
      totalAmount: 250000.00,
      status: 'Completed',
      salesType: 'export',
      region: 'east'
    },
    {
      orderId: 'SO-2024-004',
      customerName: 'Online Store',
      orderDate: '2024-01-12',
      totalAmount: 45000.75,
      status: 'Shipped',
      salesType: 'online',
      region: 'west'
    },
    {
      orderId: 'SO-2024-005',
      customerName: 'Local Dealer',
      orderDate: '2024-01-11',
      totalAmount: 95000.25,
      status: 'Completed',
      salesType: 'wholesale',
      region: 'north'
    },
    {
      orderId: 'SO-2024-006',
      customerName: 'Premium Motors',
      orderDate: '2024-02-15',
      totalAmount: 180000.00,
      status: 'Completed',
      salesType: 'wholesale',
      region: 'east'
    },
    {
      orderId: 'SO-2024-007',
      customerName: 'City Auto Center',
      orderDate: '2024-02-20',
      totalAmount: 75000.00,
      status: 'Shipped',
      salesType: 'retail',
      region: 'north'
    },
    {
      orderId: 'SO-2024-008',
      customerName: 'International Trade',
      orderDate: '2024-03-10',
      totalAmount: 320000.00,
      status: 'Completed',
      salesType: 'export',
      region: 'south'
    },
    {
      orderId: 'SO-2024-009',
      customerName: 'E-Commerce Hub',
      orderDate: '2024-03-25',
      totalAmount: 65000.50,
      status: 'Pending',
      salesType: 'online',
      region: 'west'
    },
    {
      orderId: 'SO-2024-010',
      customerName: 'Metro Dealers',
      orderDate: '2024-04-05',
      totalAmount: 110000.75,
      status: 'Completed',
      salesType: 'wholesale',
      region: 'east'
    },
    {
      orderId: 'SO-2024-011',
      customerName: 'Quick Parts',
      orderDate: '2024-04-18',
      totalAmount: 42000.25,
      status: 'Shipped',
      salesType: 'retail',
      region: 'south'
    },
    {
      orderId: 'SO-2024-012',
      customerName: 'Overseas Trading',
      orderDate: '2024-05-12',
      totalAmount: 280000.00,
      status: 'Completed',
      salesType: 'export',
      region: 'north'
    },
    // 2025 Data
    {
      orderId: 'SO-2025-001',
      customerName: 'Future Motors Ltd',
      orderDate: '2025-01-08',
      totalAmount: 195000.00,
      status: 'Completed',
      salesType: 'wholesale',
      region: 'north'
    },
    {
      orderId: 'SO-2025-002',
      customerName: 'Next Gen Auto',
      orderDate: '2025-01-15',
      totalAmount: 125000.50,
      status: 'Pending',
      salesType: 'retail',
      region: 'south'
    },
    {
      orderId: 'SO-2025-003',
      customerName: 'Global Future Co',
      orderDate: '2025-01-22',
      totalAmount: 450000.00,
      status: 'Completed',
      salesType: 'export',
      region: 'east'
    },
    {
      orderId: 'SO-2025-004',
      customerName: 'Digital Store',
      orderDate: '2025-01-28',
      totalAmount: 85000.75,
      status: 'Shipped',
      salesType: 'online',
      region: 'west'
    },
    {
      orderId: 'SO-2025-005',
      customerName: 'Modern Dealers',
      orderDate: '2025-02-05',
      totalAmount: 165000.25,
      status: 'Completed',
      salesType: 'wholesale',
      region: 'north'
    },
    {
      orderId: 'SO-2025-006',
      customerName: 'Elite Motors',
      orderDate: '2025-02-12',
      totalAmount: 220000.00,
      status: 'Completed',
      salesType: 'wholesale',
      region: 'east'
    },
    {
      orderId: 'SO-2025-007',
      customerName: 'Urban Auto Hub',
      orderDate: '2025-02-18',
      totalAmount: 95000.00,
      status: 'Shipped',
      salesType: 'retail',
      region: 'north'
    },
    {
      orderId: 'SO-2025-008',
      customerName: 'World Trade Inc',
      orderDate: '2025-03-03',
      totalAmount: 380000.00,
      status: 'Completed',
      salesType: 'export',
      region: 'south'
    },
    {
      orderId: 'SO-2025-009',
      customerName: 'Smart Commerce',
      orderDate: '2025-03-15',
      totalAmount: 75000.50,
      status: 'Pending',
      salesType: 'online',
      region: 'west'
    },
    {
      orderId: 'SO-2025-010',
      customerName: 'Advanced Dealers',
      orderDate: '2025-03-22',
      totalAmount: 140000.75,
      status: 'Completed',
      salesType: 'wholesale',
      region: 'east'
    }
  ],
  inventory: [
    // 2024 Data
    {
      itemCode: 'ITM-001',
      itemName: 'Engine Oil Filter',
      category: 'spare_parts',
      quantity: 150,
      unitPrice: 25.50,
      totalValue: 3825.00,
      lastUpdated: '2024-01-15'
    },
    {
      itemCode: 'ITM-002',
      itemName: 'Brake Pads',
      category: 'spare_parts',
      quantity: 75,
      unitPrice: 45.00,
      totalValue: 3375.00,
      lastUpdated: '2024-01-14'
    },
    {
      itemCode: 'ITM-003',
      itemName: 'Car Stereo',
      category: 'electronics',
      quantity: 25,
      unitPrice: 120.00,
      totalValue: 3000.00,
      lastUpdated: '2024-01-13'
    },
    {
      itemCode: 'ITM-004',
      itemName: 'Tire Set',
      category: 'automotive',
      quantity: 40,
      unitPrice: 85.00,
      totalValue: 3400.00,
      lastUpdated: '2024-01-12'
    },
    {
      itemCode: 'ITM-005',
      itemName: 'Air Filter',
      category: 'spare_parts',
      quantity: 200,
      unitPrice: 18.50,
      totalValue: 3700.00,
      lastUpdated: '2024-02-10'
    },
    {
      itemCode: 'ITM-006',
      itemName: 'GPS Navigation',
      category: 'electronics',
      quantity: 30,
      unitPrice: 250.00,
      totalValue: 7500.00,
      lastUpdated: '2024-02-15'
    },
    {
      itemCode: 'ITM-007',
      itemName: 'Battery 12V',
      category: 'automotive',
      quantity: 50,
      unitPrice: 180.00,
      totalValue: 9000.00,
      lastUpdated: '2024-03-05'
    },
    {
      itemCode: 'ITM-008',
      itemName: 'Spark Plugs',
      category: 'spare_parts',
      quantity: 300,
      unitPrice: 12.00,
      totalValue: 3600.00,
      lastUpdated: '2024-03-20'
    },
    {
      itemCode: 'ITM-009',
      itemName: 'LED Headlights',
      category: 'electronics',
      quantity: 60,
      unitPrice: 95.00,
      totalValue: 5700.00,
      lastUpdated: '2024-04-08'
    },
    {
      itemCode: 'ITM-010',
      itemName: 'Transmission Fluid',
      category: 'automotive',
      quantity: 80,
      unitPrice: 35.00,
      totalValue: 2800.00,
      lastUpdated: '2024-04-25'
    },
    // 2025 Data
    {
      itemCode: 'ITM-2025-001',
      itemName: 'Smart Oil Filter',
      category: 'spare_parts',
      quantity: 120,
      unitPrice: 32.00,
      totalValue: 3840.00,
      lastUpdated: '2025-01-10'
    },
    {
      itemCode: 'ITM-2025-002',
      itemName: 'Carbon Brake Pads',
      category: 'spare_parts',
      quantity: 90,
      unitPrice: 65.00,
      totalValue: 5850.00,
      lastUpdated: '2025-01-18'
    },
    {
      itemCode: 'ITM-2025-003',
      itemName: 'AI Car Assistant',
      category: 'electronics',
      quantity: 35,
      unitPrice: 450.00,
      totalValue: 15750.00,
      lastUpdated: '2025-01-25'
    },
    {
      itemCode: 'ITM-2025-004',
      itemName: 'Eco-Friendly Tires',
      category: 'automotive',
      quantity: 45,
      unitPrice: 120.00,
      totalValue: 5400.00,
      lastUpdated: '2025-02-05'
    },
    {
      itemCode: 'ITM-2025-005',
      itemName: 'HEPA Air Filter',
      category: 'spare_parts',
      quantity: 180,
      unitPrice: 28.00,
      totalValue: 5040.00,
      lastUpdated: '2025-02-12'
    },
    {
      itemCode: 'ITM-2025-006',
      itemName: 'Wireless Charger',
      category: 'electronics',
      quantity: 100,
      unitPrice: 45.00,
      totalValue: 4500.00,
      lastUpdated: '2025-02-20'
    },
    {
      itemCode: 'ITM-2025-007',
      itemName: 'Lithium Battery',
      category: 'automotive',
      quantity: 40,
      unitPrice: 320.00,
      totalValue: 12800.00,
      lastUpdated: '2025-03-08'
    },
    {
      itemCode: 'ITM-2025-008',
      itemName: 'Iridium Spark Plugs',
      category: 'spare_parts',
      quantity: 250,
      unitPrice: 18.50,
      totalValue: 4625.00,
      lastUpdated: '2025-03-15'
    }
  ],
  financial: [
    // 2024 Data
    {
      accountCode: 'ACC-001',
      accountName: 'Cash Account',
      accountType: 'assets',
      balance: 150000.00,
      lastTransaction: '2024-01-15',
      status: 'Active'
    },
    {
      accountCode: 'ACC-002',
      accountName: 'Accounts Receivable',
      accountType: 'assets',
      balance: 75000.50,
      lastTransaction: '2024-01-14',
      status: 'Active'
    },
    {
      accountCode: 'ACC-003',
      accountName: 'Sales Revenue',
      accountType: 'revenue',
      balance: 500000.00,
      lastTransaction: '2024-01-13',
      status: 'Active'
    },
    {
      accountCode: 'ACC-004',
      accountName: 'Operating Expenses',
      accountType: 'expenses',
      balance: 125000.25,
      lastTransaction: '2024-01-12',
      status: 'Active'
    },
    {
      accountCode: 'ACC-005',
      accountName: 'Inventory Assets',
      accountType: 'assets',
      balance: 250000.00,
      lastTransaction: '2024-02-10',
      status: 'Active'
    },
    {
      accountCode: 'ACC-006',
      accountName: 'Accounts Payable',
      accountType: 'liabilities',
      balance: 85000.75,
      lastTransaction: '2024-02-15',
      status: 'Active'
    },
    {
      accountCode: 'ACC-007',
      accountName: 'Service Revenue',
      accountType: 'revenue',
      balance: 180000.00,
      lastTransaction: '2024-03-05',
      status: 'Active'
    },
    {
      accountCode: 'ACC-008',
      accountName: 'Marketing Expenses',
      accountType: 'expenses',
      balance: 45000.50,
      lastTransaction: '2024-03-20',
      status: 'Active'
    },
    {
      accountCode: 'ACC-009',
      accountName: 'Fixed Assets',
      accountType: 'assets',
      balance: 500000.00,
      lastTransaction: '2024-04-08',
      status: 'Active'
    },
    {
      accountCode: 'ACC-010',
      accountName: 'Bank Loan',
      accountType: 'liabilities',
      balance: 300000.00,
      lastTransaction: '2024-04-25',
      status: 'Active'
    },
    // 2025 Data
    {
      accountCode: 'ACC-2025-001',
      accountName: 'Digital Cash Account',
      accountType: 'assets',
      balance: 200000.00,
      lastTransaction: '2025-01-10',
      status: 'Active'
    },
    {
      accountCode: 'ACC-2025-002',
      accountName: 'Future Receivables',
      accountType: 'assets',
      balance: 120000.00,
      lastTransaction: '2025-01-18',
      status: 'Active'
    },
    {
      accountCode: 'ACC-2025-003',
      accountName: 'AI Service Revenue',
      accountType: 'revenue',
      balance: 750000.00,
      lastTransaction: '2025-01-25',
      status: 'Active'
    },
    {
      accountCode: 'ACC-2025-004',
      accountName: 'Technology Expenses',
      accountType: 'expenses',
      balance: 180000.00,
      lastTransaction: '2025-02-05',
      status: 'Active'
    },
    {
      accountCode: 'ACC-2025-005',
      accountName: 'Smart Inventory',
      accountType: 'assets',
      balance: 350000.00,
      lastTransaction: '2025-02-12',
      status: 'Active'
    },
    {
      accountCode: 'ACC-2025-006',
      accountName: 'Digital Payables',
      accountType: 'liabilities',
      balance: 95000.25,
      lastTransaction: '2025-02-20',
      status: 'Active'
    },
    {
      accountCode: 'ACC-2025-007',
      accountName: 'E-commerce Revenue',
      accountType: 'revenue',
      balance: 320000.00,
      lastTransaction: '2025-03-08',
      status: 'Active'
    },
    {
      accountCode: 'ACC-2025-008',
      accountName: 'Innovation Expenses',
      accountType: 'expenses',
      balance: 75000.00,
      lastTransaction: '2025-03-15',
      status: 'Active'
    }
  ],
  customer: [
    // 2024 Data
    {
      customerId: 'CUST-001',
      customerName: 'ABC Motors Ltd',
      email: 'contact@abcmotors.com',
      phone: '+60123456789',
      region: 'north',
      totalOrders: 15,
      lastOrderDate: '2024-01-15',
      status: 'Active'
    },
    {
      customerId: 'CUST-002',
      customerName: 'XYZ Auto Parts',
      email: 'info@xyzautoparts.com',
      phone: '+60198765432',
      region: 'south',
      totalOrders: 8,
      lastOrderDate: '2024-01-14',
      status: 'Active'
    },
    {
      customerId: 'CUST-003',
      customerName: 'Global Export Co',
      email: 'sales@globalexport.com',
      phone: '+60187654321',
      region: 'east',
      totalOrders: 25,
      lastOrderDate: '2024-01-13',
      status: 'Active'
    },
    {
      customerId: 'CUST-004',
      customerName: 'Metro Auto Center',
      email: 'orders@metroauto.com',
      phone: '+60134567890',
      region: 'west',
      totalOrders: 12,
      lastOrderDate: '2024-02-20',
      status: 'Active'
    },
    {
      customerId: 'CUST-005',
      customerName: 'Premium Dealers',
      email: 'sales@premiumdealers.com',
      phone: '+60145678901',
      region: 'north',
      totalOrders: 20,
      lastOrderDate: '2024-03-10',
      status: 'Active'
    },
    {
      customerId: 'CUST-006',
      customerName: 'Quick Parts Ltd',
      email: 'info@quickparts.com',
      phone: '+60156789012',
      region: 'south',
      totalOrders: 6,
      lastOrderDate: '2024-03-25',
      status: 'Inactive'
    },
    {
      customerId: 'CUST-007',
      customerName: 'City Motors',
      email: 'contact@citymotors.com',
      phone: '+60167890123',
      region: 'east',
      totalOrders: 18,
      lastOrderDate: '2024-04-15',
      status: 'Active'
    },
    {
      customerId: 'CUST-008',
      customerName: 'Online Auto Store',
      email: 'support@onlineauto.com',
      phone: '+60178901234',
      region: 'west',
      totalOrders: 30,
      lastOrderDate: '2024-04-30',
      status: 'Active'
    },
    // 2025 Data
    {
      customerId: 'CUST-2025-001',
      customerName: 'Future Motors Ltd',
      email: 'orders@futuremotors.com',
      phone: '+60189012345',
      region: 'north',
      totalOrders: 22,
      lastOrderDate: '2025-01-08',
      status: 'Active'
    },
    {
      customerId: 'CUST-2025-002',
      customerName: 'Next Gen Auto',
      email: 'sales@nextgenauto.com',
      phone: '+60190123456',
      region: 'south',
      totalOrders: 14,
      lastOrderDate: '2025-01-15',
      status: 'Active'
    },
    {
      customerId: 'CUST-2025-003',
      customerName: 'Global Future Co',
      email: 'export@globalfuture.com',
      phone: '+60101234567',
      region: 'east',
      totalOrders: 35,
      lastOrderDate: '2025-01-22',
      status: 'Active'
    },
    {
      customerId: 'CUST-2025-004',
      customerName: 'Digital Store',
      email: 'orders@digitalstore.com',
      phone: '+60112345678',
      region: 'west',
      totalOrders: 28,
      lastOrderDate: '2025-01-28',
      status: 'Active'
    },
    {
      customerId: 'CUST-2025-005',
      customerName: 'Modern Dealers',
      email: 'contact@moderndealers.com',
      phone: '+60123456789',
      region: 'north',
      totalOrders: 16,
      lastOrderDate: '2025-02-05',
      status: 'Active'
    },
    {
      customerId: 'CUST-2025-006',
      customerName: 'Elite Motors',
      email: 'sales@elitemotors.com',
      phone: '+60134567890',
      region: 'east',
      totalOrders: 24,
      lastOrderDate: '2025-02-12',
      status: 'Active'
    },
    {
      customerId: 'CUST-2025-007',
      customerName: 'Urban Auto Hub',
      email: 'info@urbanautohub.com',
      phone: '+60145678901',
      region: 'north',
      totalOrders: 11,
      lastOrderDate: '2025-02-18',
      status: 'Active'
    },
    {
      customerId: 'CUST-2025-008',
      customerName: 'World Trade Inc',
      email: 'export@worldtrade.com',
      phone: '+60156789012',
      region: 'south',
      totalOrders: 42,
      lastOrderDate: '2025-03-03',
      status: 'Active'
    },
    {
      customerId: 'CUST-2025-009',
      customerName: 'Smart Commerce',
      email: 'orders@smartcommerce.com',
      phone: '+60167890123',
      region: 'west',
      totalOrders: 19,
      lastOrderDate: '2025-03-15',
      status: 'Active'
    },
    {
      customerId: 'CUST-2025-010',
      customerName: 'Advanced Dealers',
      email: 'contact@advanceddealers.com',
      phone: '+60178901234',
      region: 'east',
      totalOrders: 26,
      lastOrderDate: '2025-03-22',
      status: 'Active'
    }
  ]
};

// Generate report function
const generateReport = async () => {
  if (!reportParams.reportType) {
    alert('Please select a report type');
    return;
  }

  if (!reportParams.fromDate || !reportParams.toDate) {
    alert('Please select both from and to dates');
    return;
  }

  isLoading.value = true;

  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Get base data for the selected report type
  let filteredData = [...(hardcodedData[reportParams.reportType] || [])];

  // Apply date filtering
  const fromDate = new Date(reportParams.fromDate);
  const toDate = new Date(reportParams.toDate);

  filteredData = filteredData.filter(item => {
    const itemDate = new Date(item.orderDate || item.lastUpdated || item.lastTransaction || item.lastOrderDate);
    return itemDate >= fromDate && itemDate <= toDate;
  });

  // Apply additional filtering based on report type
  switch (reportParams.reportType) {
    case 'sales':
      if (reportParams.salesType && reportParams.salesType !== 'all') {
        filteredData = filteredData.filter(item => item.salesType === reportParams.salesType);
      }
      break;
    case 'inventory':
      if (reportParams.category && reportParams.category !== 'all') {
        filteredData = filteredData.filter(item => item.category === reportParams.category);
      }
      break;
    case 'financial':
      if (reportParams.accountType && reportParams.accountType !== 'all') {
        filteredData = filteredData.filter(item => item.accountType === reportParams.accountType);
      }
      break;
    case 'customer':
      if (reportParams.region && reportParams.region !== 'all') {
        filteredData = filteredData.filter(item => item.region === reportParams.region);
      }
      break;
  }

  reportData.value = filteredData;
  isLoading.value = false;
  
  // Hide parameters after successful report generation
  showParameters.value = false;
};

// Export to CSV function
const exportToCSV = () => {
  if (!reportData.value.length) {
    alert('No data to export');
    return;
  }

  // Get dynamic headers and data based on report type
  const headers = getTableHeaders();
  const csvData = reportData.value.map(item => {
    const tableData = getTableData(item);
    return headers.map(header => {
      const key = Object.keys(tableData).find(k => 
        getTableHeaders()[Object.keys(tableData).indexOf(k)] === header
      );
      return tableData[key] || '';
    });
  });
  
  // Convert to CSV format
  const csvContent = [
    headers.join(','),
    ...csvData.map(row => row.map(field => `"${field}"`).join(','))
  ].join('\n');
  
  // Create and download file
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  
  const fileName = `${reportParams.reportType}_report_${getPeriodText().replace(/[^a-zA-Z0-9]/g, '_')}_${new Date().toISOString().split('T')[0]}.csv`;
  link.setAttribute('download', fileName);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Helper functions for dynamic table generation
const getReportTitle = () => {
  const reportType = reportTypes.find(rt => rt.value === reportParams.reportType);
  return reportType ? reportType.label : 'Report Data';
};

const getTableHeaders = () => {
  switch (reportParams.reportType) {
    case 'sales':
      return ['Order ID', 'Customer Name', 'Order Date', 'Total Amount', 'Status', 'Sales Type', 'Region'];
    case 'inventory':
      return ['Item Code', 'Item Name', 'Category', 'Quantity', 'Unit Price', 'Total Value', 'Last Updated'];
    case 'financial':
      return ['Account Code', 'Account Name', 'Account Type', 'Balance', 'Last Transaction', 'Status'];
    case 'customer':
      return ['Customer ID', 'Customer Name', 'Email', 'Phone', 'Region', 'Total Orders', 'Last Order Date', 'Status'];
    default:
      return [];
  }
};

const getTableData = (item) => {
  switch (reportParams.reportType) {
    case 'sales':
      return {
        orderId: item.orderId,
        customerName: item.customerName,
        orderDate: item.orderDate,
        totalAmount: item.totalAmount,
        status: item.status,
        salesType: item.salesType,
        region: item.region
      };
    case 'inventory':
      return {
        itemCode: item.itemCode,
        itemName: item.itemName,
        category: item.category,
        quantity: item.quantity,
        unitPrice: item.unitPrice,
        totalValue: item.totalValue,
        lastUpdated: item.lastUpdated
      };
    case 'financial':
      return {
        accountCode: item.accountCode,
        accountName: item.accountName,
        accountType: item.accountType,
        balance: item.balance,
        lastTransaction: item.lastTransaction,
        status: item.status
      };
    case 'customer':
      return {
        customerId: item.customerId,
        customerName: item.customerName,
        email: item.email,
        phone: item.phone,
        region: item.region,
        totalOrders: item.totalOrders,
        lastOrderDate: item.lastOrderDate,
        status: item.status
      };
    default:
      return {};
  }
};

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-MY', {
    style: 'currency',
    currency: 'MYR'
  }).format(amount);
};

// Helper function to get period text
const getPeriodText = () => {
  return `${reportParams.fromDate} to ${reportParams.toDate}`;
};

// Function to reset form
const resetForm = () => {
  reportParams.reportType = '';
  reportParams.fromDate = '';
  reportParams.toDate = '';
  reportParams.salesType = '';
  reportParams.category = '';
  reportParams.accountType = '';
  reportParams.region = '';
  reportData.value = [];
};

// Function to go back to parameters
const goBackToParameters = () => {
  showParameters.value = true;
  resetForm();
};

// Badge classes
const getStatusBadgeClass = (status) => {
  switch (status) {
    case 'Active':
    case 'Completed':
      return 'bg-green-100 text-green-800';
    case 'Inactive':
    case 'Pending':
      return 'bg-yellow-100 text-yellow-800';
    case 'Shipped':
      return 'bg-blue-100 text-blue-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
