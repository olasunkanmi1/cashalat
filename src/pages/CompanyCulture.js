import React, {useEffect} from 'react'

//components
import {Careers, Culture} from '../components'

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
