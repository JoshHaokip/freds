import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import { ContainerWrapper } from './LeftContainer-styles';

export const LeftContainer = () => {
    return (
        <ContainerWrapper>

            <div class="logo">
                <h1>EAST CAFE</h1>
            </div>   

            <Navbar />

            
        </ContainerWrapper>
    )
}
