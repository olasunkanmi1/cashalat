import * as FaIcons from 'react-icons/fa'
import * as RiIcons from 'react-icons/ri'
import about from '../images/icons/AboutUs.svg'
import careers from '../images/icons/Careers.svg'
import savings from '../images/icons/Savings.svg'
import investments from '../images/icons/Investments.svg'
import loans from '../images/icons/Loans.svg'
import payments from '../images/icons/Payment.svg'
import faqs from '../images/icons/Faqs.svg'
import contact from '../images/icons/AboutUs.svg'


export const menuData =[
    {title: "Company", iconClosed: <RiIcons.RiArrowDownSFill />, iconOpened: <RiIcons.RiArrowUpSFill />, submenu: [
        {title: 'About', icon: about, link: "/about"}, 
        {title: 'Careers', icon: careers, link: "/careers"}]
    },

    {title: "Features", iconClosed: <RiIcons.RiArrowDownSFill />, iconOpened: <RiIcons.RiArrowUpSFill />, submenu: [
        {title: 'Savings', icon: savings, link: "/savings"}, 
        {title: 'Investments', icon: investments, link: "/investments"},
        {title: 'Loans', icon: loans, link: "/loans"},
        {title: 'Payments', icon: payments, link: "/payments"}]
    },

    {title: "Help",  iconClosed: <RiIcons.RiArrowDownSFill />, iconOpened: <RiIcons.RiArrowUpSFill />, submenu: [
        {title: 'FAQs', icon: faqs, link: "/faqs"}, 
        {title: 'Contact', icon: contact, link: "/contact"},
    ]}
];