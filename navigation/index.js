export default [
  {
    child: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: "ic:outline-dashboard",
        child: [],
      },
    ],
  },
  {
    header: "Modules and Sub-Modules",
    description: "Apps & Pages",
    child: [
      {
        title: "Sales",
        icon: "ic:outline-shopping-bag",
        child: [
          {
            title: "Tenders",
            path: "/Sales/tenders",
          },
          {
            title: "Sales Enquiries",
            path: "/Sales/sales-enquiries",
          },
          {
            title: "Quotations",
            path: "/Sales/quotations",
          },
          {
            title: "BVO Forms Issue",
            path: "/Sales/bvo-forms-issue",
          },
          {
            title: "Vehicle Orders",
            path: "/Sales/vehicle-orders",
          },
          {
            title: "Stock Allocation-VO",
            path: "/Sales/stock-allo-vo",
          },
          {
            title: "Documentation Clearance Request",
            path: "/Sales/docu-clearance-req",
          },
          {
            title: "Vehicle Invoices",
            path: "/Sales/vehicle-invoices",
          },
          {
            title: "Vehicle Invoices Cancellation",
            path: "/Sales/vehicle-invoices-cancel",
          },
          {
            title: "Vehicle Credit Note",
            path: "/Sales/vehicle-credit-note",  
          },
        ],
      },
      {
        title: "Procurement",
        icon: "ic:outline-shopping-bag",
        child: [
          {
            title: "OPC Decisions",
            path: "/Procurement/OPC-Decisions",
          },
          {
            title: "CKD/CBU Purchase Orders",
            path: "/Procurement/CKD-PO",
          },
          {
            title: "CKD Receipts",
            path: "/Procurement/CKD-receipts",
          },
          {
            title: "CBU Receipts - Local",
            path: "/Procurement/CBU-receipt-local",
          },
          {
            title: "CBU Receipts - Imported",
            path: "/Procurement/CBU-receipt-import",
          },
          {
            title: "Local Content Receipts",
            path: "/Procurement/local-content-receipt",
          },
          {
            title: "Assembly",
            path: "/Procurement/assembly",
          },
          {
            title: "Accessory Fittings",
            path: "/Procurement/accessory-fittings",
          },
          {
            title: "Assembly Invoice",
            path: "/Procurement/assembly-invoice",
          },
          {
            title: "Accessory Fitting Invoice",
            path: "/Procurement/accessory-fitting-invoice",
          },
        ],
      },
      {
        title: "Spares",
        icon: "ic:outline-shopping-bag",
        child: [
          {
            title: "Spares SOs",
            path: "/Spares/spares-sos",
          },
          {
            title: "Spares DOs",
            path: "/Spares/spares-dos",
          },
          {
            title: "Spares Sales Invoices",
            path: "/Spares/spares-sales-invoices",
          },
          {
            title: "Spares Sales Returns",
            path: "/Spares/spares-sales-return",
          },
          {
            title: "Spares POs",
            path: "/Spares/spares-pos",
          },
          {
            title: "GRNs",
            path: "/Spares/grns",
          },
          {
            title: "Spares Purchase Returns",
            path: "/Spares/spares-purchase-return",
          },
          {
            title: "Spares Stock Requests",
            path: "/Spares/spares-stock-req",
          },
          {
            title: "Stock Transfers",
            path: "/Spares/stock-transfers",
          },
          {
            title: "Stock Adjustments",
            path: "/Spares/stock-adjustments",
          },
        ],
      },
      {
        title: "Service",
        icon: "ic:outline-shopping-bag",
        child: [
          {
            title: "Job Cards",
            path: "/Service/job-cards",
          },
          {
            title: "Oil/Lubes Issue",
            path: "/Service/oil-lube-issue",
          },
          {
            title: "Service Invoice",
            path: "/Service/service-invoice",
          },
          {
            title: "Clock In/Clock Out",
            path: "/Service/clock-in-out",
          },
          {
            title: "Repair Followups",
            path: "/Service/repair-followups",
          },
          {
            title: "Service Bookings",
            path: "/Service/service-bookings",
          },
          {
            title: "Oil/Lubes Purchase Order",
            path: "/Service/oil-lube-po",
          },
          {
            title: "Oil/Lubes Receipts",
            path: "/Service/oil-lube-receipts",
          },
          {
            title: "Oil/Lubes Purchase Returns",
            path: "/Service/oil-lube-pr",
          },
          {
            title: "Oil/Lubes Returns",
            path: "/Service/oil-lube-returns",
          },
        ],
      },
      {
        title: "Finance",
        icon: "ic:outline-shopping-bag",
        child: [
          {
            title: "Bank Payment Vouchers",
            path: "/Accounting/bank-payment-voucher",
          },
          {
            title: "Bank Receipt Vouchers",
            path: "/Accounting/bank-receipt-voucher",
          },
          {
            title: "Cash Payment Vouchers",
            path: "/Accounting/cash-payment-voucher",
          },
          {
            title: "Cash Receipt Vouchers",
            path: "/Accounting/cash-receipt-voucher",
          },
          {
            title: "Journal Vouchers",
            path: "/Accounting/journal-voucher",
          },
          {
            title: "Asset Transfers",
            path: "/Accounting/assets-transfer",
          },
          {
            title: "Miscellaneous POs",
            path: "/Accounting/miscellaneous-pos",
          },
          {
            title: "Bank Payment Advice - FIN",
            path: "/Accounting/bank-payment-advice",
          },
          {
            title: "Cash Clearing",
            path: "/Accounting/cash-clearing",
          },
          {
            title: "Invoice Carry Forward",
            path: "/Accounting/invoice-carry-forward",
          },
        ],
      },
      {
        title: "Masters",
        icon: "ic:outline-insert-drive-file",
        child: [
          {
            title: "Models",
            path: "/Masters/models",
          },
          {
            title: "Drivers",
            path: "/Masters/drivers",
          },
          {
            title: "Trade Plates",
            path: "/Masters/trade-plates",
          },
          {
            title: "Local Content Parts",
            path: "/Masters/localContentParts",
          },
          {
            title: "Model Categories",
            path: "/Masters/model-categories",
          },
          {
            title: "Model Charges",
            path: "/Masters/model-charges",
          },
          {
            title: "Model Groups",
            path: "/Masters/model-groups",
          },
          {
            title: "Colors",
            path: "/Masters/colors",
          },
        ],
      },
      {
        title: "User Management",
        icon: "ic:outline-people",
        child: [
          {
            title: "Users",
            path: "/UserManagement/users",
          },
          {
            title: "Roles",
            path: "/UserManagement/roles",
          },
          {
            title: "Module Rights (Userwise)",
            path: "/UserManagement/module-rights",
          },
          {
            title: "Module Rights (Modulewise)",
            path: "/UserManagement/module-rights-modulewise",
          },
        ],
      },
      
     
      
      
      
    ],
  },
  // {
  //   header: "UI Elements",
  //   description: "Component for the ui",
  //   child: [
  //     {
  //       title: "Typography",
  //       path: "/ui/typography",
  //       icon: "ic:outline-alternate-email",
  //     },
  //     {
  //       title: "Colors",
  //       path: "/ui/colors",
  //       icon: "ic:outline-water-drop",
  //     },
  //     {
  //       title: "Icon",
  //       icon: "ic:outline-flag-circle",
  //       child: [
  //         {
  //           title: "Nuxt Icons",
  //           path: "/ui/icon/nuxt-icon",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Component",
  //       icon: "ic:outline-settings-input-component",
  //       child: [
  //         {
  //           title: "Alert",
  //           path: "/ui/component/alert",
  //         },
  //         {
  //           title: "Badges",
  //           path: "/ui/component/badges",
  //         },
  //         {
  //           title: "Buttons",
  //           path: "/ui/component/buttons",
  //         },
  //         {
  //           title: "Card",
  //           path: "/ui/component/card",
  //         },
  //         {
  //           title: "Calendar",
  //           path: "/ui/component/calendar",
  //         },
  //         {
  //           title: "Carousel",
  //           path: "/ui/component/carousel",
  //         },
  //         {
  //           title: "Collapse",
  //           path: "/ui/component/collapse",
  //         },
  //         {
  //           title: "Dropdown",
  //           path: "/ui/component/dropdown",
  //         },
  //         {
  //           title: "Modal",
  //           path: "/ui/component/modal",
  //         },
  //         {
  //           title: "Tab",
  //           path: "/ui/component/tab",
  //         },
  //         {
  //           title: "Progress",
  //           path: "/ui/component/progress",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Chart",
  //       icon: "ic:outline-pie-chart",
  //       child: [
  //         {
  //           title: "Apex Chart",
  //           path: "/ui/chart/apex-chart",
  //         },
  //         {
  //           title: "Chartjs",
  //           path: "/ui/chart/chartjs",
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   header: "Forms & Tables",
  //   description: "Form and table component",
  //   child: [
  //     {
  //       title: "Form",
  //       icon: "ic:outline-menu-book",
  //       child: [
  //         {
  //           title: "Element",
  //           child: [
  //             {
  //               title: "Input",
  //               path: "/form/element/input",
  //             },
  //             {
  //               title: "Input Group",
  //               path: "/form/element/input-group",
  //             },
  //             {
  //               title: "Input Mask",
  //               path: "/form/element/input-mask",
  //             },
  //             {
  //               title: "Textarea",
  //               path: "/form/element/textarea",
  //             },
  //             {
  //               title: "Number",
  //               path: "/form/element/number",
  //             },
  //             {
  //               title: "Password",
  //               path: "/form/element/password",
  //             },
  //             {
  //               title: "Date & Time",
  //               path: "/form/element/date-time",
  //             },
  //             {
  //               title: "Radio",
  //               path: "/form/element/radio",
  //             },
  //             {
  //               title: "Checkbox",
  //               path: "/form/element/checkbox",
  //             },
  //             {
  //               title: "Select",
  //               path: "/form/element/select",
  //             },
  //             {
  //               title: "File",
  //               path: "/form/element/file",
  //             },
  //             {
  //               title: "Custom",
  //               path: "/form/element/custom",
  //             },
  //             {
  //               title: "VCalendar",
  //               path: "/form/element/vcalendar",
  //             },
  //             {
  //               title: "Vue Select",
  //               path: "/form/element/vue-select",
  //             },
  //             {
  //               title: "Vue Quill",
  //               path: "/form/element/vue-quill",
  //             },
  //             {
  //               title: "Multi-Select",
  //               path: "/form/element/multiselect",
  //             },
  //           ],
  //         },
  //         {
  //           title: "Wizard",
  //           path: "/form/wizard",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Table",
  //       icon: "ic:outline-grid-on",
  //       child: [
  //         {
  //           title: "Basic",
  //           path: "/table/basic",
  //         },
  //         {
  //           title: "Advanced",
  //           path: "/table/advanced",
  //         },
  //       ],
  //     },
  //   ],
  // },
];
