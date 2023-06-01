import React, {useEffect} from 'react'

//components
import {MoreMoney, OnTheGo, Barriers} from '../components'

const FeatureInvestments = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    
    return (
        <>
            <MoreMoney />
            <OnTheGo />
            <Barriers />
        </>
    )
}

export default FeatureInvestments
