<template>
  <div>
    <LayoutsBreadcrumb />
    <rs-card>
      <template #header>
        <div class="flex">
          <Icon class="mr-2 flex justify-center" name="ic:outline-directions-car"></Icon>
          Vehicle Orders
        </div>
      </template>
      <template #body>
        <div class="space-y-6">
          <FormKit type="form" :actions="false" @submit="handleSubmit">
            <!-- Top Section - General Order Information -->
            <div class="grid grid-cols-2 gap-6 mb-8">
              <!-- Left Column -->
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Location Code:</label>
                  <input v-model="formData.locationCode" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter location code" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">VO No:</label>
                  <div class="flex space-x-2">
                    <input v-model="formData.voNo" type="text" class="flex-1 px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="VO number" />
                    <button type="button" class="px-3 py-2 bg-gray-200 border border-gray-300 rounded-md text-sm">BVO No</button>
                    <input v-model="formData.bvoNo" type="text" class="flex-1 px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="BVO number" />
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Customer Code:</label>
                  <input v-model="formData.customerCode" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter customer code" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Order Ref No:</label>
                  <input v-model="formData.orderRefNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter order reference number" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Quotation No:</label>
                  <input v-model="formData.quotationNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter quotation number" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Enquiry No:</label>
                  <input v-model="formData.enquiryNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter enquiry number" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Model Code:</label>
                  <input v-model="formData.modelCode" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter model code" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Body Type:</label>
                  <input v-model="formData.bodyType" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter body type" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Color Code:</label>
                  <input v-model="formData.colorCode" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter color code" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Qty:</label>
                  <div class="flex space-x-2">
                    <input v-model="formData.qty" type="number" class="w-20 px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="1" />
                    <input v-model="formData.salesman" type="text" class="flex-1 px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Salesman" />
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">VO Remarks:</label>
                  <textarea v-model="formData.voRemarks" rows="3" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter VO remarks"></textarea>
                </div>
              </div>

              <!-- Right Column -->
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Created By:</label>
                  <input v-model="formData.createdBy" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter created by" />
                </div>
                
                <!-- Deposit Section -->
                <div class="bg-gray-100 p-4 rounded-md">
                  <div class="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Deposit Rqd:</label>
                      <input v-model="formData.depositRqd" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Dated:</label>
                      <input v-model="formData.dated" type="date" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                    </div>
                  </div>
                  <div class="grid grid-cols-2 gap-4">
                    <div>
                      <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Tot Deposits:</label>
                      <input v-model="formData.totDeposits" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Quot Dt:</label>
                      <input v-model="formData.quotDt" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                    </div>
                  </div>
                  <div class="mt-4">
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Enquiry Dated:</label>
                    <input v-model="formData.enquiryDated" type="date" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Private:</label>
                  <select v-model="formData.private" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                    <option value="Private">Private</option>
                    <option value="Commercial">Commercial</option>
                  </select>
                </div>

                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Amt:</label>
                    <input v-model="formData.amt" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">DL Margin:</label>
                    <input v-model="formData.dlMargin" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Body GST Tax Code & Rate:</label>
                  <div class="flex space-x-2">
                    <input v-model="formData.bodyGstTaxCode" type="text" class="flex-1 px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Tax code" />
                    <input v-model="formData.bodyGstRate" type="number" step="0.01" class="flex-1 px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Rate" />
                  </div>
                </div>

                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Body GST Amt:</label>
                  <input v-model="formData.bodyGstAmt" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                </div>
              </div>
            </div>

            <!-- Financials Section -->
            <div class="grid grid-cols-2 gap-6 mb-8">
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Gross Amount:</label>
                  <div class="flex space-x-4">
                    <input v-model="formData.grossAmount" type="number" step="0.01" class="flex-1 px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                    <div class="flex-1">
                      <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Discount:</label>
                      <input v-model="formData.discount" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                    </div>
                    <div class="flex-1">
                      <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Net Amt:</label>
                      <input v-model="formData.netAmt" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Total GST Amt:</label>
                  <div class="flex space-x-4">
                    <input v-model="formData.totalGstAmt" type="number" step="0.01" class="flex-1 px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                    <div class="flex-1">
                      <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Disc. GST:</label>
                      <input v-model="formData.discGst" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Disc GST" />
                    </div>
                    <div class="flex-1">
                      <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Net Amt (Inc GST):</label>
                      <input v-model="formData.netAmtIncGst" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- HP Section -->
            <div class="grid grid-cols-2 gap-6 mb-8">
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">HP Party Code:</label>
                  <input v-model="formData.hpPartyCode" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Enter HP party code" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">HPRef No:</label>
                  <div class="flex space-x-2">
                    <input v-model="formData.hpRefNo" type="text" class="flex-1 px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="HP Ref No" />
                    <label class="flex items-center text-sm">HP Ref. Date:</label>
                    <input v-model="formData.hpRefDate" type="date" class="flex-1 px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">HP Charges:</label>
                  <div class="flex space-x-4">
                    <input v-model="formData.hpCharges" type="number" step="0.01" class="flex-1 px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                    <div class="flex-1">
                      <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Hp Amt:</label>
                      <input v-model="formData.hpAmt" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Loan Term:</label>
                  <input v-model="formData.loanTerm" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Interest Rate:</label>
                  <input v-model="formData.interestRate" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">HP Net Amt:</label>
                  <input v-model="formData.hpNetAmt" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Balance Amt:</label>
                  <input v-model="formData.balanceAmt" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                </div>
              </div>
            </div>

            <!-- Deposit & Payment Section -->
            <div class="grid grid-cols-2 gap-6 mb-8">
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Deposit Type:</label>
                  <div class="flex space-x-4">
                    <select v-model="formData.depositType" class="flex-1 px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                      <option value="Cash">Cash</option>
                      <option value="Cheque">Cheque</option>
                      <option value="Bank Transfer">Bank Transfer</option>
                    </select>
                    <div class="flex-1">
                      <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Deposit Amt:</label>
                      <input v-model="formData.depositAmt" type="number" step="0.01" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="0.00" />
                    </div>
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Request No Canc:</label>
                  <div class="space-y-2">
                    <div class="flex">
                      <input v-model="formData.requestNoCanc1" type="text" class="flex-1 px-3 py-2 border border-[rgb(var(--border-color))] rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Request 1" />
                      <select class="px-2 py-2 border border-l-0 border-[rgb(var(--border-color))] rounded-r-md bg-gray-50">
                        <option>▼</option>
                      </select>
                    </div>
                    <div class="flex">
                      <input v-model="formData.requestNoCanc2" type="text" class="flex-1 px-3 py-2 border border-[rgb(var(--border-color))] rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Request 2" />
                      <select class="px-2 py-2 border border-l-0 border-[rgb(var(--border-color))] rounded-r-md bg-gray-50">
                        <option>▼</option>
                      </select>
                    </div>
                    <div class="flex">
                      <input v-model="formData.requestNoCanc3" type="text" class="flex-1 px-3 py-2 border border-[rgb(var(--border-color))] rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Request 3" />
                      <select class="px-2 py-2 border border-l-0 border-[rgb(var(--border-color))] rounded-r-md bg-gray-50">
                        <option>▼</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div class="space-y-4">
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Bank Code:</label>
                    <input v-model="formData.bankCode" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Bank code" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Cheq No:</label>
                    <input v-model="formData.cheqNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Cheque number" />
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Clearing Bank:</label>
                    <input v-model="formData.clearingBank" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Clearing bank" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Credit Card Type:</label>
                    <select v-model="formData.creditCardType" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                      <option value="Visa">Visa</option>
                      <option value="Mastercard">Mastercard</option>
                      <option value="American Express">American Express</option>
                    </select>
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Card No:</label>
                    <input v-model="formData.cardNo" type="text" class="w-full px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Card number" />
                  </div>
                  <div class="flex items-center space-x-2 pt-6">
                    <input v-model="formData.invoiced" type="checkbox" class="mr-2" />
                    <span class="text-sm font-medium">Invoiced</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Status & Quantity Section -->
            <div class="grid grid-cols-2 gap-6 mb-8">
              <div class="space-y-4">
                <div class="flex items-center space-x-4">
                  <div class="flex items-center space-x-2">
                    <input v-model="formData.cancelled" type="checkbox" class="mr-2" />
                    <span class="text-sm font-medium">Cancelled</span>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Canc Dt.:</label>
                    <input v-model="formData.cancDt" type="date" class="px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Catg Code:</label>
                    <input v-model="formData.catgCode" type="text" class="px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="Category code" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-[rgb(var(--text-color))] mb-2">Pending Qty:</label>
                    <input v-model="formData.pendingQty" type="number" class="px-3 py-2 border border-[rgb(var(--border-color))] rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" placeholder="1" />
                  </div>
                </div>
              </div>
            </div>

            <!-- Action Buttons - Bottom Center -->
            <div class="flex justify-center space-x-4 pt-6 pb-4 border-t border-[rgb(var(--border-color))]">
              <rs-button variant="secondary-outline" @click="handleCancel">Cancel</rs-button>
              <rs-button variant="info" @click="handleRefresh">Refresh</rs-button>
              <rs-button variant="success" @click="handleCharges">Charges</rs-button>
              <rs-button variant="success" @click="handleDiscounts">Discounts</rs-button>
              <rs-button variant="success" @click="handleStock">Stock</rs-button>
              <rs-button variant="success" btn-type="submit">Save</rs-button>
              <rs-button variant="success" @click="handlePrint">Print</rs-button>
              <rs-button variant="success" @click="handleRecpt">Recpt..</rs-button>
              <rs-button variant="success" @click="handleJV">JV</rs-button>
              <rs-button variant="success" @click="handleCheques">Cheques</rs-button>
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
  title: "Vehicle Orders",
});

