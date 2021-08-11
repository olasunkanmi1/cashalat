import React, { useEffect } from 'react'

//components
import Bills from '../components/Bills'
import Topup from '../components/Topup'

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
