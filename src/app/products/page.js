export default function ProductsPage() {
  const products = [
    {
      name: "Nalis Paracetamol 60ml",
      price: "₦1,200",
      image: "/products/nalis Paracetamol.png",
      description: "Paracetamol Syrup.",
      dosage: "10ml",
      pack: "1x10x100",
      category: "pain relief",
    },
    {
      name: "Nalis Vitamin C",
      price: "₦1,300",
      image: "/products/nalis Vitamin C.png",
      description: "Vitamin C Syrup.",
      dosage: "10ml",
      pack: "1x10x60",
      category: "Ascorbic Acid 100mg",
    },
    {
      name: "Nalistide 200ml",
      price: "₦2,300",
      image: "/products/nalistide 200ml.png",
      description: "Nalistide Syrup",
      dosage: "10ml",
      pack: "1x6x24",
      category: "antibiotic",
    },
    {
      name: "Lumaforce Tablet x6",
      price: "₦1,500",
      image: "/products/lumaforce.png",
      description: "Lumaforce Tablet.",
      dosage: "6 tablets",
        pack: "10x30",
      category: "antimalarial",
    },
    {
      name: "Ibuprofen 100ml",
      price: "₦1,400",
      image: "/products/ibuprofen.png",
      description: "Ibuprofen Syrup.",
      dosage: "10ml",
        pack: "1x10x60",
      category: "pain relief",
    },
    {
      name: "veelam 100ml",
      price: "₦1,200",
      image: "/products/veelam.png",
      description: "veelam Syrup.",
      dosage: "10ml",
      pack: "1X10X60",
      category: "pain relief  cold, fever, flu",
    },
    {
      name: "Nalotrim 50ml", 
      price: "₦1,200",
      image: "/products/nalotrim.png",
      description: "Nalotrim Syrup.",
      dosage: "10ml",
      pack: "1x10x100",
      category: "pain relief, co timoxazole",
    },
    {
      name: "Nalovite Tonic 200ml",
      price: "₦2,500",
      image: "/products/nalovite tonic.png",
      description: "Nalovite Syrup.",
      dosage: "10ml",
      pack: "1x10x24",
      category: "iron B complex, blood Tonic",
    },
    {
      name: "Cakafen 100ml",
      price: "₦1,200",
      image: "/products/cakafen.png",
      description: "Cakafen Syrup.",
      dosage: "10ml",
      pack: "1x10x60",
      category: "cough lintus", 
    },
    {
      name: "Cosine",
      price: "₦1,200",
      image: "/products/Cosine.png",
      description: "Cosine syrup",
      dosage: "10ml",
      pack:   "1x10x60",
      category: "cough, cold and catarrh",
    },
    {
      name: "Prytune expectorant 100ml",
      price: "₦1,400",
      image: "/products/Prytune expectorant.png",
      description: "Prytune expectorant.",
      dosage: "10ml",
       pack: "1x20",
      category: "cough, cold and catarrh",
    },
    {
      name: "Prytune Syrup 100ml",
      price: "₦1,200", 
      image: "/products/Prytune Syrup.png",
      description: "Prytune Syrup.",
      dosage: "10ml",
      pack: "1x20",
      category: "cough, cold and catarrh",
    },
    {
      name: "Salbutamol Syrup 100ml",
      price: "₦1,500",
      image: "/products/Salbutamol.png",
      description: "Salbutamol Syrup.",
      dosage: "10ml",
      pack: "1x10x60",
      category: "asthma, bronchitis, chronic obstructive pulmonary disease (COPD)",
    },
    {
      name: "Vitamin B Complex 100ml ",
      price: "₦1,600",
      image: "/products/Vitamin B Complex.png",
      description: "Vitamin B Complex Syrup.",
      dosage: "10ml",
      pack: "1x10x60",
      category: "for children growing",
    },
    {
      name: "Skinserv 200ml", 
      price: "₦2,000", 
      image: "/products/Skinserv.png",
      description: "methylated spirit.",
      dosage: "external use only",
      category: "skin disinfection, antiseptic, prior to injection or surgery", 
    },
    {
      name: "Nalolyn 100ml",
      price: "₦1,500",
      image: "/products/Nalolyn.png",
      description: "Nalolyn Syrup.",
      dosage: "10ml",
      pack: "1x10x60",
      category: "cough, cold and catarrh",
    },
    ];
  return (
    <div style={{ padding: "30px" }}>
      <h1>Nalis Pharma Products</h1>
<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  }}
></div>
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
          <img src={product.image} alt={product.name} style={{ width: "100%", height: "200px", objectFit: "contain" }} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
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