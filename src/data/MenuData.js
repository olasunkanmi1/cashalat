import styled from 'styled-components/macro'
import {AiOutlineDown} from 'react-icons/ai'

const SubMenu = styled(AiOutlineDown)`
    fill: #8D8D8D ;
    margin-left: 5px;
    width: 10px;
    height: 10px;
`

export const menuData =[
    {title: "Company", link: "/company", icon: <SubMenu />},
    {title: "Features", link: "/features", icon: <SubMenu />},
    {title: "Help", link: "/help"}
];