import React from 'react';
import Title from './Title';
import Item from './Item';
import { books } from '../assets/data';

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
      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 xl:gap-8'>
        {popularBooks.map((book) => (
          <Item key={book._id} book={book} />
        ))}
      </div>
    </section>
  );
};

export default PopularBooks;
