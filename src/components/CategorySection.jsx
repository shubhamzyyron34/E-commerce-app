import React from 'react';

const categories = [
  {
    id: 1,
    name: 'Men Fashion',
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
    itemCount: '120+ Items',
  },
  {
    id: 2,
    name: 'Women Fashion',
    image:
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c',
    itemCount: '150+ Items',
  },
  {
    id: 3,
    name: 'Sneakers',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    itemCount: '80+ Items',
  },
  {
    id: 4,
    name: 'Accessories',
    image:
      'https://images.unsplash.com/photo-1523170335258-f5ed11844a49',
    itemCount: '60+ Items',
  },
];

const CategorySection = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Categories
            </p>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
              Shop By Category
            </h2>
          </div>

          <a
            href="/shop"
            className="hidden md:inline-block text-blue-600 hover:text-blue-700 font-medium"
          >
            View All →
          </a>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {categories.map((category) => (
            <a
              key={category.id}
              href={`/category/${category.name.toLowerCase()}`}
              className="group relative overflow-hidden rounded-3xl bg-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300"
            >
              
              {/* Image */}
              <div className="h-[350px] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                
                <p className="text-sm opacity-80 mb-1">
                  {category.itemCount}
                </p>

                <h3 className="text-2xl font-bold">
                  {category.name}
                </h3>

                <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium">
                  Shop Now
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-8 text-center md:hidden">
          <a
            href="/shop"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition"
          >
            View All Categories
          </a>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;