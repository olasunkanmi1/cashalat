import React from 'react'
import styled from 'styled-components'

//styles
const Container = styled.section`
    display: flex;
    flex-direction: column;
    background: #EDEDED;
    padding: 1rem 1rem;
    border-radius: 20px;
`

const Input = styled.div`
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
    }

    button {
        background: #FF620F;
        color: #fff;
        border-radius: 10px;
        width: 30%;
        height: 100%;
        outline: none;
        border: none;
        cursor: pointer;
    }
`

const Newsletter = () => {
    return (
        <Container>
            <h5>sign up for our newsletter</h5>
            <Input>
                <input type="email" placeholder="your email" />
                <button type="submit">Get Started</button>
            </Input>
        </Container>
    )
}

export default Newsletter
