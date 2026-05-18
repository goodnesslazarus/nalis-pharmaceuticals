export default function ProductsPage() {
  const products = [
    {
      name: "Nalis Paracetamol 60ml",
      price: "₦280",
    },
    {
      name: "Vitamin C",
      price: "₦320",
    },
    {
      name: "Nalistide 200ml",
      price: "₦650",
    },
    {
      name: "Nalistide 100ml",
      price: "₦320",
    },
    { 
      name: "Lumaforce Tablet x6",
      price: "₦600",
    },
    {
      name: "Ibuprofen 100ml",
      price: "₦320",
    },
    {
      name: "veelam 100ml",
      price: "₦350",
    },
    {
      name: "Nalotrim 50ml", 
      price: "₦280",
    },
    {
      name: "Nalovite 200ml",
      price: "₦800",
    },
    {
      name: "Cakafen 100ml",
      price: "₦320", 
    },
    {
      name: "Cosine 100ml",
      price: "₦320",
    },
    {
      name: "Prytune expectorant 100ml",
      price: "₦280",
    },
    {
      name: "Prytune Syrup 100ml",
      price: "₦280", 
    },
    {
      name: "Salbutamol Syrup 100ml",
      price: "₦320",
    },
    {
      name: "B Complex 100ml ",
      price: "₦320",
    },
    {
      name: "Skinserv 100ml", 
      price: "₦200", 
    },
    {
      name: "Skinserv 200ml", 
      price: "₦400", 
    }
    ];
  return (
    <div style={{ padding: "30px" }}>
      <h1>Nalis Pharma Products</h1>

      {products.map((product, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginTop: "15px",
            borderRadius: "10px",
        }}
        >
          <h2>{product.name}</h2>
          <p>{product.price}</p>

          <button
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "10px",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Order Now
          </button><a
            href={`https://wa.me/2348161427836?text=Hello, I want to order ${product.name} (${product.price})`}
            target="_blank"
>
  <button>Order on WhatsApp</button>
</a>
        </div>
      ))}
    </div>
  );
}