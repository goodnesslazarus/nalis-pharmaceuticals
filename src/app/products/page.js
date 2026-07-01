"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../../lib/useCart";

const products = [
  {
    name: "Nalis-Paracetamol 60ml",
    price: "₦1,000",
    image: "/products/Nalis-Paracetamol.png",
    description: "Paracetamol syrup for pain and fever relief.",
    category: "Pain relief",
  },
  {
    name: "Nalis-Vitamin-C",
    price: "₦1,100",
    image: "/products/Nalis-Vitamin-C.png",
    description: "Vitamin C syrup to support immunity.",
    category: "Vitamins & Immunity",
  },
  {
    name: "Nalistide 200ml",
    price: "₦2,000",
    image: "/products/Nalistide%20200ml.png",
    description: "Antacid syrup for stomach gas and indigestion.",
    category: "relief stomach gas",
  },
  {
    name: "Lumaforce Tablet x6",
    price: "₦1,500",
    image: "/products/Lumaforce.png",
    description: "Antimalarial tablet pack.",
    category: "Antimalaria",
  },
  {
    name: "Ibuprofen",
    price: "₦1,200",
    image: "/products/Ibuprofen.png",
    description: "Pain relief syrup for fever and headaches.",
    category: "Pain Management",
  },
  {
    name: "Veelam 100ml",
    price: "₦1,300",
    image: "/products/Veelam.png",
    description: "Cold and flu syrup.",
    category: "Cold & Flu",
  },
  {
    name: "Cakafen",
    price: "₦1,100",
    image: "/products/Cakafen.png",
    description: "relief of throat and chest cough.",
    category: "cough relief",
  },
  {
    name: "Cosine",
    price: "₦1,100",
    image: "/products/Cosine.png",
    description: "relief of cold, cartarr and cough.",
    category: "cough relief",
  },
  {
    name: "Nalolyn",
    price: "₦1,300",
    image: "/products/Nalolyn.png",
    description: "relief of cold, cartarr and cough.",
    category: "cold and cough relief",
  },
  {
    name: "Nalotrim",
    price: "₦1,100",
    image: "/products/Nalotrim.png",
    description: "relief of cold, cartarr and cough.",
    category: "cold and cough relief",
  },
  {
    name: "Nalovite",
    price: "₦2,400",
    image: "/products/Nalovite%20Tonic.png",
    description: "Iron + B complex Tonic.",
    category: "Imunity complex Tonic",
  },
  {
    name: "Prytune Expectorant",
    price: "₦1,100",
    image: "/products/Prytune%20expectorant.png",
    description: "Expectorant for chest congestion.",
    category: "Cough,and flu",
  },
  {
    name: "Prytune Syrup",
    price: "₦1,100",
    image: "/products/Prytune%20Syrup.png",
    description: "Syrup for cold and flu symptoms.",
    category: "Cold, cough & Flu",
  },
  {
    name: "Salbutamol",
    price: "₦1,200",
    image: "/products/Salbutamol.png",
    category: "Respiratory",
  },
  {
    name: "Skinserve",
    price: "₦1,800",
    image: "/products/Skinserv.png",
    description: "methylated spirit for skin disinfection.",
    category: "methylated spirit",
  },
  {
    name: "Vitamin-B-Complex",
    price: "₦1,500",
    image: "/products/Vitamin-B-Complex.png",
    description: "B-complex vitamins for energy and immune support.",
    category: "Vitamins & Immunity",
  }
];

const categories = [
  "All Products",
  "Pain Management",
  "Vitamins & Immunity",
  "Antimalaria",
  "Cold & Flu",
  "Cough & Congestion",
  "Respiratory",
  "Imunity complex Tonic",
  "methylated spirit"

];

export default function ProductsPage() {
  const { addItem, itemCount } = useCart();
  const [toast, setToast] = useState("");
  const [imageErrors, setImageErrors] = useState({});

  const handleAdd = (product) => {
    addItem(product);
    setToast(`${product.name} added to cart`);
    window.setTimeout(() => setToast(""), 2200);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-100 via-white to-emerald-200 text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {toast ? (
          <div
            role="status"
            aria-live="polite"
            className="inline-flex items-center gap-3 rounded-lg bg-emerald-100 px-4 py-3 text-emerald-800"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400 text-slate-900">
              ✓
            </span>
            <span>{toast}</span>
          </div>
        ) : null}

        <header className="mb-10 flex flex-col gap-6 rounded-[32px] border border-emerald-200 bg-white px-8 py-8 shadow-xl shadow-emerald-200/50 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-emerald-600">Products</p>
            <h1 className="mt-3 text-4xl font-semibold text-slate-900">Nalis Pharmaceuticals Catalog</h1>
            <p className="mt-4 max-w-2xl text-slate-600">Browse our full pharmaceutical catalog by category and add items to your persistent cart.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/products/cart"
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

        <div className="space-y-10">
          {categories.map((category) => {
            const categoryProducts = category === "All Products"
              ? products
              : products.filter((product) => product.category === category);

            return (
              <div key={category}>
                <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-emerald-200 bg-emerald-50 px-6 py-4">
                  <div>
                    <h2 className="text-2xl font-semibold text-slate-950">{category}</h2>
                    <p className="mt-1 text-sm text-slate-600">{categoryProducts.length} product{categoryProducts.length !== 1 ? 's' : ''}</p>
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {categoryProducts.map((product) => (
                    <article key={product.name} className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                      <div className="relative h-64 overflow-hidden rounded-t-[28px] bg-emerald-50">
                        <div className="absolute inset-0 z-0 bg-gradient-to-b from-emerald-100 via-emerald-50 to-white" />
                        {imageErrors[product.name] ? (
                          <div className="relative z-10 flex h-full w-full items-center justify-center px-6 text-center text-sm font-semibold text-emerald-900">
                            {product.name}
                          </div>
                        ) : (
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="relative z-10 h-full w-full object-contain"
                            unoptimized
                            priority={false}
                            onError={() => setImageErrors((prev) => ({ ...prev, [product.name]: true }))}
                          />
                        )}
                      </div>
                      <div className="space-y-4 p-6">
                        <div>
                          <h3 className="text-xl font-semibold text-slate-900">{product.name}</h3>
                          <p className="mt-2 text-sm text-slate-500">{product.description}</p>
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                          <p className="text-lg font-semibold text-slate-900">{product.price}</p>
                          <div className="flex flex-wrap gap-3">
                            <button
                              onClick={() => handleAdd(product)}
                              className="rounded-3xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
                            >
                              Add to Cart
                            </button>
                            <Link
                              href="/products/cart"
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
            );
          })}
        </div>
      </div>
    </main>
  );
}