import React, { useEffect } from 'react'

//components
import {Explore, Habits} from '../components'

const FeatureSavings = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    
    return (
        <>
            <Explore />
            <Habits />
        </>
    )
}

export default FeatureSavings
