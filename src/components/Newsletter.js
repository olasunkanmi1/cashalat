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

const Input = styled.form`
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

        @media screen and (max-width: 300px) {
            font-size: 13px;
        }
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FF620F;
        color: #fff;
        border-radius: 10px;
        width: 40%;
        height: 100%;
        outline: none;
        border: none;
        padding: 10px;
        cursor: pointer;
        font-size: 15px;

        @media screen and (max-width: 1105px) {
            font-size: 13px;
        }
        @media screen and (max-width: 1050px) {
            width: 50%;
        }
        @media screen and (max-width: 820px) {
            width: 55%;
        }
        @media screen and (max-width: 768px) {
            width: 30%;
            font-size: 15px;
        }
        @media screen and (max-width: 570px) {
            width: 40%;
        }
        @media screen and (max-width: 465px) {
            width: 50%;
        }
        @media screen and (max-width: 375px) {
            width: 60%;
            font-size: 13px;
        }
        @media screen and (max-width: 330px) {
            width: 80%;
        }
        @media screen and (max-width: 300px) {
            width: 100%;
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
                <input type="email" placeholder="your email" required />
                <button type="submit">Get Started <Arr /></button>
            </Input>
        </Container>
    )
}

export default Newsletter
