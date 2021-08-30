import React, { useState } from 'react'
import styled, { css } from 'styled-components/macro'
import { menuData } from '../data/MenuData'
import { Link } from 'react-router-dom'
import SubMenu from './SubMenu'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #fff;
    position: fixed;
    z-index: 99;
    top: 0;
    right: 0;
    transition: .2s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-150%')};
    border-bottom: 1px solid #ccc;
`

const SidebarMenu = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    margin-top: 5rem;
    padding: 1rem 5rem;

    @media screen and (min-width: 768px) {
        display: none;
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

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <Container isOpen={isOpen} id="home">
            <SidebarMenu>
                {menuData.map((item, index) => {
                    return <SubMenu item={item} toggle={toggle} key={index}/>
                })}
            </SidebarMenu>
        </Container>
    )
}

export default Sidebar