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
    padding: 5em 6rem;
    width: 100vw;

    @media screen and (max-width: 1000px) {
        padding: 3rem 5rem;
    }

    @media screen and (max-width: 920px) {
        padding: 2rem 4.5rem 3rem 4.5rem;
    }

    @media screen and (max-width: 850px) {
        padding: 2rem 4rem;
    }

    @media screen and (max-width: 768px) {
        padding: 2rem 3rem;
    }

    @media screen and (max-width: 690px) {
        grid-template-columns: .40fr .60fr;
        grid-template-rows: auto 300px;
    }
    @media screen and (max-width: 580px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto 300px;
    }

    @media screen and (max-width: 450px) {
        padding: 2rem 1.5rem;
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

            @media screen and (max-width: 770px) {
                font-size: 35px;
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
        }

        @media screen and (max-width: 550px) {
            padding: 3rem 0 0 0;
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
