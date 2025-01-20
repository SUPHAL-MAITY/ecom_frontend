import React from 'react'
import { Clock, ShoppingCart, Truck, Shield, Star, ChevronRight } from 'lucide-react';

const NewEdition = () => {


    const reviews = [
        {
          name: "James Wilson",
          role: "Watch Enthusiast",
          content: "The craftsmanship of these timepieces is exceptional. I've been collecting watches for years, and these stand out for their quality.",
          rating: 5,
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200"
        },
        {
          name: "Sarah Chen",
          role: "Fashion Designer",
          content: "Elegant designs that perfectly balance modern trends with classic aesthetics. My go-to choice for both casual and formal occasions.",
          rating: 5,
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200"
        },
        {
          name: "Michael Brown",
          role: "Business Executive",
          content: "The attention to detail and precision in these watches is remarkable. Worth every penny.",
          rating: 5,
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200"
        }
      ];



    
  return (
    <>
     <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80"
            alt="Luxury watch background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
      

        {/* Hero Content */}
        <div className="relative z-10 h-[calc(100vh-88px)] flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Timeless Elegance on Your Wrist
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Discover our collection of luxury timepieces crafted with precision and style.
              </p>
              <button className="bg-white text-black px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2">
                <span>Shop Collection</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>



      {/* Featured Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Timepieces</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Classic Chronograph",
                price: "$1,299",
                image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80"
              },
              {
                name: "Elegant Gold",
                price: "$2,499",
                image: "https://images.unsplash.com/photo-1548171915-e79a380a2a4b?auto=format&fit=crop&q=80"
              },
              {
                name: "Modern Silver",
                price: "$1,899",
                image: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&q=80"
              }
            ].map((product, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                    <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                    <p className="text-gray-200">{product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


            {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-black/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">On all orders over $500</p>
            </div>
            <div className="text-center">
              <div className="bg-black/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2 Year Warranty</h3>
              <p className="text-gray-600">On all watches</p>
            </div>
            <div className="text-center">
              <div className="bg-black/5 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Certified authenticity</p>
            </div>
          </div>
        </div>
      </section>
      
         <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <img 
                    src={review.image} 
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold">{review.name}</h3>
                    <p className="text-gray-600 text-sm">{review.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700">{review.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Clock className="w-6 h-6" />
                <span className="text-xl font-bold">ChronoLux</span>
              </div>
              <p className="text-gray-400">Crafting timeless elegance since 1990</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Collections</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Men's Watches</a></li>
                <li><a href="#" className="hover:text-white">Women's Watches</a></li>
                <li><a href="#" className="hover:text-white">Limited Editions</a></li>
                <li><a href="#" className="hover:text-white">New Arrivals</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-white">Warranty</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ChronoLux. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
      
    </>
  )
}

export default NewEdition
