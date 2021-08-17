import React from 'react'
import styled, { css } from 'styled-components/macro'

//styles
const Container = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 500px;
    grid-gap: 20px;
    padding: 2rem 12rem 1rem 12rem;

    @media screen and (max-width: 1200px) {
        padding: 2rem 10rem;
    }
    @media screen and (max-width: 1000px) {
        padding: 2rem 8rem;
    }

    @media screen and (max-width: 920px) {
        padding: 2rem 6rem 0rem 6rem;
    }

    @media screen and (max-width: 768px) {
        padding: 2rem 5rem;
        grid-template-columns: 1fr;
        grid-template-rows: auto 400px;
    }

    @media screen and (max-width: 600px) {
        padding: 2rem 4rem;
    }
    @media screen and (max-width: 500px) {
        padding: 2rem 3rem;
    }

    @media screen and (max-width: 400px) {
        grid-template-rows: auto 350px;
    }
    @media screen and (max-width: 450px) {
        padding: 2rem 1.5rem;
    }
`

const Image = styled.div`
    
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: .5rem 1rem;
        font-size: 20px;
        font-weight: 700;
        background: #FF620F;
        color: #fff;
        border-radius: 10px;
        width: 250px;
        margin-bottom: 10px;

        @media screen and (max-width: 500px) {
            font-size: 18px;
            width: 220px;
        }
    }

    h2 {
        font-size: 50px;
        font-weight: 700;
        color: #0847A8;
        margin-bottom: 15px;

        @media screen and (max-width: 500px) {
            font-size: 40px;
        }

        @media screen and (max-width: 460px) {
            font-size: 30px;
        }
    }

    p {
        color: #8D8D8D;
        font-size: 18px;
        font-weight: 500;

        @media screen and (max-width: 450px) {
            font-size: 15px;
        }
    }
`

const Wrap = styled.section`
    display: flex;
    flex-direction: column;
`

const Payments = ({ top, heading, paragraph, image }) => {
    return (
        <Container>
            <Info>
                <Wrap>
                    <div>{top}</div>
                    <h2>{heading}</h2>
                    <p>{paragraph}</p>
                </Wrap>              
            </Info>
            <Image>
                <img src={image} alt="img" />
            </Image>
        </Container>
    )
}

export default Payments
