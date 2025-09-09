<template>
  <div>
    <LayoutsBreadcrumb />
    <rs-card>
      <template #header>
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <Icon class="mr-2 flex justify-center" name="ic:outline-security"></Icon>
            {{ isEditing ? 'Edit Role' : 'Add Role' }}
          </div>
          <rs-button
            variant="secondary-outline"
            @click="goBack"
          >
            <Icon name="ic:outline-arrow-back" class="mr-1" size="1rem" />
            Back to Roles
          </rs-button>
        </div>
      </template>
      <template #body>
        <FormKit
          type="form"
          :actions="false"
          @submit="handleSubmit"
          v-model="formData"
        >
          <div class="space-y-6">
            <!-- Basic Information -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormKit
                type="text"
                name="name"
                label="Role Name"
                :validation="[['required']]"
                placeholder="Enter role name"
              />
              <div class="flex items-center">
                <FormKit
                  type="checkbox"
                  name="isActive"
                  label="Active"
                  :value="true"
                />
              </div>
            </div>
            
            <FormKit
              type="textarea"
              name="description"
              label="Description"
              :validation="[['required']]"
              placeholder="Enter role description"
              rows="3"
            />

            <!-- Permission Matrix -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-4">
                Permissions Matrix
              </label>
              <div class="border border-gray-300 rounded-lg overflow-hidden">
                <div class="overflow-x-auto">
                  <table class="min-w-full bg-white">
                    <thead class="bg-gray-50">
                      <tr>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r">
                          Module
                        </th>
                        <th class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r">
                          Create
                        </th>
                        <th class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r">
                          Retrieve
                        </th>
                        <th class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-r">
                          Update
                        </th>
                        <th class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Delete
                        </th>
                      </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                      <tr v-for="module in permissionModules" :key="module.name" class="hover:bg-gray-50">
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                          {{ module.name }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center border-r">
                          <input
                            type="checkbox"
                            :value="module.permissions.create"
                            v-model="formData.permissions"
                            class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            :disabled="!module.permissions.create"
                          />
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center border-r">
                          <input
                            type="checkbox"
                            :value="module.permissions.retrieve"
                            v-model="formData.permissions"
                            class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            :disabled="!module.permissions.retrieve"
                          />
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center border-r">
                          <input
                            type="checkbox"
                            :value="module.permissions.update"
                            v-model="formData.permissions"
                            class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            :disabled="!module.permissions.update"
                          />
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-center">
                          <input
                            type="checkbox"
                            :value="module.permissions.delete"
                            v-model="formData.permissions"
                            class="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            :disabled="!module.permissions.delete"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex justify-end space-x-4 pt-6 border-t">
              <rs-button
                variant="secondary-outline"
                @click="goBack"
              >
                Cancel
              </rs-button>
              <rs-button
                variant="success"
                btn-type="submit"
                :disabled="loading"
              >
                {{ isEditing ? 'Update' : 'Create' }} Role
              </rs-button>
            </div>
          </div>
        </FormKit>
      </template>
    </rs-card>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useNuxtApp } from '#app';
import { useRoute, useRouter } from 'vue-router';

definePageMeta({
  title: "Add/Edit Role",
});

const { $swal } = useNuxtApp();
const route = useRoute();
const router = useRouter();

// Reactive data
const loading = ref(false);
const isEditing = ref(false);
const roleId = ref(null);

// Form data
const formData = ref({
  name: '',
  description: '',
  permissions: [],
  isActive: true
});

