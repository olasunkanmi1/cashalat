import React, { useEffect } from 'react'

//components
import Careers from '../components/Careers'
import Culture from '../components/Culture'


const CompanyCulture = () => {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <>
            <Careers />
            <Culture />
        </>
    )
}

export default CompanyCulture
