import React from 'react'

//components
import Experience from '../components/Experience'

//datas
import { experience } from '../data/HomepageData'

const Homepage = () => {
    return (
        <>
           <Experience {...experience}/> 
        </>
    )
}

export default Homepage