// Permission modules with CRUD operations based on actual navigation structure
const permissionModules = ref([
  {
    name: 'Dashboard',
    permissions: {
      create: null,
      retrieve: 'dashboard.read',
      update: null,
      delete: null
    }
  },
  {
    name: 'Sales Module',
    permissions: {
      create: 'sales.create',
      retrieve: 'sales.read',
      update: 'sales.update',
      delete: 'sales.delete'
    }
  },
  {
    name: 'Sales - Tenders',
    permissions: {
      create: 'sales.tenders.create',
      retrieve: 'sales.tenders.read',
      update: 'sales.tenders.update',
      delete: 'sales.tenders.delete'
    }
  },
  {
    name: 'Sales - Sales Enquiries',
    permissions: {
      create: 'sales.enquiries.create',
      retrieve: 'sales.enquiries.read',
      update: 'sales.enquiries.update',
      delete: 'sales.enquiries.delete'
    }
  },
  {
    name: 'Sales - Quotations',
    permissions: {
      create: 'sales.quotations.create',
      retrieve: 'sales.quotations.read',
      update: 'sales.quotations.update',
      delete: 'sales.quotations.delete'
    }
  },
  {
    name: 'Sales - BVO Forms Issue',
    permissions: {
      create: 'sales.bvo.create',
      retrieve: 'sales.bvo.read',
      update: 'sales.bvo.update',
      delete: 'sales.bvo.delete'
    }
  },
  {
    name: 'Sales - Vehicle Orders',
    permissions: {
      create: 'sales.vehicle_orders.create',
      retrieve: 'sales.vehicle_orders.read',
      update: 'sales.vehicle_orders.update',
      delete: 'sales.vehicle_orders.delete'
    }
  },
  {
    name: 'Sales - Stock Allocation-VO',
    permissions: {
      create: 'sales.stock_allocation.create',
      retrieve: 'sales.stock_allocation.read',
      update: 'sales.stock_allocation.update',
      delete: 'sales.stock_allocation.delete'
    }
  },
  {
    name: 'Sales - Documentation Clearance',
    permissions: {
      create: 'sales.doc_clearance.create',
      retrieve: 'sales.doc_clearance.read',
      update: 'sales.doc_clearance.update',
      delete: 'sales.doc_clearance.delete'
    }
  },
  {
    name: 'Sales - Vehicle Invoices',
    permissions: {
      create: 'sales.vehicle_invoices.create',
      retrieve: 'sales.vehicle_invoices.read',
      update: 'sales.vehicle_invoices.update',
      delete: 'sales.vehicle_invoices.delete'
    }
  },
  {
    name: 'Sales - Vehicle Invoices Cancellation',
    permissions: {
      create: 'sales.invoice_cancel.create',
      retrieve: 'sales.invoice_cancel.read',
      update: 'sales.invoice_cancel.update',
      delete: 'sales.invoice_cancel.delete'
    }
  },
  {
    name: 'Sales - Vehicle Credit Note',
    permissions: {
      create: 'sales.credit_note.create',
      retrieve: 'sales.credit_note.read',
      update: 'sales.credit_note.update',
      delete: 'sales.credit_note.delete'
    }
  },
  {
    name: 'Procurement Module',
    permissions: {
      create: 'procurement.create',
      retrieve: 'procurement.read',
      update: 'procurement.update',
      delete: 'procurement.delete'
    }
  },
  {
    name: 'Procurement - OPC Decisions',
    permissions: {
      create: 'procurement.opc.create',
      retrieve: 'procurement.opc.read',
      update: 'procurement.opc.update',
      delete: 'procurement.opc.delete'
    }
  },
  {
    name: 'Procurement - CKD/CBU Purchase Orders',
    permissions: {
      create: 'procurement.ckd_po.create',
      retrieve: 'procurement.ckd_po.read',
      update: 'procurement.ckd_po.update',
      delete: 'procurement.ckd_po.delete'
    }
  },
  {
    name: 'Procurement - CKD Receipts',
    permissions: {
      create: 'procurement.ckd_receipts.create',
      retrieve: 'procurement.ckd_receipts.read',
      update: 'procurement.ckd_receipts.update',
      delete: 'procurement.ckd_receipts.delete'
    }
  },
  {
    name: 'Procurement - CBU Receipts Local',
    permissions: {
      create: 'procurement.cbu_local.create',
      retrieve: 'procurement.cbu_local.read',
      update: 'procurement.cbu_local.update',
      delete: 'procurement.cbu_local.delete'
    }
  },
  {
    name: 'Procurement - CBU Receipts Imported',
    permissions: {
      create: 'procurement.cbu_import.create',
      retrieve: 'procurement.cbu_import.read',
      update: 'procurement.cbu_import.update',
      delete: 'procurement.cbu_import.delete'
    }
  },
  {
    name: 'Procurement - Local Content Receipts',
    permissions: {
      create: 'procurement.local_content.create',
      retrieve: 'procurement.local_content.read',
      update: 'procurement.local_content.update',
      delete: 'procurement.local_content.delete'
    }
  },
  {
    name: 'Procurement - Assembly',
    permissions: {
      create: 'procurement.assembly.create',
      retrieve: 'procurement.assembly.read',
      update: 'procurement.assembly.update',
      delete: 'procurement.assembly.delete'
    }
  },
  {
    name: 'Procurement - Accessory Fittings',
    permissions: {
      create: 'procurement.accessory_fittings.create',
      retrieve: 'procurement.accessory_fittings.read',
      update: 'procurement.accessory_fittings.update',
      delete: 'procurement.accessory_fittings.delete'
    }
  },
  {
    name: 'Procurement - Assembly Invoice',
    permissions: {
      create: 'procurement.assembly_invoice.create',
      retrieve: 'procurement.assembly_invoice.read',
      update: 'procurement.assembly_invoice.update',
      delete: 'procurement.assembly_invoice.delete'
    }
  },
  {
    name: 'Procurement - Accessory Fitting Invoice',
    permissions: {
      create: 'procurement.accessory_invoice.create',
      retrieve: 'procurement.accessory_invoice.read',
      update: 'procurement.accessory_invoice.update',
      delete: 'procurement.accessory_invoice.delete'
    }
  },
  {
    name: 'Spares Module',
    permissions: {
      create: 'spares.create',
      retrieve: 'spares.read',
      update: 'spares.update',
      delete: 'spares.delete'
    }
  },
  {
    name: 'Spares - Spares SOs',
    permissions: {
      create: 'spares.sos.create',
      retrieve: 'spares.sos.read',
      update: 'spares.sos.update',
      delete: 'spares.sos.delete'
    }
  },
  {
    name: 'Spares - Spares DOs',
    permissions: {
      create: 'spares.dos.create',
      retrieve: 'spares.dos.read',
      update: 'spares.dos.update',
      delete: 'spares.dos.delete'
    }
  },
  {
    name: 'Spares - Sales Invoices',
    permissions: {
      create: 'spares.sales_invoices.create',
      retrieve: 'spares.sales_invoices.read',
      update: 'spares.sales_invoices.update',
      delete: 'spares.sales_invoices.delete'
    }
  },
  {
    name: 'Spares - Sales Returns',
    permissions: {
      create: 'spares.sales_returns.create',
      retrieve: 'spares.sales_returns.read',
      update: 'spares.sales_returns.update',
      delete: 'spares.sales_returns.delete'
    }
  },
  {
    name: 'Spares - Purchase Orders',
    permissions: {
      create: 'spares.pos.create',
      retrieve: 'spares.pos.read',
      update: 'spares.pos.update',
      delete: 'spares.pos.delete'
    }
  },
  {
    name: 'Spares - GRNs',
    permissions: {
      create: 'spares.grns.create',
      retrieve: 'spares.grns.read',
      update: 'spares.grns.update',
      delete: 'spares.grns.delete'
    }
  },
  {
    name: 'Spares - Purchase Returns',
    permissions: {
      create: 'spares.purchase_returns.create',
      retrieve: 'spares.purchase_returns.read',
      update: 'spares.purchase_returns.update',
      delete: 'spares.purchase_returns.delete'
    }
  },
  {
    name: 'Spares - Stock Requests',
    permissions: {
      create: 'spares.stock_requests.create',
      retrieve: 'spares.stock_requests.read',
      update: 'spares.stock_requests.update',
      delete: 'spares.stock_requests.delete'
    }
  },
  {
    name: 'Spares - Stock Transfers',
    permissions: {
      create: 'spares.stock_transfers.create',
      retrieve: 'spares.stock_transfers.read',
      update: 'spares.stock_transfers.update',
      delete: 'spares.stock_transfers.delete'
    }
  },
  {
    name: 'Spares - Stock Adjustments',
    permissions: {
      create: 'spares.stock_adjustments.create',
      retrieve: 'spares.stock_adjustments.read',
      update: 'spares.stock_adjustments.update',
      delete: 'spares.stock_adjustments.delete'
    }
  },
  {
    name: 'Service Module',
    permissions: {
      create: 'service.create',
      retrieve: 'service.read',
      update: 'service.update',
      delete: 'service.delete'
    }
  },
  {
    name: 'Service - Job Cards',
    permissions: {
      create: 'service.job_cards.create',
      retrieve: 'service.job_cards.read',
      update: 'service.job_cards.update',
      delete: 'service.job_cards.delete'
    }
  },
  {
    name: 'Service - Oil/Lubes Issue',
    permissions: {
      create: 'service.oil_lube_issue.create',
      retrieve: 'service.oil_lube_issue.read',
      update: 'service.oil_lube_issue.update',
      delete: 'service.oil_lube_issue.delete'
    }
  },
  {
    name: 'Service - Service Invoice',
    permissions: {
      create: 'service.invoice.create',
      retrieve: 'service.invoice.read',
      update: 'service.invoice.update',
      delete: 'service.invoice.delete'
    }
  },
  {
    name: 'Service - Clock In/Out',
    permissions: {
      create: 'service.clock_in_out.create',
      retrieve: 'service.clock_in_out.read',
      update: 'service.clock_in_out.update',
      delete: 'service.clock_in_out.delete'
    }
  },
  {
    name: 'Service - Repair Followups',
    permissions: {
      create: 'service.repair_followups.create',
      retrieve: 'service.repair_followups.read',
      update: 'service.repair_followups.update',
      delete: 'service.repair_followups.delete'
    }
  },
  {
    name: 'Service - Service Bookings',
    permissions: {
      create: 'service.bookings.create',
      retrieve: 'service.bookings.read',
      update: 'service.bookings.update',
      delete: 'service.bookings.delete'
    }
  },
  {
    name: 'Service - Oil/Lubes Purchase Order',
    permissions: {
      create: 'service.oil_lube_po.create',
      retrieve: 'service.oil_lube_po.read',
      update: 'service.oil_lube_po.update',
      delete: 'service.oil_lube_po.delete'
    }
  },
  {
    name: 'Service - Oil/Lubes Receipts',
    permissions: {
      create: 'service.oil_lube_receipts.create',
      retrieve: 'service.oil_lube_receipts.read',
      update: 'service.oil_lube_receipts.update',
      delete: 'service.oil_lube_receipts.delete'
    }
  },
  {
    name: 'Service - Oil/Lubes Purchase Returns',
    permissions: {
      create: 'service.oil_lube_pr.create',
      retrieve: 'service.oil_lube_pr.read',
      update: 'service.oil_lube_pr.update',
      delete: 'service.oil_lube_pr.delete'
    }
  },
  {
    name: 'Service - Oil/Lubes Returns',
    permissions: {
      create: 'service.oil_lube_returns.create',
      retrieve: 'service.oil_lube_returns.read',
      update: 'service.oil_lube_returns.update',
      delete: 'service.oil_lube_returns.delete'
    }
  },
  {
    name: 'Finance Module',
    permissions: {
      create: 'finance.create',
      retrieve: 'finance.read',
      update: 'finance.update',
      delete: 'finance.delete'
    }
  },
  {
    name: 'Finance - Bank Payment Vouchers',
    permissions: {
      create: 'finance.bank_payment_voucher.create',
      retrieve: 'finance.bank_payment_voucher.read',
      update: 'finance.bank_payment_voucher.update',
      delete: 'finance.bank_payment_voucher.delete'
    }
  },
  {
    name: 'Finance - Bank Receipt Vouchers',
    permissions: {
      create: 'finance.bank_receipt_voucher.create',
      retrieve: 'finance.bank_receipt_voucher.read',
      update: 'finance.bank_receipt_voucher.update',
      delete: 'finance.bank_receipt_voucher.delete'
    }
  },
  {
    name: 'Finance - Cash Payment Vouchers',
    permissions: {
      create: 'finance.cash_payment_voucher.create',
      retrieve: 'finance.cash_payment_voucher.read',
      update: 'finance.cash_payment_voucher.update',
      delete: 'finance.cash_payment_voucher.delete'
    }
  },
  {
    name: 'Finance - Cash Receipt Vouchers',
    permissions: {
      create: 'finance.cash_receipt_voucher.create',
      retrieve: 'finance.cash_receipt_voucher.read',
      update: 'finance.cash_receipt_voucher.update',
      delete: 'finance.cash_receipt_voucher.delete'
    }
  },
  {
    name: 'Finance - Journal Vouchers',
    permissions: {
      create: 'finance.journal_voucher.create',
      retrieve: 'finance.journal_voucher.read',
      update: 'finance.journal_voucher.update',
      delete: 'finance.journal_voucher.delete'
    }
  },
  {
    name: 'Finance - Asset Transfers',
    permissions: {
      create: 'finance.asset_transfers.create',
      retrieve: 'finance.asset_transfers.read',
      update: 'finance.asset_transfers.update',
      delete: 'finance.asset_transfers.delete'
    }
  },
  {
    name: 'Finance - Miscellaneous POs',
    permissions: {
      create: 'finance.miscellaneous_pos.create',
      retrieve: 'finance.miscellaneous_pos.read',
      update: 'finance.miscellaneous_pos.update',
      delete: 'finance.miscellaneous_pos.delete'
    }
  },
  {
    name: 'Finance - Bank Payment Advice',
    permissions: {
      create: 'finance.bank_payment_advice.create',
      retrieve: 'finance.bank_payment_advice.read',
      update: 'finance.bank_payment_advice.update',
      delete: 'finance.bank_payment_advice.delete'
    }
  },
  {
    name: 'Finance - Cash Clearing',
    permissions: {
      create: 'finance.cash_clearing.create',
      retrieve: 'finance.cash_clearing.read',
      update: 'finance.cash_clearing.update',
      delete: 'finance.cash_clearing.delete'
    }
  },
  {
    name: 'Finance - Invoice Carry Forward',
    permissions: {
      create: 'finance.invoice_carry_forward.create',
      retrieve: 'finance.invoice_carry_forward.read',
      update: 'finance.invoice_carry_forward.update',
      delete: 'finance.invoice_carry_forward.delete'
    }
  },
  {
    name: 'Masters Module',
    permissions: {
      create: 'masters.create',
      retrieve: 'masters.read',
      update: 'masters.update',
      delete: 'masters.delete'
    }
  },
  {
    name: 'Masters - Models',
    permissions: {
      create: 'masters.models.create',
      retrieve: 'masters.models.read',
      update: 'masters.models.update',
      delete: 'masters.models.delete'
    }
  },
  {
    name: 'Masters - Drivers',
    permissions: {
      create: 'masters.drivers.create',
      retrieve: 'masters.drivers.read',
      update: 'masters.drivers.update',
      delete: 'masters.drivers.delete'
    }
  },
  {
    name: 'Masters - Trade Plates',
    permissions: {
      create: 'masters.trade_plates.create',
      retrieve: 'masters.trade_plates.read',
      update: 'masters.trade_plates.update',
      delete: 'masters.trade_plates.delete'
    }
  },
  {
    name: 'Masters - Local Content Parts',
    permissions: {
      create: 'masters.local_content_parts.create',
      retrieve: 'masters.local_content_parts.read',
      update: 'masters.local_content_parts.update',
      delete: 'masters.local_content_parts.delete'
    }
  },
  {
    name: 'Masters - Model Categories',
    permissions: {
      create: 'masters.model_categories.create',
      retrieve: 'masters.model_categories.read',
      update: 'masters.model_categories.update',
      delete: 'masters.model_categories.delete'
    }
  },
  {
    name: 'Masters - Model Charges',
    permissions: {
      create: 'masters.model_charges.create',
      retrieve: 'masters.model_charges.read',
      update: 'masters.model_charges.update',
      delete: 'masters.model_charges.delete'
    }
  },
  {
    name: 'Masters - Model Groups',
    permissions: {
      create: 'masters.model_groups.create',
      retrieve: 'masters.model_groups.read',
      update: 'masters.model_groups.update',
      delete: 'masters.model_groups.delete'
    }
  },
  {
    name: 'Masters - Colors',
    permissions: {
      create: 'masters.colors.create',
      retrieve: 'masters.colors.read',
      update: 'masters.colors.update',
      delete: 'masters.colors.delete'
    }
  },
  {
    name: 'User Management Module',
    permissions: {
      create: 'user_management.create',
      retrieve: 'user_management.read',
      update: 'user_management.update',
      delete: 'user_management.delete'
    }
  },
  {
    name: 'User Management - Users',
    permissions: {
      create: 'user_management.users.create',
      retrieve: 'user_management.users.read',
      update: 'user_management.users.update',
      delete: 'user_management.users.delete'
    }
  },
  {
    name: 'User Management - Roles',
    permissions: {
      create: 'user_management.roles.create',
      retrieve: 'user_management.roles.read',
      update: 'user_management.roles.update',
      delete: 'user_management.roles.delete'
    }
  }
]);

