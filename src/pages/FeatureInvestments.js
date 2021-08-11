import React, {useEffect} from 'react'

//components
import MoreMoney from '../components/MoreMoney'
import OnTheGo from '../components/OnTheGo'
import Barriers from '../components/Barriers'

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
