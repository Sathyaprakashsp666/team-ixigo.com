import React from 'react'
import BusDestination from './BusRoutes'
import BusApp from './BusApp'
import Footer from '../Footer/Footer'


const MiddlePart = () => {
    return (
        <div>
            <BusDestination />
            <BusApp />
            <div style={{clear:"both"}}></div>
            <Footer />
            
        </div>
    )
}

export default MiddlePart
