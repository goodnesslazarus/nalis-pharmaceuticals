export const products = [
  {
    name: "Nalis-Paracetamol 60ml",
    price: "₦1,000",
    image: "/products/Nalis-Paracetamol.png",
    description: "Paracetamol syrup for pain and fever relief.",
    category: "Pain Management",
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
    image: "/products/Nalistide 200ml.png",
    description: "Stomach gas relief.",
    category: "Stomach Care",
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
    category: "Cough & Congestion",
  },
  {
    name: "Cosine",
    price: "₦1,100",
    image: "/products/Cosine.png",
    description: "relief of cold, cartarr and cough.",
    category: "Cough & Congestion",
  },
  {
    name: "Nalolyn",
    price: "₦1,300",
    image: "/products/Nalolyn.png",
    description: "relief of cold, cartarr and cough.",
    category: "Cold & Flu",
  },
  {
    name: "Nalotrim",
    price: "₦1,100",
    image: "/products/Nalotrim.png",
    description: "relief of cold, cartarr and cough.",
    category: "Cold & Flu",
  },
  {
    name: "Nalovite",
    price: "₦2,400",
    image: "/products/Nalovite Tonic.png",
    description: "Iron + B complex Tonic.",
    category: "Vitamins & Immunity",
  },
  {
    name: "Prytune-Expectorant",
    price: "₦1,100",
    image: "/products/Prytune expectorant.png",
    description: "Expectorant for chest congestion.",
    category: "Cough & Congestion",
  },
  {
    name: "Prytune-Syrup",
    price: "₦1,100",
    image: "/products/Prytune Syrup.png",
    description: "Syrup for cold and flu symptoms.",
    category: "Cold & Flu",
  },
  {
    name: "Salbutamol",
    price: "₦1,200",
    image: "/products/Salbutamol.png",
    description: "Relief for asthma and breathing difficulties.",
    category: "Respiratory",
  },
  {
    name: "Skinserve",
    price: "₦1,800",
    image: "/products/Skinserv.png",
    description: "methylated spirit for skin disinfection.",
    category: "Antiseptic & Disinfectant",
  },
  {
    name: "Vitamin-B-Complex",
    price: "₦1,500",
    image: "/products/Vitamin-B-Complex.png",
    description: "B-complex vitamins for energy and immune support.",
    category: "Vitamins & Immunity",
  },
];

const productImageMap = products.reduce((map, product) => {
  map[product.name] = product.image;
  return map;
}, {});

export function getProductImage(name) {
  return productImageMap[name];
}
