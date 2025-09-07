<script setup>
definePageMeta({
  title: "Dashboard",
  // middleware: ["auth"], // This is for Login Auth for page
  // requiresAuth: true,  // This is use for Login Auth for page
});

// VMS Dashboard Data Statistics
const data1 = ref([]);
const data2 = ref([]);
const data3 = ref([]);
const data4 = ref([]);
const changeKey = ref(0);

// Vehicle Revenue Trend (Last 7 days)
var vehicleRevenueData = [125000, 142000, 138000, 165000, 158000, 172000, 189000];

// Fleet Utilization Trend (Last 7 days)
var fleetUtilizationData = [78, 82, 85, 79, 88, 91, 87];

// Service Orders Trend (Last 7 days)
var serviceOrdersData = [12, 15, 18, 14, 22, 19, 16];

// Vehicle Sales Trend (Last 7 days)
var vehicleSalesData = [8, 12, 10, 15, 18, 14, 16];

// Recent Vehicle Activities
const recentActivities = [
  {
    id: "VIN001",
    model: "Toyota Camry 2.5V",
    status: "Service Completed",
    location: "Kuala Lumpur",
    time: "2 hours ago",
    amount: 1250,
    priority: "high"
  },
  {
    id: "VIN002", 
    model: "Honda Civic 1.8E",
    status: "New Sale",
    location: "Petaling Jaya",
    time: "4 hours ago",
    amount: 95000,
    priority: "medium"
  },
  {
    id: "VIN003",
    model: "Mazda CX-5 2.0L",
    status: "Maintenance Due",
    location: "Shah Alam",
    time: "1 day ago",
    amount: 0,
    priority: "high"
  },
  {
    id: "VIN004",
    model: "Nissan Almera 1.0L",
    status: "Assembly Complete",
    location: "Port Klang",
    time: "2 days ago",
    amount: 0,
    priority: "low"
  },
];

// Vehicle Fleet Statistics
const fleetStats = {
  totalVehicles: 156,
  available: 89,
  inService: 34,
  maintenance: 18,
  sold: 15,
  utilizationRate: 87.2
};

// Sales Pipeline Statistics
const salesPipeline = {
  enquiries: 23,
  quotations: 18,
  orders: 8,
  invoices: 5,
  totalValue: 2450000
};

// Service Statistics
const serviceStats = {
  activeJobCards: 12,
  completedToday: 8,
  pending: 4,
  averageCompletionTime: "2.5 hours"
};

// Financial Overview
const financialOverview = {
  monthlyRevenue: 2450000,
  vehicleSales: 1800000,
  serviceRevenue: 650000,
  outstandingInvoices: 450000,
  pendingPayments: 320000
};

const randomizeArray = function (arg) {
  var array = arg.slice();
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

data1.value.push({
  name: "Vehicle Revenue",
  data: randomizeArray(vehicleRevenueData),
});

data2.value.push({
  name: "Fleet Utilization",
  data: randomizeArray(fleetUtilizationData),
});

data3.value.push({
  name: "Service Orders",
  data: randomizeArray(serviceOrdersData),
});

data4.value.push({
  name: "Vehicle Sales",
  data: randomizeArray(vehicleSalesData),
});

const chartOptions = computed(() => ({
  chart: {
    type: "area",
    sparkline: {
      enabled: true,
    },
  },
  stroke: {
    curve: "smooth",
  },
  fill: {
    opacity: 1,
  },
  labels: [...Array(7).keys()].map((n) => `2022-06-0${n + 1}`),
  xaxis: {
    type: "datetime",
  },
}));

// Fleet Utilization Radial Chart

const radialData = ref([fleetStats.utilizationRate, 75, 60, 45]);

const chartOptionsRadial = computed(() => ({
  chart: {
    height: 350,
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        style: {
          colors: "#9CA3AF",
        },
        name: {
          offsetY: 30,
          fontSize: "18px",
        },
        value: {
          offsetY: -15,
          fontSize: "30px",
        },
        total: {
          show: true,
          label: "Fleet Utilization",
          formatter: function (w) {
            return fleetStats.utilizationRate + "%";
          },
        },
      },
    },
  },
  labels: ["Current Month", "Last Month", "Target", "Average"],
  stroke: {
    lineCap: "round",
  },
  colors: ["#10B981", "#3B82F6", "#F59E0B", "#EF4444"],
}));

// Vehicle Revenue & Sales Graph
const transactionData = ref([
  {
    name: "Vehicle Sales Revenue",
    data: [1800000, 1950000, 1720000, 2100000, 1980000, 2250000, 1890000, 2050000, 2180000, 1920000, 2070000, 2300000],
  },
  {
    name: "Service Revenue",
    data: [450000, 520000, 480000, 610000, 580000, 650000, 590000, 620000, 680000, 550000, 630000, 700000],
  },
]);

