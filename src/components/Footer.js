import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInstagram, faFacebook,  faTwitter} from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
    return (
        <footer id='follow'>
            <h5>Follow US!</h5>
            <div className='social-media'>
            <FontAwesomeIcon  icon={faInstagram} size='2x'/>
            <FontAwesomeIcon  icon={faFacebook} size='2x'/>
            <FontAwesomeIcon  icon={faTwitter} size='2x'/>



            </div>
            
        </footer>
    )
}
