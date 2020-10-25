import React from 'react';
import './SectionOne.css';


export const SectionOne = () => {

    const images = [
        'https://images.unsplash.com/photo-1538488881038-e252a119ace7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
          'https://images.unsplash.com/photo-1575444758702-4a6b9222336e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
         'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80',
          'https://images.unsplash.com/photo-1528219086320-73c3c9558a26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
        ];

      
  

    return (
        <section className='carousel-section'>
            <h2>Meet Us!</h2>

            <img src={images[0]} alt=''/>

            <div className='thumbnails'>
              <img src={images[1]} alt='' />
              <img src={images[2]} alt='' />
              <img src={images[3]} alt='' />


            </div>
            
        </section>
    )
}
