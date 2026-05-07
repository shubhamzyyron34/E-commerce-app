import React, { useState } from 'react';
import { ShoppingCart, Search, User, Heart, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartCount = 3; 

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      
      <div className="bg-neutral-900 text-white text-[11px] font-medium tracking-widest uppercase py-2.5 text-center px-4">
        Free shipping on orders over ₹1500! <span className="ml-2 opacity-80 underline cursor-pointer hover:opacity-100">Details</span>
      </div>

      
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100/80 shadow-sm">
        <div className="container mx-auto px-4 lg:px-10 py-3.5">
          <div className="flex items-center justify-between gap-8">
            
            
            <button 
              className="lg:hidden p-2 -ml-2 text-gray-600 hover:text-black transition-colors" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>

            
            <div className="flex-shrink-0">
              <a href="/" className="group flex items-center gap-1">
                <div className="bg-blue-600 p-1.5 rounded-lg group-hover:rotate-6 transition-transform duration-300">
                  <div className="w-4 h-4 bg-white rounded-sm" />
                </div>
                <span className="text-xl font-black tracking-tight text-gray-900">
                  STORE<span className="text-blue-600">NAME</span>
                </span>
              </a>
            </div>

            
            <div className="hidden lg:flex items-center space-x-10 text-[13px] font-semibold uppercase tracking-wider text-gray-600">
              <a href="/shop" className="relative group hover:text-black transition-colors">
                Shop All
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </a>
              <a href="/new" className="relative group hover:text-black transition-colors">
                New Arrivals
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </a>
              <a href="/sale" className="text-rose-500 hover:text-rose-600 transition-colors">
                Sale
              </a>
            </div>

            
            <div className="hidden md:flex flex-grow max-w-sm relative group">
              <input
                type="text"
                placeholder="Search for items..."
                className="w-full bg-gray-50 border border-gray-200 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 rounded-xl py-2.5 px-11 text-sm outline-none transition-all duration-300"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors" size={18} strokeWidth={2} />
            </div>

            
            <div className="flex items-center space-x-2 sm:space-x-5">
              <a href="/profile" className="hidden sm:inline-flex p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-all">
                <User size={22} strokeWidth={1.5} />
              </a>
              <a href="/wishlist" className="hidden sm:inline-flex p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-all">
                <Heart size={22} strokeWidth={1.5} />
              </a>
              
              
              <a href="/cart" className="relative p-2 text-gray-700 hover:bg-gray-100 rounded-full transition-all">
                <ShoppingCart size={22} strokeWidth={1.5} />
                {cartCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 bg-blue-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-white">
                    {cartCount}
                  </span>
                )}
              </a>
            </div>
          </div>

          
          <div className="mt-4 md:hidden relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-gray-100 border-none rounded-xl py-3 px-11 text-sm focus:ring-2 focus:ring-blue-500/20"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out bg-white border-b ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-6 space-y-5">
          <a href="/shop" className="block text-base font-semibold text-gray-800 hover:text-blue-600 transition">Shop All</a>
          <a href="/new" className="block text-base font-semibold text-gray-800 hover:text-blue-600 transition">New Arrivals</a>
          <a href="/sale" className="block text-base font-semibold text-rose-500">Flash Sale</a>
          <div className="pt-4 border-t border-gray-100 flex gap-6">
            <a href="/profile" className="text-sm text-gray-500 flex items-center gap-2"><User size={18}/> Account</a>
            <a href="/wishlist" className="text-sm text-gray-500 flex items-center gap-2"><Heart size={18}/> Saved</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;