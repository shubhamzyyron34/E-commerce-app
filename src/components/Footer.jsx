import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-10 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md text-center md:text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Join our community</h3>
              <p className="text-gray-500 text-sm">
                Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
              </p>
            </div>
            <div className="w-full max-w-md">
              <form className="relative group" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-white border border-gray-300 rounded-full py-4 px-6 pr-32 text-sm outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
                />
                <button className="absolute right-2 top-2 bottom-2 bg-black text-white px-6 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-blue-600 transition-colors flex items-center gap-2">
                  Join <ArrowRight size={14} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      
      <div className="container mx-auto px-4 lg:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12">
          
         
          <div className="col-span-2 lg:col-span-2">
            <div className="mb-6">
              <a href="/" className="text-xl font-black tracking-tight text-gray-900">
                STORE<span className="text-blue-600">NAME</span>
              </a>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-xs">
              Redefining your shopping experience with curated collections and premium quality essentials delivered to your door.
            </p>
            <div className="flex space-x-5 text-gray-400">
              <a href="#" className="hover:text-blue-600 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-blue-600 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-blue-600 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-blue-600 transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-6">Shop</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="/shop" className="hover:text-black transition-colors">All Products</a></li>
              <li><a href="/new" className="hover:text-black transition-colors">New Arrivals</a></li>
              <li><a href="/featured" className="hover:text-black transition-colors">Featured</a></li>
              <li><a href="/sale" className="hover:text-rose-500 transition-colors font-medium">Sale</a></li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="/faq" className="hover:text-black transition-colors">Shipping Policy</a></li>
              <li><a href="/returns" className="hover:text-black transition-colors">Returns & Exchanges</a></li>
              <li><a href="/track" className="hover:text-black transition-colors">Track Order</a></li>
              <li><a href="/contact" className="hover:text-black transition-colors">Contact Us</a></li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="/about" className="hover:text-black transition-colors">Our Story</a></li>
              <li><a href="/sustainability" className="hover:text-black transition-colors">Sustainability</a></li>
              <li><a href="/careers" className="hover:text-black transition-colors">Careers</a></li>
              <li><a href="/blog" className="hover:text-black transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>
      </div>

     
      <div className="bg-white py-8 border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-[12px] text-gray-400 font-medium">
              © {currentYear} STORENAME Global Inc. All rights reserved.
            </div>
            
            
            <div className="flex items-center space-x-4 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
              <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center text-[8px] font-bold">VISA</div>
              <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center text-[8px] font-bold">AMEX</div>
              <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center text-[8px] font-bold">PAYPAL</div>
              <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center text-[8px] font-bold">APPLE</div>
            </div>

            <div className="flex items-center space-x-6 text-[12px] text-gray-400 font-medium">
              <a href="/privacy" className="hover:text-black">Privacy Policy</a>
              <a href="/terms" className="hover:text-black">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;