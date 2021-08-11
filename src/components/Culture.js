import React from 'react'
import styled from 'styled-components'
import image from '../images/culture2.png'

//styles
const Container = styled.section`
    display: flex;
    padding: 2rem 6rem;
    background: #E5F9FF;

    @media screen and (max-width: 1000px) {
        padding: 2rem 5rem;
    }

    @media screen and (max-width: 920px) {
        padding: 2rem 4.5rem;
    }

    @media screen and (max-width: 850px) {
        padding: 2rem 4rem;
    }

    @media screen and (max-width: 768px) {
        padding: 2rem 3rem;
        flex-direction: column;
    }

    @media screen and (max-width: 450px) {
        padding: 2rem 1.5rem;
    }
`

const Image = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;

    @media screen and (max-width: 768px) {
        width: 100%;
    }

    h1 {
        font-size: 60px;
        color: #0847A8;
        margin-bottom: 2rem;
    }

    img {
        width: 200px;
        height: 400px;
    }
`

const Info = styled.div`
    display: flex;
    flex-direction: column;

    p {
        font-size: 20px;
        margin-bottom: 15px;

        &:last-child {
            margin-bottom: 0;
        }
    }
`

const Culture = () => {
    return (
        <Container>
            <Image>
                <h1>culture at cashalat</h1>
                <img src={image} alt="career" />
            </Image>
            <Info>
                <p>Our culture is a vital component of Cashalat. Without our unique culture, we wouldn’t be here.</p>
                <p>We consciously nurture an inclusive environment where everyone’s ideas and opinions are heard. We are all instrumental in the success of Cashalat– and every team member has a direct and visible impact on the business.</p>
                <p>Communication is key to what we do – we have regular company meetings to keep up to date on all aspects of the business (from growth to technology). This encourages collaboration and cohesion. It also focuses the team on our shared vision: developing the very best financial technology tools and information to help everyone save and invest for their future.</p>
                <p>A learning mentality underpins everything we do–personal growth and development is very important to us. Building the NEXT GENERATION BANKING APP means that we’re learning new things every day, and we support development through professional training and attending conferences and events.</p>
                <p>Our office environment is open and relaxed (our dress code inclusive!) because we want everyone to relax and feel at home.</p>
                <p>We know how to have fun and routinely organise social events – whether it’s celebrating business milestones, our birthdays & Christmas parties, games, some karaoke or an impromptu visit to our trusted customers. We even have a dedicated Culture department to ensure we never run out of exciting things to do.</p>
            </Info>
        </Container>
    )
}

export default Culture
