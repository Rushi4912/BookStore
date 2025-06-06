import React from 'react';
import { FaShippingFast, FaHeadset, FaLock, FaUndo, FaBookOpen, FaGift } from 'react-icons/fa';
import Title from './Title';

const Features = () => {
  const features = [
    {
      id: 1,
      icon: <FaShippingFast className="text-3xl" />,
      title: "Fast Delivery",
      description: "Get your books delivered to your doorstep within 2-3 business days with our reliable shipping service."
    },
    {
      id: 2,
      icon: <FaHeadset className="text-3xl" />,
      title: "24/7 Support",
      description: "Our dedicated customer support team is available around the clock to assist you with any queries."
    },
    {
      id: 3,
      icon: <FaLock className="text-3xl" />,
      title: "Secure Payment",
      description: "Shop with confidence using our secure payment gateway that protects your personal information."
    },
    {
      id: 4,
      icon: <FaUndo className="text-3xl" />,
      title: "Easy Returns",
      description: "Not satisfied with your purchase? Return your books within 30 days for a full refund."
    }
  ];
  
  return (
    <section className="max-padd-container py-16 xl:py-28 relative overflow-hidden bg-white">
      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-50 rounded-full -z-10"></div>
      <div className="absolute top-0 right-0 w-48 h-48 bg-gray-50 rounded-full -z-10"></div>
      
      <div className="text-center mb-16">
        <Title 
          title1={'Why'} 
          title2={'Choose Us'} 
          title1Styles={'pb-4'} 
          paraStyles={'!block max-w-2xl mx-auto'}
        />
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          We're committed to providing the best experience for book lovers with our premium services and exclusive benefits.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => (
          <div 
            key={feature.id} 
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group border border-gray-100 relative overflow-hidden"
          >
            {/* Subtle accent line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-primary/20 group-hover:bg-primary/40 transition-colors duration-300"></div>
            
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-gray-100 transition-colors duration-300 text-primary">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
      
      {/* Additional feature highlights */}
      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Book Club CTA */}
        <div className="bg-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
          {/* Subtle accent line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-primary/20 group-hover:bg-primary/40 transition-colors duration-300"></div>
          
          <div className="md:w-2/3">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <FaBookOpen className="text-xl text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Join Our Book Club</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Get exclusive access to new releases, author events, and special discounts. 
              Our book club members receive 10% off all purchases and free shipping on orders over $50.
            </p>
            <button className="bg-primary text-white px-8 py-3.5 rounded-lg hover:bg-primary/90 transition-colors duration-300 font-semibold text-lg shadow-sm hover:shadow">
              Sign Up Now
            </button>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="w-32 h-32 bg-gray-50 rounded-full flex items-center justify-center shadow-sm">
              <div className="text-5xl">📚</div>
            </div>
          </div>
        </div>
        
        {/* Gift Card CTA */}
        <div className="bg-white rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
          {/* Subtle accent line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-primary/20 group-hover:bg-primary/40 transition-colors duration-300"></div>
          
          <div className="md:w-2/3">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <FaGift className="text-xl text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Gift Cards</h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Looking for the perfect gift? Our gift cards are the ideal choice for any book lover.
              Available in denominations from $25 to $200, with no expiration date.
            </p>
            <button className="bg-primary text-white px-8 py-3.5 rounded-lg hover:bg-primary/90 transition-colors duration-300 font-semibold text-lg shadow-sm hover:shadow">
              Shop Gift Cards
            </button>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="w-32 h-32 bg-gray-50 rounded-full flex items-center justify-center shadow-sm">
              <div className="text-5xl">🎁</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trust indicators */}
      <div className="mt-20 pt-10 border-t border-gray-100">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">10K+</div>
            <div className="text-gray-700 font-medium">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50K+</div>
            <div className="text-gray-700 font-medium">Books Available</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100+</div>
            <div className="text-gray-700 font-medium">Author Events</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-gray-700 font-medium">Customer Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;