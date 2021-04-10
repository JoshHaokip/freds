import styled from 'styled-components'

export const ContainerWrapper = styled.div`

    width: 25%;
    height: 100%;
    position: fixed;
    float: left;
    display: flex;
    flex-direction: column;
    background-color: white;
    justify-content: flex-start;

    @media only screen and (max-width: 748px) {

        float: none;
        width: 100%;
        position: relative;
        height: fit-content;
        margin-top: 10px;

    }

`

export const SectionWrapper = styled.div`

    padding-left: 11%;

    .logo{
        display: flex;
        align-items: center;
    }

    h1 {
    text-align: left;
    font-size: 58px;
    letter-spacing: 10px;
    font-weight: 900;
    margin-top: 5%;
    }
`

export const Text = styled.p`
    margin-top: 25px;
    font-size: 12.5px;
    font-weight: 400;
    letter-spacing: 1.3px;
    line-height: 25px;

    @media only screen and (max-width: 748px) {

        display: none; 
    }


`

export const OpeningTime = styled.div`

    margin-top: 35px;

    h3 {
        font-size: 18px;
        letter-spacing: 5px;
        font-weight: 700;
    }

    ul {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        margin-top: 25px;
        padding: 0px;
    }

    ul li {
        list-style: none;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 1px;
        margin-bottom: 20px;
    }

    @media only screen and (max-width: 748px) {

        display: none; 
    }

`

export const Signature = styled.p`

    margin-top: 30px;
    font-size: 10px;
    letter-spacing: 2px;

    @media only screen and (max-width: 748px) {

        display: none; 
    }

`