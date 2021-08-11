import React from 'react'
import styled from 'styled-components'
import image from '../images/inv2.png'

//styles
const Container = styled.section`
    display: grid;
    grid-template-columns: .50fr .50fr;
    grid-template-rows: 600px;
    padding: 4rem 6rem 2rem 0;

    @media screen and (max-width: 1500px) {
        grid-template-rows: 500px;
    }
    @media screen and (max-width: 1200px) {
        grid-template-rows: 400px;
    }
    @media screen and (max-width: 1000px) {
        grid-template-rows: 300px;
        padding: 4rem 5rem 2rem 0;
    }

    @media screen and (max-width: 920px) {
        padding: 4rem 4.5rem 2rem 0;
    }

    @media screen and (max-width: 850px) {
        padding: 4rem 4rem 2rem 0;
    }

    @media screen and (max-width: 768px) {
        padding: 4rem 3rem;
        grid-template-columns: 1fr;
        grid-template-rows: 180px;
        grid-gap: 20px;
    }

    @media screen and (max-width: 450px) {
        padding: 4rem 1.5rem;
    }
    @media screen and (max-width: 410px) {
        grid-template-rows: 230px;
    }
    @media screen and (max-width: 360px) {
        grid-template-rows: 250px;
    }
    @media screen and (max-width: 335px) {
        grid-template-rows: 270px;
    }
`

const Info = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 14rem 0 14rem 8rem;

        @media screen and (max-width: 1500px) {
            padding: 9rem 0 9rem 8rem;
        }
        @media screen and (max-width: 1360px) {
            padding: 9rem 0 9rem 5rem;
        }
        @media screen and (max-width: 1270px) {
            padding: 9rem 0 9rem 2rem;
        }
        @media screen and (max-width: 1170px) {
            padding: 5rem 0 5rem 2rem;
        }
        @media screen and (max-width: 1000px) {
            padding: 0 0 0 2rem;
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
            font-size: 20px;
            width: 75%;
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
