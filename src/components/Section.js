import React from 'react';
import './Section.css';
import bar from '../img/bar0.jpg'

export const Section = () => {
    return (
        <section className='section'>
            <h1>Welcome<br/>
            to the<br/>
            
            <span className='neon-word'>basement.</span></h1>

            <img src={bar} alt='Basement bar' />
            
        </section>
    )
}
