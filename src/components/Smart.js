import React from 'react'
import styled, { css } from 'styled-components/macro'

//styles
const Container = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 400px;
    padding: 2rem 6rem 0 6rem;

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
        padding: 2rem 3rem 1rem 3rem;
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
    }

    @media screen and (max-width: 450px) {
        padding: 2rem 1.5rem 1rem 1.5rem;
    }
`

const Image = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    @media screen and (max-width: 768px) {
        order: 2;
        height: 400px;
    }
    
    @media screen and (max-width: 450px) {
        height: 300px;
    }
`

const Info = styled.div`
    display: flex;
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
        margin-bottom: 10px;

        @media screen and (max-width: 500px) {
            font-size: 15px;
            width: 150px;
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

    @media screen and (max-width: 1000px) {
        padding: 4rem 0;
    }
    
    @media screen and (max-width: 950px) {
        padding: 2rem 0;
    }
    @media screen and (max-width: 940px) {
        padding: 0rem 0;
    }
`

const Smart = ({ top, heading, paragraph, image }) => {
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

export default Smart
