import styled from 'styled-components'

export const ContainerWrapper = styled.div`

    width: 75%;
    float: right;
    background-color: white;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 1.2%;

    @media only screen and (max-width: 748px) {
        display: none; 
    }

`

export const SectionWrapper = styled.div`

    .box {

        height: 500px;
        width: 465px;
        bottom: 100px;
        margin: 5px;
        background-color: white;

    }

@media only screen and (max-width: 400px) {

        .box {
            padding-top: 10%;
            height: 100%;
            width: 100%;
            margin-top: 5%;
        }
    }
   

`

export const MobileContainerWrapper = styled.div`

    .box {
        width: 100%;
        height: 100%;
        
    }

    .carousel__inner-slide {
        width: calc(100% - 5px);
        padding-left: 3px;
    }

    @media only screen and (min-width: 748px) {
        display: none; 
    }



`