const { $swal } = useNuxtApp();

// Form data
const formData = ref({
  locationCode: '',
  voNo: '',
  bvoNo: '',
  customerCode: '',
  createdBy: '',
  orderRefNo: '',
  quotationNo: '',
  enquiryNo: '',
  modelCode: '',
  bodyType: '',
  colorCode: '',
  qty: '1',
  salesman: '',
  voRemarks: '',
  depositRqd: '0.00',
  totDeposits: '0.00',
  dated: '',
  quotDt: '0.00',
  enquiryDated: '',
  private: 'Private',
  amt: '0.00',
  dlMargin: '0.00',
  bodyGstTaxCode: '',
  bodyGstRate: '0.00',
  bodyGstAmt: '0.00',
  grossAmount: '0.00',
  discount: '0.00',
  netAmt: '0.00',
  totalGstAmt: '0.00',
  discGst: '',
  netAmtIncGst: '0.00',
  hpPartyCode: '',
  hpRefNo: '',
  hpRefDate: '',
  hpCharges: '0.00',
  hpAmt: '0.00',
  loanTerm: '0.00',
  interestRate: '0.00',
  hpNetAmt: '0.00',
  balanceAmt: '0.00',
  depositType: 'Cash',
  depositAmt: '0.00',
  requestNoCanc1: '',
  requestNoCanc2: '',
  requestNoCanc3: '',
  bankCode: '',
  cheqNo: '',
  clearingBank: '',
  creditCardType: 'Visa',
  cardNo: '',
  invoiced: false,
  cancelled: false,
  cancDt: '',
  catgCode: '',
  pendingQty: '1'
});

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
        if (key === 'qty' || key === 'pendingQty') {
          formData.value[key] = '1';
        } else if (key === 'private') {
          formData.value[key] = 'Private';
        } else if (key === 'depositType') {
          formData.value[key] = 'Cash';
        } else if (key === 'creditCardType') {
          formData.value[key] = 'Visa';
        } else if (typeof formData.value[key] === 'boolean') {
          formData.value[key] = false;
        } else if (key.includes('Amt') || key.includes('Rate') || key.includes('Dt')) {
          formData.value[key] = '0.00';
        } else {
          formData.value[key] = '';
        }
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

