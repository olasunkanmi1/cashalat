import React from 'react'
import styled from 'styled-components/macro'

//components
import Newsletter from './Newsletter'
import PlaystoreApple from './PlaystoreApple'

//styles
const Container = styled.section`
    width: 100%;
    padding: 4rem 12rem;
    margin-top: 75px;
    overflow: hidden;

    @media screen and (max-width: 1200px) {
        padding: 4rem 10rem;
    }
    @media screen and (max-width: 1000px) {
        padding: 4rem 8rem;
    }

    @media screen and (max-width: 920px) {
        padding: 4rem 6rem;
    }
    @media screen and (max-width: 768px) {
        padding: 3rem 5rem 0 5rem;
    }
    @media screen and (max-width: 600px) {
        padding: 3rem 4rem 0 4rem;
    }
    @media screen and (max-width: 500px) {
        padding: 3rem 3rem 0 3rem;
    }

    @media screen and (max-width: 450px) {
        padding: 2rem 2rem 0 2rem;
    }
`

const Wrapper = styled.div`
        width: 100%;
        display: grid;
        grid-template-columns: .4fr .6fr;
        grid-gap: 50px;
        
        @media screen and (max-width: 1200px) {
            grid-template-columns: 1fr 1fr;
        }

        @media screen and (max-width: 960px) {
            grid-gap: 30px;
        }
        
        @media screen and (max-width: 800px) {
            grid-template-columns: .55fr .44fr;
        }
        @media screen and (max-width: 768px) {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto;
            padding: 0;
        }
`

const Info = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 50px;
        font-weight: 700;
        color: #0847A8;
        margin-bottom: 15px;

        @media screen and (max-width: 1100px) {
            font-size: 40px;
        }
        @media screen and (max-width: 600px) {
            font-size: 35px;
        }
        @media screen and (max-width: 460px) {
            font-size: 30px;
        }
    }

    p {
        font-size: 17px;
        font-weight: 500;
        margin-bottom: 15px;
    }
`

const Download = styled.div`  
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
`

const Image = styled.div`
    display: flex;
    align-items: center;
    height: 450px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    
    @media screen and (max-width: 768px) {
        height: 400px;
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
                    <PlaystoreApple />
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
