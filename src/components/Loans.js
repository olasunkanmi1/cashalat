import React from 'react'
import styled, { css } from 'styled-components/macro'

//styles
const Container = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 500px;
    grid-gap: 20px;
    padding: 2rem 6rem;

    @media screen and (max-width: 1000px) {
        padding: 2rem 5rem;
    }

    @media screen and (max-width: 920px) {
        padding: 2rem 4.5rem;
    }

    @media screen and (max-width: 850px) {
        padding: 2rem 4rem;
    }

    @media screen and (max-width: 768px) {
        padding: 2rem 3rem;
        grid-template-columns: 1fr;
        grid-template-rows: auto 400px;
    }
    @media screen and (max-width: 500px) {
        grid-template-rows: auto 300px;
    }

    @media screen and (max-width: 450px) {
        padding: 2rem 1.5rem;
    }
`

const Image = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    @media screen and (max-width: 768px) {
        order: 2;
    }

    @media screen and (max-width: 310px) {
        height: 200px;
    }
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12rem 0;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: .5rem 1rem;
        font-size: 20px;
        font-weight: 500;
        background: #FF620F;
        color: #fff;
        border-radius: 10px;
        width: 200px;
        margin-bottom: 10px;

        @media screen and (max-width: 500px) {
            font-size: 15px;
            width: 200px;
        }
    }

    h2 {
        font-size: 50px;
        font-weight: 700;
        color: #0847A8;
        margin-bottom: 20px;

        @media screen and (max-width: 500px) {
            font-size: 40px;
        }

        @media screen and (max-width: 420px) {
            font-size: 35px;
        }
    }

    p {
        color: #8D8D8D;
        font-size: 20px;

        @media screen and (max-width: 450px) {
            font-size: 18px;
        }
    }

    @media screen and (max-width: 1600px) {
        padding: 10rem 0;
    }
    
    @media screen and (max-width: 1300px) {
        padding: 7rem 0;
    }
    
    @media screen and (max-width: 1200px) {
        padding: 5rem 0;
    }
    
    @media screen and (max-width: 960px) {
        padding: 2rem 0;
    }
    @media screen and (max-width: 900px) {
        padding: 0;
    }
`

const Loans = ({ top, heading, paragraph, image }) => {
    return (
        <Container>
            <Image>
                <img src={image} alt="img" />
            </Image>
            <Info>
                <div>{top}</div>
                <h2>{heading}</h2>
                <p>{paragraph}</p>
            </Info>
        </Container>
    )
}

export default Loans
