import React from 'react';
import { ContainerWrapper, SectionWrapper } from './HomeContainer-styles';
import {imageList} from '../../utils/imageLists/imageList';

export const HomeContainer = () => {

    return (
        <ContainerWrapper>

            {imageList.map(img => {
                return (

                    <SectionWrapper key={img.id}>

                        <img className='box' src={img.img} alt={img.alt}></img>

                    </SectionWrapper>
                
                )
            })}
     

        </ContainerWrapper>
    )
}
