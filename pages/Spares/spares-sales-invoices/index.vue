<template>
  <div>
    <rs-card>
      <template #header>
        <div class="flex items-center space-x-2">
          <Icon name="heroicons:receipt-percent" class="w-5 h-5" />
          <h2 class="text-lg font-semibold text-[rgb(var(--text-color))]">Spares Sales Invoices</h2>
        </div>
      </template>

      <template #body>
        <div class="space-y-6">
          <FormKit type="form" @submit="handleSubmit" :actions="false">
            <!-- Customer and Invoice Details -->
            <div class="mb-8">
              <h3 class="text-lg font-medium text-[rgb(var(--text-color))] mb-4">Sales Details</h3>
              <div class="grid grid-cols-3 gap-8">
                <!-- Left Column -->
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Location:</label>
                    <input v-model="formData.location" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Invoice No:</label>
                    <input v-model="formData.invoiceNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Customer:</label>
                    <input v-model="formData.customer" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">SO No:</label>
                    <div class="flex space-x-2">
                      <input v-model="formData.soNo" type="text" class="flex-1 px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                      <label class="flex items-center px-3 py-2 text-sm text-[rgb(var(--text-color))]">Date</label>
                      <input v-model="formData.soDate" type="text" class="flex-1 px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                    </div>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-3">Deliver At:</label>
                    <div class="flex space-x-4">
                      <label class="flex items-center">
                        <input v-model="formData.deliverAt" type="radio" value="billing" class="mr-2" />
                        <span class="text-sm text-[rgb(var(--text-color))]">Billing Add</span>
                      </label>
                      <label class="flex items-center">
                        <input v-model="formData.deliverAt" type="radio" value="delivery" class="mr-2" />
                        <span class="text-sm text-[rgb(var(--text-color))]">Delivery Add</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Agent:</label>
                    <input v-model="formData.agent" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Cash Cust Name:</label>
                    <input v-model="formData.cashCustName" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Cash Cust Add2:</label>
                    <input v-model="formData.cashCustAdd2" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                </div>

                <!-- Middle Column -->
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Payment Type:</label>
                    <select v-model="formData.paymentType" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                      <option value="Credit">Credit</option>
                      <option value="Cash">Cash</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Old Ref No:</label>
                    <input v-model="formData.oldRefNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">DO No:</label>
                    <div class="flex space-x-2">
                      <input v-model="formData.doNo" type="text" class="flex-1 px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                      <label class="flex items-center px-3 py-2 text-sm text-[rgb(var(--text-color))]">Date</label>
                      <input v-model="formData.doDate" type="text" class="flex-1 px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                    </div>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Despatch:</label>
                    <input v-model="formData.despatch" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Agent Inv No:</label>
                    <input v-model="formData.agentInvNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Cash Cust Add1:</label>
                    <input v-model="formData.cashCustAdd1" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Cash Cust Add3:</label>
                    <input v-model="formData.cashCustAdd3" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                </div>

                <!-- Right Column -->
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">MI Code:</label>
                    <div class="flex space-x-2">
                      <select class="px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                        <option value="">Select</option>
                      </select>
                      <input v-model="formData.miCode" type="text" class="flex-1 px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                    </div>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-red-600 mb-2">Last Inv Dt:</label>
                    <input v-model="formData.lastInvDt" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Ref No:</label>
                    <input v-model="formData.refNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Amount:</label>
                    <input v-model="formData.amount" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  
                  <!-- Credit Limits Section -->
                  <div class="bg-gray-50 p-4 rounded-lg border border-[rgb(var(--border-color))]">
                    <h4 class="text-sm font-medium text-[rgb(var(--text-color))] mb-4">Credit Limits</h4>
                    <div class="space-y-3">
                      <div>
                        <label class="block text-sm font-medium text-red-600 mb-1">CL Approved:</label>
                        <input v-model="formData.clApproved" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-red-600 mb-1">CL Used:</label>
                        <input v-model="formData.clUsed" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-red-600 mb-1">CL Avl:</label>
                        <input v-model="formData.clAvl" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-red-600 mb-1">CL Over Write:</label>
                        <input v-model="formData.clOverWrite" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-red-600 mb-1">Credit Period:</label>
                        <input v-model="formData.creditPeriod" type="number" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Indent, Disc %, Exclude -->
              <div class="mt-6 grid grid-cols-3 gap-6">
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Indent:</label>
                  <select v-model="formData.indent" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                    <option value="">Select indent</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Disc %:</label>
                  <input v-model="formData.discPercent" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                </div>
                <div class="flex items-center">
                  <label class="flex items-center">
                    <input v-model="formData.exclude" type="checkbox" class="mr-2" />
                    <span class="text-sm font-medium text-[rgb(var(--text-color))]">Exclude</span>
                  </label>
                </div>
              </div>
            </div>

            <!-- Part Details Section -->
            <div class="mb-8">
              <h3 class="text-lg font-medium text-[rgb(var(--text-color))] mb-4">Part Details</h3>
              <div class="grid grid-cols-4 gap-4 mb-4">
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Part Name:</label>
                  <input v-model="formData.partName" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Bin:</label>
                  <input v-model="formData.bin" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Tag:</label>
                  <input v-model="formData.tag" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                </div>
                <div class="flex items-center">
                  <label class="flex items-center">
                    <input v-model="formData.campaign" type="checkbox" class="mr-2" />
                    <span class="text-sm font-medium text-[rgb(var(--text-color))]">Campaign</span>
                  </label>
                </div>
              </div>

              <!-- Line Items Table -->
              <div class="overflow-x-auto">
                <table class="w-full border border-[rgb(var(--border-color))] rounded-lg">
                  <thead class="bg-gray-50">
                    <tr>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Part No</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Ref No</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Qty</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Cost Price</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Price</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Disc %</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Net Price</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Amount</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">GST Tax Code & Rate</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">GST Amount</th>
                      <th class="px-4 py-3 text-left text-sm font-medium text-[rgb(var(--text-color))] border-b border-[rgb(var(--border-color))]">Amount (Inc. GST)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in lineItemsData" :key="index" class="hover:bg-gray-50">
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <div class="flex items-center space-x-2">
                          <input v-model="item.partNo" type="text" class="flex-1 px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" />
                          <label class="flex items-center text-xs">
                            <input type="checkbox" class="mr-1" />
                            <span>Dummy</span>
                          </label>
                          <span class="text-xs">O/P</span>
                        </div>
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.refNo" type="text" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.qty" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.costPrice" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.price" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.discPercent" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.netPrice" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.amount" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.gstTaxCodeRate" type="text" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.gstAmount" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" />
                      </td>
                      <td class="px-4 py-3 border-b border-[rgb(var(--border-color))]">
                        <input v-model="item.amountIncGst" type="number" step="0.01" class="w-full px-2 py-1 border border-[rgb(var(--border-color))] rounded focus:outline-none focus:ring-1 focus:ring-primary/20" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Bottom Section -->
            <div class="mb-8">
              <div class="grid grid-cols-2 gap-8">
                <!-- Left Column -->
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Remarks:</label>
                    <input v-model="formData.remarks" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Additional Charges:</label>
                    <input v-model="formData.additionalCharges" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Spares Amount:</label>
                    <input v-model="formData.sparesAmount" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  
                  <!-- Summary Amounts -->
                  <div class="grid grid-cols-2 gap-4">
                    <div>
                      <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Payment Amt:</label>
                      <input v-model="formData.paymentAmt" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Agent Amt:</label>
                      <input v-model="formData.agentAmt" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Round Off:</label>
                      <input v-model="formData.roundOff" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Net Amt:</label>
                      <input v-model="formData.netAmt" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Pending Amt:</label>
                      <input v-model="formData.pendingAmt" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Agent Pending Amt:</label>
                      <input v-model="formData.agentPendingAmt" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                    </div>
                  </div>
                  
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Reprint Reasons:</label>
                    <select v-model="formData.reprintReasons" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                      <option value="">Select reason</option>
                    </select>
                  </div>
                </div>

                <!-- Right Column - Audit Trail -->
                <div class="space-y-4">
                  <h4 class="text-sm font-medium text-[rgb(var(--text-color))]">Audit Trail</h4>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Created By:</label>
                    <div class="flex space-x-2">
                      <input v-model="formData.createdBy1" type="text" class="flex-1 px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                      <input v-model="formData.createdBy2" type="text" class="flex-1 px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                    </div>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Modified By:</label>
                    <div class="flex space-x-2">
                      <input v-model="formData.modifiedBy1" type="text" class="flex-1 px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                      <input v-model="formData.modifiedBy2" type="text" class="flex-1 px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex justify-center space-x-2 pt-6 pb-4 border-t">
              <rs-button variant="secondary-outline" @click="handleCancel">Cancel</rs-button>
              <rs-button variant="info" @click="handleRefresh">Refresh</rs-button>
              <rs-button variant="success" btn-type="submit">Save</rs-button>
              <rs-button variant="info" @click="handleDelvNote">Delv Note</rs-button>
              <rs-button variant="info" @click="handlePayment">Payment..</rs-button>
              <rs-button variant="info" @click="handlePayDet">Pay Det..</rs-button>
              <rs-button variant="info" @click="handlePrintInv">Print Inv..</rs-button>
              <rs-button variant="info" @click="handleEnquiry">Enquiry</rs-button>
              <rs-button variant="info" @click="handleJV">JV</rs-button>
              <rs-button variant="info" @click="handleAuth">Auth....</rs-button>
              <rs-button variant="info" @click="handlePrintInvNo">Print Inv..No</rs-button>
              <rs-button variant="info" @click="handleListPrice">List price</rs-button>
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
  title: "Spares Sales",
});

