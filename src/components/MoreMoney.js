import React from 'react'
import styled from 'styled-components'
import image from '../images/inv1.png'

//styles
const Container = styled.section`
    display: grid;
    grid-template-columns: .40fr .60fr;
    grid-template-rows: 600px;
    grid-gap: 50px;
    margin-top: 75px;
    padding: 4rem 0 2rem 6rem;

    @media screen and (max-width: 1580px) {
        grid-gap: 20px;
    }
    @media screen and (max-width: 1300px) {
        grid-template-rows: 500px;
    }
    @media screen and (max-width: 1000px) {
        padding: 4rem  0 4rem 5rem;
    }

    @media screen and (max-width: 920px) {
        padding: 4rem 0rem 4rem 4.5rem;
    }

    @media screen and (max-width: 850px) {
        padding: 4rem 0rem 4rem 4rem;
    }

    @media screen and (max-width: 768px) {
        padding: 4rem 3rem;
        grid-template-columns: 1fr;
        grid-template-rows: 200px 400px;
    }
    
    @media screen and (max-width: 725px) {
        grid-template-rows: 250px 400px;
    }

    @media screen and (max-width: 450px) {
        padding: 4rem 1.5rem;
    }
    
    @media screen and (max-width: 440px) {
        grid-template-rows: 300px 400px;
    }
    @media screen and (max-width: 340px) {
        grid-template-rows: 350px 400px;
    }
`

const Info = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 8rem 0;

        @media screen and (max-width: 1690px) {
            padding: 10rem 0;
        }
        
        @media screen and (max-width: 1450px) {
            padding: 8rem 0;
        }

        @media screen and (max-width: 1300px) {
            padding: 4rem 0;
        }
        
        @media screen and (max-width: 1180px) {
            padding: 2rem 0;
        }

        @media screen and (max-width: 1050px) {
            padding: 1rem 0;
        }
        @media screen and (max-width: 768px) {
            padding: 0;
        }

        h2 {
            font-size: 70px;
            color: #0847A8;
            
            @media screen and (max-width: 1690px) {
                font-size: 60px;
            }

            @media screen and (max-width: 768px) {
                font-size: 50px;
            }
            
            @media screen and (max-width: 580px) {
                font-size: 40px;
            }
        }

        p {
            width: 75%;
            font-size: 20px;
        }
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

        @media screen and (max-width: 1045px) {
            width: 230%;
        }
        @media screen and (max-width: 900px) {
            width: 250%;
        }
        @media screen and (max-width: 768px) {
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
                <h2>investments beget more money in your account.</h2>
                <p>With the least naira amount, a meagre cash Investment, gives you mouth watery returns.</p>
            </Info>
            <Image>
                <img src={image} alt="img" />
            </Image>
        </Container>
    )
}

export default MoreMoney