const handleCharges = () => {
  $swal.fire({
    title: 'Charges',
    text: 'Charges action triggered!',
    icon: 'info',
    confirmButtonText: 'OK'
  }).then(() => {
    // Logic to handle Charges action
  });
};

const handleDiscounts = () => {
  $swal.fire({
    title: 'Discounts',
    text: 'Discounts action triggered!',
    icon: 'info',
    confirmButtonText: 'OK'
  }).then(() => {
    // Logic to handle Discounts action
  });
};

const handleStock = () => {
  $swal.fire({
    title: 'Stock',
    text: 'Stock action triggered!',
    icon: 'info',
    confirmButtonText: 'OK'
  }).then(() => {
    // Logic to handle Stock action
  });
};

const handlePrint = () => {
  $swal.fire({
    title: 'Print',
    text: 'Print action triggered!',
    icon: 'info',
    confirmButtonText: 'OK'
  }).then(() => {
    // Logic to handle Print action
  });
};

const handleRecpt = () => {
  $swal.fire({
    title: 'Receipt',
    text: 'Receipt action triggered!',
    icon: 'info',
    confirmButtonText: 'OK'
  }).then(() => {
    // Logic to handle Receipt action
  });
};

const handleJV = () => {
  $swal.fire({
    title: 'JV',
    text: 'Journal Voucher action triggered!',
    icon: 'info',
    confirmButtonText: 'OK'
  }).then(() => {
    // Logic to handle JV action
  });
};

const handleCheques = () => {
  $swal.fire({
    title: 'Cheques',
    text: 'Cheques action triggered!',
    icon: 'info',
    confirmButtonText: 'OK'
  }).then(() => {
    // Logic to handle Cheques action
  });
};

const handleSubmit = async (formData) => {
  try {
    $swal.fire({
      title: 'Success!',
      text: 'Vehicle order saved successfully!',
      icon: 'success',
      confirmButtonText: 'OK'
    }).then(() => {
      // Logic to handle successful save
    });
  } catch (error) {
    console.error('Error submitting form:', error);
    $swal.fire({
      title: 'Error!',
      text: 'An error occurred while saving the vehicle order.',
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
      case 'h':
        event.preventDefault();
        handleCharges();
        break;
      case 'd':
        event.preventDefault();
        handleDiscounts();
        break;
      case 'k':
        event.preventDefault();
        handleStock();
        break;
      case 'p':
        event.preventDefault();
        handlePrint();
        break;
      case 'e':
        event.preventDefault();
        handleRecpt();
        break;
      case 'j':
        event.preventDefault();
        handleJV();
        break;
      case 'q':
        event.preventDefault();
        handleCheques();
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
