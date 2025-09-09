<template>
  <div>
    <rs-card>
      <template #header>
        <div class="flex">
          <Icon class="mr-2 flex justify-center" name="ic:outline-shopping-cart"></Icon>
          CKD/CBU Purchase Order
        </div>
      </template>
      <template #body>
        <div class="space-y-6">
          <FormKit type="form" :actions="false" @submit="handleSubmit">
            <!-- Top Section - Purchase Order Details -->
            <div class="grid grid-cols-3 gap-6 mb-6">
              <!-- Left Column -->
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">PO No:</label>
                  <input v-model="formData.poNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter PO No" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Vendor Code:</label>
                  <input v-model="formData.vendorCode" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter vendor code" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">OPC Decision No:</label>
                  <input v-model="formData.opcDecisionNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter OPC decision no" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">PO Created by:</label>
                  <input v-model="formData.poCreatedBy" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter created by" />
                </div>
              </div>

              <!-- Middle Column -->
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">PO Date:</label>
                  <input v-model="formData.poDate" type="date" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">CBU:</label>
                  <select v-model="formData.cbu" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                    <option value="">Select CBU</option>
                    <option value="CBU1">CBU1</option>
                    <option value="CBU2">CBU2</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">OPC Decision Date:</label>
                  <input v-model="formData.opcDecisionDate" type="date" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Modified:</label>
                  <input v-model="formData.modified" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter modified by" />
                </div>
              </div>

              <!-- Right Column -->
              <div class="space-y-4">
                <div class="flex items-center gap-2">
                  <input v-model="formData.cancelled" type="checkbox" id="cancelled" class="rounded border-[rgb(var(--border-color))] focus:ring-2 focus:ring-primary/20" />
                  <label for="cancelled" class="text-sm font-medium text-[rgb(var(--text-color))]">Cancelled</label>
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Vessel:</label>
                  <input v-model="formData.vessel" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter vessel" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">EDD:</label>
                  <input v-model="formData.edd" type="date" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">EDA:</label>
                  <input v-model="formData.eda" type="date" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                </div>
              </div>
            </div>

            <!-- Model Details Table -->
            <div class="mb-6">
              <h3 class="text-lg font-semibold text-[rgb(var(--text-color))] mb-4">Model Details</h3>
              <div class="overflow-x-auto">
                <table class="w-full border-collapse">
                  <thead>
                    <tr class="border-b border-[rgb(var(--border-color))]">
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">Model Code</th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">Qty</th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">Del Date</th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">Yen Price</th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">RM Price</th>
                      <th class="text-center py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]" colspan="2">---- Ex. GST Amount ----</th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">GST Tax Code & Rate</th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">GST Amount</th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">RM Amount (Inc. GST)</th>
                      <th class="text-center py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]" colspan="2">Quantity</th>
                      <th class="text-center py-3 px-4 font-semibold text-[rgb(var(--text-color))]" colspan="2">Lot</th>
                    </tr>
                    <tr class="border-b border-[rgb(var(--border-color))]">
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]"></th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]"></th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]"></th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]"></th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]"></th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">Yen Amount</th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">RM Amount</th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]"></th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]"></th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]"></th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">Canc</th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">Pnd</th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">From</th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))]">To</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in modelItems" :key="index" class="border-b border-[rgb(var(--border-color))]">
                      <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                        <select v-model="item.modelCode" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                          <option value="">Select Model</option>
                          <option value="M001">M001</option>
                          <option value="M002">M002</option>
                        </select>
                      </td>
                      <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                        <input v-model="item.qty" type="number" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0" />
                      </td>
                      <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                        <input v-model="item.delDate" type="date" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                      </td>
                      <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                        <input v-model="item.yenPrice" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                      </td>
                      <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                        <input v-model="item.rmPrice" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                      </td>
                      <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                        <input v-model="item.yenAmount" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                      </td>
                      <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                        <input v-model="item.rmAmount" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                      </td>
                      <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                        <input v-model="item.gstTaxCode" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="GST Code" />
                      </td>
                      <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                        <input v-model="item.gstAmount" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                      </td>
                      <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                        <input v-model="item.rmAmountIncGst" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                      </td>
                      <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                        <input v-model="item.qtyCanc" type="number" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0" />
                      </td>
                      <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                        <input v-model="item.qtyPnd" type="number" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0" />
                      </td>
                      <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                        <input v-model="item.lotFrom" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="From" />
                      </td>
                      <td class="py-3 px-4">
                        <input v-model="item.lotTo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="To" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- Model Totals -->
              <div class="flex justify-end gap-4 mt-4">
                <div class="flex items-center gap-2">
                  <label class="text-sm font-medium text-[rgb(var(--text-color))]">Total:</label>
                  <input v-model="modelTotals.total1" type="number" step="0.01" class="w-24 px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                  <input v-model="modelTotals.total2" type="number" class="w-16 px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="00" />
                </div>
              </div>
              <!-- Model Created By and Modified By -->
              <div class="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Model Created By:</label>
                  <input v-model="formData.modelCreatedBy" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter model created by" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Modified By:</label>
                  <input v-model="formData.modelModifiedBy" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter modified by" />
                </div>
              </div>
            </div>

            <!-- Part Details Section -->
            <div class="mb-6">
              <div class="flex items-center gap-4 mb-4">
                <label class="text-sm font-medium text-[rgb(var(--text-color))]">Part Name:</label>
                <input v-model="formData.partName" type="text" class="flex-1 px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter part name" />
              </div>
              <div class="overflow-x-auto">
                <table class="w-full border-collapse">
                  <thead>
                    <tr class="border-b border-[rgb(var(--border-color))]">
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">Part No</th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">Qty</th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">Yen Price</th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">RM Price</th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">Yen Amount</th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">RM Amount</th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">Del Date</th>
                      <th class="text-center py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]" colspan="2">Quantity</th>
                    </tr>
                    <tr class="border-b border-[rgb(var(--border-color))]">
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]"></th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]"></th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]"></th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]"></th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]"></th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]"></th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]"></th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))] border-r border-[rgb(var(--border-color))]">Canc</th>
                      <th class="text-left py-3 px-4 font-semibold text-[rgb(var(--text-color))]">Pnd</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in partItems" :key="index" class="border-b border-[rgb(var(--border-color))]">
                      <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                        <input v-model="item.partNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter part no" />
                      </td>
                      <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                        <input v-model="item.qty" type="number" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0" />
                      </td>
                      <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                        <input v-model="item.yenPrice" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                      </td>
                      <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                        <input v-model="item.rmPrice" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                      </td>
                      <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                        <input v-model="item.yenAmount" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                      </td>
                      <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                        <input v-model="item.rmAmount" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                      </td>
                      <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                        <input v-model="item.delDate" type="date" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                      </td>
                      <td class="py-3 px-4 border-r border-[rgb(var(--border-color))]">
                        <input v-model="item.qtyCanc" type="number" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0" />
                      </td>
                      <td class="py-3 px-4">
                        <input v-model="item.qtyPnd" type="number" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Bottom Totals Section -->
            <div class="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Total Yen Amount:</label>
                <input v-model="totals.totalYenAmount" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
              </div>
              <div>
                <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Total RM Amount:</label>
                <input v-model="totals.totalRmAmount" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
              </div>
              <div>
                <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Created:</label>
                <input v-model="formData.created" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter created by" />
              </div>
              <div>
                <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Modified:</label>
                <input v-model="formData.modifiedBottom" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter modified by" />
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex justify-center space-x-4 pt-6 pb-4 pr-4 border-t border-[rgb(var(--border-color))]">
              <rs-button variant="secondary-outline" @click="handleCancel">Cancel</rs-button>
              <rs-button variant="info" @click="handleRefresh">Refresh</rs-button>
              <rs-button variant="success" btn-type="submit">Save</rs-button>
              <rs-button variant="warning" @click="handleLocalPO">Local PO..</rs-button>
              <rs-button variant="info" @click="handlePrintLocn">Print Locn.</rs-button>
              <rs-button variant="primary" @click="handlePrint">Print</rs-button>
              <rs-button variant="warning" @click="handleAdvice">Advice</rs-button>
              <rs-button variant="success" @click="handleCheck">Check</rs-button>
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
  title: "CKD Purchase Order",
});

