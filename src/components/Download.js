import React from 'react'
import styled, {css} from 'styled-components/macro'
import Newsletter from './Newsletter'
import bg from '../images/bg.png'
import PlaystoreApple from './PlaystoreApple'

//styles
const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    background-image: url(${bg});
    padding: 7rem 12rem 19rem 12rem;
    position: relative;
    
    h2 {
        font-size: 30px;
        font-weight: 700;
        color: #0847A8;
        text-align: center;

        @media screen and (max-width: 320px) {
            font-size: 25px;
        }
    }

    h3 {
        font-weight: 500;
        font-size: 20px;
        text-align: center;

        @media screen and (max-width: 450px) {
            font-size: 18px;
        }
    }

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 1rem 0 10rem 0;
    }

    @media screen and (max-width: 1200px) {
        padding: 1rem 10rem;
    }
    @media screen and (max-width: 1000px) {
        padding: 1rem 8rem;
    }

    @media screen and (max-width: 920px) {
        padding: 1rem 6rem;
    }

    @media screen and (max-width: 768px) {
        padding: 1rem 5rem;
    }

    @media screen and (max-width: 600px) {
        padding: 1rem 4rem;
    }
    @media screen and (max-width: 500px) {
        padding: 1rem 3rem;
    }

    @media screen and (max-width: 450px) {
        padding: 1rem 2rem;
    }
`

const Download = () => {
    return (
        <Container>
                <h2>Get the free App</h2>
                <h3>Your best financial life starts here.</h3>
                <div>
                    <PlaystoreApple />
                </div>
                <div css={`
                            width: 30%; height: 10px; position: absolute; bottom: -100px;
                            @media screen and (max-width:1400px) {
                                width: 35%;
                            }
                            @media screen and (max-width:1200px) {
                                width: 40%;
                            }
                            @media screen and (max-width:1000px) {
                                width: 50%;
                            }
                            @media screen and (max-width:850px) {
                                width: 55%;
                            }
                            @media screen and (max-width:750px) {
                                width: 70%;
                            }
                            @media screen and (max-width:600px) {
                                width: 80%;
                            }
                            @media screen and (max-width:440px) {
                                width: 87%;
                            }
                        `}>
                    <Newsletter />
                </div>
               
        </Container>
    )
}

export default Download
