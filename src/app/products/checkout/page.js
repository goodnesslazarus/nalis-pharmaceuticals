"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useCart } from "../../../lib/useCart";
import { generateInvoiceHtml } from "../../../lib/invoice";

const workflowSteps = [
  {
    key: "home",
    title: "Home",
    description: "Customer lands on the pharmaceutical storefront.",
  },
  {
    key: "products",
    title: "Products",
    description: "Customer browses the catalog and selects needed items.",
  },
  {
    key: "add-to-cart",
    title: "Add to Cart",
    description: "Selected medicines are added to the order basket.",
  },
  {
    key: "checkout",
    title: "Checkout",
    description: "Confirm the item list, quantities, and pricing.",
  },
  {
    key: "customer-information",
    title: "Customer Information",
    description: "Capture the buyer details and delivery address.",
  },
  {
    key: "submit-order",
    title: "Submit Order",
    description: "Send the completed order to the sales team.",
  },
  {
    key: "order-received",
    title: "Order Received",
    description: "Sales acknowledges the new order request.",
  },
  {
    key: "sales-review",
    title: "Sales Review",
    description: "Sales confirms product availability and pricing.",
  },
  {
    key: "proforma-invoice",
    title: "Generate Proforma Invoice",
    description: "Create a formal quotation for the customer.",
  },
  {
    key: "email-customer",
    title: "Email to Customer",
    description: "Share the invoice and transaction details.",
  },
  {
    key: "customer-pays",
    title: "Customer Pays",
    description: "The customer confirms payment for the order.",
  },
  {
    key: "payment-confirmed",
    title: "Payment Confirmed",
    description: "Funds are verified and the order is released.",
  },
  {
    key: "warehouse-packs",
    title: "Warehouse Packs Order",
    description: "The warehouse prepares the items for shipment.",
  },
  {
    key: "dispatch",
    title: "Dispatch",
    description: "The order is packed, shipped, and confirmed delivered.",
  },
];

const storageKey = "nalis-order-workflow";
const initialFormState = {
  customerName: "",
  company: "",
  email: "",
  phone: "",
  address: "",
  notes: "",
};

