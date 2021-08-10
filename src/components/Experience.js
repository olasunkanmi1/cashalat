import React from 'react'
import styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom'

//components
import Newsletter from './Newsletter'

//styles
const Container = styled.section`
    width: 100%;
    padding: 4rem 6rem;
    margin-top: 75px;
    overflow: hidden;

    @media screen and (max-width: 1000px) {
        padding: 4rem 5rem;
    }

    @media screen and (max-width: 920px) {
        padding: 4rem 4.5rem;
    }

    @media screen and (max-width: 850px) {
        padding: 4rem 4rem;
    }

    @media screen and (max-width: 768px) {
        padding: 3rem 3rem 0 3rem;
    }

    @media screen and (max-width: 450px) {
        padding: 2rem 1.5rem 0 1.5rem;
    }
`

const Wrapper = styled.div`
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 50px;
        

        @media screen and (max-width: 960px) {
            grid-template-rows: 550px;
            grid-gap: 30px;
        }
        @media screen and (max-width: 960px) {
            grid-template-rows: 600px;
            grid-gap: 30px;
        }

        @media screen and (max-width: 768px) {
            grid-template-columns: 1fr;
            grid-template-rows: 400px auto;
            padding: 0;
        }

        @media screen and (max-width: 519px) {
            grid-template-rows: 430px auto;
        }
        @media screen and (max-width: 460px) {
            grid-template-rows: 450px auto;
        }
        @media screen and (max-width: 420px) {
            grid-template-rows: 470px auto;
        }
        
        @media screen and (max-width: 360px) {
            grid-template-rows: 500px auto;
        }
        
        @media screen and (max-width: 330px) {
            grid-template-rows: 550px auto;
        }
        
        @media screen and (max-width: 295px) {
            grid-template-rows: 570px auto;
        }
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h1 {
        font-size: 70px;
        font-weight: 700;
        color: #0847A8;

        @media screen and (max-width: 1160px) {
            font-size: 60px;
        }
        
        @media screen and (max-width: 840px) {
            font-size: 55px;
        }
        
        @media screen and (max-width: 610px) {
            font-size: 45px;
        }

        @media screen and (max-width: 420px) {
            font-size: 40px;
        }
    }

    p {
        font-size: 20px;

        @media screen and (max-width: 450px) {
            font-size: 18px;
        }
    }
`

const Download = styled .div`  
    display: flex;

    img {
        height: 40px;
        margin-right: 15px;

        @media screen and (max-width: 360px) {
            height: 35px;
        }
        
        @media screen and (max-width: 320px) {
            height: 30px;
        }
    }
`

const Image = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    height: 500px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    @media screen and (max-width: 500px) {
        height: 350px;
    }
`

const GetStarted = ({ heading, paragraph, playstore, applestore, image }) => {
    return (
        <Container>
            <Wrapper>
            <Info>
                <h1>{heading}</h1>
                <p>{paragraph}</p>
                <Download>
                    <Link to="/"><img src={playstore} alt="playstore" /></Link>
                    <Link to="/"><img src={applestore} alt="applestore" /></Link>
                </Download>
                <Newsletter />
            </Info>
            <Image>
                <img src={image} alt="experience banking" />
            </Image>
            </Wrapper>
        </Container>
    )
}

export default GetStarted
