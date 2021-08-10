import React from 'react'
import styled from 'styled-components'
import image from '../images/phone.png'

//styles
const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 75px;
    padding: 4rem 6rem 0 6rem;
    position: relative;

    @media screen and (max-width: 1000px) {
        padding: 4rem 5rem 0 5rem;
    }

    @media screen and (max-width: 920px) {
        padding: 4rem 4.5rem 0 4.5rem;
    }

    @media screen and (max-width: 850px) {
        padding: 4rem 4rem 0 4rem;
    }

    @media screen and (max-width: 768px) {
        padding: 3rem 3rem 0 3rem;
    }

    @media screen and (max-width: 450px) {
        padding: 2rem 1.5rem 0 1.5rem;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 600px;

        h2 {
            font-size: 40px;
            font-weight: 700;
            color: #0847A8;
            text-align: center;
            margin-bottom: 2rem;
            width: 30%;

            @media screen and (max-width: 970px) {
                width: 40%;
            }
            
            @media screen and (max-width: 770px) {
                width: 50%;
            }
            
            @media screen and (max-width: 670px) {
                font-size: 35px;
            }
            
            @media screen and (max-width: 530px) {
                width: 70%;
            }
            
            @media screen and (max-width: 360px) {
                width: 100%;
            }
        }

        h4 {
            text-align: center;
        }

        @media screen and (max-width: 700px) {
            height: 400px;
        }
       
        @media screen and (max-width: 400px) {
            height: 300px;
        }
        
        @media screen and (max-width: 300px) {
            height: 250px;
        }
    }
    
`

const Image = styled.div`
    height: 650px;
    position: absolute;
    bottom: -150px;

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
