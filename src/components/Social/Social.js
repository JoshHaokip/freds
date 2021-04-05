import React from 'react';
import {FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import {Icons} from './Social-styles'

export const Social = () => {
    return (
        <Icons>

            <ul>

                <li> <FaFacebookF /> </li>
                <li> <FaInstagram /> </li>
                <li> <FaTwitter /> </li>
                <li> <MdEmail /> </li>
                
            </ul>
            
        </Icons>
    )
}
