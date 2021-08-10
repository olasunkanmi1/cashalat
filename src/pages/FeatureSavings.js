import React, { useEffect } from 'react'

//components
import Explore from '../components/Explore'
import Habits from '../components/Habits'


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