const { $swal } = useNuxtApp();

// Form data structure
const formData = ref({
  poNo: '',
  vendorCode: '',
  opcDecisionNo: '',
  poCreatedBy: '',
  poDate: '',
  cbu: '',
  opcDecisionDate: '',
  modified: '',
  cancelled: false,
  vessel: '',
  edd: '',
  eda: '',
  modelCreatedBy: '',
  modelModifiedBy: '',
  partName: '',
  created: '',
  modifiedBottom: ''
});

// Model items data structure
const modelItems = ref([
  { modelCode: '', qty: '', delDate: '', yenPrice: '', rmPrice: '', yenAmount: '', rmAmount: '', gstTaxCode: '', gstAmount: '', rmAmountIncGst: '', qtyCanc: '', qtyPnd: '', lotFrom: '', lotTo: '' },
  { modelCode: '', qty: '', delDate: '', yenPrice: '', rmPrice: '', yenAmount: '', rmAmount: '', gstTaxCode: '', gstAmount: '', rmAmountIncGst: '', qtyCanc: '', qtyPnd: '', lotFrom: '', lotTo: '' },
  { modelCode: '', qty: '', delDate: '', yenPrice: '', rmPrice: '', yenAmount: '', rmAmount: '', gstTaxCode: '', gstAmount: '', rmAmountIncGst: '', qtyCanc: '', qtyPnd: '', lotFrom: '', lotTo: '' }
]);

