import React from 'react'
import styled from 'styled-components'
import image from '../images/payment1.png'

//styles
const Container = styled.section`
    display: grid;
    grid-template-columns: .40fr .60fr;
    grid-template-rows: 500px;
    margin-top: 75px;
    padding: 4rem 0 2rem 12rem;

    @media screen and (max-width: 1400px) {
        grid-template-rows: 450px;
    }

    @media screen and (max-width: 1200px) {
        padding: 4rem 0 2rem 10rem;
    }
    @media screen and (max-width: 1105px) {
        grid-template-rows: 400px;
    }
    @media screen and (max-width: 1000px) {
        padding: 4rem  0 4rem 5rem;
    }

    @media screen and (max-width: 920px) {
        padding: 4rem 0rem 4rem 6rem;
    }

    @media screen and (max-width: 768px) {
        padding: 4rem 5rem 0rem 5rem;
        grid-template-columns: 1fr;
        grid-template-rows: auto 500px;
    }

    @media screen and (max-width: 650px) {
        grid-template-rows: auto 450px;
    }
    @media screen and (max-width: 600px) {
        padding: 4rem 4rem 0rem 4rem;
    }

    @media screen and (max-width: 550px) {
        grid-template-rows: auto 400px;
    }

    @media screen and (max-width: 500px) {
        padding: 4rem 3rem 0rem 3rem;
    }
    @media screen and (max-width: 450px) {
        padding: 4rem 2rem 0rem 2rem;
        grid-template-rows: auto 350px;
    }
    @media screen and (max-width: 370px) {
        grid-template-rows: auto 300px;
    }
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h2 {
        font-size: 50px;
        color: #0847A8;
        margin-bottom: 15px;
        
        @media screen and (max-width: 925px) {
            font-size: 40px;
        }

        @media screen and (max-width: 460px) {
            font-size: 30px;
        }
    }

    p {
        width: 75%;
        font-size: 18px;

        @media screen and (max-width: 768px) {
            width: 100%;
        }
        @media screen and (max-width: 500px) {
            font-size: 15px;
        }
    }
`

const Wrap = styled.section`
    display: flex;
    flex-direction: column;
`

const Image = styled.div`
    padding-left: 8rem;

    @media screen and (max-width: 1300px) {
        padding-left: 4rem;
    }

    @media screen and (max-width: 950px) {
        padding-left: 1rem;
    }

    @media screen and (max-width: 768px) {
        border-radius: 40px;
        padding-left: 0rem;
        overflow: hidden;
        margin-top: 1rem;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius:  40px;
    }
`

const Bills = () => {
    return (
        <Container>
            <Info>
                <Wrap>
                    <h2>pay your bills conveniently and fast</h2>
                    <p>With Cashalat, you get to pay your utilities.</p>
                </Wrap>
            </Info>
            <Image>
                <img src={image} alt="img" />
            </Image>
        </Container>
    )
}

export default Bills
