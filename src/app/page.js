"use client";

import Link from "next/link";
import { useCart } from "../lib/useCart";

export default function Home() {
  const { itemCount } = useCart();

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <nav className="flex flex-wrap items-center justify-between gap-4 rounded-full bg-slate-900/80 px-6 py-4 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
          <div className="text-xl font-semibold text-cyan-200">Nalis Pharmaceuticals</div>
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-200">
            <a href="#home" className="transition hover:text-white">Home</a>
            <a href="#products" className="transition hover:text-white">Products</a>
            <a href="#about" className="transition hover:text-white">About Us</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
            <Link href="/Products/cart" className="inline-flex items-center rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-400">
              Cart {itemCount > 0 ? `(${itemCount})` : "(0)"}
            </Link>
          </div>
        </nav>

        <section id="home" className="mt-10 rounded-[36px] bg-gradient-to-r from-cyan-500 via-blue-600 to-slate-950 px-8 py-16 text-white shadow-2xl shadow-slate-950/40">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
                Pharmaceutical Solutions
              </p>
              <h1 className="text-5xl font-bold leading-tight sm:text-6xl">
                Pharmaceutical Solutions for Every Stage of Life
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-white/90">
                Nalis Pharmaceuticals specializes in bulk supply for hospitals, clinics, and pharmacies. Browse our catalog, add products to your cart, and access quality medicines with ease.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link href="/Products" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-slate-950 shadow-lg shadow-slate-950/20 transition hover:bg-slate-100">
                  Browse Products
                </Link>
                <Link href="#products" className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/20">
                  Explore Featured Items
                </Link>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute -right-10 top-10 h-44 w-44 rounded-full bg-white/10 blur-3xl"></div>
              <div className="absolute -bottom-6 left-6 h-28 w-28 rounded-full bg-slate-950/50 blur-3xl"></div>
              <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/10 p-8 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
                <img src="/pharma-hero.png" alt="Pharma illustration" className="h-[420px] w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="mt-12 rounded-[36px] bg-slate-900/95 px-6 py-12 shadow-2xl shadow-slate-950/40">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Featured categories</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">Shop by category</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {['All Products', 'Antibiotics', 'Pain Management', 'Vitamins', 'Chronic Care', 'Clinical Equipment'].map((label) => (
                <span key={label} className="rounded-full border border-slate-800 bg-slate-950 px-4 py-2 text-sm text-slate-200">
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { title: 'Paracetamol', subtitle: 'Pain relief', price: '₦1,200', accent: 'from-cyan-500 to-sky-500' },
              { title: 'Cough Syrup', subtitle: 'Cold & flu support', price: '₦1,300', accent: 'from-emerald-500 to-cyan-500' },
              { title: 'Salbutamol', subtitle: 'Asthma relief', price: '₦1,500', accent: 'from-fuchsia-500 to-violet-500' },
            ].map((item) => (
              <div key={item.title} className="rounded-[32px] border border-slate-800 bg-slate-950 p-6 shadow-lg shadow-slate-950/20">
                <div className={`mb-4 h-40 rounded-[28px] bg-gradient-to-br ${item.accent} p-6 text-white`}>
                  <div className="text-xl font-semibold">{item.title}</div>
                  <p className="mt-3 text-sm opacity-90">{item.subtitle}</p>
                </div>
                <p className="text-2xl font-semibold text-white">{item.price}</p>
                <Link href="/Products" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
                  View Product Cart
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="mt-12 grid gap-10 rounded-[32px] bg-white px-6 py-12 shadow-xl shadow-slate-200 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">About Nalis</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">Premium bulk pharmaceuticals with reliable delivery.</h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              We supply hospitals, clinics, and pharmacies with trusted pharmaceutical brands and medical essentials. Order in bulk and get smooth support from our customer team.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-900">Quality</h3>
              <p className="mt-3 text-sm text-slate-600">Safe, lab-tested products for hospitals and clinics.</p>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-900">Support</h3>
              <p className="mt-3 text-sm text-slate-600">Fast response through WhatsApp ordering.</p>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-900">Bulk Orders</h3>
              <p className="mt-3 text-sm text-slate-600">Competitive pricing for larger hospital purchases.</p>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-900">Delivery</h3>
              <p className="mt-3 text-sm text-slate-600">Local shipping across Lagos and nationwide.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-12 rounded-[32px] bg-white px-6 py-12 shadow-xl shadow-slate-200">
          <div className="grid gap-10 lg:grid-cols-3">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Contact Us</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">Get in touch for bulk orders</h2>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
            <p className="font-semibold text-slate-900">Phone</p>
            <p className="mt-3 text-slate-600">+234 8161427836</p>
            <div className="mt-4 inline-flex rounded-3xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white">
              Call us to place your order
            </div>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
              <p className="font-semibold text-slate-900">Email</p>
              <p className="mt-3 text-slate-600">info@nalispharma.com</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
