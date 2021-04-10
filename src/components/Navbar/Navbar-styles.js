import styled from 'styled-components'

export const Navcontainer = styled.div`

    font-size: 20px;
    display: flex;
    flex-direction: row;

    .nav {

        margin-right: 25px;
        list-style: none;
        text-decoration: none;
        color: black;
        letter-spacing: 3px;
        font-weight: 100;

    }

    .home {
        font-weight: bolder;
    }

    @media only screen and (max-width: 748px) {
        display: none;
    }


`
