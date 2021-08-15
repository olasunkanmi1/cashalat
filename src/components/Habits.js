import React from 'react'
import styled from 'styled-components'

//data
import { HabitData } from '../data/HabitData'

//styles
const Container = styled.section`
    display: flex;
    flex-direction: column;
    background: #E5F9FF;
    padding: 10rem 25rem 2rem 25rem;

    @media screen and (max-width: 1800px) {
        padding: 10rem 20rem 2rem 20rem;
    }
    @media screen and (max-width: 1600px) {
        padding: 10rem 15rem 2rem 15rem;
    }
    @media screen and (max-width: 1400px) {
        padding: 10rem 10rem 2rem 10rem;
    }
    @media screen and (max-width: 920px) {
        padding: 10rem 6rem 0 6rem;
    }

    @media screen and (max-width: 768px) {
        padding: 10rem 5rem 0 5rem;
    }

    @media screen and (max-width: 600px) {
        padding: 10rem 3rem 0 3rem;
    }
    @media screen and (max-width: 500px) {
        padding: 10rem 3rem 0 3rem;
    }
    @media screen and (max-width: 450px) {
        padding: 10rem 2rem 0 2rem;
    }

    h4 {
        text-align: center;
        margin-bottom: 3rem;
    }
`

const Wrapper = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr 1fr;

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 1fr;
    }
    
    @media screen and (max-width: 750px) {
        grid-template-columns: 1fr;
    }
`

const Card = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 250px;
    width: 250px;
    background: linear-gradient(to bottom, #E5F9FF, #fff);
    border-radius: 40px;
    padding: 2rem;
    position: relative;
    box-shadow: 0 5px 30px 0 rgba(20, 56, 97, 0.1);
    margin-bottom: 50px;

    @media screen and (max-width: 300px) {
        height: 230px;
        width: 200px;
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70px;
        height: 70px;
        border-radius: 20px;
        background: #fff;
        position: absolute;
        top: -35px;

        img {
            width: 30px;
            height: 30px;
        }
    }

    h2 {
        margin: 20px 0;

        @media screen and (max-width: 300px) {
            margin: 10px 0;
        }
    }

    p {
        text-align: center;
        font-size: 15px;

        @media screen and (max-width: 300px) {
            font-size: 13px;
        }
    }
`

const Habits = () => {
    return (
        <Container>
            <h4>Whatever your saving habits or goals are, we have a savings plan that caters to you.</h4>

            <Wrapper>
                {HabitData.map((item, index) => (
                    <Card key={index}>
                        <div><img src={item.icon} alt="icon" /></div>
                        <h2>{item.title}</h2>
                        <p>{item.paragraph}</p>
                    </Card>
                ))}
            </Wrapper>
        </Container>
    )
}

export default Habits
