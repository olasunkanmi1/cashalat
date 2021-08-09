import React, { useEffect } from 'react'

//components
import Experience from '../components/Experience'
import Smart from '../components/Smart'
import Savings from '../components/Savings'
import Diversify from '../components/Diversify'
import Payments from '../components/Payments'
import Loans from '../components/Loans'

//datas
import {experience, smart, savings, diversify, payments, loans} from '../data/HomepageData'

const Homepage = () => {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <>
           <Experience {...experience}/>
           <Smart {...smart} />
           <Savings {...savings} />
           <Diversify {...diversify} />
           <Payments {...payments} />
           <Loans {...loans} />
        </>
    )
}

export default Homepage
