const bikeProducts = [
  {
    id: "b001",
    name: "Mountain Explorer X500",
    type: "mountain",
    brand: "TrekStar",
    price: 89999,
    oldPrice: 99999,
    rating: 4.8,
    reviews: 124,
    inStock: true,
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
    type: "city",
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
    images: ["https://avatars.mds.yandex.net/get-mpic/4415357/img_id5008804448296670028.jpeg/orig", "/images/bikes/c300-red-2.jpg"],
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
    images: ["https://avatars.mds.yandex.net/i?id=29c7dd966aa85cb5434ac940458164ed_l-5192538-images-thumbs&n=13", "/images/bikes/r750-red-2.jpg"],
    description:
      "Professional-grade road bike for serious cyclists. Lightweight carbon frame and premium components.",
    category: ["road", "premium", "professional"],
  },
];

const categories = [
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

const brands = [
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

const filters = {
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

const promotions = [
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
// const bikeProducts = [
//   {
//     id: "b001",
//     name: "Mountain Explorer X500",
//     type: "mountain",
//     brand: "TrekStar",
//     price: 89999,
//     oldPrice: 99999,
//     rating: 4.8,
//     reviews: 124,
//     inStock: true,
//     isNew: true,
//     discount: 10,
//     specifications: {
//       frameSize: ["S", "M", "L", "XL"],
//       frameMaterial: "Aluminum",
//       suspension: "Front",
//       wheelSize: 29,
//       speeds: 24,
//       weight: 13.5,
//       brakeType: "Hydraulic Disc",
//     },
//     features: [
//       "Lightweight frame",
//       "Shimano gears",
//       "Hydraulic brakes",
//       "Front suspension",
//     ],
//     colors: [
//       {
//         name: "Metallic Blue",
//         hex: "#2196F3",
//         inStock: true,
//       },
//       {
//         name: "Matte Black",
//         hex: "#212121",
//         inStock: true,
//       },
//       {
//         name: "Forest Green",
//         hex: "#2E7D32",
//         inStock: false,
//       },
//     ],
//     images: [
//       "/images/bikes/x500-blue-1.jpg",
//       "/images/bikes/x500-blue-2.jpg",
//       "/images/bikes/x500-blue-3.jpg",
//     ],
//     description:
//       "Perfect for mountain trails and rough terrain, the Mountain Explorer X500 offers superior control and comfort.",
//     category: ["mountain", "bestseller", "premium"],
//   },
//   {
//     id: "b002",
//     name: "City Cruiser C300",
//     type: "city",
//     brand: "UrbanRide",
//     price: 45999,
//     oldPrice: null,
//     rating: 4.5,
//     reviews: 89,
//     inStock: true,
//     isNew: false,
//     discount: null,
//     specifications: {
//       frameSize: ["M", "L"],
//       frameMaterial: "Steel",
//       suspension: "None",
//       wheelSize: 28,
//       speeds: 7,
//       weight: 14.2,
//       brakeType: "V-Brake",
//     },
//     features: [
//       "Comfortable saddle",
//       "Rear rack",
//       "Front basket mount",
//       "LED lights",
//     ],
//     colors: [
//       {
//         name: "Classic Red",
//         hex: "#C62828",
//         inStock: true,
//       },
//       {
//         name: "Pearl White",
//         hex: "#FFFFFF",
//         inStock: true,
//       },
//     ],
//     images: ["/images/bikes/c300-red-1.jpg", "/images/bikes/c300-red-2.jpg"],
//     description:
//       "The perfect companion for city commuting, featuring comfortable riding position and practical accessories.",
//     category: ["city", "commuter"],
//   },
//   {
//     id: "b003",
//     name: "Road Master R750",
//     type: "road",
//     brand: "SpeedTech",
//     price: 159999,
//     oldPrice: 179999,
//     rating: 4.9,
//     reviews: 67,
//     inStock: true,
//     isNew: true,
//     discount: 11,
//     specifications: {
//       frameSize: ["S", "M", "L"],
//       frameMaterial: "Carbon Fiber",
//       suspension: "None",
//       wheelSize: 28,
//       speeds: 22,
//       weight: 8.1,
//       brakeType: "Disc",
//     },
//     features: [
//       "Carbon frame",
//       "Ultegra groupset",
//       "Aero design",
//       "Carbon wheels",
//     ],
//     colors: [
//       {
//         name: "Racing Red",
//         hex: "#FF1744",
//         inStock: true,
//       },
//       {
//         name: "Stealth Black",
//         hex: "#000000",
//         inStock: true,
//       },
//     ],
//     images: ["/images/bikes/r750-red-1.jpg", "/images/bikes/r750-red-2.jpg"],
//     description:
//       "Professional-grade road bike for serious cyclists. Lightweight carbon frame and premium components.",
//     category: ["road", "premium", "professional"],
//   },
// ];

// const categories = [
//   {
//     id: "cat1",
//     name: "Mountain Bikes",
//     slug: "mountain",
//     description: "Bikes for off-road adventures",
//     image: "/images/categories/mountain.jpg",
//   },
//   {
//     id: "cat2",
//     name: "Road Bikes",
//     slug: "road",
//     description: "Speed and efficiency for paved roads",
//     image: "/images/categories/road.jpg",
//   },
//   {
//     id: "cat3",
//     name: "City Bikes",
//     slug: "city",
//     description: "Comfortable bikes for urban riding",
//     image: "/images/categories/city.jpg",
//   },
// ];

// const brands = [
//   {
//     id: "br1",
//     name: "TrekStar",
//     country: "USA",
//     logo: "/images/brands/trekstar.png",
//   },
//   {
//     id: "br2",
//     name: "UrbanRide",
//     country: "Germany",
//     logo: "/images/brands/urbanride.png",
//   },
//   {
//     id: "br3",
//     name: "SpeedTech",
//     country: "Italy",
//     logo: "/images/brands/speedtech.png",
//   },
// ];

// const filters = {
//   types: ["mountain", "road", "city", "hybrid", "electric"],
//   frameSizes: ["XS", "S", "M", "L", "XL"],
//   priceRanges: [
//     { id: 1, name: "До 50 000 ₽", min: 0, max: 50000 },
//     { id: 2, name: "50 000 ₽ - 100 000 ₽", min: 50000, max: 100000 },
//     { id: 3, name: "100 000 ₽ - 150 000 ₽", min: 100000, max: 150000 },
//     { id: 4, name: "Более 150 000 ₽", min: 150000, max: Infinity },
//   ],
//   wheelSizes: [26, 27.5, 28, 29],
//   colors: [
//     { name: "Черный", hex: "#000000" },
//     { name: "Белый", hex: "#FFFFFF" },
//     { name: "Красный", hex: "#FF0000" },
//     { name: "Синий", hex: "#0000FF" },
//     { name: "Зеленый", hex: "#008000" },
//   ],
// };

// const promotions = [
//   {
//     id: "promo1",
//     code: "SUMMER2023",
//     discount: 15,
//     minAmount: 50000,
//     expiryDate: "2023-08-31",
//     description: "Летняя скидка 15% на все велосипеды",
//   },
//   {
//     id: "promo2",
//     code: "NEWUSER",
//     discount: 10,
//     minAmount: 0,
//     expiryDate: null,
//     description: "Скидка 10% на первый заказ",
//   },
// ];

// export { bikeProducts, categories, brands, filters, promotions };
