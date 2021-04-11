import styled from 'styled-components';

export const MapContainer = styled.div`

    h3 {

        font-size: 20px;
        font-weight: 600;
    }

    .mapboxgl-canvas {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
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

