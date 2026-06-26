"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "../../lib/useCart";

const products = [
  {
    name: "Nalis Paracetamol 60ml",
    price: "₦1,200",
    image: "/Products/Nalis Paracetamol.png",
    description: "Paracetamol syrup for pain and fever relief.",
  },
  {
    name: "Nalis Vitamin C",
    price: "₦1,300",
    image: "/Products/Nalis Vitamin C.png",
    description: "Vitamin C syrup to support immunity.",
  },
  {
    name: "Nalistide 200ml",
    price: "₦2,300",
    image: "/Products/Nalistide 200ml.png",
    description: "Antibiotic syrup for infections.",
  },
  {
    name: "Lumaforce Tablet x6",
    price: "₦1,500",
    image: "/Products/Lumaforce.png",
    description: "Antimalarial tablet pack.",
  },
  {
    name: "Ibuprofen 100ml",
    price: "₦1,400",
    image: "/Products/Ibuprofen.png",
    description: "Pain relief syrup for fever and headaches.",
  },
  {
    name: "Veelam 100ml",
    price: "₦1,200",
    image: "/Products/Veelam.png",
    description: "Cold and flu syrup.",
  },
];

export default function ProductsPage() {
  const { addItem, itemCount } = useCart();
  const [toast, setToast] = useState("");

  const handleAdd = (product) => {
    addItem(product);
    setToast(`${product.name} added to cart`);
    window.setTimeout(() => setToast(""), 2200);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {toast ? (
          <div
            role="status"
            aria-live="polite"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-3xl bg-slate-900 px-6 py-4 text-sm font-semibold text-white shadow-2xl shadow-slate-900/20 transition duration-300 ease-out"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400 text-slate-900">
              ✓
            </span>
            <span>{toast}</span>
          </div>
        ) : null}

        <header className="mb-10 flex flex-col gap-6 rounded-[32px] bg-white px-8 py-8 shadow-xl shadow-slate-200 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Products</p>
            <h1 className="mt-3 text-4xl font-semibold text-slate-900">Nalis Pharmaceuticals Catalog</h1>
            <p className="mt-4 max-w-2xl text-slate-600">Browse our most popular pharmaceutical products and add them to your cart for persistent checkout.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/Products/cart"
              className="inline-flex items-center justify-center rounded-3xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
            >
              View Cart ({itemCount})
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-3xl border border-slate-200 bg-slate-50 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Back to Home
            </Link>
          </div>
        </header>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article key={product.name} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="h-64 bg-slate-100 p-6">
                <img src={product.image} alt={product.name} className="h-full w-full object-contain" />
              </div>
              <div className="space-y-4 p-6">
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">{product.name}</h2>
                  <p className="mt-2 text-sm text-slate-500">{product.description}</p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-lg font-semibold text-slate-900">{product.price}</p>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => handleAdd(product)}
                      className="rounded-3xl bg-blue-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                    >
                      Add to Cart
                    </button>
                    <Link
                      href="/Products/cart"
                      className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                    >
                      View Cart
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