const { $swal } = useNuxtApp();

// Form data
const formData = ref({
  location: '', invoiceNo: '', customer: '', soNo: '', soDate: '', deliverAt: 'billing',
  agent: '', cashCustName: '', cashCustAdd2: '', paymentType: 'Credit', oldRefNo: '',
  doNo: '', doDate: '', despatch: '', agentInvNo: '', cashCustAdd1: '', cashCustAdd3: '',
  miCode: '45300', lastInvDt: '', refNo: '', amount: '', clApproved: '.00', clUsed: '.00',
  clAvl: '.00', clOverWrite: '', creditPeriod: '0', indent: '', discPercent: '.00', exclude: false,
  partName: '', bin: '', tag: '', campaign: false, remarks: '', additionalCharges: '.00',
  sparesAmount: '', paymentAmt: '.00', agentAmt: '.00', roundOff: '.00', netAmt: '.00',
  pendingAmt: '.00', agentPendingAmt: '.00', reprintReasons: '', createdBy1: '', createdBy2: '',
  modifiedBy1: '', modifiedBy2: ''
});

// Line items data
const lineItemsData = ref([
  { partNo: '', refNo: '', qty: '', costPrice: '', price: '', discPercent: '', netPrice: '', amount: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '' },
  { partNo: '', refNo: '', qty: '', costPrice: '', price: '', discPercent: '', netPrice: '', amount: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '' },
  { partNo: '', refNo: '', qty: '', costPrice: '', price: '', discPercent: '', netPrice: '', amount: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '' },
  { partNo: '', refNo: '', qty: '', costPrice: '', price: '', discPercent: '', netPrice: '', amount: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '' },
  { partNo: '', refNo: '', qty: '', costPrice: '', price: '', discPercent: '', netPrice: '', amount: '', gstTaxCodeRate: '', gstAmount: '', amountIncGst: '' }
]);

