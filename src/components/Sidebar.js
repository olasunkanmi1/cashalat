import React from 'react'
import styled, { css } from 'styled-components/macro'
import { menuData } from '../data/MenuData'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
import './rough.css'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #fff;
    z-index: 9;
    position: fixed;
    top: 0;
    right: 0;
    transition: .6s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    border-bottom: 1px solid #ccc;
`

const Close = styled(AiOutlineClose)`
    color: #0847A8;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
`
const SidebarMenu = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-top: 4rem;
    padding: 1rem;
`

const SidebarMenuLink = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: #8D8D8D;
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 5px;
    text-decoration: none;
    width: 100%;
    transition: .3s;
    position: relative;
    cursor: pointer;

    &:nth-child(1) {
        height: 130px;
    }
    &:nth-child(2) {
        height: 100px;
    }

    &:last-child {
        margin-bottom: 0;
    }

    &:hover {
        color: #0847A8;
    }

    @media screen and (max-width: 320px) {
        font-size: 1.3rem;
    }
`

const SubMenu = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    padding: 10px;
    width: 100%;
    background: #0847A8;
    border-radius: 10px;
`

const SubMenuLinks = styled(Link)`
    margin-bottom: 10px;
    color: #fff;
    font-size: 1.2rem;
    transition: .5s;

    @media screen and (max-width: 320px) {
        font-size: 1rem;
    }

    &:last-child {
        margin-bottom: 0;
    }

    &:hover {
        color: #FF620F;
    }
`

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <Container isOpen={isOpen} onClick={toggle} id="home">
            <Close onClick={toggle} />
            <SidebarMenu>
                {menuData.map((item, index) => (
                    <SidebarMenuLink key={index} className="menu">
                        <div>{item.title} {item.icon}</div>
                        <SubMenu className="sub-menu">
                            {item.submenu.map((item, index) => (
                                <SubMenuLinks key={index} to={item.link}>
                                    {item.title}
                                </SubMenuLinks>
                            ))}
                        </SubMenu>
                    </SidebarMenuLink>
                ))}
            </SidebarMenu>
        </Container>
    )
}

export default Sidebar