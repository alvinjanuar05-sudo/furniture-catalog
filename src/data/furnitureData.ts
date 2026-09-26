import cat1 from '../assets/images/img_cat/cat_1.svg';
import cat2 from '../assets/images/img_cat/cat_2.svg';
import cat3 from '../assets/images/img_cat/cat_3.svg';
import cat4 from '../assets/images/img_cat/cat_4.svg';
import cat5 from '../assets/images/img_cat/cat_5.svg';

export type Category = 'all' | 'living' | 'dining' | 'bedroom' | 'lighting' | 'accent' | 'decor';

export interface Product {
  id: string;
  name: string;
  designer: string;
  category: Category;
  price: number;
  rating: number;
  image: string;
  description: string;
  dimensions: {
    width: string;
    depth: string;
    height: string;
  };
  materials: string[];
  inStock: boolean;
  isFeatured?: boolean;
}

export interface StudioService {
  number: string;
  title: string;
  description: string;
}

export interface StudioInfo {
  name: string;
  tagline: string;
  description: string;
  address: string;
  mapsEmbedUrl: string;
  mapsUrl: string;
  phone: string;
  whatsapp: string;
  email: string;
  instagram: string;
  openingHours: string;
}

export const STUDIO_DATA: StudioInfo = {
  name: 'FORMA',
  tagline: 'MODERN DESIGN FOR EVERY HOME',
  description: 'An independent interior design studio and furniture workshop delivering contemporary aesthetics, comfort, and uncompromising quality.',
  address: 'Jl. Ir. H. Juanda No. 128, Bandung, West Java, Indonesia',
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.026466986503!2d107.60838187587425!3d-6.887420467397759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e65a6b0c360b%3A0x6b107e0c4b2b678!2sJl.%20Ir.%20H.%20Juanda%20No.128%2C%20Lebakgde%2C%20Kecamatan%20Coblong%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040132!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid',
  mapsUrl: 'https://maps.google.com/?q=Jl.+Ir.+H.+Juanda+No.+128,+Bandung',
  phone: '+62 821-1234-5678',
  whatsapp: 'https://wa.me/6282112345678?text=Hello%20FORMA%20Studio,%20I%20would%20like%20to%20consult%20about%20interior%20design',
  email: 'hello@decorstudio.co.id',
  instagram: 'https://instagram.com/decorstudio',
  openingHours: 'Monday – Saturday: 09:00 AM – 06:00 PM (GMT+7)',
};

export const STUDIO_SERVICES: StudioService[] = [
  {
    number: '01',
    title: 'Sketching & Conceptual',
    description: 'Initial design based on visual ideation and 2D/3D layouts to understand your needs and spatial flow.',
  },
  {
    number: '02',
    title: 'Space Planning',
    description: 'In-depth analysis of natural light, ventilation, and interior color scheme selections.',
  },
  {
    number: '03',
    title: 'Custom Furnishing',
    description: 'Bespoke furniture crafting using high-precision solid timber and premium materials.',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'furn-01',
    name: 'Blue Chair',
    designer: 'By Forma',
    category: 'living',
    price: 485.00,
    rating: 4.9,
    image: cat1, // <--- Memakai cat_1.svg
    description: 'Ergonomic curved wooden chair featuring exclusive leather upholstery.',
    dimensions: { width: '78 cm', depth: '82 cm', height: '75 cm' },
    materials: ['Solid Wood', 'Leather Seat'],
    inStock: true,
    isFeatured: true,
  },
  {
    id: 'furn-02',
    name: 'Brown Chair',
    designer: 'By Forma',
    category: 'living',
    price: 890.00,
    rating: 5.0,
    image: cat2, // <--- Memakai cat_2.svg
    description: 'Ergonomic curved wooden chair featuring exclusive leather upholstery.',
    dimensions: { width: '78 cm', depth: '82 cm', height: '75 cm' },
    materials: ['Solid Wood', 'Leather Seat'],
    inStock: true,
    isFeatured: true,
  },
  {
    id: 'furn-03',
    name: 'Green Chair',
    designer: 'By Forma',
    category: 'living',
    price: 125.00,
    rating: 4.8,
    image: cat3, // <--- Memakai cat_3.svg
    description: 'Ergonomic curved wooden chair featuring exclusive leather upholstery.',
    dimensions: { width: '78 cm', depth: '82 cm', height: '75 cm' },
    materials: ['Solid Wood', 'Leather Seat'],
    inStock: true,
    isFeatured: true,
  },
  {
    id: 'furn-04',
    name: 'Silver Chair',
    designer: 'By Forma',
    category: 'living',
    price: 345.00,
    rating: 4.9,
    image: cat4, // <--- Memakai cat_4.svg
    description: 'Ergonomic curved wooden chair featuring exclusive leather upholstery.',
    dimensions: { width: '78 cm', depth: '82 cm', height: '75 cm' },
    materials: ['Solid Wood', 'Leather Seat'],
    inStock: true,
    isFeatured: true,
  },
  {
    id: 'furn-05',
    name: 'Yellow Chair',
    designer: 'By Forma',
    category: 'living',
    price: 215.00,
    rating: 4.7,
    image: cat5, // <--- Memakai cat_5.svg
    description: 'Ergonomic curved wooden chair featuring exclusive leather upholstery.',
    dimensions: { width: '78 cm', depth: '82 cm', height: '75 cm' },
    materials: ['Solid Wood', 'Leather Seat'],
    inStock: true,
    isFeatured: true,
  },
];