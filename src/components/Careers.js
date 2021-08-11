import React from 'react'
import styled from 'styled-components'
import image from '../images/culture1.png'

//styles
const Container = styled.section`
    display: flex;
    padding: 4rem 0 4rem 6rem;
    margin-top: 75px;

    @media screen and (max-width: 1000px) {
        padding: 4rem 5rem 0 5rem;
    }

    @media screen and (max-width: 920px) {
        padding: 4rem 0 4rem 4.5rem;
    }

    @media screen and (max-width: 850px) {
        padding: 4rem 0 4rem 4rem;
    }

    @media screen and (max-width: 768px) {
        padding: 4rem 3rem;
        flex-direction: column;
    }

    @media screen and (max-width: 450px) {
        padding: 4rem 1.5rem 0 1.5rem;
    }
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

    h1 {
        font-size: 60px;
        color: #0847A8;
        margin-bottom: 2rem;
    }

    p {
        font-size: 20px;
        margin-bottom: 15px;

        &:last-child {
            margin-bottom: 0;
        }
    }
`

const Image = styled.div`
    height: 400px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const Careers = () => {
    return (
        <Container>
            <Info>
                <h1>Careers</h1>
                <p>We started Cashalat because we believe everyone should have the opportunity to save and invest, conduct other financial transactions on their mobile phones conveniently. </p>
                <p>We’re a unique team of experienced entrepreneurs, developers, designers, investment experts and marketers with a successful track record in building complex businesses.</p>
                <p>Inspired by our vision and shared purpose, we provide opportunities and a great work environment because we believe everyone should have a decent shot at life and plan for their future.</p>
                <p>At Cashalat, we are people from different backgrounds and cultures from all over Africa and the world! From financial, data analyst and to techies, we’re all on this exciting journey together.</p>
            </Info>
            <Image>
                <img src={image} alt="career" />
            </Image>
        </Container>
    )
}

export default Careers
