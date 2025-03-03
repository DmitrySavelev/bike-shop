import { Brand, Category, FiltersApi, Product, Promotion } from "./types";

const bikeProducts: Product[] = [
  {
    id: "b001",
    name: "Mountain Explorer X500",
    type: "mountain",
    brand: "TrekStar",
    price: 89999,
    oldPrice: 99999,
    rating: 4.8,
    reviews: 124,
    inStock: false,
    isNew: true,
    discount: 10,
    specifications: {
      frameSize: ["S", "M", "L", "XL"],
      frameMaterial: "Aluminum",
      suspension: "Front",
      wheelSize: 29,
      speeds: 24,
      weight: 13.5,
      brakeType: "Hydraulic Disc",
    },
    features: [
      "Lightweight frame",
      "Shimano gears",
      "Hydraulic brakes",
      "Front suspension",
    ],
    colors: [
      {
        name: "Metallic Blue",
        hex: "#2196F3",
        inStock: true,
      },
      {
        name: "Matte Black",
        hex: "#212121",
        inStock: true,
      },
      {
        name: "Forest Green",
        hex: "#2E7D32",
        inStock: false,
      },
    ],
    images: [
      "https://img.alicdn.com/imgextra/i2/1862871811/TB2Z8Z7egvD8KJjSsplXXaIEFXa_!!1862871811.jpg",
      "https://ir.ozone.ru/s3/multimedia-k/c1000/6145089596.jpg",
      "https://avatars.mds.yandex.net/i?id=81ed2dcaf46c3f17a272c3835256fef0_l-5276006-images-thumbs&n=13",
    ],
    description:
      "Perfect for mountain trails and rough terrain, the Mountain Explorer X500 offers superior control and comfort.",
    category: ["mountain", "bestseller", "premium"],
  },
  {
    id: "b002",
    name: "City Cruiser C300",
    type: "road",
    brand: "UrbanRide",
    price: 45999,
    oldPrice: null,
    rating: 4.5,
    reviews: 89,
    inStock: true,
    isNew: false,
    discount: null,
    specifications: {
      frameSize: ["M", "L"],
      frameMaterial: "Steel",
      suspension: "None",
      wheelSize: 28,
      speeds: 7,
      weight: 14.2,
      brakeType: "V-Brake",
    },
    features: [
      "Comfortable saddle",
      "Rear rack",
      "Front basket mount",
      "LED lights",
    ],
    colors: [
      {
        name: "Classic Red",
        hex: "#C62828",
        inStock: true,
      },
      {
        name: "Pearl White",
        hex: "#FFFFFF",
        inStock: true,
      },
    ],
    images: [
      "https://avatars.mds.yandex.net/get-mpic/4415357/img_id5008804448296670028.jpeg/orig",
      "/images/bikes/c300-red-2.jpg",
    ],
    description:
      "The perfect companion for city commuting, featuring comfortable riding position and practical accessories.",
    category: ["city", "commuter"],
  },
  {
    id: "b003",
    name: "Road Master R750",
    type: "road",
    brand: "SpeedTech",
    price: 159999,
    oldPrice: 179999,
    rating: 4.9,
    reviews: 67,
    inStock: true,
    isNew: true,
    discount: 11,
    specifications: {
      frameSize: ["S", "M", "L"],
      frameMaterial: "Carbon Fiber",
      suspension: "None",
      wheelSize: 28,
      speeds: 22,
      weight: 8.1,
      brakeType: "Disc",
    },
    features: [
      "Carbon frame",
      "Ultegra groupset",
      "Aero design",
      "Carbon wheels",
    ],
    colors: [
      {
        name: "Racing Red",
        hex: "#FF1744",
        inStock: true,
      },
      {
        name: "Stealth Black",
        hex: "#000000",
        inStock: true,
      },
    ],
    images: [
      "https://avatars.mds.yandex.net/i?id=29c7dd966aa85cb5434ac940458164ed_l-5192538-images-thumbs&n=13",
      "/images/bikes/r750-red-2.jpg",
    ],
    description:
      "Professional-grade road bike for serious cyclists. Lightweight carbon frame and premium components.",
    category: ["road", "premium", "professional"],
  },
  {
    id: "b004",
    name: "Trail Blazer T400",
    type: "mountain",
    brand: "UrbanRide",
    price: 175999,
    oldPrice: 84999,
    rating: 4.7,
    reviews: 98,
    inStock: false,
    isNew: true,
    discount: 11,
    specifications: {
      frameSize: ["M", "L", "XL"],
      frameMaterial: "Aluminum",
      suspension: "Full",
      wheelSize: 27.5,
      speeds: 18,
      weight: 14.8,
      brakeType: "Hydraulic Disc",
    },
    features: [
      "Advanced suspension",
      "Wide tires for better grip",
      "Hydraulic brakes",
      "Durable frame",
    ],
    colors: [
      {
        name: "Bright Yellow",
        hex: "#FFEB3B",
        inStock: true,
      },
      {
        name: "Deep Black",
        hex: "#1B1B1B",
        inStock: false,
      },
    ],
    images: [
      "https://5kwt.ru/upload/iblock/232/velosiped-cube-reaction-pro-k-27-5-2020-black-n-flashyellow-16-.jpg",
      "https://avatars.mds.yandex.net/i?id=0f45108b946d269d73e101b83e5bfbfa_l-5277879-images-thumbs&n=13",
    ],
    description:
      "Designed for trail enthusiasts, the T400 offers exceptional performance and handling on rugged terrain.",
    category: ["mountain", "trail", "bestseller"],
  },
  {
    id: "b005",
    name: "Urban Glide U200",
    type: "mountain",
    brand: "UrbanRide",
    price: 22999,
    oldPrice: null,
    rating: 4.3,
    reviews: 56,
    inStock: true,
    isNew: false,
    discount: null,
    specifications: {
      frameSize: ["S", "M"],
      frameMaterial: "Steel",
      suspension: "None",
      wheelSize: 26,
      speeds: 3,
      weight: 16.5,
      brakeType: "V-Brake",
    },
    features: [
      "Compact and lightweight design",
      "Ideal for short commutes",
      "Comfortable saddle",
      "Easy gear shifting",
    ],
    colors: [
      {
        name: "Sky Blue",
        hex: "#42A5F5",
        inStock: true,
      },
      {
        name: "Classic Black",
        hex: "#333333",
        inStock: true,
      },
    ],
    images: [
      "https://4.bp.blogspot.com/-HCKX6aCpxjo/VYkh4vGZB8I/AAAAAAAAFX4/MuT9kAlJUc0/s1600/Juliana%2BBicycles%2BJuno%2BR%2B1.jpg",
      "https://avatars.mds.yandex.net/i?id=58c798441c8fd2731dcb4a0f42ebc1e6_l-5342067-images-thumbs&n=13",
    ],
    description:
      "A budget-friendly city bike designed for short trips and daily commutes with all the basics you need.",
    category: ["city", "commuter", "budget"],
  },
  {
    id: "b006",
    name: "Speed Racer SR350",
    type: "mountain",
    brand: "TrekStar",
    price: 339999,
    oldPrice: 149999,
    rating: 4.6,
    reviews: 45,
    inStock: true,
    isNew: true,
    discount: 7,
    specifications: {
      frameSize: ["M", "L"],
      frameMaterial: "Aluminum",
      suspension: "None",
      wheelSize: 28,
      speeds: 20,
      weight: 9.2,
      brakeType: "Disc",
    },
    features: [
      "Aerodynamic design",
      "Lightweight alloy frame",
      "Precise shifting",
      "Long-distance comfort",
    ],
    colors: [
      {
        name: "Silver Shine",
        hex: "#BDBDBD",
        inStock: true,
      },
      {
        name: "Jet Black",
        hex: "#212121",
        inStock: true,
      },
    ],
    images: [
      "https://avatars.mds.yandex.net/i?id=6dc250419398ef49a9e260c1c3a267c9_l-7751470-images-thumbs&n=13",
      "https://avatars.mds.yandex.net/i?id=8cc3c1b71f46abda1d6d5fae3e94a8b5_l-5312009-images-thumbs&n=13",
    ],
    description:
      "A versatile road bike for performance-driven riders seeking speed and efficiency on paved roads.",
    category: ["road", "sport", "premium"],
  },
  {
    id: "b007",
    name: "Mountain Conqueror M700",
    type: "city",
    brand: "TrekStar",
    price: 99999,
    oldPrice: 109999,
    rating: 4.9,
    reviews: 135,
    inStock: false,
    isNew: false,
    discount: 9,
    specifications: {
      frameSize: ["L", "XL"],
      frameMaterial: "Aluminum",
      suspension: "Full",
      wheelSize: 29,
      speeds: 21,
      weight: 15.2,
      brakeType: "Hydraulic Disc",
    },
    features: [
      "Enhanced full suspension",
      "Wide range Shimano gears",
      "Durable frame",
      "High-grip tires",
    ],
    colors: [
      {
        name: "Matte Grey",
        hex: "#616161",
        inStock: true,
      },
      {
        name: "Electric Blue",
        hex: "#3F51B5",
        inStock: false,
      },
    ],
    images: [
      "https://a.allegroimg.com/s1024/0cc179/a25758164024b67d269b6a937306",
      "https://avatars.mds.yandex.net/i?id=75459881d91c2168128765414c5f47f1_l-5224517-images-thumbs&n=13",
    ],
    description:
      "Take on the toughest mountain trails with the Mountain Conqueror M700, designed for adventurers.",
    category: ["mountain", "premium", "trail"],
  },
  {
    id: "b008",
    name: "City Voyager CV500",
    type: "city",
    brand: "TrekStar",
    price: 49999,
    oldPrice: null,
    rating: 4.4,
    reviews: 72,
    inStock: true,
    isNew: false,
    discount: null,
    specifications: {
      frameSize: ["S", "M"],
      frameMaterial: "Steel",
      suspension: "Front",
      wheelSize: 27.5,
      speeds: 6,
      weight: 14.9,
      brakeType: "V-Brake",
    },
    features: [
      "Ergonomic handlebars",
      "Integrated kickstand",
      "Front suspension for comfort",
      "Durable frame design",
    ],
    colors: [
      {
        name: "Pearl White",
        hex: "#FFFFFF",
        inStock: true,
      },
      {
        name: "Urban Gray",
        hex: "#757575",
        inStock: true,
      },
    ],
    images: [
      "https://cdn1.ozone.ru/s3/multimedia-1-d/6991008493.jpg",
      "https://avatars.mds.yandex.net/i?id=de569a809517719ed2c4964ed8a68b57_l-5384857-images-thumbs&n=13",
    ],
    description:
      "The City Voyager CV500 is perfect for urban explorers, offering style, comfort, and practicality.",
    category: ["city", "commuter", "stylish"],
  },
  {
    id: "b009",
    name: "Road Champion RC1000",
    type: "city",
    brand: "SpeedTech",
    price: 129999,
    oldPrice: 219999,
    rating: 4.8,
    reviews: 92,
    inStock: true,
    isNew: true,
    discount: 9,
    specifications: {
      frameSize: ["M", "L", "XL"],
      frameMaterial: "Carbon Fiber",
      suspension: "None",
      wheelSize: 28,
      speeds: 24,
      weight: 7.9,
      brakeType: "Disc",
    },
    features: [
      "Ultra-light carbon frame",
      "Professional-grade components",
      "Aerodynamic build",
      "High-performance tires",
    ],
    colors: [
      {
        name: "Jet Black",
        hex: "#000000",
        inStock: true,
      },
      {
        name: "Racing Yellow",
        hex: "#FFEB3B",
        inStock: false,
      },
    ],
    images: [
      "https://img.alicdn.com/imgextra/i1/2298258425/O1CN012C6hKDC3GSj6VnC_!!2298258425.png",
      "https://avatars.mds.yandex.net/i?id=7b6e97bb90c7e6a718d5a42c928b593b_l-5317329-images-thumbs&n=13",
    ],
    description:
      "The Road Champion RC1000 is engineered for speed and precision, ideal for professional and competitive cyclists.",
    category: ["road", "premium", "professional"],
  },
];