// Mock data for existing roles (in real app, this would come from API)
const mockRoles = [
  {
    id: '1',
    name: 'Administrator',
    description: 'Full system access with all permissions',
    permissions: ['users.create', 'users.read', 'users.update', 'users.delete', 'roles.create', 'roles.read', 'roles.update', 'roles.delete', 'sales.create', 'sales.read', 'sales.update', 'sales.delete', 'procurement.create', 'procurement.read', 'procurement.update', 'procurement.delete', 'finance.create', 'finance.read', 'finance.update', 'finance.delete', 'reports.read', 'inventory.create', 'inventory.read', 'inventory.update', 'inventory.delete', 'customers.create', 'customers.read', 'customers.update', 'customers.delete', 'suppliers.create', 'suppliers.read', 'suppliers.update', 'suppliers.delete', 'settings.create', 'settings.read', 'settings.update', 'settings.delete'],
    isActive: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: '2',
    name: 'Manager',
    description: 'Management access with limited permissions',
    permissions: ['users.read', 'users.update', 'roles.read', 'sales.create', 'sales.read', 'sales.update', 'procurement.create', 'procurement.read', 'procurement.update', 'finance.read', 'reports.read', 'inventory.read', 'inventory.update', 'customers.read', 'customers.update', 'suppliers.read', 'suppliers.update'],
    isActive: true,
    createdAt: new Date('2024-01-02'),
    updatedAt: new Date('2024-01-02')
  },
  {
    id: '3',
    name: 'User',
    description: 'Basic user access with read-only permissions',
    permissions: ['users.read', 'sales.read', 'procurement.read', 'finance.read', 'reports.read', 'inventory.read', 'customers.read', 'suppliers.read'],
    isActive: true,
    createdAt: new Date('2024-01-03'),
    updatedAt: new Date('2024-01-03')
  }
];

