import React from 'react'
import styled, { css } from 'styled-components/macro'

//styles
const Container = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 500px;
    grid-gap: 20px;
    padding: 2rem 6rem 1rem 6rem;

    @media screen and (max-width: 1000px) {
        padding: 2rem 5rem 0 5rem;
    }

    @media screen and (max-width: 920px) {
        padding: 2rem 4.5rem 0 4.5rem;
    }

    @media screen and (max-width: 850px) {
        padding: 2rem 4rem 0 4rem;
    }

    @media screen and (max-width: 768px) {
        padding: 2rem 3rem;
        grid-template-columns: 1fr;
        grid-template-rows: 250px auto;
    }

    @media screen and (max-width: 700px) {
        grid-template-rows: 300px auto;
    }

    @media screen and (max-width: 450px) {
        padding: 2rem 1.5rem;
    }

    @media screen and (max-width: 535px) {
        grid-template-rows: 350px auto;
    }
    
    @media screen and (max-width: 500px) {
        grid-template-rows: 300px auto;
    }
    
    @media screen and (max-width: 400px) {
        grid-template-rows: 340px auto;
    }

    @media screen and (max-width: 345px) {
        grid-template-rows: 390px auto;
    }
    
    @media screen and (max-width: 330px) {
        grid-template-rows: 410px auto;
    }
`

const Image = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    img {
        width: 100%;
        width: 100%;
        object-fit: cover;
    }
`

const Info = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 5rem 0;

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

        @media screen and (max-width: 500px) {
            font-size: 15px;
            width: 150px;
        }
    }

    h2 {
        font-size: 50px;
        font-weight: 700;
        color: #0847A8;

        @media screen and (max-width: 500px) {
            font-size: 40px;
        }
    }

    p {
        color: #8D8D8D;
        font-size: 20px;
    }

    @media screen and (max-width: 1070px) {
        padding: 4rem 0;
    }
    
    @media screen and (max-width: 900px) {
        padding: 2rem 0;
    }

    @media screen and (max-width: 820px) {
        padding: 0;
    }
`

const Savings = ({ top, heading, paragraph, image }) => {
    return (
        <Container>
            <Info>
                <div>{top}</div>
                <h2>{heading}</h2>
                <p>{paragraph}</p>
            </Info>
            <Image>
                <img src={image} alt="img" />
            </Image>
        </Container>
    )
}

export default Savings
