 export default function Home() {
  return (
    <main className="min-h-screen bg-white p-10">
      <h1 className="text-5xl font-bold text-yellow-600">
        Nalis Pharma
      </h1>

      <p className="mt-4 text-lg text-gray-700">
        Pharmaceutical Ordering System
      </p>

      <a
        href="/products"
        className="mt-6 inline-block rounded bg-yellow-600 px-6 py-3 text-white"
      >
        Place Order
      </a>
    </main>
  );
}