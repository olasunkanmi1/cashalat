import React from 'react'
import styled from 'styled-components'
import sbs from '../images/sbs.svg';

//styles
const Container = styled.section`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background: #EDEDED;
    padding: 1rem 1rem;
    border-radius: 20px;
    width: 100%;
`

const Input = styled.section`
    display: flex;
    height: 40px;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    margin-top: 1.5rem;
    border-radius: 10px;

    input {
        padding: 10px;
        width: 70%;
        height: 100%;
        border-radius: 10px;
        outline: none;
        border: none;
        font-size: 15px;

        @media screen and (max-width:350px) {
            width: 50%;
        }
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FF620F;
        color: #fff;
        border-radius: 10px;
        width: 30%;
        height: 100%;
        outline: none;
        border: none;
        cursor: pointer;
        font-size: 15px;

        @media screen and (max-width: 1000px) {
            width: 40%;
        }

        @media screen and (max-width:390px) {
            font-size: 13px;
        }
        
        @media screen and (max-width:350px) {
            width: 50%;
        }
    }
`
const Arr = styled.i`
    margin-left: 5px;
    background-image: url(${sbs});
    background-size: contain;
    width: 20px;
    height: 20px;

    @media screen and (max-width:390px) {
        width: 15px;
        height: 15px;
    }
`

const Newsletter = () => {
    return (
        <Container>
            <h5>sign up for our newsletter</h5>
            <Input>
                <input type="email" placeholder="your email" />
                <button type="submit">Get Started <Arr /></button>
            </Input>
        </Container>
    )
}

export default Newsletter
