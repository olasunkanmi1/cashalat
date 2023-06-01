import React, {useEffect} from 'react'

//components
import {Vismis, Journey} from '../components'

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
