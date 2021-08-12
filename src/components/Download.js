import React from 'react'
import styled, {css} from 'styled-components/macro'
import Newsletter from './Newsletter'
import playstore from '../images/playstore.png'
import applestore from '../images/applestore.png'
import bg from '../images/bg.png'

//styles
const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 250px;
    background-image: url(${bg});
    padding: 1rem 6rem;
    position: relative;
    
    h2 {
        font-size: 35px;
        font-weight: 700;
        color: #0847A8;

        @media screen and (max-width: 350px) {
            font-size: 30px;
        }

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
        height: 50px;
        margin: 1rem 0;

        img {
            height: 40px;

            @media screen and (max-width: 350px) {
                height: 35px;
            }
            @media screen and (max-width: 300px) {
                height: 30px;
            }
        }
    }

    @media screen and (max-width: 1000px) {
        padding: 1rem 5rem;
    }

    @media screen and (max-width: 920px) {
        padding: 1rem 4.5rem;
    }

    @media screen and (max-width: 850px) {
        padding: 1rem 4rem;
    }

    @media screen and (max-width: 768px) {
        padding: 1rem 3rem;
    }

    @media screen and (max-width: 450px) {
        padding: 1rem 1.5rem;
    }
`

const Download = () => {
    return (
        <Container>
                <h2>Get the free App</h2>
                <h3>Your best financial life starts here.</h3>
                <div>
                    <img src={playstore} alt="playstore" css={`margin-right: 30px;
                    @media screen and (max-width: 350px) {
                        margin-right: 20px;
                    }`} />
                    <img src={applestore} alt="applestore" />
                </div>
                <div css={`
                            width: 30%; height: 10px; position: absolute; bottom: -30px;
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
