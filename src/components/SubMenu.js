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

    // &:hover {
    //     color: #0847A8;
    // }
    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const DropdownLink = styled(Link)`
    margin-bottom: 10px;
    color: #8D8D8D;
    font-size: 17px;
    margin-left: 20px;
    transition: .5s;

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
                    <DropdownLink to={item.link} key={index} onClick={toggle}>
                        <div>
                            {item.title}
                        </div>
                    </DropdownLink>
                )
            })}
        </>
    )
}

export default SubMenu
