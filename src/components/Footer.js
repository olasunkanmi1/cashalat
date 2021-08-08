import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components/macro'
import logo from '../images/logo2.png'

//styles
const Container = styled.footer`
    display: grid;
    grid-template-columns: 30% 70%;
    padding: 3rem 6rem;
    background: #0847A8;
    color: #fff;

    @media screen and (max-width: 1000px) {
        padding: 3rem 5rem;
    }

    @media screen and (max-width: 920px) {
        padding: 3rem 4.5rem;
    }

    @media screen and (max-width: 850px) {
        padding: 3rem 4rem;
    }

    @media screen and (max-width: 768px) {
        padding: 3rem 3rem;
        flex-direction: column;
    }

    @media screen and (max-width: 450px) {
        padding: 3rem 1.5rem;
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

        @media screen and (max-width: 870px) {
            margin-right:  30px;
        }

        @media screen and (max-width: 768px) {
            width: 33.3%;
            margin-right:  15px;
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
    return (
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
                </div>
            </Wrapper>
            <Cr>
                <p>&copy; 2021 Cashalat is a property of Cashalat Global Technology Limited, a company duly registered with CAC. Cashalat provides financial services under a Cooperative License. Both Cashalat Coop and Cashalat Global Technology Limited are legal entities in Nigeria. We are partnering with National Microfinance Bank using their license.</p>
                <p>All saved funds are warehoused with and managed by Stanbic IBTC Assets, the leading asset management company in Nigeria, registered and licensed by the Securities and Exchange Commission (SEC) </p>
                <p>Registered Address: Plot 1 Prince Adeyinka Avenue, off Ozumba Mbadiwe, Victoria Island, Lagos.</p>
            </Cr>
        </Container>
    )
}

export default Footer
