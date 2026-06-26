import "./globals.css";

export const metadata = {
  title: "Nalis Pharmaceuticals Ltd - Trusted Healthcare Products",
  description:
    "Nalis Pharmaceuticals Ltd provides safe, effective and affordable pharmaceutical products in Nigeria. Order easily via WhatsApp.",
  keywords: "pharmaceuticals, medicine, Nigeria pharmacy, Nalis Pharma",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">{children}</body>
    </html>
  );
}