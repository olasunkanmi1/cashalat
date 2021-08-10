import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components/macro'
import logo from '../images/logo.png'
import {AiOutlineMenu} from 'react-icons/ai'
import { menuData } from '../data/MenuData'
import Sidebar from './Sidebar'
import './rough.css'

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

        @media screen and (max-width: 340px) {
            height: 35px;
        }
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

        @media screen and (max-width: 340px) {
            height: 35px;
            width: 35px;
        }
    }
`

const MenuItems = styled(Link)`
    display: flex;
    height: 100%;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

const MenuLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: #8D8D8D;
    margin-right: 45px;
    transition: .5s;
    position: relative;
    height: 100%;
    z-index: 11;

    &:last-child {
        margin-right: 0;
    }
    
    &:hover {
        color: #0847A8;
    }
`

const SubMenu = styled.div`
    width: 170px;
    position: absolute;
    top: 0;
    margin-top: 40px;
    padding: 10px;
    display: none;
    z-index: 6;
    background: #0847A8;
    border-radius: 10px;
`

const SubMenuLinks = styled(Link)`
    text-align: center;
    margin-bottom: 10px;
    color: #fff;
    font-size: 17px;
    transition: .5s;

    &:last-child {
        margin-bottom: 0;
    }

    &:hover {
        color: #FF620F;
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
                    <MenuLinks key={index} className="menu">
                        {item.title} {item.icon}
                        <SubMenu className="sub-menu">
                            {item.submenu.map((item, index) => (
                                <SubMenuLinks key={index} to={item.link}>
                                    {item.title}
                                </SubMenuLinks>
                            ))}
                        </SubMenu>
                    </MenuLinks>
                ))}
            </MenuItems>
        </Container>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle} />
        </>
    )
}

export default Header
