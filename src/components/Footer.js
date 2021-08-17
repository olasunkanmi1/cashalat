import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components/macro'
import logo from '../images/logo2.png'
import Download from './Download'

//styles
const Container = styled.footer`
    display: grid;
    grid-template-columns: 30% 70%;
    padding: 6rem 12rem 2rem 12rem;
    background: #0847A8;
    color: #fff;

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr;
        grid-template-rows: 100px auto auto;
        padding: 6rem 10rem 2rem 10rem;
    }
    @media screen and (max-width: 1000px) {
        padding: 6rem 8rem 2rem 8rem;
    }

    @media screen and (max-width: 920px) {
        padding: 6rem 6rem 2rem 6rem;
    }

    @media screen and (max-width: 768px) {
        padding: 6rem 5rem 2rem 5rem;
        flex-direction: column;
    }

    @media screen and (max-width: 600px) {
        padding: 6rem 4rem 2rem 4rem;
    }
    @media screen and (max-width: 500px) {
        padding: 6rem 3rem 2rem 3rem;
    }

    @media screen and (max-width: 450px) {
        padding: 6rem 2rem 2rem 2rem;
    }
`

const Logo = styled.div`
    display: flex
    align-items: center;
    position: relative;

    img {
        height: 35px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }

    @media screen and (max-width: 1200px) {
        grid-column: 1 / 3;
    }
    
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    color: #fff;

    div {
        display: flex;
        flex-direction: column;

        a {
            font-size: 15px;
            color: #fff;
            margin-bottom: 10px;
            transition: .5s;

            &:hover {
                color: #FF620F;
            }
        }

        @media screen and (max-width: 500px) {
            width: 100%;
        }
    }

    h4 {
        margin-bottom: 1.3rem;
        font-weight: bold;
        font-size: 17px;
    }

    @media screen and (max-width: 720px) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 30px;
    }
    
    @media screen and (max-width: 360px) {
        grid-template-columns: 1fr 1fr;
    }
`

const Cr = styled.div`
    margin-top: 2.5rem;
    grid-column: 1 / 3;

    p {
        margin-bottom: 20px;
        font-size: 15px;

        &:last-child {
            margin-bottom: 0;
        }
    }
`

const Footer = () => {
    return (<>
        <Download />
        <Container>
            <Logo>
                <img src={logo} alt="logo" />
            </Logo>
            <Wrapper>
                <div>
                    <h4>Features</h4>
                    <a href="/">Vaultlock</a>
                    <a href="/">DollarPot</a>
                    <a href="/">PennySave</a>
                    <a href="/">Cluster</a>
                    <a href="/">Target Savings</a>
                    <a href="/">Petty Cash</a>
                    <a href="/">Investments</a>
                    <a href="/">Payments</a>
                    <a href="/">Loans</a>
                </div>

                <div>
                    <h4>Company</h4>
                    <a href="/">About</a>
                    <a href="/">Career</a>
                </div>

                <div>
                    <h4>Help</h4>
                    <a href="/">FAQs</a>
                    <a href="/">Contact</a>
                </div>

                <div>
                    <h4>Legal</h4>
                    <a href="/">Privacy Policy</a>
                    <a href="/">Terms & Conditions</a>
                    <a href="/">Cookies</a>
                </div>

                <div>
                    <h4>Socials</h4>
                    <a href="/">LinkedIn</a>
                    <a href="/">Twitter</a>
                    <a href="/">Facebook</a>
                    <a href="/">Instagram</a>
                    <a href="/">Youtube</a>
                </div>
            </Wrapper>
            <Cr>
                <p>&copy; 2021 Cashalat is a property of CAPITALBRIDGE Financial Services Limited, both Cashalat Co-op, and CAPITALBRIDGE Financial Services Limited are legal entities in Nigeria. We are partnering with a Microfinance Bank, operating with their license</p>
                <p>All saved funds are warehoused with and managed by Stanbic IBTC Assets, the leading asset management company in Nigeria, registered and licensed by the Securities and Exchange Commission (SEC) </p>
            </Cr>
        </Container>
        </>
    )
}

export default Footer
