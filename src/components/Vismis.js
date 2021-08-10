import React from 'react'
import styled from 'styled-components'
import image from '../images/cp.png'
import image2 from '../images/cp2.png'

//styles
const Container =  styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 75px;
    padding: 4rem 6rem;

    @media screen and (max-width: 1000px) {
        padding: 4rem 5rem;
    }

    @media screen and (max-width: 920px) {
        padding: 4rem 4.5rem;
    }

    @media screen and (max-width: 850px) {
        padding: 4rem 4rem;
    }

    @media screen and (max-width: 768px) {
        padding: 3rem 3rem 0 3rem;
    }

    @media screen and (max-width: 450px) {
        padding: 2rem 1.5rem 0 1.5rem;
    }

    h2 {
        font-size: 40px;
        font-weight: 700;
        color: #0847A8;
        width: 49%;
        text-align: center;
        margin-bottom: 2rem;

        @media screen and (max-width: 1370px) {
            width: 60%;
        }
        
        @media screen and (max-width: 1160px) {
            width: 70%;
        }
        
        @media screen and (max-width: 1100px) {
            width: 90%;
        }
        
        @media screen and (max-width: 840px) {
            width: 100%;
        }
        
        @media screen and (max-width: 730px) {
            font-size: 35px;
        }
`

const Vis = styled.div`
    display: flex;
    justify-content: space-between;
    height: 400px;

    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`

const Image1 = styled.div`
    width: 70%;

    img {
        width: 100%;
        height: 100%;
        border-radius: 30px;
        object-fit: cover;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
        height: 300px;
    }
`

const Info1 = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-end;
    padding: 10rem 6rem 10rem 0;

    @media screen and (max-width: 1300px) {
        padding: 10rem 4rem 10rem 2rem;
    }
    
    @media screen and (max-width: 1200px) {
        padding: 10rem 2rem 10rem 2rem;
    }
    
    @media screen and (max-width: 1100px) {
        padding: 10rem 0 10rem 2rem;
    }
    
    @media screen and (max-width: 980px) {
        padding: 9rem 0 10rem 2rem;
    }

    @media screen and (max-width: 600px) {
        align-items: flex-start;
        padding: 1rem 0;
        height: 100px;
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: .5rem 1rem;
        font-size: 20px;
        font-weight: 500;
        background: #FF620F;
        color: #fff;
        border-radius: 10px;
        width: 150px;

        @media screen and (max-width: 500px) {
            font-size: 18px;
            width: 100px;
        }
    }

    p {
        color: #8D8D8D;
        font-size: 20px;

        @media screen and (max-width: 500px) {
            font-size: 18px;
        }
    }
`

const Mis = styled.div`
    display: flex;
    justify-content: space-between;
    height: 200px;
    position: relative;

    @media screen and (max-width: 700px) {
        height: 250px;
    }
    
    @media screen and (max-width: 600px) {
        flex-direction: column;
        height: 420px;
    }
    
    @media screen and (max-width: 450px) {
        height: 430px;
    }
    
    @media screen and (max-width: 370px) {
        height: 450px;
    }
`

const Info2 = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem 0rem 2rem 5rem;
    width: 50%;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: .5rem 1rem;
        font-size: 20px;
        font-weight: 500;
        background: #FF620F;
        color: #fff;
        border-radius: 10px;
        width: 150px;

        @media screen and (max-width: 500px) {
            font-size: 18px;
            width: 100px;
        }
    }

    p {
        color: #8D8D8D;
        font-size: 20px;

        @media screen and (max-width: 500px) {
            font-size: 18px;
        }
    }

    @media screen and (max-width: 800px) {
        padding: 2rem 0rem 2rem 2rem;
    }
    
    @media screen and (max-width: 700px) {
        padding: 3rem 0;
    }

    @media screen and (max-width: 600px) {
        padding: 1rem 0 0 0;
        width: 100%;
        order: 2;
        height: 150px;
    }
`

const Image2 = styled.div`
    width: 45%;
    position: absolute;
    top: -100px;
    right: 0;

    img {
        width: 100%;
        height: 100%;
        border-radius: 30px;
        object-fit: cover;
    }

    @media screen and (max-width: 700px) {
       position: initial;
    }

    @media screen and (max-width: 600px) {
        height: 300px;
        width: 100%;
        border-radius: 70px;
    }
`

const Vismis = () => {
    return (
        <Container>
            <h2>
                we are breaking boundaries to financial services for the underserved and middle class
            </h2>
            <Vis>
                <Image1>
                    <img src={image} alt="image" />
                </Image1>
                <Info1>
                    <div>Vision</div>
                    <p>Financial freedom for all</p>
                </Info1>
            </Vis>

            <Mis>
                <Info2>
                    <div>Mission</div>
                    <p>Building the next generation banking that leverages technology to create wealth for all.</p>
                </Info2>
                <Image2>
                    <img src={image2} alt="image" />
                </Image2>
            </Mis>
        </Container>
    )
}

export default Vismis
