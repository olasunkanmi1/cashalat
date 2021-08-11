import React from 'react'
import styled from 'styled-components'
import image from '../images/payment1.png'

//styles
const Container = styled.section`
    display: grid;
    grid-template-columns: .40fr .60fr;
    grid-template-rows: 700px;
    grid-gap: 50px;
    margin-top: 75px;
    padding: 4rem 0 2rem 6rem;

    @media screen and (max-width: 1580px) {
        grid-gap: 20px;
    }
    @media screen and (max-width: 1300px) {
        grid-template-rows: 600px;
    }
    @media screen and (max-width: 1105px) {
        grid-template-rows: 500px;
    }
    @media screen and (max-width: 1000px) {
        padding: 4rem  0 4rem 5rem;
    }

    @media screen and (max-width: 920px) {
        padding: 4rem 0rem 4rem 4.5rem;
        grid-template-columns: .30fr .70fr;
    }
    @media screen and (max-width: 930px) {
        grid-template-rows: 400px;
    }

    @media screen and (max-width: 850px) {
        padding: 4rem 0rem 4rem 4rem;
    }

    @media screen and (max-width: 768px) {
        padding: 4rem 3rem;
        grid-template-columns: 1fr;
        grid-template-rows: 150px 400px;
    }
    @media screen and (max-width: 660px) {
        grid-template-rows: 180px 400px;
    }
    @media screen and (max-width: 580px) {
        grid-template-rows: 150px 400px;
    }
    @media screen and (max-width: 550px) {
        grid-template-rows: 170px 400px;
    }
    @media screen and (max-width: 540px) {
        grid-template-rows: 190px 400px;
    }
    @media screen and (max-width: 455px) {
        grid-template-rows: 220px 400px;
    }
    @media screen and (max-width: 450px) {
        padding: 4rem 1.5rem;
    }
    
    @media screen and (max-width: 440px) {
        grid-template-rows: 220px 400px;
    }
    @media screen and (max-width: 380px) {
        grid-template-rows: 220px 300px;
    }
`

const Info = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 13rem 0;

        @media screen and (max-width: 1300px) {
            padding: 11rem 0;
        }
        
        @media screen and (max-width: 1150px) {
            padding: 9rem 0;
        }

        @media screen and (max-width: 1105px) {
            padding: 4rem 0;
        }
        @media screen and (max-width: 930px) {
            padding: 2rem 0;
        }
        @media screen and (max-width: 768px) {
            padding: 0 0;
        }

        h2 {
            font-size: 70px;
            color: #0847A8;
            
            @media screen and (max-width: 1690px) {
                font-size: 60px;
            }

            @media screen and (max-width: 860px) {
                font-size: 50px;
            }
            
            @media screen and (max-width: 580px) {
                font-size: 40px;
            }
        }

        p {
            width: 75%;
            font-size: 20px;

            @media screen and (max-width: 768px) {
                width: 100%;
            }
        }
`

const Image = styled.div`
    @media screen and (max-width: 768px) {
        border-radius: 40px;
        overflow: hidden;
    }
    img {
        width: 120%;
        height: 100%;
        border-radius:  40px;

        @media screen and (max-width: 1250px) {
            width: 120%;
        }
        @media screen and (max-width: 1155px) {
            width: 130%;
        }
        @media screen and (max-width: 1107px) {
            width: 130%;
        }
        @media screen and (max-width: 1104px) {
            width: 190%;
        }
        @media screen and (max-width: 1040px) {
            width: 210%;
        }
        @media screen and (max-width: 970px) {
            width: 220%;
        }
        @media screen and (max-width: 930px) {
            width: 190%;
        }
        @media screen and (max-width: 768px) {
            width: 120%;
        }
        @media screen and (max-width: 450px) {
            width: 130%;
        }
        @media screen and (max-width: 430px) {
            width: 140%;
        }
        @media screen and (max-width: 400px) {
            width: 130%;
        }
    }
`

const Bills = () => {
    return (
        <Container>
            <Info>
                <h2>pay your bills conveniently and fast</h2>
                <p>With Cashalat, you get to pay your utilities.</p>
            </Info>
            <Image>
                <img src={image} alt="img" />
            </Image>
        </Container>
    )
}

export default Bills
