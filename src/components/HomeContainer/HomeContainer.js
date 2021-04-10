import React from 'react';
import { ContainerWrapper, SectionWrapper, MobileContainerWrapper } from './HomeContainer-styles';
import {imageList} from '../../utils/imageLists/imageList';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';


export const HomeContainer = () => {

    return (

        <>
            <ContainerWrapper>
                {imageList.map(img => {
                        return (

                            <SectionWrapper key={img.id}>

                                <img className='box' src={img.img} alt={img.alt}></img>

                            </SectionWrapper>
                        
                        )
                })}

            </ContainerWrapper>  

            <MobileContainerWrapper>
 
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={147}
                    totalSlides={8}
                    
                    
                >   
                    <Slider>

                        {imageList.map(img => {
                            return (
                                <Slide key={img.id} index={img.id}>
                                    <img className='box' src={img.img} alt={img.alt}></img>
                                </Slide>
                            )
                        })}

                    </Slider>

                </CarouselProvider>
            
            
            </MobileContainerWrapper>      
          
        </>

    )
}
