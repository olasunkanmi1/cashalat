import React from 'react'
import styled from 'styled-components'
import image from '../images/payment2.png'

//styles
const Container = styled.section`
    display: grid;
    grid-template-columns: .50fr .50fr;
    grid-template-rows: 600px;
    padding: 4rem 6rem;

    @media screen and (max-width: 1500px) {
        grid-template-rows: 500px;
    }
    @media screen and (max-width: 1200px) {
        grid-template-rows: 400px;
    }
    @media screen and (max-width: 1000px) {
        grid-template-rows: 400px;
        padding: 4rem 5rem;
    }

    @media screen and (max-width: 920px) {
        padding: 4rem 4.5rem;
    }

    @media screen and (max-width: 850px) {
        padding: 4rem 4rem;
    }

    @media screen and (max-width: 768px) {
        padding: 2rem 3rem;
        grid-template-columns: 1fr;
        grid-template-rows: 150px 500px;
        grid-gap: 20px;
    }

    @media screen and (max-width: 600px) {
        grid-template-rows: 150px 400px;
    }
    @media screen and (max-width: 450px) {
        padding: 2rem 1.5rem;
    }
    @media screen and (max-width: 390px) {
        grid-template-rows: 170px 300px;
    }
    @media screen and (max-width: 365px) {
        grid-template-rows: 190px 300px;
    }
    @media screen and (max-width: 350px) {
        grid-template-rows: 220px 300px;
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
        @media screen and (max-width: 1400px) {
            padding: 9rem 0 9rem 2rem;
        }
        @media screen and (max-width: 1210px) {
            padding: 7rem 0 7rem 1rem;
        }
        @media screen and (max-width: 1175px) {
            padding: 5rem 0 5rem 1rem;
        }
        @media screen and (max-width: 1140px) {
            padding: 2rem 0 2rem 1rem;
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

            @media screen and (max-width: 790px) {
                font-size: 50px;
            }
            
            @media screen and (max-width: 580px) {
                font-size: 40px;
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

const Topup = () => {
    return (
        <Container>
            <Image>
                <img src={image} alt="img" />
            </Image>
            <Info>
                <h2>top up anytime anywhere.</h2>
                <p>Buy airtime and mobile data, while tracking your expenditures.</p>
            </Info>
        </Container>
    )
}

export default Topup
