import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Weather } from '../Weather/Weather';
import { ContainerWrapper, SectionWrapper, Text, OpeningTime } from './LeftContainer-styles';

export const LeftContainer = () => {

    return (
        <ContainerWrapper>

            <SectionWrapper>

                <div class="logo">
                    <h1>EAST CAFE</h1>
                </div>   

                <Navbar />
                
                <Weather />

                <Text>Family run cafe offering coffee, refreshing drinks, breakfast, lunch and amazing pastries</Text>

                <OpeningTime>

                    <h3>OPENING TIMES</h3>
                    <ul>
                        <li>Monday - Friday 8am to 4pm</li>
                        <li>Saturday - 8:30am to 4pm</li>
                        <li>Sunday - 9am to 4pm</li>
                    </ul>

                </OpeningTime>

            </SectionWrapper>
            
        </ContainerWrapper>
    )
}