export default function CheckoutPage() {
  const { cart, total, clearCart } = useCart();
  const [activeStep, setActiveStep] = useState(3);
  const [formData, setFormData] = useState(initialFormState);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      const stored = window.localStorage.getItem(storageKey);
      if (stored) {
        const parsed = JSON.parse(stored);
        setActiveStep(parsed.activeStep ?? 3);
        setFormData({ ...initialFormState, ...(parsed.formData ?? {}) });
      }
    } catch {
      // Ignore malformed data and continue with defaults.
    }

    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !isHydrated) {
      return;
    }

    window.localStorage.setItem(
      storageKey,
      JSON.stringify({ activeStep, formData })
    );
  }, [activeStep, formData, isHydrated]);

  const stepLabel = useMemo(() => workflowSteps[activeStep], [activeStep]);
  const completedCount = activeStep;
  const invoiceNumber = useMemo(() => `PF-${Date.now().toString().slice(-6)}`, []);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const goBack = () => setActiveStep((current) => Math.max(0, current - 1));
  const goNext = () => setActiveStep((current) => Math.min(workflowSteps.length - 1, current + 1));

  const handleCustomerSubmit = (event) => {
    event.preventDefault();
    goNext();
  };

  const resetWorkflow = () => {
    setActiveStep(3);
    setFormData(initialFormState);
  };

  const canAdvance = activeStep === 3 ? cart.length > 0 : true;

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-slate-100 text-slate-900">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 lg:px-8">
        <header className="rounded-[32px] border border-emerald-200 bg-white p-8 shadow-xl shadow-emerald-100/70">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Order workflow</p>
              <h1 className="mt-3 text-4xl font-semibold text-slate-950">From product selection to dispatch</h1>
              <p className="mt-4 max-w-3xl text-slate-600">
                This guided flow mirrors the full Nalis Pharmaceuticals order journey so your team can move from browsing to delivery with consistent visibility.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/products/cart"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Back to Cart
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Browse Products
              </Link>
            </div>
          </div>
        </header>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <aside className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/60">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Progress</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-950">{completedCount}/{workflowSteps.length} stages completed</h2>
              </div>
              <div className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-900">
                Live flow
              </div>
            </div>

            <div className="mt-7 space-y-3">
              {workflowSteps.map((step, index) => {
                const isActive = index === activeStep;
                const isComplete = index < activeStep;

                return (
                  <div
                    key={step.key}
                    className={`rounded-2xl border p-4 ${isActive ? "border-emerald-500 bg-emerald-50" : isComplete ? "border-emerald-200 bg-emerald-50/70" : "border-slate-200 bg-slate-50"}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${isActive ? "bg-emerald-600 text-white" : isComplete ? "bg-emerald-500 text-white" : "bg-slate-200 text-slate-700"}`}>
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{step.title}</p>
                        <p className="mt-1 text-sm text-slate-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>

          <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">Current stage</p>
                <h2 className="mt-2 text-3xl font-semibold text-slate-950">{stepLabel.title}</h2>
              </div>
              <div className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-900">
                {activeStep + 1} of {workflowSteps.length}
              </div>
            </div>

            <div className="mt-8 rounded-[28px] border border-slate-200 bg-slate-50 p-6">
              {activeStep === 3 && (
                <div className="space-y-5">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Checkout</p>
                    <h3 className="mt-2 text-2xl font-semibold text-slate-950">Review your selected medicines</h3>
                    <p className="mt-3 text-slate-600">Confirm the current order before moving into customer details and final submission.</p>
                  </div>

                  {cart.length > 0 ? (
                    <div className="space-y-3">
                      {cart.map((item) => (
                        <div key={item.name} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3">
                          <div>
                            <p className="font-semibold text-slate-900">{item.name}</p>
                            <p className="text-sm text-slate-500">Qty {item.quantity}</p>
                          </div>
                          <p className="text-sm font-semibold text-slate-900">{item.price}</p>
                        </div>
                      ))}
                      <div className="flex items-center justify-between rounded-2xl bg-emerald-900 px-4 py-3 text-white">
                        <span className="font-semibold">Estimated total</span>
                        <span className="font-semibold">₦{total.toLocaleString()}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-5 text-sm text-slate-600">
                      Your cart is empty. Visit the catalog to add medicines before continuing.
                    </div>
                  )}
                </div>
              )}

              {activeStep === 4 && (
                <form id="customer-info-form" className="space-y-4" onSubmit={handleCustomerSubmit}>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Customer Information</p>
                    <h3 className="mt-2 text-2xl font-semibold text-slate-950">Enter the buyer profile</h3>
                    <p className="mt-3 text-slate-600">Capture the customer name, contact details, and delivery address to prepare the order.</p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="text-sm font-medium text-slate-700">
                      Customer name
                      <input name="customerName" value={formData.customerName} onChange={handleFieldChange} required className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900" placeholder="Ada Okafor" />
                    </label>
                    <label className="text-sm font-medium text-slate-700">
                      Company
                      <input name="company" value={formData.company} onChange={handleFieldChange} className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900" placeholder="Bright Pharmacy" />
                    </label>
                    <label className="text-sm font-medium text-slate-700">
                      Email
                      <input type="email" name="email" value={formData.email} onChange={handleFieldChange} required className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900" placeholder="customer@example.com" />
                    </label>
                    <label className="text-sm font-medium text-slate-700">
                      Phone
                      <input name="phone" value={formData.phone} onChange={handleFieldChange} required className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900" placeholder="0803 000 0000" />
                    </label>
                  </div>

                  <label className="block text-sm font-medium text-slate-700">
                    Delivery address
                    <textarea name="address" value={formData.address} onChange={handleFieldChange} required rows="3" className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900" placeholder="Office address, city, and state" />
                  </label>

                  <label className="block text-sm font-medium text-slate-700">
                    Notes
                    <textarea name="notes" value={formData.notes} onChange={handleFieldChange} rows="3" className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900" placeholder="Delivery notes, preferred time, or special instructions" />
                  </label>
                </form>
              )}

              {activeStep === 5 && (
                <div className="space-y-5">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Submit Order</p>
                    <h3 className="mt-2 text-2xl font-semibold text-slate-950">Ready to submit the order</h3>
                    <p className="mt-3 text-slate-600">The order is now ready for the sales team to receive, review, and confirm.</p>
                  </div>
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-sm text-emerald-900">
                    <p className="font-semibold">Order summary</p>
                    <p className="mt-2">Customer: {formData.customerName || "Pending customer details"}</p>
                    <p className="mt-1">Items: {cart.length} product{cart.length === 1 ? "" : "s"}</p>
                    <p className="mt-1">Total: ₦{total.toLocaleString()}</p>
                  </div>
                </div>
              )}

              {activeStep === 6 && (
                <div className="space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Order Received</p>
                  <h3 className="text-2xl font-semibold text-slate-950">The order has been received by the sales desk.</h3>
                  <p className="text-slate-600">The team will now review the request, verify the pricing, and prepare the quotation package.</p>
                </div>
              )}

              {activeStep === 7 && (
                <div className="space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Sales Review</p>
                  <h3 className="text-2xl font-semibold text-slate-950">Sales confirms stock, price, and logistics.</h3>
                  <p className="text-slate-600">Any special requirements are checked before the proforma invoice is generated.</p>
                </div>
              )}

              {activeStep === 8 && (
                <div className="space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Proforma Invoice</p>
                  <h3 className="text-2xl font-semibold text-slate-950">A professional quotation is generated for approval.</h3>
                  <p className="text-slate-600">The proforma invoice captures the product list, total value, and payment instructions so the buyer can approve and pay with confidence.</p>
                  <div className="rounded-[24px] border border-emerald-200 bg-emerald-50 p-5 text-sm text-emerald-900">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-semibold">Invoice reference</p>
                        <p className="mt-1">{invoiceNumber}</p>
                      </div>
                      <div className="rounded-full bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                        Awaiting approval
                      </div>
                    </div>
                    <div className="mt-4 grid gap-3 md:grid-cols-2">
                      <div className="rounded-2xl bg-white p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Customer</p>
                        <p className="mt-2 font-semibold text-slate-900">{formData.customerName || "Pending customer details"}</p>
                        <p className="mt-1 text-slate-600">{formData.company || "Retail/Institution"}</p>
                      </div>
                      <div className="rounded-2xl bg-white p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Order value</p>
                        <p className="mt-2 font-semibold text-slate-900">₦{total.toLocaleString()}</p>
                        <p className="mt-1 text-slate-600">{cart.length} item{cart.length === 1 ? "" : "s"}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 9 && (
                <div className="space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Email to Customer</p>
                  <h3 className="text-2xl font-semibold text-slate-950">The customer receives the invoice and terms.</h3>
                  <p className="text-slate-600">The email includes the quote, reference number, and recommended next step for payment.</p>
                </div>
              )}

              {activeStep === 10 && (
                <div className="space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Customer Pays</p>
                  <h3 className="text-2xl font-semibold text-slate-950">Payment is received from the customer.</h3>
                  <p className="text-slate-600">Once the payment is confirmed, the warehouse can proceed with packing and dispatch.</p>
                </div>
              )}

              {activeStep === 11 && (
                <div className="space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Payment Confirmed</p>
                  <h3 className="text-2xl font-semibold text-slate-950">The payment has been verified.</h3>
                  <p className="text-slate-600">The order can now be released for warehouse preparation and dispatch.</p>
                </div>
              )}

              {activeStep === 12 && (
                <div className="space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Warehouse Packs Order</p>
                  <h3 className="text-2xl font-semibold text-slate-950">The warehouse prepares the items for shipment.</h3>
                  <p className="text-slate-600">Packing slips, batch labels, and dispatch documentation are finalized at this point.</p>
                </div>
              )}

              {activeStep === 13 && (
                <div className="space-y-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Dispatch</p>
                  <h3 className="text-2xl font-semibold text-slate-950">The order is dispatched and ready for delivery.</h3>
                  <p className="text-slate-600">The workflow is complete and the customer can receive a delivery confirmation.</p>
                </div>
              )}
            </div>

            <div className="mt-8 flex flex-wrap gap-3 border-t border-slate-200 pt-6">
              <button
                type="button"
                onClick={goBack}
                className="rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Back
              </button>

              {activeStep === 4 ? (
                <button
                  type="submit"
                  form="customer-info-form"
                  className="rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
                >
                  Continue to Submit Order
                </button>
              ) : (
                <button
                  type="button"
                  onClick={goNext}
                  disabled={!canAdvance}
                  className="rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                >
                  {activeStep === 13 ? "Workflow complete" : activeStep === 5 ? "Confirm order" : "Advance to next stage"}
                </button>
              )}

              <button
                type="button"
                onClick={resetWorkflow}
                className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Reset workflow
              </button>

              <button
                type="button"
                onClick={() => {
                  // Build invoice data and open in new window for printing/saving
                  const invoiceData = {
                    invoiceNumber,
                    date: new Date().toLocaleString(),
                    customer: formData,
                    items: cart,
                    total,
                  };

                  const html = generateInvoiceHtml(invoiceData);
                  const newWindow = window.open("", "_blank");
                  if (newWindow) {
                    newWindow.document.write(html);
                    newWindow.document.close();
                  } else {
                    alert("Unable to open invoice window — please allow popups.");
                  }
                }}
                className="ml-auto rounded-full bg-white border border-emerald-600 px-5 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
              >
                Generate Invoice
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
