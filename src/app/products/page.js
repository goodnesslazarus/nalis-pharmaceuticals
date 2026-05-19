export default function ProductsPage() {
  const products = [
    {
      name: "Nalis Paracetamol 60ml",
      price: "₦370",
      image: "c:\\Users\\hp\\Downloads\\Nalis Paracetamol.png",
      description: "Paracetamol Syrup.",
      dosage: "10ml",
      pack: "1x10x100",
      category: "pain relief",
    },
    {
      name: "Nalis Vitamin C",
      price: "₦430",
      image: "c:\\Users\\hp\\Downloads\\Vitamin C.png",
      description: "Vitamin C Syrup.",
      dosage: "10ml",
      pack: "1x10x60",
      category: "Ascorbic Acid 100mg",
    },
    {
      name: "Nalistide 200ml",
      price: "₦750",
      image: "c:\\Users\\hp\\Downloads\\Nalistide.png",
      description: "Nalistide Syrup.",
      dosage: "10ml",
      pack: "1x6x24",
      category: "antibiotic",
    },
    {
      name: "Nalistide 100ml",
      price: "₦400",
      image: "c:\\Users\\hp\\Downloads\\Nalistide.png",
      description: "Nalistide Syrup.",
      dosage: "10ml",
      pack: "1x20",
      category: "antibiotic",
    },
    { 
      name: "Lumaforce Tablet x6",
      price: "₦480",
      image: "c:\\Users\\hp\\Downloads\\Lumaforce.png",
      description: "Lumaforce Tablet.",
      dosage: "6 tablets",
        pack: "10x30",
      category: "antimalarial",
    },
    {
      name: "Ibuprofen 100ml",
      price: "₦465",
      image: "c:\\Users\\hp\\Downloads\\Ibuprofen.png",
      description: "Ibuprofen Syrup.",
      dosage: "10ml",
        pack: "1x10x60",
      category: "pain relief",
    },
    {
      name: "veelam 100ml",
      price: "₦480",
      image: "c:\\Users\\hp\\Downloads\\veelam.png",
      description: "veelam Syrup.",
      dosage: "10ml",
      pack: "1X10X60",
      category: "pain relief  cold, fever, flu",
    },
    {
      name: "Nalotrim 50ml", 
      price: "₦400",
      image: "c:\\Users\\hp\\Downloads\\Nalotrim.png",
      description: "Nalotrim Syrup.",
      dosage: "10ml",
      pack: "1x10x100",
      category: "pain relief, co timoxazole",
    },
    {
      name: "Nalovite Tonic 200ml",
      price: "₦900",
      image: "c:\\Users\\hp\\Downloads\\Nalovite.png",
      description: "Nalovite Syrup.",
      dosage: "10ml",
      pack: "1x10x24",
      category: "iron B complex, blood Tonic",
    },
    {
      name: "Cakafen 100ml",
      price: "₦430",
      image: "c:\\Users\\hp\\Downloads\\Cakafen.png",
      description: "Cakafen Syrup.",
      dosage: "10ml",
      pack: "1x10x60",
      category: "cough lintus", 
    },
    {
      name: "Cosine expectorant 100ml",
      price: "₦400",
      image: "c:\\Users\\hp\\Downloads\\Cosine.png",
      description: "Cosine Syrup.",
      dosage: "10ml",
      pack:   "1x10x60",
      category: "cough, cold and catarrh",
    },
    {
      name: "Prytune expectorant 100ml",
      price: "₦380",
      image: "c:\\Users\\hp\\Downloads\\Prytune.png",
      description: "Prytune Syrup.",
      dosage: "10ml",
       pack: "1x20",
      category: "cough, cold and catarrh",
    },
    {
      name: "Prytune Syrup 100ml",
      price: "₦380", 
      image: "c:\\Users\\hp\\Downloads\\Prytune.png",
      description: "Prytune Syrup.",
      dosage: "10ml",
      pack: "1x20",
      category: "cough, cold and catarrh",
    },
    {
      name: "Salbutamol Syrup 100ml",
      price: "₦400",
      image: "c:\\Users\\hp\\Downloads\\Salbutamol.png",
      description: "Salbutamol Syrup.",
      dosage: "10ml",
      pack: "1x10x60",
      category: "asthma, bronchitis, chronic obstructive pulmonary disease (COPD)",
    },
    {
      name: "Vitamin B Complex 100ml ",
      price: "₦430",
      image: "c:\\Users\\hp\\Downloads\\B Complex.png",
      description: "Vitamin B Complex Syrup.",
      dosage: "10ml",
      pack: "1x10x60",
      category: "for children growing",
    },
    {
      name: "Skinserv 100ml", 
      price: "₦350",
      image: "c:\\Users\\hp\\Downloads\\Skinserv.png",
      description: "methylated spirit.",
      dosage: "external use only",
      category: "skin disinfection, antiseptic, prior to injection or surgery", 
    },
    {
      name: "Skinserv 200ml", 
      price: "₦600", 
      image: "c:\\Users\\hp\\Downloads\\Skinserv.png",
      description: "methylated spirit.",
      dosage: "external use only",
      category: "skin disinfection, antiseptic, prior to injection or surgery", 
    },
    {
      name: "Nalolyn expectorant 100ml",
      price: "₦495",
      image: "c:\\Users\\hp\\Downloads\\Nalolyn.png",
      description: "Nalolyn Syrup.",
      dosage: "10ml",
      pack: "1x10x60",
      category: "cough, cold and catarrh",
    },
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
            mar1x20ginTop: "15px",
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