import { useState } from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { Hero } from './components/home/Hero';
import { AboutStudio } from './components/home/AboutStudio';
import { FeaturedCollections } from './components/home/FeaturedCollections';
import { DesignPhilosophy } from './components/home/DesignPhilosophy';
import { LocationSection } from './components/home/LocationSection';
import { CategoryFilter } from './components/catalog/CategoryFilter';
import { ProductGrid } from './components/catalog/ProductGrid';
import { ProductModal } from './components/catalog/ProductModal';
import { Preloader } from './components/common/Preloader';
import { Container } from './components/ui/Container';
import { PRODUCTS } from './data/furnitureData';
import type { Category, Product } from './data/furnitureData';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  material?: string;
}

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'home' | 'catalog'>('home');
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // STATE KERANJANG BELANJA TERPUSAT
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const filteredProducts = PRODUCTS.filter((product) => {
    if (selectedCategory === 'all') return true;
    return product.category === selectedCategory;
  });

  const handleNavigateToCatalog = () => {
    setActiveTab('catalog');
    window.scrollTo(0, 0); // Scroll instan ke paling atas tanpa animasi meluncur
  };

  const handleNavigateToHome = () => {
    setActiveTab('home');
    window.scrollTo(0, 0); // Scroll instan ke paling atas tanpa animasi meluncur
  };

  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex((item) => item.id === product.id);

      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        const newItem: CartItem = {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: quantity,
          material: product.materials ? product.materials[0] : 'Solid Timber',
        };
        return [...prevItems, newItem];
      }
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="w-full min-h-screen bg-[#d8d8d8] text-stone-900 font-sans flex flex-col selection:bg-stone-900 selection:text-white overflow-x-hidden">
      
      {/* Preloader Screen */}
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      {/* Navbar Header */}
      <Navbar
        onNavigateToHome={handleNavigateToHome}
        onNavigateToCatalog={handleNavigateToCatalog}
        cartItems={cartItems}
        cartCount={cartCount}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        isCatalogView={activeTab === 'catalog'}
      />

      {/* Main View Area */}
      <main className="w-full flex-grow pt-16">
        {activeTab === 'home' ? (
          <>
            <Hero 
              onSelectProduct={setSelectedProduct}
              onExploreCatalog={handleNavigateToCatalog} 
              onAddToCart={handleAddToCart}
            />
            <AboutStudio />
            <FeaturedCollections
              onSelectProduct={setSelectedProduct}
              onNavigateToCatalog={handleNavigateToCatalog}
            />
            <DesignPhilosophy />
            <LocationSection />
          </>
        ) : (
          <section className="py-16 sm:py-24 font-sans bg-[#d8d8d8] w-full overflow-hidden">
            {/* Header Judul & Filter Kategori */}
            <Container>
              <div className="max-w-5xl mx-auto space-y-8">
                <div className="text-center space-y-3">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-stone-950 tracking-tight uppercase leading-none select-none pt-4">
                    COLLECTION DIRECTORY
                  </h1>
                  <p className="text-stone-700 text-xs sm:text-sm font-normal max-w-xl mx-auto leading-relaxed pt-1">
                    Explore our range of well-crafted wooden furniture and interior objects designed to bring warmth and timeless character to your home.
                  </p>
                </div>

                <div className="pt-2">
                  <CategoryFilter
                    activeCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                  />
                </div>
              </div>
            </Container>

            {/* Grid Produk Full Width */}
            <div className="w-full pt-8">
              <ProductGrid
                products={filteredProducts}
                onSelectProduct={setSelectedProduct}
              />
            </div>
          </section>
        )}
      </main>

      <Footer />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}

export default App;