// Form submission
const handleSubmit = async (formData) => {
  try {
    console.log('Form submitted:', { formData, lineItemsData: lineItemsData.value });
    $swal.fire({
      title: 'Success!',
      text: 'Spares sales invoice has been saved successfully.',
      icon: 'success',
      confirmButtonText: 'OK'
    });
  } catch (error) {
    console.error('Error submitting form:', error);
    $swal.fire({
      title: 'Error!',
      text: 'An error occurred while saving the sales invoice.',
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
        if (key === 'miCode') {
          formData.value[key] = '45300';
        } else if (key === 'paymentType') {
          formData.value[key] = 'Credit';
        } else if (key === 'deliverAt') {
          formData.value[key] = 'billing';
        } else if (key === 'creditPeriod') {
          formData.value[key] = '0';
        } else if (key === 'clApproved' || key === 'clUsed' || key === 'clAvl' || key === 'discPercent' || key === 'additionalCharges' || key === 'paymentAmt' || key === 'agentAmt' || key === 'roundOff' || key === 'netAmt' || key === 'pendingAmt' || key === 'agentPendingAmt') {
          formData.value[key] = '.00';
        } else if (key === 'exclude' || key === 'campaign') {
          formData.value[key] = false;
        } else {
          formData.value[key] = '';
        }
      });
      
      // Reset line items data
      lineItemsData.value.forEach(item => {
        Object.keys(item).forEach(key => {
          item[key] = '';
        });
      });
    }
  });
};

