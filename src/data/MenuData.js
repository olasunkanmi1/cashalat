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
        {title: 'About', link: "/company/about"}, 
        {title: 'Careers', link: "/company/careers"}]
    },

    {title: "Features", icon: <SubMenu className="sm" />, submenu: [
        {title: 'Savings', link: "/features/savings"}, 
        {title: 'Investments', link: "/features/investments"},
        {title: 'loans', link: "/features/loans"},
        {title: 'payments', link: "/features/payments"}]
    },

    {title: "Help", icon: <SubMenu className="sm" />, submenu: [
        {title: 'FAQs', link: "/features/faqs"}, 
        {title: 'Contact', link: "/features/contact"},
    ]}
];