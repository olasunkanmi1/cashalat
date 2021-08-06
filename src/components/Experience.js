import React from 'react'
import styled, { css } from 'styled-components/macro'
import { Link } from 'react-router-dom'

//components
import Newsletter from './Newsletter'

//styles
const Container = styled.section`
    display: grid;
    justify-content: space-between;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
    width: 100%;
    padding: 2rem 5rem;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

const Info = styled.div`
    width: 100%;

    h1 {
        width: 80%;
        font-size: 60px;
        font-weight: 700;
        color: #0847A8;
    }

    p {
        margin-top: .5rem;
        font-size: 20px;
    }
`

const Download = styled .div`
    
    display: flex;
    justify-content: space-between;
    padding-right: 30px;
    margin: 2rem 0;

    img {
        height: 40px;
    }
`

const Image = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    // overflow: hidden;
    

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const GetStarted = ({ heading, paragraph, playstore, applestore, image }) => {
    return (
        <Container>
            <Info>
                <h1>{heading}</h1>
                <p>{paragraph}</p>
                <Download>
                    <Link to="/"><img src={playstore} alt="playstore" /></Link>
                    <Link to="/"><img src={applestore} alt="applestore" /></Link>
                </Download>
                <Newsletter css={`width: 80%;`} />
            </Info>
            <Image>
                <img src={image} alt="experience banking" />
            </Image>
        </Container>
    )
}

export default GetStarted
