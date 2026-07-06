"use client";

import Link from "next/link";
import { useCart } from "../lib/useCart";
import { products } from "../lib/products";

export default function Home() {
  const { itemCount } = useCart();

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-100 via-white to-emerald-200 text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <nav className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-emerald-200 bg-white px-6 py-4 shadow-xl shadow-emerald-100/60">
          <div>
            <p className="text-lg font-semibold text-emerald-900">Nalis Pharmaceuticals</p>
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Trusted pharmaceutical sourcing</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-700">
            <a href="#home" className="transition hover:text-emerald-900">Home</a>
            <Link href="/products" className="border-b-2 border-emerald-900 pb-1 text-emerald-900 transition hover:text-emerald-900">Products</Link>
            <a href="#about" className="transition hover:text-emerald-900">About Us</a>
            <a href="#contact" className="transition hover:text-emerald-900">Contact</a>
            <Link
              href="/products/cart"
              className="inline-flex items-center rounded-full bg-emerald-900 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-emerald-700/30 transition hover:bg-emerald-800"
            >
              Cart {itemCount > 0 ? `(${itemCount})` : "(0)"}
            </Link>
          </div>
        </nav>

        <section id="home" className="mt-10 grid gap-12 lg:grid-cols-[1.25fr_0.95fr] lg:items-center">
          <div className="rounded-[32px] bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 p-10 text-white shadow-2xl shadow-emerald-950/20">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">
              Modern B2B pharmacy ordering
            </span>
            <h1 className="mt-8 text-5xl font-bold leading-tight sm:text-6xl">
              Easy product browsing, professional checkout, and invoice-ready ordering for healthcare buyers.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-emerald-100/90 sm:text-lg">
              Nalis Pharmaceuticals combines the simplicity of a modern online store with the control of a B2B portal for hospitals, pharmacies, and distributors. Customers browse trusted products, add them to cart, and submit orders that generate a proforma invoice for approval and payment.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/products/checkout"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-emerald-950 shadow-lg shadow-emerald-950/10 transition hover:bg-slate-100"
              >
                Start Order Workflow
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Browse products
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-3">
              {['Fast browsing', 'Bulk-ready checkout', 'Proforma invoice', 'Approval workflow', 'Reliable delivery'].map((label, index) => (
                <span
                  key={label}
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${index === 0 ? 'bg-white text-emerald-950' : 'bg-white/10 text-emerald-100'}`}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[32px] bg-white p-10 shadow-2xl shadow-emerald-900/10">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-emerald-100 opacity-60 blur-3xl" />
            <div className="absolute left-[-4rem] top-20 h-56 w-56 rounded-full bg-emerald-200 opacity-30 blur-3xl" />
            <div className="relative space-y-6">
              <div className="rounded-[28px] border border-emerald-100 bg-emerald-50 p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-800">Built for healthcare buyers</p>
                <h2 className="mt-4 text-3xl font-semibold text-emerald-950">Simple ordering with B2B control</h2>
                <p className="mt-4 text-slate-700">
                  Perfect for pharmacies, clinics, distributors, and hospital procurement teams that need a dependable ordering experience.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: 'What buyers get', value: 'A seamless cart and checkout experience' },
                  { label: 'What teams get', value: 'Invoice-ready approvals and payment flow' },
                ].map((item) => (
                  <div key={item.label} className="rounded-[28px] border border-emerald-100 bg-white p-6 shadow-sm">
                    <p className="text-sm uppercase tracking-[0.3em] text-emerald-700">{item.label}</p>
                    <p className="mt-3 text-slate-700">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 rounded-[32px] border border-emerald-100 bg-white/80 p-8 shadow-xl shadow-emerald-100/50 lg:grid-cols-3">
          {[
            { title: 'Easy product browsing', text: 'Customers can quickly explore products by category and add them to cart without friction.' },
            { title: 'Modern online pharmacy', text: 'The experience feels polished, clinical, and easy to trust for recurring procurement needs.' },
            { title: 'B2B ordering portal', text: 'Hospitals, pharmacies, and distributors can follow a guided workflow toward approval and payment.' },
          ].map((item) => (
            <div key={item.title} className="rounded-[24px] border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
            </div>
          ))}
        </section>
        <section className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm uppercase tracking-[0.3em] text-emerald-900">Featured catalog</p>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-500">All stock</span>
              </div>
              <div className="grid gap-4">
                {[
                  { title: "Nalis Paracetamol", subtitle: "Fast pain relief", price: "₦1,200" },
                  { title: "Salbutamol", subtitle: "Respiratory support", price: "₦1,500" },
                ].map((item) => (
                  <div key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-lg font-semibold text-slate-950">{item.title}</p>
                        <p className="mt-1 text-sm text-slate-500">{item.subtitle}</p>
                      </div>
                      <p className="text-lg font-semibold text-emerald-900">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-900">Cart readiness</p>
              <div className="mt-6 text-2xl font-semibold text-slate-950">Your order moves from cart to proforma invoice</div>
              <p className="mt-4 text-slate-600">
                The products page stores your selection, supports fast reordering, and prepares each request for a professional invoice and payment approval path.
              </p>
              <Link href="/products/cart" className="mt-8 inline-flex items-center rounded-full bg-emerald-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800">
                Review Cart
              </Link>
            </div>
          </section>

        <section id="testimonials" className="mt-12 rounded-[36px] border border-slate-200 bg-white px-8 py-10 shadow-xl shadow-slate-200/50">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-900">Customer feedback</p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-950">Trusted by healthcare teams</h2>
            </div>
            <p className="max-w-xl text-sm text-slate-600 md:text-right">
              See why hospitals, clinics, and pharmacies rely on Nalis Pharmaceuticals for quality medicines and dependable delivery.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                name: 'Mr. Njamin',
                role: 'Pharmacist',
                quote: 'Nalis makes bulk ordering easy, and the delivery schedule is always reliable.',
              },
              {
                name: 'Miss. Goodness',
                role: 'Pharmacy Owner',
                quote: 'Great pricing and fast support. The product catalog is clear and professional.',
              },
              {
                name: 'Mr. Chinonso',
                role: 'Hospital Procurement',
                quote: 'Their cart persistence saved our team time during repeat orders.',
              },
            ].map((testimonial) => (
              <div key={testimonial.name} className="rounded-[28px] border border-slate-200 bg-slate-50 p-6 shadow-sm shadow-slate-200/50">
                <p className="text-lg leading-8 text-slate-700">“{testimonial.quote}”</p>
                <div className="mt-6">
                  <p className="font-semibold text-slate-950">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="products" className="mt-12 rounded-[36px] border border-slate-200 bg-white px-8 py-10 shadow-xl shadow-slate-200/50">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-900">Shop by category</p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-950">See our product portfolio</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {['All Products', 'Antimalaria', 'Pain Management', 'Gas Stomach', 'Vitamins', 'B complex', 'Clinical Equipment'].map((label) => (
                <span key={label} className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm text-slate-700">
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {products.slice(0, 8).map((product) => (
              <div key={product.name} className="rounded-[32px] border border-slate-200 bg-slate-50 p-6 shadow-lg shadow-slate-200/40">
                <div className="mb-4 overflow-hidden rounded-[28px] bg-white p-4">
                  <img
                    src={encodeURI(product.image)}
                    alt={product.name}
                    className="h-40 w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="text-xl font-semibold text-slate-950">{product.name}</div>
                    <p className="mt-2 text-sm text-slate-600">{product.description}</p>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-2xl font-semibold text-slate-950">{product.price}</p>
                    <Link href="/products" className="inline-flex items-center justify-center rounded-full bg-emerald-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-800">
                      View Products
                    </Link>
                  </div>
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
              <p className="mt-2 text-slate-600">+234 814 718 0296</p>
              <div className="mt-4 inline-flex rounded-3xl bg-emerald-100 px-4 py-3 text-sm font-semibold text-emerald-900">
                Call us to place your order
              </div>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
              <p className="font-semibold text-slate-900">WhatsApp</p>
              <a href="https://wa.me/2348147180296" target="_blank" rel="noreferrer" className="mt-3 inline-flex rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600">
                Chat on WhatsApp
              </a>
              <p className="mt-3 text-sm text-slate-600">Available for customer orders and support.</p>
            </div>
          </div>
        </section>

        <footer className="mt-12 rounded-[32px] border border-slate-200 bg-white px-6 py-10 shadow-xl shadow-slate-200/70">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-10 border-b border-slate-200 pb-8 md:flex-row md:items-start md:justify-between">
              <div className="max-w-md space-y-4">
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-600">Nalis Pharmaceuticals</p>
                <p className="text-base leading-7 text-slate-600">
                  Trusted supply for hospitals, pharmacies, and clinics across Nigeria. Manage bulk orders and keep your cart available for quick checkout.
                </p>
              </div>
              <div className="grid gap-8 sm:grid-cols-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Company</p>
                  <ul className="mt-4 space-y-3 text-sm text-slate-600">
                    <li><a href="#about" className="transition hover:text-emerald-900">About</a></li>
                    <li><Link href="/products" className="transition hover:text-emerald-900">Products</Link></li>
                    <li><a href="#contact" className="transition hover:text-emerald-900">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Resources</p>
                  <ul className="mt-4 space-y-3 text-sm text-slate-600">
                    <li><Link href="/products/cart" className="transition hover:text-emerald-900">View Cart</Link></li>
                    <li><a href="#products" className="transition hover:text-emerald-900">Catalog</a></li>
                    <li><a href="#home" className="transition hover:text-emerald-900">Top</a></li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Contact</p>
                  <div className="mt-4 space-y-3 text-sm text-slate-600">
                    <p>Phone: +234 8161427836</p>
                    <p>Mobile: +234 814 718 0296</p>
                    <p>WhatsApp: <a href="https://wa.me/2348147180296" target="_blank" rel="noreferrer" className="font-semibold text-emerald-900">Chat now</a></p>
                    <p className="text-slate-500">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
              <p>© 2026 Nalis Pharmaceuticals. All rights reserved.</p>
              <p>Designed for professional pharmaceutical procurement.</p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
