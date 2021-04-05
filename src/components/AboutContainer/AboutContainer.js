import React from 'react';
import { Map } from '../Map/Map';
import { ContainerWrapper, TextWrapper } from './AboutContainer-styles'

export const AboutContainer = () => {
    return (
        <ContainerWrapper>
            
            <TextWrapper>

                <main>
                    <h3> Who's Fred? </h3>
                    <p> 
                        Fred’s was born for the love of cake, fresh good quality food and fabulous coffee! We named it after Fred, a food loving, coffee drinking Yorkshireman who’s knocking 90 – and who also happens to be my Dad. 
                    </p>

                    <p>
                        All our pastries are baked in house fresh every day, our food is made from scratch or sourced locally with premium meats, free range farm eggs, fresh seasonally selected fruit and vegetables – all provided by suppliers who share the same values as we do! Simple, sustainable, inspired, tasty and never pretentious! 
                    </p>

                    <p className='lastText'>
                        Finally, we look forward to welcoming you soon, and hope that you too, become a Fred’s regular, if you’re not already! Oh, and don’t forget to get/stamp your lovely loyalty card too!
                    </p>

                </main>

                <Map />

            </TextWrapper>
     
        </ContainerWrapper>
    )
}
