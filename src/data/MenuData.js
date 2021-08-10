import styled from 'styled-components/macro'
import {AiOutlineDown} from 'react-icons/ai'
import '../components/rough.css'

const SubMenu = styled(AiOutlineDown)`
    fill: #8D8D8D ;
    margin-left: 5px;
    width: 10px;
    height: 10px;
`

export const menuData =[
    {title: "Company", icon: <SubMenu className="sm" />, submenu: [
        {title: 'company-1', link: "/company/company-1"}, 
        {title: 'company culture', link: "/company/company-culture"}]
    },

    {title: "Features", icon: <SubMenu className="sm" />, submenu: [
        {title: 'savings', link: "/features/savings"}, 
        {title: 'Investments', link: "/features/investments"},
        {title: 'loans', link: "/features/loans"},
        {title: 'payments', link: "/features/payments"}]
    },

    {title: "Help", link: "/help", submenu: []}
];