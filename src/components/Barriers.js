import React from 'react'
import styled from 'styled-components'

//styles
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem 6rem;
    background: #E5F9FF;

    @media screen and (max-width: 1000px) {
        padding: 5rem 5rem;
    }

    @media screen and (max-width: 920px) {
        padding: 5rem 4.5rem;
    }

    @media screen and (max-width: 850px) {
        padding: 5rem 4rem;
    }

    @media screen and (max-width: 768px) {
        padding: 5rem 3rem;
    }

    @media screen and (max-width: 450px) {
        padding: 5rem 1.5rem;
    }

    h1 {
        margin-bottom: 4rem;
        text-align: center;
        width: 45%;
        font-size: 70px;
        color: #0847A8;

        @media screen and (max-width: 1880px) {
            width: 50%;
        }
        @media screen and (max-width: 1715px) {
            width: 55%;
        }
        @media screen and (max-width: 1575px) {
            width: 60%;
        }
        @media screen and (max-width: 1460px) {
            width: 65%;
        }
        @media screen and (max-width: 1360px) {
            width: 70%;
        }
        @media screen and (max-width: 1275px) {
            width: 80%;
        }
        @media screen and (max-width: 1150px) {
            width: 90%;
        }
        @media screen and (max-width: 1035px) {
            font-size: 60px;
        }
        @media screen and (max-width: 870px) {
            width: 100%;
        }
        @media screen and (max-width: 750px) {
            font-size: 50px;
        }
        @media screen and (max-width: 350px) {
            font-size: 40px;
        }
    }

    p {
        width: 60%;
        text-align: center;
        margin-bottom: 3rem;
        font-size: 20px;

        @media screen and (max-width: 1155px) {
            width: 80%;
        }
        @media screen and (max-width: 870px) {
            width: 100%;
        }
    }
`

const Barriers = () => {
    return (
        <Container>
            <h1>investments barriers are challenged</h1>
            <p>Our goal is to ensure no one is left behind. In our quest to create wealth for all, we have made it easy for even the poorest amongst us to invest and enjoy profits.</p>
        </Container>
    )
}

export default Barriers
