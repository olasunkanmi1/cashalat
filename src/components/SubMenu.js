import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

//styles
const SidebarLink = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    color: #8D8D8D;
    font-size: 20px;
    height: 45px;
    cursor: pointer;
    z-index: 20;

    &:hover {
        color: #0847A8;
    }
    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const DropdownLink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
    color: #8D8D8D;
    font-size: 18px;
    margin-left: 20px;
    transition: .5s;
    position: relative;

    &:hover {
        color: #0847A8;
    }
`

const Icon = styled.i`
    position: absolute;
    width: 100px;
    height: 100px;
    left: -65px;
    top: -41px;
    z-index: 1;
`
const Title = styled(Link)`
    /* min-width: calc(100% - 20px); */
    min-width: 100%;
    text-align: center;
    color: #8D8D8D;
    transition: .5s;
    z-index: 101;
    
    &:hover {
        color: #0847A8;
    }
`

const SubMenu = ({ item, toggle }) => {

    const [submenu, setSubmenu] = useState(false)

    const showsubmenu = () => setSubmenu(!submenu)

    return (
        <>
            <SidebarLink onClick={item.submenu && showsubmenu}>
                <div>
                    {item.title}
                </div>
                <div>
                    {item.submenu && submenu ? item.iconOpened : item.submenu ? item.iconClosed : null}
                </div>
            </SidebarLink>
            {submenu && item.submenu.map((item, index) => {
                return (
                    <DropdownLink key={index}>
                        <Icon><img src={item.icon} alt='icon' /></Icon> 
                        <Title to={item.link} onClick={toggle}>{item.title}</Title>
                    </DropdownLink>
                )
            })}
        </>
    )
}

export default SubMenu
