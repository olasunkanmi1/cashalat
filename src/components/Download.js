import React from 'react'
import styled from 'styled-components'
import Newsletter from './Newsletter'
import playstore from '../images/playstore.png'
import applestore from '../images/applestore.png'
import bg from '../images/bg.png'

//styles
const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    background-image: url(${bg});
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 40%;

    h2 {
        font-size: 35px;
        font-weight: 700;
        color: #0847A8;
    }

    h3 {
        font-weight: 500;
        font-size: 20px;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 50px;
        margin: 1rem 0;

        img {
            height: 40px;
        }
    }
`

const Download = () => {
    return (
        <Container>
            <Wrapper>
                <h2>Get the free App</h2>
                <h3>Your best financial life starts here.</h3>
                <div>
                    <img src={playstore} alt="playstore" />
                    <img src={applestore} alt="applestore" />
                </div>
                <Newsletter />
            </Wrapper>
            
        </Container>
    )
}

export default Download
