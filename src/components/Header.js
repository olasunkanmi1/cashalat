import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import logo from '../images/logo.png'
import { menuData } from '../data/MenuData'
import Sidebar from './Sidebar'
import './rough.css'

//styles
const Container = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 85px;
    width: 100%;
    padding: 1rem 12rem;
    z-index: 10;
    position: fixed;
    top: 0;
    background: #fff;
    border-bottom: 1px solid #ccc;

    @media screen and (max-width: 1200px) {
        padding: 1rem 10rem;
    }
    @media screen and (max-width: 1000px) {
        padding: 1rem 8rem;
    }

    @media screen and (max-width: 920px) {
        padding: 1rem 6rem;
    }
    @media screen and (max-width: 768px) {
        padding: 1rem 5rem;
    }
    @media screen and (max-width: 600px) {
        padding: 1rem 4rem;
    }
    @media screen and (max-width: 500px) {
        padding: 1rem 3rem;
    }

    @media screen and (max-width: 450px) {
        padding: 1rem 2rem;
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

const MenuIcon = styled.div`
    display: none;
    position: relative;

    div {
        display: ${({ isOpen }) => (isOpen ? "none" : "flex")};
        height: 3px;
        background: #0847A8; 
        width: 80%;
    }

    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        width: 40px;
        color: #0847A8;
        cursor: pointer;

        @media screen and (max-width: 340px) {
            height: 35px;
            width: 35px;
        }
    }

    &:before {
        content: "";
        position: absolute;
        width: 80%;
        height: 3px;
        background-color: #0847A8;
        transform: ${({ isOpen }) => (isOpen ? 'translateY(0px) rotate(45deg)' : 'translateY(-10px)')};
        transition: 0.2s;
    }

    &:after {
        content: "";
        position: absolute;
        width: 80%;
        height: 3px;
        background-color: #0847A8;
        transition: 0.2s;
        transform: ${({ isOpen }) => (isOpen ? 'translateY(0px) rotate(-45deg)' : 'translateY(10px)')};
    }
`

const MenuItems = styled.div`
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
    font-size: 18px;
    font-weight: 700;
    color: #8D8D8D;
    margin-right: 45px;
    transition: .5s;
    position: relative;
    height: 100%;
    cursor: pointer;

    &:last-child {
        margin-right: 0;
    }
    
    &:hover {
        color: #0847A8;
    }
`

const SubMenu = styled.div`
    width: auto;
    position: absolute;
    top: 0;
    margin-top: 50px;
    padding: 20px 20px 20px 40px;
    display: none;
    z-index: 6;
    background: #fff;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;;
`

const SubMenuLinks = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 17px;
    position: relative;

    &:last-child {
        margin-bottom: 0;
    }
`

const Icon = styled.i`
    position: absolute;
    width: 100px;
    height: 100px;
    left: -65px;
`
const Title = styled(Link)`
    color: #8D8D8D;
    transition: .5s;
    z-index: 13;
    
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
            <MenuIcon onClick={toggle} isOpen={isOpen}> <div></div></MenuIcon>
            <MenuItems>
                {menuData.map((item, index) => (
                    <MenuLinks key={index} className="menu">
                        {item.title} 
                        <SubMenu className="sub-menu">
                            {item.submenu.map((item, index) => (
                                <SubMenuLinks key={index}>
                                    <Icon><img src={item.icon} alt='icon' /></Icon> 
                                    <Title to={item.link}>{item.title}</Title>
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