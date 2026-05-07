import React, { useState, useEffect } from "react";
import {
  Search,
  ShoppingCart,
  User,
  Heart,
  Menu,
} from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add shadow on scroll for that premium feel
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-white"
    }`}>
      {/* Top Utility Bar */}
      <div className="bg-zinc-900 text-white text-[11px] uppercase tracking-widest py-2 px-4 flex justify-center font-semibold">
        Free Shipping on Orders Over $50 • 30-Day Returns
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-8">
        
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <button className="p-2 -ml-2 md:hidden hover:bg-gray-100 rounded-full transition-colors">
            <Menu size={24} />
          </button>
          <h1 className="text-2xl font-black tracking-tighter text-zinc-900 cursor-pointer">
            SHOP<span className="text-indigo-600">EASE</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {["Home", "Shop", "Categories", "Deals"].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="relative text-sm font-semibold text-zinc-600 hover:text-black transition-colors group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Modern Search Bar */}
        <div className="hidden lg:flex flex-1 max-w-md items-center bg-gray-100 border-none rounded-full px-4 py-2 group focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:bg-white transition-all">
          <Search size={18} className="text-gray-400 group-focus-within:text-indigo-600" />
          <input
            type="text"
            placeholder="Search for luxury watches"
            className="bg-transparent outline-none px-3 w-full text-sm placeholder:text-gray-400 text-zinc-700"
          />
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="p-2 text-zinc-700 hover:bg-gray-100 hover:text-red-500 rounded-full transition-all">
            <Heart size={22} />
          </button>
          
          <button className="p-2 text-zinc-700 hover:bg-gray-100 hover:text-indigo-600 rounded-full transition-all">
            <User size={22} />
          </button>
          
          <button className="relative p-2 text-zinc-700 hover:bg-gray-100 hover:text-green-600 rounded-full transition-all">
            <ShoppingCart size={22} />
            <span className="absolute top-1 right-1 bg-indigo-600 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full ring-2 ring-white">
              2
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;