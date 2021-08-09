import React, { useEffect } from 'react'

//components
import Vismis from '../components/Vismis'
import Journey from '../components/Journey'

const Company = () => {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <>
            <Vismis />
            <Journey />
        </>
    )
}

export default Company
