import * as FaIcons from 'react-icons/fa'
import * as RiIcons from 'react-icons/ri'


export const menuData =[
    {title: "Company", iconClosed: <RiIcons.RiArrowDownSFill />, iconOpened: <RiIcons.RiArrowUpSFill />, submenu: [
        {title: 'About', link: "/about"}, 
        {title: 'Careers', link: "/careers"}]
    },

    {title: "Features", iconClosed: <RiIcons.RiArrowDownSFill />, iconOpened: <RiIcons.RiArrowUpSFill />, submenu: [
        {title: 'Savings', link: "/savings"}, 
        {title: 'Investments', link: "/investments"},
        {title: 'loans', link: "/loans"},
        {title: 'payments', link: "/payments"}]
    },

    {title: "Help",  iconClosed: <RiIcons.RiArrowDownSFill />, iconOpened: <RiIcons.RiArrowUpSFill />, submenu: [
        {title: 'FAQs', link: "/faqs"}, 
        {title: 'Contact', link: "/contact"},
    ]}
];