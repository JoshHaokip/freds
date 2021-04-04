import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import { ContainerWrapper, SectionWrapper } from './LeftContainer-styles';

export const LeftContainer = () => {

    return (
        <ContainerWrapper>

            <SectionWrapper>

                <div class="logo">
                    <h1>EAST CAFE</h1>
                </div>   

                <Navbar />

            </SectionWrapper>
            
        </ContainerWrapper>
    )
}
