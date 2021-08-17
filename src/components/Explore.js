import React from 'react'
import styled from 'styled-components'
import image from '../images/phone.png'

//styles
const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 90px;
    padding: 4rem 12rem 0 12rem;
    position: relative;

    @media screen and (max-width: 1200px) {
        padding: 4rem 10rem 0 10rem;
    }

    @media screen and (max-width: 1000px) {
        padding: 4rem 8rem 0 8rem;
    }

    @media screen and (max-width: 920px) {
        padding: 4rem 6rem 0 6rem;
    }

    @media screen and (max-width: 768px) {
        padding: 3rem 5rem 0 5rem;
    }
    @media screen and (max-width: 600px) {
        padding: 3rem 4rem 0 4rem;
    }
    @media screen and (max-width: 500px) {
        padding: 3rem 3rem 0 3rem;
    }

    @media screen and (max-width: 450px) {
        padding: 2rem 2rem 0 2rem;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-bottom: 400px;

        @media screen and (max-width: 535px) {
            margin-bottom: 250px;
        }
        @media screen and (max-width: 400px) {
            margin-bottom: 150px;
        }

        h2 {
            font-size: 50px;
            font-weight: 700;
            color: #0847A8;
            text-align: center;
            margin-bottom: 1.5rem;
            width: 40%;

            @media screen and (max-width: 1185px) {
                width: 50%;
            }
            
            @media screen and (max-width: 950px) {
                width: 65%;
            }

            @media screen and (max-width: 705px) {
                width: 80%;
            }
            
            @media screen and (max-width: 670px) {
                font-size: 40px;
            }

            @media screen and (max-width: 500px) {
                margin-bottom: 1rem;
            }
            
            @media screen and (max-width: 470px) {
                font-size: 30px;
            }
        }

        h4 {
            text-align: center;
            font-size: 20px;

            @media screen and (max-width: 768px) {
                font-size: 18px;
            }
        }

    }
    
`

const Image = styled.div`
    height: 500px;
    position: absolute;
    bottom: -500px;

    @media screen and (max-width: 535px) {
        height: 350px;
        bottom: -370px;
    }

    @media screen and (max-width: 400px) {
        height: 300px;
        bottom: -300px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
   
`

const Explore = () => {
    return (
        <Container>
            <div>
                <h2> explore our savings plan</h2>
                <h4>Enjoy the best interest rates on any plan of your choice.</h4>
            </div>
            <Image>
                <img src={image} alt="image" />
            </Image>
        </Container>
    )
}

export default Explore
