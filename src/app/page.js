"use client";

import Link from "next/link";
import { useCart } from "../lib/useCart";

export default function Home() {
  const { itemCount } = useCart();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <nav className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-slate-800 bg-slate-900/95 px-6 py-4 shadow-lg shadow-slate-950/40">
          <div className="text-xl font-semibold text-cyan-300">Nalis Pharmaceuticals</div>
          <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-300">
            <a href="#home" className="transition hover:text-white">Home</a>
            <Link href="/Products" className="transition hover:text-white">Products</Link>
            <a href="#about" className="transition hover:text-white">About Us</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
            <Link href="/Products/cart" className="inline-flex items-center rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-md shadow-cyan-500/25 transition hover:bg-cyan-400">
              Cart {itemCount > 0 ? `(${itemCount})` : "(0)"}
            </Link>
          </div>
        </nav>

        <section id="home" className="mt-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="rounded-[32px] border border-slate-800 bg-slate-900/95 p-10 shadow-xl shadow-slate-950/30">
            <span className="inline-flex rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Trusted Healthcare Supply
            </span>
            <h1 className="mt-8 text-5xl font-semibold leading-tight text-white sm:text-6xl">
              Reliable pharmaceutical sourcing for clinics, pharmacies, and healthcare teams.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Nalis Pharmaceuticals delivers quality medicines, bulk essentials, and dependable order management. Explore our catalog, secure your cart, and move ahead with confidence.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/Products" className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-8 py-4 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400">
                Browse Products
              </Link>
              <a href="#products" className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950/70 px-8 py-4 text-base font-semibold text-slate-100 transition hover:border-slate-600 hover:bg-slate-900">
                Explore Categories
              </a>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                { label: "Secure Orders", value: "Fast booking" },
                { label: "Bulk Pricing", value: "Competitive rates" },
                { label: "Nationwide", value: "Reliable delivery" },
              ].map((item) => (
                <div key={item.label} className="rounded-3xl border border-slate-800 bg-slate-950/70 px-5 py-4">
                  <p className="text-sm uppercase tracking-[0.25em] text-slate-500">{item.label}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[32px] border border-slate-800 bg-slate-900/95 p-8 shadow-xl shadow-slate-950/30">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Featured catalog</p>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-300">All stock</span>
              </div>
              <div className="grid gap-4">
                {[
                  { title: "Paracetamol", subtitle: "Fast pain relief", price: "₦1,200" },
                  { title: "Cough Syrup", subtitle: "Cold & flu care", price: "₦1,300" },
                  { title: "Salbutamol", subtitle: "Respiratory support", price: "₦1,500" },
                ].map((item) => (
                  <div key={item.title} className="rounded-3xl border border-slate-800 bg-slate-950 px-5 py-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-lg font-semibold text-white">{item.title}</p>
                        <p className="mt-1 text-sm text-slate-400">{item.subtitle}</p>
                      </div>
                      <p className="text-lg font-semibold text-cyan-400">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-800 bg-slate-900/95 p-8 shadow-xl shadow-slate-950/30">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Cart readiness</p>
              <div className="mt-6 text-2xl font-semibold text-white">Access your cart anytime</div>
              <p className="mt-4 text-slate-400">
                The Products page stores your selection and keeps your cart ready across sessions so customers can review and checkout at their pace.
              </p>
              <Link href="/Products/cart" className="mt-8 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
                View Cart
              </Link>
            </div>
          </div>
        </section>

        <section id="products" className="mt-12 rounded-[36px] border border-slate-800 bg-slate-900/95 px-8 py-10 shadow-xl shadow-slate-950/20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Shop by category</p>
              <h2 className="mt-2 text-3xl font-semibold text-white">See our product portfolio</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {['All Products', 'Antibiotics', 'Pain Management', 'Vitamins', 'Chronic Care', 'Clinical Equipment'].map((label) => (
                <span key={label} className="rounded-full border border-slate-800 bg-slate-950 px-4 py-2 text-sm text-slate-300">
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { title: 'Paracetamol', subtitle: 'Pain relief', price: '₦1,200', accent: 'bg-gradient-to-br from-cyan-500 to-sky-500' },
              { title: 'Cough Syrup', subtitle: 'Cold & flu support', price: '₦1,300', accent: 'bg-gradient-to-br from-emerald-500 to-cyan-500' },
              { title: 'Salbutamol', subtitle: 'Asthma relief', price: '₦1,500', accent: 'bg-gradient-to-br from-fuchsia-500 to-violet-500' },
            ].map((item) => (
              <div key={item.title} className="rounded-[32px] border border-slate-800 bg-slate-950 p-6 shadow-lg shadow-slate-950/20">
                <div className={`mb-4 h-40 rounded-[28px] p-6 text-white ${item.accent}`}>
                  <div className="text-xl font-semibold">{item.title}</div>
                  <p className="mt-3 text-sm opacity-90">{item.subtitle}</p>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-2xl font-semibold text-white">{item.price}</p>
                  <Link href="/Products" className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
                    View Products
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="mt-12 grid gap-10 rounded-[32px] bg-white px-6 py-12 shadow-xl shadow-slate-200 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">About Nalis</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">Premium bulk pharmaceuticals with reliable delivery.</h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              We supply hospitals, clinics, and pharmacies with trusted pharmaceutical brands and medical essentials. Order in bulk, track your cart, and get dependable service from our team.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-900">Quality</h3>
              <p className="mt-3 text-sm text-slate-600">Safe, lab-tested products for hospitals and clinics.</p>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
              <h3 className="font-semibold text-slate-900">Support</h3>
              <p className="mt-3 text-sm text-slate-600">Responsive order assistance and delivery coordination.</p>
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

        <footer className="mt-12 rounded-[32px] border border-slate-800 bg-slate-900/95 px-6 py-10 shadow-xl shadow-slate-950/20">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-10 border-b border-slate-800 pb-8 md:flex-row md:items-start md:justify-between">
              <div className="max-w-md space-y-4">
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Nalis Pharmaceuticals</p>
                <p className="text-base leading-7 text-slate-400">
                  Trusted supply for hospitals, pharmacies, and clinics across Nigeria. Manage bulk orders and keep your cart available for quick checkout.
                </p>
              </div>
              <div className="grid gap-8 sm:grid-cols-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Company</p>
                  <ul className="mt-4 space-y-3 text-sm text-slate-300">
                    <li><a href="#about" className="transition hover:text-white">About</a></li>
                    <li><Link href="/Products" className="transition hover:text-white">Products</Link></li>
                    <li><a href="#contact" className="transition hover:text-white">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Resources</p>
                  <ul className="mt-4 space-y-3 text-sm text-slate-300">
                    <li><Link href="/Products/cart" className="transition hover:text-white">View Cart</Link></li>
                    <li><a href="#products" className="transition hover:text-white">Catalog</a></li>
                    <li><a href="#home" className="transition hover:text-white">Top</a></li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Contact</p>
                  <div className="mt-4 space-y-3 text-sm text-slate-300">
                    <p>Phone: +234 8161427836</p>
                    <p>Email: info@nalispharma.com</p>
                    <p className="text-slate-500">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
              <p>© 2026 Nalis Pharmaceuticals. All rights reserved.</p>
              <p>Designed for professional pharmaceutical procurement.</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
