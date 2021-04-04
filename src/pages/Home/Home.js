import React, {useState} from 'react';
import {HomeContainer, LeftContainer} from '../../components';

export const Home = () => {

    const [Weight, setWeight] = useState([])

    const handleWeight = () => {
        setWeight(900)
    }

    return (
        <div>

            <LeftContainer />
            <HomeContainer /> 
        

        </div>
    )
}