const categories: Category[] = [
  {
    id: "cat1",
    name: "Mountain Bikes",
    slug: "mountain",
    description: "Bikes for off-road adventures",
    image: "/images/categories/mountain.jpg",
  },
  {
    id: "cat2",
    name: "Road Bikes",
    slug: "road",
    description: "Speed and efficiency for paved roads",
    image: "/images/categories/road.jpg",
  },
  {
    id: "cat3",
    name: "City Bikes",
    slug: "city",
    description: "Comfortable bikes for urban riding",
    image: "/images/categories/city.jpg",
  },
];

const brands: Brand[] = [
  {
    id: "br1",
    name: "TrekStar",
    country: "USA",
    logo: "/images/brands/trekstar.png",
  },
  {
    id: "br2",
    name: "UrbanRide",
    country: "Germany",
    logo: "/images/brands/urbanride.png",
  },
  {
    id: "br3",
    name: "SpeedTech",
    country: "Italy",
    logo: "/images/brands/speedtech.png",
  },
];

const filters: FiltersApi = {
  types: ["mountain", "road", "city", "hybrid", "electric"],
  frameSizes: ["XS", "S", "M", "L", "XL"],
  priceRanges: [
    { id: 1, name: "До 50 000 ₽", min: 0, max: 50000 },
    { id: 2, name: "50 000 ₽ - 100 000 ₽", min: 50000, max: 100000 },
    { id: 3, name: "100 000 ₽ - 150 000 ₽", min: 100000, max: 150000 },
    { id: 4, name: "Более 150 000 ₽", min: 150000, max: Infinity },
  ],
  wheelSizes: [26, 27.5, 28, 29],
  colors: [
    { name: "Черный", hex: "#000000" },
    { name: "Белый", hex: "#FFFFFF" },
    { name: "Красный", hex: "#FF0000" },
    { name: "Синий", hex: "#0000FF" },
    { name: "Зеленый", hex: "#008000" },
  ],
};

const promotions: Promotion[] = [
  {
    id: "promo1",
    code: "SUMMER2023",
    discount: 15,
    minAmount: 50000,
    expiryDate: "2023-08-31",
    description: "Летняя скидка 15% на все велосипеды",
  },
  {
    id: "promo2",
    code: "NEWUSER",
    discount: 10,
    minAmount: 0,
    expiryDate: null,
    description: "Скидка 10% на первый заказ",
  },
];

export { bikeProducts, categories, brands, filters, promotions };
