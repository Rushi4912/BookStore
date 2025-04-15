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
    <section className='max-padd-container py-12 xl:py-24'>
      <Title 
        title1={'Popular'} 
        title2={'Books'} 
        title1Styles={'pb-10'} 
        paraStyles={'!block'}
      />
      
      {/* First Row */}
      <Swiper
        autoplay={{
          delay: 3500,
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
            spaceBetween: 20
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 20
          }
        }}
        modules={[Pagination, Autoplay, Navigation]}  
        className='h-[455px] sm:h-[488px] xl:h-[499px] mt-5 mb-8'
      >
        {firstRowBooks.map((book) => (
          <SwiperSlide key={book._id}>
            <Item book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Second Row */}
      <Swiper
        autoplay={{
          delay: 3500,
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
            spaceBetween: 20
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 20
          }
        }}
        modules={[Pagination, Autoplay, Navigation]}  
        className='h-[455px] sm:h-[488px] xl:h-[499px]'
      >
        {secondRowBooks.map((book) => (
          <SwiperSlide key={book._id}>
            <Item book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Custom CSS for pagination bullets */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #ccc;
          opacity: 1;
          margin: 0 4px;
        }
        .swiper-pagination-bullet-active {
          background: #000;
          width: 20px;
          border-radius: 4px;
        }
        .swiper-button-next, .swiper-button-prev {
          color: #000;
          background: rgba(255, 255, 255, 0.8);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 18px;
        }
      `}</style>
    </section>
  );
};

export default PopularBooks;
