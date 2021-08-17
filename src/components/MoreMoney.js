import React from 'react'
import styled from 'styled-components'
import image from '../images/inv1.png'

//styles
const Container = styled.section`
    display: grid;
    grid-template-columns: .40fr .60fr;
    grid-template-rows: 550px;
    grid-gap: 50px;
    margin-top: 75px;
    padding: 4rem 0 2rem 12rem;

    @media screen and (max-width: 1800px) {
        grid-template-rows: 500px;
    }
    @media screen and (max-width: 1580px) {
        grid-gap: 20px;
        grid-template-rows: 450px;
    }
    @media screen and (max-width: 1200px) {
        padding: 4rem  0 4rem 10rem;
    }
    @media screen and (max-width: 1000px) {
        padding: 4rem  0 4rem 8rem;
    }

    @media screen and (max-width: 920px) {
        padding: 4rem 0rem 4rem 6rem;
    }

    @media screen and (max-width: 768px) {
        padding: 4rem 5rem 2rem 5rem;
        grid-template-columns: 1fr;
        grid-template-rows: auto 350px;
    }
    @media screen and (max-width: 600px) {
        padding: 4rem 4rem 2rem 4rem;
    }
    @media screen and (max-width: 500px) {
        padding: 4rem 3rem 2rem 3rem;
    }
    @media screen and (max-width: 450px) {
        padding: 4rem 2rem;
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
            
            @media screen and (max-width: 900px) {
                font-size: 40px;
            }
            
            @media screen and (max-width: 580px) {
                font-size: 30px;
            }
        }

        p {
            width: 75%;
            font-size: 18px;

            @media screen and (max-width: 768px) {
                width: 100%;
            }
        }
`

const Wrap = styled.section`
    display: flex;
    flex-direction: column;
`

const Image = styled.div`
    @media screen and (max-width: 570px) {
        border-radius: 40px;
        overflow: hidden;
    }
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius:  40px 0 0 40px;

       
        @media screen and (max-width: 940px) {
            width: 140%;
        }
        @media screen and (max-width: 930px) {
            width: 160%;
        }
        @media screen and (max-width: 900px) {
            width: 100%;
            border-radius: 40px;
        }
        @media screen and (max-width: 570px) {
            width: 150%;
        }
    }
`

const MoreMoney = () => {
    return (
        <Container>
            <Info>
                <Wrap>
                    <h2>investments beget more money in your account.</h2>
                    <p>With the least naira amount, a meagre cash Investment, gives you mouth watery returns.</p>
                </Wrap>
            </Info>
            <Image>
                <img src={image} alt="img" />
            </Image>
        </Container>
    )
}

export default MoreMoney
