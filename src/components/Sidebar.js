import React from 'react'
import styled, { css } from 'styled-components/macro'
import { menuData } from '../data/MenuData'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'

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

const SidebarMenuLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #8D8D8D;
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 5px;
    text-decoration: none;
    margin-bottom: 20px;
    width: 100%;
    height: 60px;
    transition: .3s;

    &:last-child {
        margin-bottom: 0;
    }

    &:hover {
        color: #0847A8;
    }
`

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <Container isOpen={isOpen} onClick={toggle} id="home">
            <Close onClick={toggle} />
            <SidebarMenu>
                {menuData.map((item, index) => (
                    <SidebarMenuLink to={item.link} key={index}>
                        {item.title}
                    </SidebarMenuLink>
                ))}
            </SidebarMenu>
        </Container>
    )
}

export default Sidebar
