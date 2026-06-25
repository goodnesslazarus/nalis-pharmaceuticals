export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 bg-green-800 text-white">
        <h1 className="text-3xl font-bold">Nalis Pharma</h1>

        <div className="flex gap-8 text-lg">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Careers</a>
        </div>

        <button className="bg-white text-green-800 px-5 py-2 rounded-full font-semibold">
          Order on WhatsApp
        </button>
      </nav>

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-10 items-center px-16 py-20 bg-green-50 rounded-xl mx-10 mt-10">
        <div>
          <h2 className="text-6xl font-bold text-green-800 leading-tight">
            Pharmaceutical Solutions for Every Stage of Life
          </h2>

          <p className="mt-6 text-lg text-gray-700">
            Nalis Pharmaceuticals specializes in bulk supply for hospitals,
            clinics, and pharmacies. Browse our catalog and place your bulk
            orders directly via WhatsApp.
          </p>

          <button className="mt-8 bg-green-700 text-white px-8 py-4 rounded-xl text-lg">
            Order Bulk via WhatsApp
          </button>
        </div>

        <div className="flex justify-center">
          <img
            src="/medicine.png"
            alt="Pharmaceutical products"
            className="w-[500px]"
          />
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-4 gap-8 px-16 py-16">
        {[
          "Quality Assured",
          "Reliable Supply",
          "Dedicated Support",
          "Trusted by Professionals",
        ].map((item, index) => (
          <div key={index} className="text-center p-6 shadow rounded-xl">
            <h3 className="font-bold text-green-800 text-xl">{item}</h3>
            <p className="mt-2 text-gray-600">
              Delivering trusted pharmaceutical products nationwide.
            </p>
          </div>
        ))}
      </section>

      {/* Categories */}
      <section className="px-16 pb-20">
        <h2 className="text-4xl font-bold text-green-800 mb-8">
          Shop by Categories
        </h2>

        <div className="flex gap-4 flex-wrap">
          {[
            "All Products",
            "Antibiotics",
            "Pain Management",
            "Vitamins & Supplements",
            "Chronic Care",
            "Clinical Equipment",
          ].map((cat, index) => (
            <button
              key={index}
              className="bg-green-100 text-green-800 px-6 py-3 rounded-full"
            >
              {cat}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}