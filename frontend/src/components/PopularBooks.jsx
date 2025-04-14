import React from 'react';
import Title from './Title';
import Item from './Item';
import { books } from '../assets/data';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from "swiper/modules";

const PopularBooks = () => {
  // Filter popular books
  const popularBooks = books.filter(book => book.popular === true);
  
  return (
    <section className='max-padd-container py-12 xl:py-24'>
      <Title 
        title1={'Popular'} 
        title2={'Books'} 
        title1Styles={'pb-10'} 
        paraStyles={'!block'}
      />
      
      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        breakpoints={{
          400: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 30
          }
        }}
        modules={[Pagination, Autoplay]}  
        className='h-[455px] sm:h-[488px] xl:h-[499px] mt-5'
      >
        {popularBooks.map((book) => (
          <SwiperSlide key={book._id}>
            <Item book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PopularBooks;
