import type { EntryFieldTypes, EntrySkeletonType, Asset } from 'contentful';

export interface ProductFields {
  name: EntryFieldTypes.Text;
  slug: EntryFieldTypes.Text;
  price: EntryFieldTypes.Number;
  description: EntryFieldTypes.RichText;
  shortDescription: EntryFieldTypes.Text;
  category: EntryFieldTypes.Text;
  volume: EntryFieldTypes.Text;
  notes: EntryFieldTypes.Text;
  image: EntryFieldTypes.Text;
  gallery: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
  featured: EntryFieldTypes.Text;
  inStock: EntryFieldTypes.Boolean;
}

export type ProductSkeleton = EntrySkeletonType<ProductFields, "parfumes">;

// Contentful Product type (Resolved)
export interface ContentfulProduct {
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
    contentType: {
      sys: {
        id: "parfumes";
      };
    };
  };
  fields: {
    name: string;
    slug?: string;
    price: number;
    description: any; // Using any to avoid strict Document type issues without installing extra packages, but effectively it is a Document
    shortDescription?: string;
    category?: string;
    volume?: string;
    notes?: string;
    image: string; // Direct URL string
    gallery?: Asset[];
    featured?: string; // "Yes" | "No"
    inStock?: boolean;
  };
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  description: string;
  shortDescription: string;
  category: string;
  volume: string;
  notes: string;
  image: string;
  gallery: string[];
  featured: boolean;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  createdAt: string;
  shippingAddress: string;
}

export interface WishlistItem {
  productId: string;
  addedAt: string;
}
