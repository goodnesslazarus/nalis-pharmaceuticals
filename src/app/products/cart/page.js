"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../../lib/useCart";

export default function CartPage() {
  const { cart, removeItem, updateQuantity, clearCart, itemCount, total } = useCart();
  const [imageErrors, setImageErrors] = useState({});

  const whatsappText = cart.length > 0
    ? `Hello, I would like to place a bulk order for the following items:%0A${cart
        .map((item) => `${item.quantity}x ${item.name}`)
        .join('%0A')}%0ATotal: ₦${total.toLocaleString()}%0APlease send me a quote and delivery details.`
    : 'Hello, I would like to place a bulk order. Please send me a quote and delivery details.';

  const whatsappHref = `https://wa.me/2348147180296?text=${whatsappText}`;

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-8 flex flex-col gap-4 rounded-[32px] bg-white px-8 py-8 shadow-xl shadow-slate-200 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Product Cart</p>
            <h1 className="mt-3 text-4xl font-semibold text-slate-900">Review your product cart</h1>
            <p className="mt-4 max-w-2xl text-slate-600">
              Your cart is saved in the browser so you can return anytime and continue shopping.
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-3xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Back to Catalog
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.45fr_0.95fr]">
          <section className="rounded-[32px] bg-white p-8 shadow-xl shadow-slate-200">
            {cart.length > 0 ? (
              <div className="space-y-8">
                <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Items in cart</p>
                      <h2 className="mt-2 text-2xl font-semibold text-slate-900">{itemCount} item{itemCount > 1 ? "s" : ""}</h2>
                    </div>
                    <button
                      type="button"
                      onClick={clearCart}
                      className="rounded-3xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                    >
                      Clear Cart
                    </button>
                  </div>
                </div>

                <div className="space-y-6">
                  {cart.map((item) => (
                    <div key={item.name} className="rounded-[28px] border border-slate-200 p-6">
                      <div className="grid gap-6 lg:grid-cols-[200px_1fr] lg:items-center">
                        <div className="overflow-hidden rounded-[24px] bg-slate-100 p-4">
                          {imageErrors[item.name] ? (
                            <div className="flex h-40 w-full items-center justify-center rounded-[18px] bg-slate-200 px-3 text-center text-sm font-semibold text-slate-700">
                              {item.name}
                            </div>
                          ) : (
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={200}
                              height={160}
                              className="h-40 w-full object-contain"
                              unoptimized
                              onError={() => setImageErrors((prev) => ({ ...prev, [item.name]: true }))}
                            />
                          )}
                        </div>
                        <div className="space-y-4">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h3 className="text-xl font-semibold text-slate-900">{item.name}</h3>
                              <p className="mt-2 text-sm text-slate-500">{item.description}</p>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeItem(item.name)}
                              className="rounded-3xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                            >
                              Remove
                            </button>
                          </div>

                          <div className="flex flex-wrap items-center justify-between gap-4">
                            <div>
                              <p className="text-sm font-semibold text-slate-900">Price</p>
                              <p className="mt-1 text-lg text-slate-900">{item.price}</p>
                            </div>
                            <div className="flex items-center gap-3">
                              <label className="text-sm font-semibold text-slate-900">Qty</label>
                              <input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(event) => updateQuantity(item.name, Number(event.target.value))}
                                className="w-20 rounded-3xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Total</p>
                      <p className="mt-2 text-3xl font-semibold text-slate-900">₦{total.toLocaleString()}</p>
                    </div>
                    <Link
                      href="/products/checkout"
                      className="inline-flex items-center justify-center rounded-3xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                    >
                      Proceed to Checkout
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-10 text-center">
                <p className="text-lg font-semibold text-slate-900">Your cart is empty</p>
                <p className="mt-4 text-slate-600">Add products from the catalog and they will stay saved until you clear them.</p>
                <Link
                  href="/products"
                  className="mt-8 inline-flex rounded-3xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                >
                  Browse Products
                </Link>
              </div>
            )}
          </section>

          <aside className="space-y-6 rounded-[32px] bg-white p-8 shadow-xl shadow-slate-200">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Need help?</p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-900">Questions about orders</h2>
              <p className="mt-4 text-slate-600">Call our sales desk for bulk pricing, stock availability, and faster support.</p>
            </div>
            <div className="rounded-[28px] bg-slate-50 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Contact</p>
              <p className="mt-4 text-lg font-semibold text-slate-900">+234 814 718 0296</p>
              <p className="mt-3 text-sm text-slate-600">Available weekdays, 9am–5pm.</p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-3xl bg-emerald-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
              >
                Message us on WhatsApp
              </a>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
