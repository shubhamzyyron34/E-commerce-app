import React from "react";
import { ArrowRight } from "lucide-react";

const Banner = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
          {/* Background Glow */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-pink-300/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 grid lg:grid-cols-2 items-center gap-12 p-8 md:p-12 lg:p-16">
            {/* Left Content */}
            <div className="text-white space-y-6">
              {/* Badge */}
              <span className="inline-block bg-white/20 backdrop-blur-md text-sm font-medium px-4 py-1 rounded-full border border-white/20">
                Limited Time Offer 
              </span>

              {/* Heading */}
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Summer Sale Up To
                <span className="block text-yellow-300">50% OFF</span>
              </h2>

              {/* Description */}
              <p className="text-white/80 text-lg max-w-lg">
                Refresh your wardrobe with trending styles, premium quality, and
                unbeatable prices this season.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="/sale"
                  className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition"
                >
                  Shop Sale
                  <ArrowRight size={18} />
                </a>

                <a
                  href="/new"
                  className="inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 px-6 py-3 rounded-full font-semibold transition"
                >
                  Explore Collection
                </a>
              </div>
            </div>

            <div className="relative flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b"
                alt="Sale Banner"
                className="relative z-10 w-full max-w-md rounded-3xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
