import React from 'react';
import { ContainerWrapper, SectionWrapper } from './HomeContainer-styles';
import {imageList} from '../../utils/imageLists/imageList'


export const HomeContainer = () => {


    console.log(imageList)


    return (
        <ContainerWrapper>

            {imageList.map(img => {
                return (

                    <SectionWrapper>

                        <img className='box' key={img.id} src={img.img}></img>

                    </SectionWrapper>
                
                )
            })}
     

        </ContainerWrapper>
    )
}
