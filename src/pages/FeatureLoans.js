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
        color: #0847A8;
        text-align: center;
        width: 60%;
    }
    
    h2 {
        font-size: 70px;
        color: #0847A8;
        text-align: center;
        width: 60%;
    }

    img {
        padding: 4rem 0;
    }
`

const FeatureLoans = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <Container>
            <h1>get instant funds when you need it.</h1>
            <h2></h2>
            <img src={image} alt="loan" />
            <p></p>
        </Container>
    )
}

export default FeatureLoans
