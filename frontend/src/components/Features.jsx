import React from 'react';
import { FaShippingFast, FaHeadset, FaLock, FaUndo } from 'react-icons/fa';
import Title from './Title';

const Features = () => {
  const features = [
    {
      id: 1,
      icon: <FaShippingFast className="text-4xl text-primary" />,
      title: "Fast Delivery",
      description: "Get your books delivered to your doorstep within 2-3 business days with our reliable shipping service."
    },
    {
      id: 2,
      icon: <FaHeadset className="text-4xl text-primary" />,
      title: "24/7 Support",
      description: "Our dedicated customer support team is available around the clock to assist you with any queries."
    },
    {
      id: 3,
      icon: <FaLock className="text-4xl text-primary" />,
      title: "Secure Payment",
      description: "Shop with confidence using our secure payment gateway that protects your personal information."
    },
    {
      id: 4,
      icon: <FaUndo className="text-4xl text-primary" />,
      title: "Easy Returns",
      description: "Not satisfied with your purchase? Return your books within 30 days for a full refund."
    }
  ];
  
  return (
    <section className="max-padd-container py-12 xl:py-24 relative overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full -z-10"></div>
      
      <Title 
        title1={'Why'} 
        title2={'Choose Us'} 
        title1Styles={'pb-10'} 
        paraStyles={'!block'}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {features.map((feature) => (
          <div 
            key={feature.id} 
            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
          >
            <div className="w-16 h-16 bg-secondary/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary/10 transition-colors duration-300">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
      
      {/* Additional feature highlight */}
      <div className="mt-16 bg-secondary/5 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Our Book Club</h3>
          <p className="text-gray-600 mb-6">
            Get exclusive access to new releases, author events, and special discounts. 
            Our book club members receive 10% off all purchases and free shipping on orders over $50.
          </p>
          <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-300">
            Sign Up Now
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 bg-secondary/10 rounded-full flex items-center justify-center">
            <div className="text-6xl text-primary">📚</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;