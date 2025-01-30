import React, { useEffect, useState } from 'react';
import Title from './Title';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from "swiper/modules";
import { books } from "../assets/data";
import Item from './Item';

const NewArrivals = () => {
  const [newarrivals, setNewArrivals] = useState([]);
  
  // Extract the first new books as new arrivals
  useEffect(() => {
    const data = books.slice(0, 7);
    setNewArrivals(data.reverse());
  }, [books]);

  return (
    <section className='max-padd-container py-16'>
      <Title
        title1="new"
        title2="Arrivals"
        titleStyles="pb-10"
        title1Styles="text-xl" // You can customize this class as needed
        paraStyles="!block"
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
        {
          newarrivals.map((book) => {
            return (
              <SwiperSlide key={book._id} className='mt-\'>
                <Item book={book} />  {/* Passing the book as a prop */}
              </SwiperSlide>
            );
          })
        }
      </Swiper>
    </section>
  );
};

export default NewArrivals;
