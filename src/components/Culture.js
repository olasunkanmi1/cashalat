import React from 'react'
import styled from 'styled-components'
import image from '../images/culture2.png'

//styles
const Container = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 4rem 12rem;
    background: #E5F9FF;

    @media screen and (max-width: 1200px) {
        padding: 4rem 10rem;
    }

    @media screen and (max-width: 1000px) {
        padding: 4rem 8rem;
        flex-direction: column;
    }

    @media screen and (max-width: 920px) {
        padding: 4rem 6rem;
    }
    @media screen and (max-width: 768px) {
        padding: 4rem 5rem;
    }
    @media screen and (max-width: 600px) {
        padding: 4rem 4rem;
    }
    @media screen and (max-width: 500px) {
        padding: 4rem 3rem;
    }

    @media screen and (max-width: 450px) {
        padding: 4rem 2rem;
    }
`

const Image = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 20%;

    @media screen and (max-width: 1725px) {
        width: 30%;
    }
    @media screen and (max-width: 1215px) {
        width: 40%;
        padding-bottom: 5rem;
    }
    @media screen and (max-width: 1015px) {
        padding-bottom: 10rem;
    }
    @media screen and (max-width: 1000px) {
        padding-bottom: 2rem;
        width: 100%;
        align-items: center;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
    }

    h1 {
        font-size: 50px;
        color: #0847A8;
        margin-bottom: 2rem;
        width: 100%;

        @media screen and (max-width: 768px) {
            font-size: 40px;
        }
        @media screen and (max-width: 500px) {
            font-size: 30px;
        }
    }

    img {
        width: 350px;
        height: 300px;

        @media screen and (max-width: 380px) {
            width: 280px;
            height: 250px;
        }
    }
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;

    @media screen and (max-width: 1000px) {
        width: 100%;
    }

    p {
        font-size: 18px;
        margin-bottom: 15px;

        &:last-child {
            margin-bottom: 0;
        }
    }
`

const Wrap = styled.section`
    display: flex;
    flex-direction: column;
`

const Culture = () => {
    return (
        <Container>
            <Image>
                <h1>culture at cashalat</h1>
                <img src={image} alt="career" />
            </Image>
            <Info>
                <Wrap>
                    <p>Our culture is a vital component of Cashalat. Without our unique culture, we wouldn’t be here.</p>
                    <p>We consciously nurture an inclusive environment where everyone’s ideas and opinions are heard. We are all instrumental in the success of Cashalat– and every team member has a direct and visible impact on the business.</p>
                    <p>Communication is key to what we do – we have regular company meetings to keep up to date on all aspects of the business (from growth to technology). This encourages collaboration and cohesion. It also focuses the team on our shared vision: developing the very best financial technology tools and information to help everyone save and invest for their future.</p>
                    <p>A learning mentality underpins everything we do–personal growth and development is very important to us. Building the NEXT GENERATION BANKING APP means that we’re learning new things every day, and we support development through professional training and attending conferences and events.</p>
                    <p>Our office environment is open and relaxed (our dress code inclusive!) because we want everyone to relax and feel at home.</p>
                    <p>We know how to have fun and routinely organise social events – whether it’s celebrating business milestones, our birthdays & Christmas parties, games, some karaoke or an impromptu visit to our trusted customers. We even have a dedicated Culture department to ensure we never run out of exciting things to do.</p>
                </Wrap>
            </Info>
        </Container>
    )
}

export default Culture
