import styled from 'styled-components'

export const ContainerWrapper = styled.div`

    width: 75%;
    float: right;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media only screen and (max-width: 748px) {

        display: flex;
        justify-content: center;
        width: 98%;  
        height: 100%;   
    }
    
`

export const TextWrapper = styled.div`

    margin: 0% 12% 0% 12%;
    letter-spacing: 2px;
    line-height: 35px;
    font-size: 13px;

    h3 {
        font-size: 20px;
        font-weight: 600;
    }

    p {
        margin-top: 5%;
    }

    .lastText {
        margin-bottom: 70px;
    }

    @media only screen and (max-width: 748px) {

        display: none;      
    }

`

export const MobileTextWrapper = styled.div`

    width: 97%;
    height: 100%;
    line-height: 40px;
    letter-spacing: 0.5px;

    h3 {
        font-size: 20px;
        font-weight: 600;
    }
    
    p {
        font-weight: 300;
        font-size: 13px;
        text-align: justify;
    }

    .carousel__inner-slide {
        width: 100%;
    }

    @media only screen and (min-width: 748px) {

        display: none;      
    }

`