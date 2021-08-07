import React from 'react'

//components
import Experience from '../components/Experience'
import Smart from '../components/Smart'

//datas
import { experience } from '../data/HomepageData'

const Homepage = () => {
    return (
        <>
           <Experience {...experience}/>
           <Smart />
        </>
    )
}

export default Homepage
