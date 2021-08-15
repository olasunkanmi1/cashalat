import React from 'react'
import styled from 'styled-components'
import image from '../images/cp.png'
import image2 from '../images/cp2.png'

//styles
const Container =  styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 75px;
    padding: 4rem 12rem;

    @media screen and (max-width: 1200px) {
        padding: 4rem 10rem;
    }
    @media screen and (max-width: 1000px) {
        padding: 4rem 8rem;
    }

    @media screen and (max-width: 920px) {
        padding: 4rem 6rem;
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
        padding: 2rem 3rem 0 2rem;
    }
`

const Head = styled.div`
    display: flex;
    justify-content: center;

    h2 {
        font-size: 35px;
        font-weight: 700;
        color: #0847A8;
        width: 55%;
        text-align: center;
        margin-bottom: 2rem;

        @media screen and (max-width: 1390px) {
            width: 60%;
        }
        
        @media screen and (max-width: 1315px) {
            width: 70%;
        }
        
        @media screen and (max-width: 1115px) {
            width: 90%;
        }
        
        @media screen and (max-width: 840px) {
            width: 100%;
        }
        
        @media screen and (max-width: 730px) {
            font-size: 30px;
        }
    }
`

const Vis = styled.div`
    display: grid;
    grid-template-columns: .7fr .3fr;
    grid-template-rows: 400px;

    @media screen and (max-width: 1400px) {
        grid-template-rows: 300px;
    }
    @media screen and (max-width: 1100px) {
        display: flex;
        justify-content: space-between;
    }
    
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

const Image1 = styled.div`
    grid-column: 1 / 2;

    img {
        width: 100%;
        height: 100%;
        border-radius: 30px;
        object-fit: cover;
    }

    @media screen and (max-width: 1100px) {
        height: 300px;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 2rem;
    }

    @media screen and (max-width: 600px) {
        height: 300px;
    }
`

const Info1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    grid-column: 2 / 3;
    padding: 5rem 2rem;

    @media screen and (max-width: 1670px) {
        padding: 5rem 1rem;
    }
    
    @media screen and (max-width: 1150px) {
        padding: 3rem 1rem;
    }
    
    @media screen and (max-width: 768px) {
        padding: 0;
        align-items: flex-start;
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
        margin-bottom: 15px;

        @media screen and (max-width: 500px) {
            font-size: 18px;
            width: 100px;
        }
    }

    p {
        color: #8D8D8D;
        font-size: 20px;
        font-weight: 700;

        @media screen and (max-width: 500px) {
            font-size: 18px;
        }
    }
`

const Mis = styled.div`
    display: flex;
    justify-content: space-between;
    height: 200px;
    margin-bottom: 5rem;
    position: relative;

    @media screen and (max-width: 768px) {
        height: 400px;
    }
    
    @media screen and (max-width: 650px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: auto;
    }
`

const Info2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem 0rem 0 20rem;
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
        margin-bottom: 15px;

        @media screen and (max-width: 500px) {
            font-size: 18px;
            width: 100px;
        }
    }

    p {
        color: #8D8D8D;
        font-size: 20px;
        font-weight: 700;

        @media screen and (max-width: 500px) {
            font-size: 18px;
        }
    }

    @media screen and (max-width: 1700px) {
        padding: 2rem 0rem 0 15rem;
    }
    @media screen and (max-width: 1600px) {
        padding: 2rem 0rem 0 10rem;
    }
    @media screen and (max-width: 1360px) {
        padding: 2rem 0rem 0 7rem;
    }
    @media screen and (max-width: 1150px) {
        padding: 1rem 0rem 0 3rem;
    }
    @media screen and (max-width: 1110px) {
        padding: 1rem 0rem 0 0rem;
    }

    @media screen and (max-width: 768px) {
        padding: 6rem 0;
    }

    @media screen and (max-width: 650px) {
        order: 2;
        padding: 0;
        width: 100%;
    }
`

const Image2 = styled.div`
    width: 400px;
    height: 400px;
    position: absolute;
    top: -200px;
    right: 250px;

    @media screen and (max-width: 1800px) {
        right: 150px;
    }
    @media screen and (max-width: 1600px) {
        right: 50px;
    }
    @media screen and (max-width: 1400px) {
        width: 300px;
        height: 300px;
        top: -100px;
    }

    @media screen and (max-width: 1100px) {
        top: -150px;
    }
    @media screen and (max-width: 870px) {
        right: 0;
    }

    @media screen and (max-width: 768px) {
        position: initial;
        height: 400px;
        width: 400px;
    }

    img {
        width: 100%;
        height: 100%;
        border-radius: 30px;
        object-fit: contain;
    }

    @media screen and (max-width: 650px) {
        height: 300px;
        width: 100%;
        border-radius: 70px;
    }
`

const Vismis = () => {
    return (
        <Container>
            <Head>
            <h2>
                we are breaking boundaries to financial services for the underserved and middle class
            </h2>
            </Head>
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