// Part items data structure
const partItems = ref([
  { partNo: '', qty: '', yenPrice: '', rmPrice: '', yenAmount: '', rmAmount: '', delDate: '', qtyCanc: '', qtyPnd: '' },
  { partNo: '', qty: '', yenPrice: '', rmPrice: '', yenAmount: '', rmAmount: '', delDate: '', qtyCanc: '', qtyPnd: '' },
  { partNo: '', qty: '', yenPrice: '', rmPrice: '', yenAmount: '', rmAmount: '', delDate: '', qtyCanc: '', qtyPnd: '' }
]);

// Totals
const modelTotals = ref({ total1: '', total2: '' });
const totals = ref({ totalYenAmount: '', totalRmAmount: '' });

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
      Object.keys(formData.value).forEach(key => {
        if (key === 'cancelled') formData.value[key] = false;
        else formData.value[key] = '';
      });
      modelItems.value.forEach(item => Object.keys(item).forEach(key => item[key] = ''));
      partItems.value.forEach(item => Object.keys(item).forEach(key => item[key] = ''));
      modelTotals.value = { total1: '', total2: '' };
      totals.value = { totalYenAmount: '', totalRmAmount: '' };
    }
  });
};

const handleRefresh = () => {
  console.log('Refreshing CKD PO data...');
};

const handleLocalPO = () => {
  console.log('Creating local PO...');
  $swal.fire({
    title: 'Local PO Created!',
    text: 'Local purchase order has been created successfully.',
    icon: 'success',
    confirmButtonText: 'OK'
  });
};

const handlePrintLocn = () => {
  console.log('Printing location...');
  $swal.fire({
    title: 'Print Location!',
    text: 'Location print job has been initiated.',
    icon: 'info',
    confirmButtonText: 'OK'
  });
};

const handlePrint = () => {
  console.log('Printing...');
  $swal.fire({
    title: 'Print Job!',
    text: 'Print job has been initiated.',
    icon: 'info',
    confirmButtonText: 'OK'
  });
};

const handleAdvice = () => {
  console.log('Generating advice...');
  $swal.fire({
    title: 'Advice Generated!',
    text: 'CKD PO advice has been generated successfully.',
    icon: 'success',
    confirmButtonText: 'OK'
  });
};

const handleCheck = () => {
  console.log('Checking...');
  $swal.fire({
    title: 'Check Complete!',
    text: 'CKD PO check has been completed successfully.',
    icon: 'success',
    confirmButtonText: 'OK'
  });
};

const handleSubmit = async (formData) => {
  try {
    const validModelItems = modelItems.value.filter(item => 
      item.modelCode !== '' || item.qty !== '' || item.yenPrice !== '' || item.rmPrice !== ''
    );
    const validPartItems = partItems.value.filter(item => 
      item.partNo !== '' || item.qty !== '' || item.yenPrice !== '' || item.rmPrice !== ''
    );
    
    if (validModelItems.length === 0 && validPartItems.length === 0 && formData.poNo.trim() === '') {
      $swal.fire({
        title: 'No Data',
        text: 'Please enter at least one model or part information before saving.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      return;
    }
    
    console.log('Saving CKD PO:', { formData: formData.value, modelItems: validModelItems, partItems: validPartItems });
    $swal.fire({
      title: 'Success!',
      text: 'CKD Purchase Order saved successfully!',
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
