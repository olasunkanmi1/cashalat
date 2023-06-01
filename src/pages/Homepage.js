import React, {useEffect} from 'react'

//components
import {Experience, Smart, Savings, Diversify, Payments, Loans} from '../components'

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