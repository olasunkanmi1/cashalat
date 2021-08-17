import React from 'react'
import styled from 'styled-components'
import image from '../images/payment2.png'

//styles
const Container = styled.section`
    display: grid;
    grid-template-columns: .50fr .50fr;
    grid-template-rows: 600px;
    padding: 4rem 12rem;

    @media screen and (max-width: 1500px) {
        grid-template-rows: 500px;
    }
    @media screen and (max-width: 1300px) {
        grid-template-rows: 450px;
    }
    @media screen and (max-width: 1200px) {
        padding: 4rem 10rem;
    }
    @media screen and (max-width: 1100px) {
        grid-template-rows: 400px;
    }
    @media screen and (max-width: 1000px) {
        grid-template-columns: .60fr .40fr;
        padding: 4rem 8rem;
    }

    @media screen and (max-width: 955px) {
        grid-template-rows: 350px;
    }

    @media screen and (max-width: 920px) {
        padding: 4rem 6rem;
    }

    @media screen and (max-width: 830px) {
        grid-template-columns: .50fr .50fr;
    }

    @media screen and (max-width: 768px) {
        padding: 2rem 5rem;
        grid-template-columns: 1fr;
        grid-template-rows: auto 400px;
        grid-gap: 20px;
    }

    @media screen and (max-width: 600px) {
        padding: 2rem 4rem;
    }
    @media screen and (max-width: 500px) {
        grid-template-rows: auto 350px;
        padding: 2rem 3rem;
    }
    @media screen and (max-width: 450px) {
        padding: 2rem 2rem;
    }

    @media screen and (max-width: 390px) {
        grid-template-rows: auto 300px;
    }
    @media screen and (max-width: 340px) {
        grid-template-rows: auto 250px;
    }
`

const Info = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding-left: 8rem;

        @media screen and (max-width: 1400px) {
            padding-left: 2rem;
        }
        @media screen and (max-width: 1210px) {
            padding-left: 1rem;
        }
        @media screen and (max-width: 768px) {
            padding: 0;
        }

        h2 {
            font-size: 50px;
            color: #0847A8;
            margin-bottom: 15px;
            
            @media screen and (max-width: 955px) {
                font-size: 40px;
            }
    
            @media screen and (max-width: 460px) {
                font-size: 30px;
            }
        }

        p {
            font-size: 18px;
            width: 75%;

            @media screen and (max-width: 768px) {
                width: 100%;
            }

            @media screen and (max-width: 500px) {
                font-size: 15px;
            }
        }
`

const Wrap = styled.section`
    display: flex;
    flex-direction: column;
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
                <Wrap>
                <h2>top up anytime anywhere.</h2>
                <p>Buy airtime and mobile data, while tracking your expenditures.</p>
                </Wrap>
            </Info>
        </Container>
    )
}

export default Topup
