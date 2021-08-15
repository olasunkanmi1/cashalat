import React from 'react'
import styled from 'styled-components'
import image from '../images/inv2.png'

//styles
const Container = styled.section`
    display: grid;
    grid-template-columns: .50fr .50fr;
    grid-template-rows: 550px;
    padding: 4rem 12rem 2rem 0;

    @media screen and (max-width: 1650px) {
        grid-template-rows: 450px;
    }
    @media screen and (max-width: 1350px) {
        grid-template-rows: 400px;
    }
    @media screen and (max-width: 1200px) {
        grid-template-rows: 350px;
        padding: 4rem 10rem 2rem 0;
    }
    @media screen and (max-width: 1000px) {
        grid-template-rows: 300px;
        padding: 4rem 8rem 2rem 0;
    }

    @media screen and (max-width: 920px) {
        padding: 4rem 6rem 2rem 0;
    }

    @media screen and (max-width: 768px) {
        padding: 2rem 5rem 4rem 5rem;
        grid-template-columns: 1fr;
        grid-template-rows: auto 350px;
        grid-gap: 20px;
    }

    @media screen and (max-width: 600px) {
        padding: 2rem 4rem 4rem 4rem;
    }
    @media screen and (max-width: 500px) {
        padding: 2rem 3rem 4rem 3rem;
    }

    @media screen and (max-width: 550px) {
        grid-template-rows: auto 300px;
    }
    @media screen and (max-width: 450px) {
        padding: 2rem 2rem 4rem 2rem;
    }
    @media screen and (max-width: 385px) {
        grid-template-rows: auto 250px;
    }
`

const Info = styled.div`
        display: flex;
        flex-direction: column;
        padding: 10rem 0 10rem 8rem;

        @media screen and (max-width: 1500px) {
            padding: 9rem 0 9rem 8rem;
        }
        @media screen and (max-width: 1360px) {
            padding: 9rem 0 9rem 5rem;
        }
        @media screen and (max-width: 1270px) {
            padding: 9rem 0 9rem 2rem;
        }
        @media screen and (max-width: 1200px) {
            padding: 5rem 0 5rem 2rem;
        }
        @media screen and (max-width: 1040px) {
            padding: 3rem 0 3rem 2rem;
        }
        @media screen and (max-width: 768px) {
            padding: 0;
        }

        h2 {
            font-size: 50px;
            color: #0847A8;
            margin-bottom: 15px;
            @media screen and (max-width: 768px) {
                font-size: 50px;
            }
            
            @media screen and (max-width: 900px) {
                font-size: 40px;
            }

            @media screen and (max-width: 580px) {
                font-size: 30px;
            }
        }

        p {
            font-size: 20px;
            width: 75%;

            @media screen and (max-width: 768px) {
                width: 100%;
            }
        }
`

const Image = styled.div`
    img {
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 768px) {
        order: 2;
    }
`

const MoreMoney = () => {
    return (
        <Container>
            <Image>
                <img src={image} alt="img" />
            </Image>
            <Info>
                <h2>invest on the go</h2>
                <p>No matter where you are or where you are going, with a click you can invest a certain portion of your income periodically.</p>
            </Info>
        </Container>
    )
}

export default MoreMoney