// Refresh handler
const handleRefresh = () => {
  handleCancel();
  $swal.fire({
    title: 'Refreshed!',
    text: 'Form has been refreshed successfully.',
    icon: 'success',
    timer: 1500,
    showConfirmButton: false
  });
};

// Action handlers
const handleDelvNote = () => $swal.fire({ title: 'Delivery Note', text: 'Delivery note functionality will be implemented.', icon: 'info', confirmButtonText: 'OK' });
const handlePayment = () => $swal.fire({ title: 'Payment', text: 'Payment functionality will be implemented.', icon: 'info', confirmButtonText: 'OK' });
const handlePayDet = () => $swal.fire({ title: 'Payment Details', text: 'Payment details functionality will be implemented.', icon: 'info', confirmButtonText: 'OK' });
const handlePrintInv = () => $swal.fire({ title: 'Print Invoice', text: 'Print invoice functionality will be implemented.', icon: 'info', confirmButtonText: 'OK' });
const handleEnquiry = () => $swal.fire({ title: 'Enquiry', text: 'Enquiry functionality will be implemented.', icon: 'info', confirmButtonText: 'OK' });
const handleJV = () => $swal.fire({ title: 'Journal Voucher', text: 'Journal voucher functionality will be implemented.', icon: 'info', confirmButtonText: 'OK' });
const handleAuth = () => $swal.fire({ title: 'Authorization', text: 'Authorization functionality will be implemented.', icon: 'info', confirmButtonText: 'OK' });
const handlePrintInvNo = () => $swal.fire({ title: 'Print Invoice Number', text: 'Print invoice number functionality will be implemented.', icon: 'info', confirmButtonText: 'OK' });
const handleListPrice = () => $swal.fire({ title: 'List Price', text: 'List price functionality will be implemented.', icon: 'info', confirmButtonText: 'OK' });

// Keyboard shortcuts
const handleKeydown = (event) => {
  if (event.altKey) {
    switch (event.key.toLowerCase()) {
      case 'c': event.preventDefault(); handleCancel(); break;
      case 'e': event.preventDefault(); handleRefresh(); break;
      case 's': event.preventDefault(); document.querySelector('form').requestSubmit(); break;
    }
  }
};

onMounted(() => document.addEventListener('keydown', handleKeydown));
onUnmounted(() => document.removeEventListener('keydown', handleKeydown));
</script>
