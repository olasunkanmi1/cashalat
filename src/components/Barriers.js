import React from 'react'
import styled from 'styled-components'

//styles
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 5rem 12rem 4rem 12rem;
    background: #E5F9FF;

    @media screen and (max-width: 1200px) {
        padding: 5rem 10rem 4rem 10rem;
    }

    @media screen and (max-width: 1000px) {
        padding: 5rem 8rem 4rem 8rem;
    }

    @media screen and (max-width: 920px) {
        padding: 5rem 6rem 4rem 6rem;
    }

    @media screen and (max-width: 768px) {
        padding: 5rem 5rem 4rem 5rem;
    }
    @media screen and (max-width: 600px) {
        padding: 5rem 4rem 3rem 4rem;
    }
    @media screen and (max-width: 500px) {
        padding: 5rem 3rem 3rem 3rem;
    }

    @media screen and (max-width: 450px) {
        padding: 5rem 2rem 3rem 2rem;
    }

    h1 {
        margin-bottom: 2rem;
        text-align: center;
        width: 45%;
        font-size: 50px;
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
        @media screen and (max-width: 870px) {
            width: 100%;
        }
        @media screen and (max-width: 768px) {
            font-size: 40px;
        }
        @media screen and (max-width: 450px) {
            font-size: 30px;
        }
    }

    p {
        width: 60%;
        text-align: center;
        font-size: 18px;

        @media screen and (max-width: 1155px) {
            width: 80%;
        }
        @media screen and (max-width: 870px) {
            width: 100%;
        }
    }
`

const Wrap = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Barriers = () => {
    return (
        <Container>
            <Wrap>
                <h1>investments barriers are challenged</h1>
                <p>Our goal is to ensure no one is left behind. In our quest to create wealth for all, we have made it easy for even the poorest amongst us to invest and enjoy profits.</p>
            </Wrap>
        </Container>
    )
}

export default Barriers
