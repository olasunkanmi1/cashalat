import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components/macro'
import logo from '../images/logo.png'
import {AiOutlineMenu} from 'react-icons/ai'
import { menuData } from '../data/MenuData'
import Sidebar from './Sidebar'

//styles
const Container = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 75px;
    width: 100%;
    padding: 1rem 6rem;
    z-index: 10;
    position: fixed;
    top: 0;
    background: #fff;
    border-bottom: 1px solid #ccc;

    @media screen and (max-width: 1000px) {
        padding: 1rem 5rem;
    }

    @media screen and (max-width: 920px) {
        padding: 1rem 4.5rem;
    }

    @media screen and (max-width: 850px) {
        padding: 1rem 4rem;
    }

    @media screen and (max-width: 768px) {
        padding: 1rem 3rem;
    }

    @media screen and (max-width: 450px) {
        padding: 1rem 1.5rem;
    }
`

const Logo = styled(Link)`
    img {
        height: 40px;
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
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: #8D8D8D;
    margin-right: 45px;
    transition: .3s;

    &:last-child {
        margin-right: 0;
    }
    
    &:hover {
        color: #0847A8;
    }
`

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
      setIsOpen(!isOpen)
    }

    return (
        <>
        <Container toggle={toggle}>
            <Logo to="/">
                <img src={logo} alt="logo" />
            </Logo>
            <MenuBars onClick={toggle} />
            <MenuItems>
                {menuData.map((item, index) => (
                    <MenuLinks to={item.link} key={index}>
                        {item.title} {item.icon}
                    </MenuLinks>
                ))}
            </MenuItems>
        </Container>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle} />
        </>
    )
}

export default Header
