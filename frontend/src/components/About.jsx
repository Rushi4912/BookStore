import React from 'react';
import Title from './Title';
import { TbTruckReturn, TbCreditCard, TbHeadset } from 'react-icons/tb';
import about from "../assets/book_1.png";

const About = () => {
  return (
    <section className='max-padd-container py-12 xl:py-24'>
      {/* Container with flex layout */}
      <div className='flex flex-col xl:flex-row gap-16 xl:gap-8'>
        {/* Left Side */}
        <div className='w-full xl:w-1/2'>
          <Title title1={"Unveiling Our"} title2={"Store's Key Features"} titlestyles={'pb-10'} paraStyles={'!block'} />
          <div className='flex flex-col items-start gap-y-4'>
            {/* Easy Returns */}
            <div className='flexCenter gap-x-4'>
              <div className='h-16 min-w-16 bg-secondaryOne flexCenter rounded-md'>
                <TbTruckReturn className='text-2xl' />
              </div>
              <div>
                <h4 className='medium-18'>Easy Returns Process</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, maxime!</p>
              </div>
            </div>

            {/* Secure Payments */}
            <div className='flexCenter gap-x-4'>
              <div className='h-16 min-w-16 bg-secondaryOne flexCenter rounded-md'>
                <TbCreditCard className='text-2xl' />
              </div>
              <div>
                <h4 className='medium-18'>Secure Payments Options</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, maxime!</p>
              </div>
            </div>

            {/* Live Customer Support */}
            <div className='flexCenter gap-x-4'>
              <div className='h-16 min-w-16 bg-secondaryOne flexCenter rounded-md'>
                <TbHeadset className='text-2xl' />
              </div>
              <div>
                <h4 className='medium-18'>Live Customer Support</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, maxime!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className='w-full xl:w-1/2 flexCenter'>
          <div className='bg-secondaryOne flexCenter p-6 xl:p-24 rounded-3xl'>
            {/* Adjust image size here */}
            <img src={about} alt="About" className='shadow-2xl shadow-slate-900/50 rounded-lg w-[244px] h-[244px]' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
