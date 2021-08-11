import React, {useEffect} from 'react'
import styled from 'styled-components'
import image from '../images/loan.png'

//styles
const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 6rem;
    margin-top: 75px;

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
        padding: 4rem 3rem;
    }

    @media screen and (max-width: 450px) {
        padding: 4rem 1.5rem;
    }

    h1 {
        font-size: 70px;
        color: #FF620F;
        text-align: center;
        width: 40%;

        @media screen and (max-width: 1770px) {
            width: 50%;
        }
        @media screen and (max-width: 1460px) {
            width: 60%;
        }
        @media screen and (max-width: 1250px) {
            width: 70%;
        }
        @media screen and (max-width: 1100px) {
            width: 80%;
        }
        @media screen and (max-width: 1050px) {
            font-size: 60px;
        }
        @media screen and (max-width: 810px) {
            width: 90%;
        }
        @media screen and (max-width: 768px) {
            font-size: 50px;
            width: 80%;
        }
        @media screen and (max-width: 660px) {
            width: 90%;
        }
        @media screen and (max-width: 620px) {
            font-size: 40px;
        }
        @media screen and (max-width: 500px) {
            width: 100%;
        }
    }
    
    h2 {
        font-size: 70px;
        color: #0847A8;
        text-align: center;

        @media screen and (max-width: 1050px) {
            font-size: 60px;
        }
        @media screen and (max-width: 768px) {
            font-size: 50px;
        }
        @media screen and (max-width: 620px) {
            font-size: 40px;
        }
    }

    img {
        padding: 6rem 0;
        width: 50%;

        @media screen and (max-width: 1630px) {
            width: 60%;
        }
        @media screen and (max-width: 1300px) {
            width: 70%;
        }
        @media screen and (max-width: 1200px) {
            width: 80%;
        }
        @media screen and (max-width: 870px) {
            width: 90%;
            padding: 4rem 0;
        }
        @media screen and (max-width: 660px) {
            width: 100%;
            padding: 3rem 0;
        }
        @media screen and (max-width: 380px) {
            padding: 2rem 0;
        }
    }

    p {
        width: 50%;
        font-size: 20px;
        text-align: center;

        @media screen and (max-width: 1790px) {
            width: 60%;
        }
        @media screen and (max-width: 1520px) {
            width: 70%;
        }
        @media screen and (max-width: 1330px) {
            width: 80%;
        }
        @media screen and (max-width: 1190px) {
            width: 100%;
        }
    }
`

const FeatureLoans = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <Container>
            <h1>get instant funds when you need it.</h1>
            <h2>with zero collateral.</h2>
            <img src={image} alt="loan" />
            <p>Going out for shopping and you are cash trapped, there is no need to liquidate your savings or investment. Cashalat offers you instant, simple and flexible overdraft loans on your account which can be paid back seamlessly, while your savings or investments provide cashback for the facility.</p>
        </Container>
    )
}

export default FeatureLoans
