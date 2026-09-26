import React, { useState, useRef, useEffect } from 'react';
import { Search, ShoppingCart, X, ArrowRight, Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  material?: string;
}

interface NavbarProps {
  onNavigateToCatalog?: () => void;
  onNavigateToHome?: () => void;
  cartCount?: number;
  cartItems?: CartItem[];
  onUpdateQuantity?: (id: string, delta: number) => void;
  onRemoveItem?: (id: string) => void;
  onSearchSubmit?: (query: string) => void;
  isCatalogView?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigateToHome,
  onNavigateToCatalog,
  cartCount = 0,
  cartItems = [],
  onUpdateQuantity,
  onRemoveItem,
  onSearchSubmit,
  isCatalogView = false,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // Listener scroll untuk memicu gradasi bayangan
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isSearchExpanded) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isSearchExpanded]);

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (searchQuery.trim()) {
      if (onSearchSubmit) onSearchSubmit(searchQuery);
      if (onNavigateToCatalog) onNavigateToCatalog();
      window.scrollTo(0, 0);
      setIsSearchExpanded(false);
    }
  };

  const handleCheckoutWA = () => {
    const messageList = cartItems
      .map((item) => `- ${item.name} (${item.quantity}x) : $${(item.price * item.quantity).toFixed(2)}`)
      .join('%0A');
    const text = `Hello FORMA Studio, I would like to order the following items:%0A%0A${messageList}%0A%0ATotal: $${totalPrice.toFixed(2)}`;
    window.open(`https://wa.me/6282112345678?text=${text}`, '_blank');
  };

  const handleNavClick = (sectionId?: string) => {
    setIsMenuOpen(false);
    
    if (isCatalogView && sectionId !== 'catalog') {
      if (onNavigateToHome) onNavigateToHome();
      if (sectionId && sectionId !== 'home') {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo(0, 0);
      }
      return;
    }

    if (sectionId === 'catalog') {
      if (onNavigateToCatalog) onNavigateToCatalog();
      window.scrollTo(0, 0);
    } else if (sectionId === 'home') {
      if (onNavigateToHome) onNavigateToHome();
      window.scrollTo(0, 0);
    } else if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* HEADER UTAMA: FULL TRANSPARAN TANPA BACKGROUND KOTAK */}
      <header className="fixed top-0 left-0 w-full z-50 bg-transparent pointer-events-none font-sans">
        
        {/* LAYER GRADASI SHADOW SAJA (MELELEH DARI ATAS KE BAWAH DENGAN WARNA TEMA #d8d8d8) */}
        <div
          className={`absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#d8d8d8] via-[#d8d8d8]/70 to-transparent pointer-events-none transition-opacity duration-300 -z-10 ${
            isScrolled ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12 relative">
          <div className="flex items-center justify-between h-16 relative">
            
            <div className="pointer-events-auto z-50">
              {isCatalogView ? (
                <button
                  onClick={onNavigateToHome}
                  className="bg-stone-950 hover:bg-[#ff4500] text-white text-xs font-normal px-4 py-2 rounded-full inline-flex items-center gap-1.5 transition-colors duration-300 cursor-pointer shadow-md"
                >
                  <ArrowLeft size={14} />
                  <span>Back</span>
                </button>
              ) : (
                <button
                  onClick={toggleMenu}
                  aria-label="Toggle Menu Navigation"
                  className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer shadow-sm ${
                    isMenuOpen
                      ? 'bg-[#f95738] border-2 border-[#f95738]'
                      : 'bg-transparent border-2 border-[#f95738] hover:bg-[#f95738]/10'
                  }`}
                >
                  <div className="w-5 h-4 flex flex-col justify-center items-center relative">
                    <span
                      className={`w-5 h-[2px] rounded-full transition-all duration-300 transform absolute ${
                        isMenuOpen
                          ? 'bg-white translate-y-0 rotate-45'
                          : 'bg-stone-900 -translate-y-[3.5px] rotate-0'
                      }`}
                    />
                    <span
                      className={`w-5 h-[2px] rounded-full transition-all duration-300 transform absolute ${
                        isMenuOpen
                          ? 'bg-white translate-y-0 -rotate-45'
                          : 'bg-stone-900 translate-y-[3.5px] rotate-0'
                      }`}
                    />
                  </div>
                </button>
              )}
            </div>

            <button
              onClick={() => handleNavClick('home')}
              className="pointer-events-auto absolute left-1/2 -translate-x-1/2 font-normal text-lg tracking-wider text-stone-950 uppercase focus:outline-none cursor-pointer"
            >
              FORMA
            </button>

            <div className="pointer-events-auto flex items-center gap-3 text-stone-900">
              <div className="relative flex items-center">
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden flex items-center shrink-0 ${
                    isSearchExpanded ? 'w-0 opacity-0 pointer-events-none' : 'w-9 opacity-100'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setIsSearchExpanded(true)}
                    aria-label="Search Products"
                    className="p-1.5 hover:text-[#f95738] transition-colors rounded-full hover:bg-stone-300/40 cursor-pointer shrink-0"
                  >
                    <Search size={19} strokeWidth={2} />
                  </button>
                </div>

                <form
                  onSubmit={handleSearchSubmit}
                  className={`overflow-hidden transition-all duration-500 ease-in-out flex items-center relative rounded-full ${
                    isSearchExpanded
                      ? 'w-48 sm:w-64 opacity-100 border border-stone-300/80 bg-white/95 backdrop-blur-md shadow-sm py-1.5 pl-4 pr-16'
                      : 'w-0 opacity-0 border-none p-0 pointer-events-none'
                  }`}
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search furniture..."
                    className="w-full bg-transparent text-stone-900 text-xs font-normal focus:outline-none whitespace-nowrap"
                  />
                  <button
                    type="submit"
                    className="absolute right-7 text-stone-400 hover:text-[#f95738] p-1 transition-colors cursor-pointer shrink-0"
                  >
                    <Search size={14} />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSearchExpanded(false);
                      setSearchQuery('');
                    }}
                    className="absolute right-2 text-stone-400 hover:text-stone-900 p-1 rounded-full transition-colors cursor-pointer shrink-0"
                  >
                    <X size={14} />
                  </button>
                </form>
              </div>

              <button
                onClick={() => setIsCartOpen(true)}
                aria-label="Shopping Cart"
                className="p-1.5 hover:text-[#f95738] transition-colors relative rounded-full hover:bg-stone-300/40 cursor-pointer shrink-0"
              >
                <ShoppingCart size={19} strokeWidth={2} />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-[#f95738] text-white text-[9px] font-normal w-3.5 h-3.5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

          </div>
        </div>
      </header>

      <div
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 bg-black/20 backdrop-blur-xs z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      <aside
        className={`fixed top-0 left-0 h-full w-80 sm:w-96 bg-white z-40 shadow-2xl transition-transform duration-300 ease-in-out transform flex flex-col justify-between pt-28 pb-10 px-8 sm:px-10 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="flex flex-col w-full font-sans pt-2">
          <button
            onClick={() => handleNavClick('home')}
            className="w-full text-left py-5 text-lg font-normal tracking-wide text-stone-900 hover:text-[#f95738] transition-colors border-b border-stone-200 cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className="w-full text-left py-5 text-lg font-normal tracking-wide text-stone-900 hover:text-[#f95738] transition-colors border-b border-stone-200 cursor-pointer"
          >
            About Studio
          </button>
          <button
            onClick={() => handleNavClick('catalog')}
            className="w-full text-left py-5 text-lg font-normal tracking-wide text-stone-900 hover:text-[#f95738] transition-colors border-b border-stone-200 cursor-pointer"
          >
            Collections Directory
          </button>
          <button
            onClick={() => handleNavClick('philosophy')}
            className="w-full text-left py-5 text-lg font-normal tracking-wide text-stone-900 hover:text-[#f95738] transition-colors border-b border-stone-200 cursor-pointer"
          >
            Design Philosophy
          </button>
          <button
            onClick={() => handleNavClick('location')}
            className="w-full text-left py-5 text-lg font-normal tracking-wide text-stone-900 hover:text-[#f95738] transition-colors border-b border-stone-200 cursor-pointer"
          >
            Showroom Location
          </button>
        </nav>

        <div className="pt-6 space-y-2 font-sans text-xs font-normal text-stone-900">
          <p className="hover:text-[#f95738] transition-colors cursor-pointer">Email: hello@decorstudio.co.id</p>
          <p className="hover:text-[#f95738] transition-colors cursor-pointer">WhatsApp: +62 821-1234-5678</p>
          <p className="hover:text-[#f95738] transition-colors font-normal cursor-pointer">Instagram: @decorstudio</p>
        </div>
      </aside>

      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden font-sans">
          <div
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0 bg-stone-950/50 backdrop-blur-xs transition-opacity duration-300"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
              <div className="p-6 border-b border-stone-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="text-[#f95738]" size={20} />
                  <h2 className="text-lg font-normal text-stone-900 tracking-wider">
                    Shopping Cart ({cartCount})
                  </h2>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 text-stone-400 hover:text-stone-900 rounded-full hover:bg-stone-100 transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cartItems.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                    <ShoppingBag size={48} className="text-stone-300" strokeWidth={1} />
                    <p className="text-stone-500 text-sm font-normal">
                      Your shopping cart is currently empty.
                    </p>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="bg-[#f95738] hover:bg-[#e04526] text-white text-xs font-normal tracking-wider px-6 py-2.5 rounded-full transition-colors cursor-pointer"
                    >
                      Start Exploring
                    </button>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 pb-6 border-b border-stone-100 items-center justify-between"
                    >
                      {/* BINGKAI KARTU KERANJANG: FULL BLEED OBJECT-COVER TANPA PADDING */}
                      <div className="w-20 h-20 bg-stone-100 rounded-xl overflow-hidden shrink-0 border border-stone-200 relative">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover" 
                        />
                      </div>

                      <div className="flex-1 space-y-1 text-left">
                        <h4 className="text-sm font-normal text-stone-900 leading-tight">
                          {item.name}
                        </h4>
                        {item.material && <p className="text-xs text-stone-400 font-normal">{item.material}</p>}
                        <p className="text-xs font-normal text-[#f95738]">
                          ${item.price.toFixed(2)}
                        </p>

                        <div className="flex items-center gap-3 pt-1">
                          <div className="flex items-center border border-stone-300 rounded-lg overflow-hidden">
                            <button
                              onClick={() => onUpdateQuantity && onUpdateQuantity(item.id, -1)}
                              className="p-1 hover:bg-stone-100 text-stone-600 cursor-pointer"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="px-3 text-xs font-normal text-stone-800">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity && onUpdateQuantity(item.id, 1)}
                              className="p-1 hover:bg-stone-100 text-stone-600 cursor-pointer"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => onRemoveItem && onRemoveItem(item.id)}
                        className="p-2 text-stone-400 hover:text-red-500 transition-colors cursor-pointer"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="p-6 border-t border-stone-200 bg-stone-50 space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-stone-600 font-normal">Subtotal</span>
                    <span className="text-stone-950 font-normal text-base">
                      ${totalPrice.toFixed(2)}
                    </span>
                  </div>

                  <button
                    onClick={handleCheckoutWA}
                    className="w-full bg-[#f95738] hover:bg-[#e04526] text-white text-xs font-normal tracking-wider py-3.5 rounded-full flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
                  >
                    <span>Checkout via WhatsApp</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;