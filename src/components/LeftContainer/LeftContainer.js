import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Social } from '../Social/Social';
import { Weather } from '../Weather/Weather';
import { ContainerWrapper, SectionWrapper, Text, OpeningTime, Signature } from './LeftContainer-styles';

export const LeftContainer = () => {

    return (
        <ContainerWrapper>

            <SectionWrapper>

                <div className="logo">
                    <h1>FRED's</h1>
                </div>   

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
