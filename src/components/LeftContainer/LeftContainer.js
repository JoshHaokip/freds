import React from 'react';
import {NavLink} from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';
import { Social } from '../Social/Social';
import { Weather } from '../Weather/Weather';
import { ContainerWrapper, SectionWrapper, Text, OpeningTime, Signature, MobileHeading, Logo} from './LeftContainer-styles';

export const LeftContainer = () => {

    return (

        <ContainerWrapper>

            <SectionWrapper>

                <Logo>
                    <h1>FRED's</h1>
                </Logo> 

                <MobileHeading>

                    <div className="logo">
                        <h1>FRED's</h1>
                    </div> 

                    <div classname="mobilenav">
                        <NavLink className='nav' activeStyle={{fontWeight: 'bold'}} exact to='/'>HOME</NavLink>
                        <NavLink className='nav' activeStyle={{fontWeight: 'bold'}} exact to='/about'>ABOUT</NavLink>
                    </div>

                </MobileHeading>        

                <Navbar />
                
                <Weather />

                <Social />

                <Text>Family run cafe offering coffee, refreshing drinks, breakfast, lunch and amazing pastries</Text>

                <OpeningTime>

                    <h3>OPENING TIMES</h3>
                    <ul>
                        <li>Monday - Friday 8am to 4pm</li>
                        <li>Saturday - 8:30am to 4pm</li>
                        <li>Sunday - 9am to 4pm</li>
                    </ul>

                </OpeningTime>

                <Signature>by josh haokip</Signature>

            </SectionWrapper>

            
            
        </ContainerWrapper>
    )
}
