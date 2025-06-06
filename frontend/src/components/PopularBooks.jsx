import React, { useState } from 'react';
import Title from './Title';
import Item from './Item';
import { books } from '../assets/data';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import 'swiper/css/navigation';

const PopularBooks = () => {
  // Filter popular books
  const popularBooks = books.filter(book => book.popular === true);
  
  // Split books into two arrays for two rows
  const firstRowBooks = popularBooks.slice(0, Math.ceil(popularBooks.length / 2));
  const secondRowBooks = popularBooks.slice(Math.ceil(popularBooks.length / 2));
  
  return (
    <section className='max-padd-container py-16 xl:py-26 relative overflow-hidden bg-white'>
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gray-50 rounded-full -z-10"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gray-50 rounded-full -z-10"></div>
      
      <div className="text-center mb-16">
        <Title 
          title1={'Popular'} 
          title2={'Books'} 
          title1Styles={'pb-4'} 
          paraStyles={'!block max-w-2xl mx-auto'}
        />
        <p className="text-gray-600 mt-7 mx-auto">
          Discover our most loved and bestselling titles, carefully selected for your reading pleasure.
        </p>
      </div>
      
      {/* First Row */}
      <div className="relative group">
        <Swiper
          autoplay={{
            delay: 4000,
            disableOnInteraction: false
          }}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + ' custom-bullet"></span>';
            },
          }}
          navigation={true}
          breakpoints={{
            400: {
              slidesPerView: 2,
              spaceBetween: 24
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 24
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 24
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 24
            }
          }}
          modules={[Pagination, Autoplay, Navigation]}  
          className='h-[455px] sm:h-[488px] xl:h-[499px] mt-7 mb-11'
        >
          {firstRowBooks.map((book) => (
            <SwiperSlide key={book._id} className="transition-transform duration-300 hover:scale-105">
              <div className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <Item book={book} />
                <div className="absolute top-0 left-0 w-full h-1 bg-primary/20 group-hover:bg-primary/40 transition-colors duration-300"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Gradient overlay for better visual hierarchy */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-white/5 group-hover:via-transparent group-hover:to-white/5 pointer-events-none"></div>
      </div>
      
      {/* Second Row */}
      <div className="relative group">
        <Swiper
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            reverseDirection: true
          }}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + ' custom-bullet"></span>';
            },
          }}
          navigation={true}
          breakpoints={{
            400: {
              slidesPerView: 2,
              spaceBetween: 24
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 24
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 24
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 24
            }
          }}
          modules={[Pagination, Autoplay, Navigation]}  
          className='h-[455px] sm:h-[488px] xl:h-[499px]'
        >
          {secondRowBooks.map((book) => (
            <SwiperSlide key={book._id} className="transition-transform duration-300 hover:scale-105">
              <div className="relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <Item book={book} />
                <div className="absolute top-0 left-0 w-full h-1 bg-primary/20 group-hover:bg-primary/40 transition-colors duration-300"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Gradient overlay for better visual hierarchy */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-white/5 group-hover:via-transparent group-hover:to-white/5 pointer-events-none"></div>
      </div>
      
    

    </section>
  );
};

export default PopularBooks;