// Methods
const initializeForm = () => {
  const id = route.query.id;
  if (id) {
    isEditing.value = true;
    roleId.value = id;
    loadRoleData(id);
  } else {
    isEditing.value = false;
    roleId.value = null;
    resetForm();
  }
};

const loadRoleData = (id) => {
  // In real app, this would be an API call
  const role = mockRoles.find(r => r.id === id);
  if (role) {
    formData.value = {
      name: role.name,
      description: role.description,
      permissions: [...role.permissions],
      isActive: role.isActive
    };
  } else {
    $swal.fire({
      title: 'Error',
      text: 'Role not found',
      icon: 'error'
    }).then(() => {
      goBack();
    });
  }
};

const resetForm = () => {
  formData.value = {
    name: '',
    description: '',
    permissions: [],
    isActive: true
  };
};

const goBack = () => {
  router.push('/UserManagement/roles');
};

const handleSubmit = async (formData) => {
  try {
    loading.value = true;
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (isEditing.value) {
      // Update existing role
      console.log('Updating role:', formData);
      $swal.fire({
        title: 'Success',
        text: 'Role updated successfully',
        icon: 'success'
      });
    } else {
      // Create new role
      console.log('Creating role:', formData);
      $swal.fire({
        title: 'Success',
        text: 'Role created successfully',
        icon: 'success'
      });
    }
    
    // Navigate back to roles list
    setTimeout(() => {
      goBack();
    }, 1500);
    
  } catch (error) {
    console.error('Error saving role:', error);
    $swal.fire({
      title: 'Error',
      text: 'Failed to save role',
      icon: 'error'
    });
  } finally {
    loading.value = false;
  }
};

// Lifecycle
onMounted(() => {
  initializeForm();
});
</script>

<style scoped>
/* Custom styles for the permission matrix */
.permission-matrix {
  border-collapse: separate;
  border-spacing: 0;
}

.permission-matrix th,
.permission-matrix td {
  border-right: 1px solid #e5e7eb;
}

.permission-matrix th:last-child,
.permission-matrix td:last-child {
  border-right: none;
}

/* Checkbox styling */
input[type="checkbox"]:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Hover effects for table rows */
tbody tr:hover {
  background-color: #f9fafb;
}
</style>
