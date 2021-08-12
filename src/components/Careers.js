import React from 'react'
import styled from 'styled-components'
import image from '../images/culture1.png'

//styles
const Container = styled.section`
    padding: 4rem 0 4rem 6rem;
    margin-top: 75px;

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
        padding: 4rem 3rem;
        flex-direction: column;
    }

    @media screen and (max-width: 450px) {
        padding: 4rem 1.5rem 0 1.5rem;
    }

    h1 {
        font-size: 60px;
        color: #0847A8;
        margin-bottom: 2rem;

        @media screen and (max-width: 768px) {
            font-size: 50px;
        }
        @media screen and (max-width: 500px) {
            font-size: 40px;
        }
    }
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
    
`

const Info = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 50%;

    @media screen and (max-width: 1365px) {
        width: 60%;
    }
    @media screen and (max-width: 1200px) {
        width: 70%;
    }

    @media screen and (max-width: 1000px) {
        width: 100%;
    }

    p {
        font-size: 20px;

        @media screen and (max-width: 1000px) {
            margin-bottom: 15px;
        }
    }
`

const Image = styled.div`
    height: 400px;
    border-radius: 40px;

    @media screen and (max-width: 1365px) {
        padding-left: 2rem;
    }

    @media screen and (max-width: 1200px) {
        height: 500px;
    }
    @media screen and (max-width: 1100px) {
        height: 600px;
    }
    @media screen and (max-width: 1000px) {
        height: 500px;
        padding: 2rem 0;
    }
    @media screen and (max-width: 670px) {
        height: 400px;
    }

    @media screen and (max-width: 540px) {
        padding: 0;
        height: 300px
    }

    img {
        width: 100%;
        height: 100%;
        border-radius: 40px;
        object-fit: contain;

        @media screen and (max-width: 1000px) {
            object-fit: cover;
        }
        @media screen and (max-width: 540px) {
            object-fit: contain;
        }
    }
`

const Careers = () => {
    return (
        <Container>
            <h1>Careers</h1>
            <Wrapper>
                <Info>
                    <p>We started Cashalat because we believe everyone should have the opportunity to save and invest, conduct other financial transactions on their mobile phones conveniently. </p>
                    <p>We’re a unique team of experienced entrepreneurs, developers, designers, investment experts and marketers with a successful track record in building complex businesses.</p>
                    <p>Inspired by our vision and shared purpose, we provide opportunities and a great work environment because we believe everyone should have a decent shot at life and plan for their future.</p>
                    <p>At Cashalat, we are people from different backgrounds and cultures from all over Africa and the world! From financial, data analyst and to techies, we’re all on this exciting journey together.</p>
                </Info>
                <Image>
                    <img src={image} alt="career" />
                </Image>
            </Wrapper>
        </Container>
    )
}

export default Careers
