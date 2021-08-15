import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import image1 from '../images/j1.png'
import image2 from '../images/j2.png'
import arr from '../images/arr.svg'

//styles
const Container = styled.section`
    display: grid;
    grid-template-columns: .25fr .50fr .25fr;
    padding: 0rem 12rem 5rem 12rem;
    width: 100vw;

    @media screen and (max-width: 1200px) {
        padding: 0 10rem 3rem 10rem;
    }
    @media screen and (max-width: 1000px) {
        padding: 0 8rem 3rem 8rem;
    }

    @media screen and (max-width: 920px) {
        padding: 0 6rem 3rem 6rem;
    }

    @media screen and (max-width: 768px) {
        padding: 0 5rem 3rem 5rem;
    }

    @media screen and (max-width: 690px) {
        grid-template-columns: .40fr .60fr;
        grid-template-rows: auto 300px;
    }
    @media screen and (max-width: 600px) {
        padding: 0 4rem 3rem 4rem;
    }
    @media screen and (max-width: 580px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto 300px;
    }

    @media screen and (max-width: 500px) {
        padding: 0 3rem 2rem 3rem;
    }
    @media screen and (max-width: 450px) {
        padding: 0 2rem 2rem 2rem;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
            font-size: 40px;
            text-align: center;

            @media screen and (max-width: 800px) {
                font-size: 35px;
            }
            
            @media screen and (max-width: 500px) {
                font-size: 30px;
            }
        }

        h4 {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 6rem;
            color: #0847A8;

            @media screen and (max-width: 900px) {
                margin-top: 3rem;
            }
        }

        @media screen and (max-width: 690px) {
            padding: 5rem 0;
        }

        @media screen and (max-width: 580px) {
            grid-column: 1 / 3;
            grid-row: 1 / 2;
            padding: 0;
        }
    }
`

const Arr = styled.i`
    background-image: url(${arr});
    background-size: contain;
    width: 20px;
    height: 20px;
    margin-left: 15px;
    fill: blue;
`

const Journey = () => {
    return (
        <Container>
            <img src={image1} alt="img" />
            <div>
                <h1>
                    Be part of our journey and help power prosperity.
                </h1>
                <Link to="/careers"><h4>Visit Cashalat Careers <Arr /></h4></Link>
            </div>
            <img src={image2} alt="img" css={`
            @media screen and (max-width: 690px) {
                grid-column: 1 / 3;
            }
            @media screen and (max-width: 580px) {
                grid-column: 2 / 3;
                grid-row: 2 / 2;
            }`} />
        </Container>
    )
}

export default Journey
