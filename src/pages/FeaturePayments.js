import React, { useEffect } from 'react'

//components
import {Bills, Topup} from '../components'

const FeaturePayments = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    return (
        <>
            <Bills />
            <Topup />
        </>
    )
}

export default FeaturePayments
