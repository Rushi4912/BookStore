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
    <section className='max-padd-container py-12 xl:py-24 relative overflow-hidden'>
      {/* Background decorative element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full -z-10"></div>
      
      <Title 
        title1={'Popular'} 
        title2={'Books'} 
        title1Styles={'pb-10'} 
        paraStyles={'!block'}
      />
      
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
          className='h-[455px] sm:h-[488px] xl:h-[499px] mt-5 mb-12'
        >
          {firstRowBooks.map((book) => (
            <SwiperSlide key={book._id} className="transition-transform duration-300 hover:scale-105">
              <Item book={book} />
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
              <Item book={book} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Gradient overlay for better visual hierarchy */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-white/5 group-hover:via-transparent group-hover:to-white/5 pointer-events-none"></div>
      </div>
      
      {/* Custom CSS for pagination bullets and navigation */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          background: #e0e0e0;
          opacity: 1;
          margin: 0 6px;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #000;
          width: 24px;
          border-radius: 3px;
        }
        .swiper-button-next, .swiper-button-prev {
          color: #000;
          background: rgba(255, 255, 255, 0.9);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          opacity: 0;
          top: 50%;
          transform: translateY(-50%);
        }
        .swiper-button-next {
          right: 10px;
        }
        .swiper-button-prev {
          left: 10px;
        }
        .group:hover .swiper-button-next,
        .group:hover .swiper-button-prev {
          opacity: 1;
        }
        .swiper-button-next:hover, .swiper-button-prev:hover {
          background: #fff;
          box-shadow: 0 6px 16px rgba(0,0,0,0.15);
          transform: translateY(-50%) scale(1.05);
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 16px;
          font-weight: bold;
        }
        .swiper-slide {
          transition: transform 0.3s ease;
        }
        .swiper-slide:hover {
          transform: translateY(-5px);
        }
        .swiper-pagination {
          bottom: 0 !important;
        }
      `}</style>
    </section>
  );
};

export default PopularBooks;
