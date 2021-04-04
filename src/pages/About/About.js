import React, {useState} from 'react';
import {LeftContainer} from '../../components';
import { AboutContainer } from '../../components/AboutContainer/AboutContainer';


export const About = () => {

    const [Weight, setWeight] = useState([])

    const handleWeight = () => {
        setWeight(900)
    }

    return (
        <div>

            <LeftContainer />
            <AboutContainer />



        </div>
    )
}
