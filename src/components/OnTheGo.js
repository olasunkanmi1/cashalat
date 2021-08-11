import React from 'react'
import styled from 'styled-components'
import image from '../images/inv2.png'

//styles
const Container = styled.section`
    display: grid;
    grid-template-columns: .40fr .60fr;
    margin-top: 75px;
    padding: 4rem 6rem 2rem 0;

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
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 450px) {
        padding: 4rem 1.5rem;
`

const Info = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 5rem 0 5rem 5rem;

        h2 {
            font-size: 50px;
            color: #0847A8;
        }

        p {
            font-size: 20px;
        }
`

const Image = styled.div`
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const MoreMoney = () => {
    return (
        <Container>
            <Image>
                <img src={image} alt="img" />
            </Image>
            <Info>
                <h2>investments beget more money in your account.</h2>
                <p>With the least naira amount, a meagre cash Investment, gives you mouth watery returns.</p>
            </Info>
        </Container>
    )
}

export default MoreMoney
