export interface Filters {
  type: string;
  brand: string;
  priceRange: { min: number; max: number };
  frameSize: string;
  inStock: boolean;
}

export type FilterKeys = keyof Filters;

export type Theme = "light" | "dark";

export interface Product {
  id: string;
  name: string;
  type: string;
  brand: string;
  price: number;
  oldPrice: number | null;
  rating: number;
  reviews: number;
  inStock: boolean;
  isNew: boolean;
  discount: number | null;
  specifications: {
    frameSize: string[];
    frameMaterial: string;
    suspension: string;
    wheelSize: number;
    speeds: number;
    weight: number;
    brakeType: string;
  };
  features: string[];
  colors: {
    name: string;
    hex: string;
    inStock: boolean;
  }[];
  images: string[];
  description: string;
  category: string[];
}

// Тип для категории
export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export interface CardsProps {
  products: Product[];
}

export interface CardProps {
  name: string; // Название карточки
  description: string; // Описание
  price: number | string; // Цена (если она может быть строкой или числом)
  src: string; // Ссылка на изображение
}

export interface SearchProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  theme: Theme;
}
// Тип для бренда
export interface Brand {
  id: string;
  name: string;
  country: string;
  logo: string;
}

// Тип для диапазона цен
export interface PriceRange {
  id: number;
  name: string;
  min: number;
  max: number;
}

// Тип для цвета
export interface Color {
  name: string;
  hex: string;
}

// Тип для фильтров
export interface FiltersApi {
  types: string[];
  frameSizes: string[];
  priceRanges: PriceRange[];
  wheelSizes: number[];
  colors: Color[];
}

// Тип для акции/промокода
export interface Promotion {
  id: string;
  code: string;
  discount: number; // в процентах
  minAmount: number; // минимальная сумма для применения
  expiryDate: string | null; // null, если срок действия неограничен
  description: string;
}
