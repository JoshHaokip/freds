import styled from 'styled-components';

export const MapContainer = styled.div`

    h3 {

        font-size: 20px;
        font-weight: 600;
    }

    @media only screen and (max-width: 748px) {

        h3 {
            margin-top: 20px;
            padding-bottom: 5px;
        }      
    }

`

export const Icon = styled.div`

    color: orangered;
    
    .mapicon{
        height: 40px;
        width: 40px;
    }

`