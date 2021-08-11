import React, { useEffect } from 'react'

//components
import Bills from '../components/Bills'

const FeaturePayments = () => {

    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <>
            <Bills />
        </>
    )
}

export default FeaturePayments
