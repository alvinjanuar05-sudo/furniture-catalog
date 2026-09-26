export type Category = 'all' | 'living' | 'dining' | 'bedroom' | 'lighting' | 'accent';

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  rating: number;
  image: string;
  gallery?: string[];
  description: string;
  dimensions: {
    width: string;
    depth: string;
    height: string;
  };
  materials: string[];
  finishOptions?: string[];
  inStock: boolean;
  isFeatured?: boolean;
}

export interface StudioInfo {
  name: string;
  tagline: string;
  description: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  instagram: string;
  openingHours: string;
}