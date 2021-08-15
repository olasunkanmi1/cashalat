import React from 'react'
import styled, { css } from 'styled-components/macro'
import { menuData } from '../data/MenuData'
import { Link } from 'react-router-dom'
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
    transition: .3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    border-bottom: 1px solid #ccc;
`

const SidebarMenu = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-top: 5rem;
    padding: 1rem 5rem;

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
        margin-bottom: 10px;
    }
    &:nth-child(2) {
        height: 190px;
        margin-bottom: 10px;
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
            <SidebarMenu>
                {menuData.map((item, index) => (
                    <SidebarMenuLink key={index} className="menu">
                        <div>{item.title}</div>
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