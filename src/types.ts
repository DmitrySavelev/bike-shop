export interface Filters {
  type: string;
  brand: string;
  priceRange: { min: number; max: number };
  frameSize: string;
  inStock: boolean;
}

export type FilterKeys = keyof Filters;

export type Theme = "light" | "dark";

export interface CartContentProps {
  src: string;
  name: string;
  id: string;
  price: number;
}

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
  name: string;
  description: string;
  price: number;
  src: string;
  rating: number;
  isNew: boolean;
  id: string;
}

export interface SearchProps {
  filters: Filters;
  setSort: React.Dispatch<React.SetStateAction<string>>;
}

export interface Brand {
  id: string;
  name: string;
  country: string;
  logo: string;
}

export interface PriceRange {
  id: number;
  name: string;
  min: number;
  max: number;
}

export interface Color {
  name: string;
  hex: string;
}

export interface FiltersApi {
  types: string[];
  frameSizes: string[];
  priceRanges: PriceRange[];
  wheelSizes: number[];
  colors: Color[];
}

export interface Promotion {
  id: string;
  code: string;
  discount: number;
  minAmount: number;
  expiryDate: string | null;
  description: string;
}

export enum ThemeType {
  Light = "light",
  Dark = "dark",
}