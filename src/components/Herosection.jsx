import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            
            {/* Small Tag */}
            <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-1 rounded-full">
              New Collection 2026
            </span>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Upgrade Your
              <span className="text-blue-600"> Style </span>
              This Season
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg max-w-lg">
              Discover premium fashion, trending accessories, and exclusive deals
              crafted for modern lifestyles.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              
              <a
                href="/shop"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition"
              >
                Shop Now
                <ArrowRight size={18} />
              </a>

              <a
                href="/new"
                className="border border-gray-300 hover:border-blue-600 hover:text-blue-600 px-6 py-3 rounded-full font-medium transition"
              >
                Explore New Arrivals
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">10K+</h3>
                <p className="text-gray-500 text-sm">Happy Customers</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900">500+</h3>
                <p className="text-gray-500 text-sm">Premium Products</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900">24/7</h3>
                <p className="text-gray-500 text-sm">Customer Support</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            
            {/* Background Blur */}
            <div className="absolute inset-0 bg-blue-200 blur-3xl opacity-30 rounded-full"></div>

            {/* Hero Image */}
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
              alt="Fashion Collection"
              className="relative z-10 w-full max-w-lg mx-auto rounded-3xl shadow-2xl object-cover"
            />


          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;