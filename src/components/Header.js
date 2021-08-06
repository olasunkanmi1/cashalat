import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components/macro'
import logo from '../images/logo.png'
import {AiOutlineMenu} from 'react-icons/ai'
import { menuData } from '../data/MenuData'

//styles
const Container = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 75px;
    width: 100%;
    padding: 1rem 5rem;
    z-index: 10;
    border-bottom: 1px solid #ccc;
`

const Logo = styled(Link)`
    img {
        height: 50px;
    }
`

const MenuBars = styled(AiOutlineMenu)`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        height: 40px;
        width: 40px;
        color: #0847A8;
        cursor: pointer;
    }
`

const MenuItems = styled(Link)`
    display: flex;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

const MenuLinks = styled(Link)`
    display: flex;
    font-size: 20px;
    color: #8D8D8D;
    margin-right: 15px;
    transition: .3s;

    &:last-child {
        margin-right: 0;
    }
    
    &:hover {
        color: #0847A8;
    }
`

const Header = () => {
    return (
        <Container>
            <Logo to="/">
                <img src={logo} alt="logo" />
            </Logo>
            <MenuBars />
            <MenuItems>
                {menuData.map((item, index) => (
                    <MenuLinks to={item.link} key={index}>
                        {item.title}
                    </MenuLinks>
                ))}
            </MenuItems>
        </Container>
    )
}

export default Header