const chartOptionsTransaction = computed(() => ({
  chart: {
    height: 350,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  colors: ["#6366F1", "#F97316"],
  yaxis: {
    labels: {
      style: {
        colors: "#9CA3AF",
        fontSize: "12px",
      },
    },
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2022-01-01",
      "2022-02-01",
      "2022-03-01",
      "2022-04-01",
      "2022-05-01",
      "2022-06-01",
      "2022-07-01",
      "2022-08-01",
      "2022-09-01",
      "2022-10-01",
      "2022-11-01",
      "2022-12-01",
    ],
    labels: {
      style: {
        colors: "#9CA3AF",
        fontSize: "14px",
        fontWeight: 400,
      },
      datetimeFormatter: {
        month: "MMM",
      },
    },
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    labels: {
      colors: "#9CA3AF",
      useSeriesColors: false,
    },
  },
  tooltip: {
    x: {
      format: "MMMM",
    },
  },
}));

onMounted(() => {
  setTimeout(() => {
    changeKey.value++;
  }, 500);
});
</script>

<template>
  <div class="p-4">
    <LayoutsBreadcrumb />
    <!-- First Row - VMS Statistics Cards -->
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-x-6">
      <!-- Vehicle Revenue Card -->
      <rs-card>
        <div class="summary-1 pt-5 pb-3 px-5 flex items-center gap-4">
          <div
            class="p-5 flex justify-center items-center bg-primary/20 rounded-2xl"
          >
            <Icon class="text-primary" name="ic:outline-attach-money"></Icon>
          </div>
          <div class="flex-1 truncate">
            <span class="block font-semibold text-xl leading-tight">
              RM {{ (financialOverview.monthlyRevenue / 1000000).toFixed(1) }}M</span
            >
            <span class="text-base font-semibold text-gray-500"
              >Monthly Revenue</span
            >
          </div>
        </div>
        <ClientOnly>
          <VueApexCharts
            :key="changeKey"
            width="100%"
            height="53"
            :options="{
              ...chartOptions,
              colors: ['#F43F5E'],
              yaxis: {
                min: 0,
                max: Math.max(...data1[0].data) + 10000,
              },
            }"
            :series="data1"
          ></VueApexCharts>
        </ClientOnly>
      </rs-card>
      
      <!-- Fleet Utilization Card -->
      <rs-card>
        <div class="summary-2 pt-5 pb-3 px-5 flex items-center gap-4">
          <div
            class="p-5 flex justify-center items-center bg-indigo-100 rounded-2xl"
          >
            <Icon
              class="text-indigo-500"
              name="ic:outline-directions-car"
            ></Icon>
          </div>
          <div class="flex-1 truncate">
            <span class="block font-semibold text-xl leading-tight">{{ fleetStats.utilizationRate }}%</span>
            <span class="text-base font-semibold text-gray-500"
              >Fleet Utilization</span
            >
          </div>
        </div>
        <ClientOnly>
          <VueApexCharts
            :key="changeKey"
            width="100%"
            height="53"
            :options="{
              ...chartOptions,
              colors: ['#6366F1'],
              yaxis: {
                min: 0,
                max: 100,
              },
            }"
            :series="data2"
          ></VueApexCharts>
        </ClientOnly>
      </rs-card>
      
      <!-- Service Orders Card -->
      <rs-card>
        <div class="summary-3 pt-5 pb-3 px-5 flex items-center gap-4">
          <div
            class="p-5 flex justify-center items-center bg-orange-100 rounded-2xl"
          >
            <Icon class="text-orange-500" name="ic:outline-build"></Icon>
          </div>
          <div class="flex-1 truncate">
            <span class="block font-semibold text-xl leading-tight">{{ serviceStats.activeJobCards }}</span>
            <span class="text-base font-semibold text-gray-500"
              >Active Service Orders</span
            >
          </div>
        </div>
        <ClientOnly>
          <VueApexCharts
            :key="changeKey"
            width="100%"
            height="53"
            :options="{
              ...chartOptions,
              colors: ['#F97316'],
              yaxis: {
                min: 0,
                max: Math.max(...data3[0].data) + 5,
              },
            }"
            :series="data3"
          ></VueApexCharts>
        </ClientOnly>
      </rs-card>
      
      <!-- Vehicle Sales Card -->
      <rs-card>
        <div class="summary-4 pt-5 pb-3 px-5 flex items-center gap-4">
          <div
            class="p-5 flex justify-center items-center bg-blue-100 rounded-2xl"
          >
            <Icon class="text-blue-500" name="ic:outline-local-shipping"></Icon>
          </div>
          <div class="flex-1 truncate">
            <span class="block font-semibold text-xl leading-tight">
              {{ fleetStats.totalVehicles }}</span
            >
            <span class="text-base font-semibold text-gray-500"
              >Total Vehicles</span
            >
          </div>
        </div>
        <ClientOnly>
          <VueApexCharts
            :key="changeKey"
            width="100%"
            height="53"
            :options="{
              ...chartOptions,
              colors: ['#3B82F6'],
              yaxis: {
                min: 0,
                max: Math.max(...data4[0].data) + 5,
              },
            }"
            :series="data4"
          ></VueApexCharts>
        </ClientOnly>
      </rs-card>
    </div>

    <div class="flex flex-col md:flex-row gap-x-6">
      <div class="w-12/2 md:w-8/12 flex flex-col">
        <!-- Vehicle Revenue Chart -->
        <rs-card class="flex-1">
          <template #header> Vehicle Revenue & Sales Trend </template>
          <template #body>
            <ClientOnly>
              <VueApexCharts
                :key="changeKey"
                width="100%"
                height="300"
                name="area"
                :options="chartOptionsTransaction"
                :series="transactionData"
              ></VueApexCharts
            ></ClientOnly>
          </template>
        </rs-card>
        
        <!-- Recent Vehicle Activities -->
        <rs-card class="flex-1">
          <template #header> Recent Vehicle Activities </template>
          <template #body>
            <div
              v-for="(activity, index) in recentActivities"
              :key="index"
              class="flex justify-between items-center rounded-lg bg-[rgb(var(--bg-1))] p-5 first:mt-0 mt-3"
            >
              <div class="flex items-center gap-x-4">
                <div 
                  class="h-10 w-10 rounded-lg flex items-center justify-center"
                  :class="{
                    'bg-green-100': activity.priority === 'low',
                    'bg-yellow-100': activity.priority === 'medium', 
                    'bg-red-100': activity.priority === 'high'
                  }"
                >
                  <Icon 
                    :name="activity.status.includes('Sale') ? 'ic:outline-local-shipping' : 
                           activity.status.includes('Service') ? 'ic:outline-build' : 
                           activity.status.includes('Maintenance') ? 'ic:outline-warning' : 
                           'ic:outline-check-circle'"
                    :class="{
                      'text-green-600': activity.priority === 'low',
                      'text-yellow-600': activity.priority === 'medium',
                      'text-red-600': activity.priority === 'high'
                    }"
                    size="20px"
                  />
                </div>
                <div class="flex-1">
                  <div class="flex flex-col">
                    <span
                      class="text-gray-900 dark:text-white font-semibold text-lg"
                    >
                      {{ activity.id }} - {{ activity.model }}
                    </span>
                    <span class="text-gray-600 dark:text-gray-50 text-sm">
                      {{ activity.status }} | {{ activity.location }} | {{ activity.time }}
                      <span v-if="activity.amount > 0" class="ml-2 font-semibold text-green-600">
                        RM{{ activity.amount.toLocaleString() }}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <button
                  class="flex items-center p-4 rounded-full bg-[rgb(var(--bg-2))] hover:bg-[rgb(var(--bg-2))]/10 shadow-md"
                >
                  <Icon size="20px" name="ic:baseline-visibility"></Icon>
                </button>
              </div>
            </div>
          </template>
        </rs-card>
      </div>
      <div class="w-12/2 md:w-4/12 flex flex-col">
        <!-- Fleet Status Overview -->
        <rs-card class="flex-1">
          <template #header> Fleet Status Overview </template>
          <template #body>
            <ClientOnly>
              <VueApexCharts
                :key="changeKey"
                width="100%"
                height="300"
                name="radialBar"
                :options="chartOptionsRadial"
                :series="radialData"
              ></VueApexCharts>
            </ClientOnly>
            <hr class="my-4" />
            <p class="text-xl py-5 font-medium">Fleet Breakdown</p>
            <div class="space-y-3">
              <div class="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <div class="flex items-center gap-3">
                  <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span class="font-medium">Available</span>
                </div>
                <span class="font-bold text-lg">{{ fleetStats.available }}</span>
              </div>
              <div class="flex justify-between items-center p-3 bg-yellow-50 rounded-lg">
                <div class="flex items-center gap-3">
                  <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span class="font-medium">In Service</span>
                </div>
                <span class="font-bold text-lg">{{ fleetStats.inService }}</span>
              </div>
              <div class="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                <div class="flex items-center gap-3">
                  <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span class="font-medium">Maintenance</span>
                </div>
                <span class="font-bold text-lg">{{ fleetStats.maintenance }}</span>
              </div>
              <div class="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <div class="flex items-center gap-3">
                  <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span class="font-medium">Sold</span>
                </div>
                <span class="font-bold text-lg">{{ fleetStats.sold }}</span>
              </div>
            </div>
          </template>
        </rs-card>
        
        <!-- Sales Pipeline -->
        <rs-card class="flex-1 mt-6">
          <template #header> Sales Pipeline </template>
          <template #body>
            <div class="space-y-4">
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Enquiries</span>
                <span class="font-bold text-lg">{{ salesPipeline.enquiries }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Quotations</span>
                <span class="font-bold text-lg">{{ salesPipeline.quotations }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Orders</span>
                <span class="font-bold text-lg">{{ salesPipeline.orders }}</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-gray-600">Invoices</span>
                <span class="font-bold text-lg">{{ salesPipeline.invoices }}</span>
              </div>
              <hr class="my-4" />
              <div class="flex justify-between items-center">
                <span class="text-gray-600 font-medium">Total Value</span>
                <span class="font-bold text-xl text-green-600">RM {{ (salesPipeline.totalValue / 1000000).toFixed(1) }}M</span>
              </div>
            </div>
          </template>
        </rs-card>
      </div>
    </div>
  </div>
</template>
