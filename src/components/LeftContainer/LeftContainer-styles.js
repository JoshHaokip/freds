import styled from 'styled-components'

export const ContainerWrapper = styled.div`

    width: 25%;
    height: 100%;
    position: fixed;
    float: left;
    display: flex;
    flex-direction: column;
    background-color: salmon;
    justify-content: flex-start;

    .logo{
        display: flex;
        align-items: center;
    }

    h1 {
    text-align: left;
    font-size: 40px;
    letter-spacing: 7.5px;
    font-weight: 900;
    margin-top: 15%;
}

`