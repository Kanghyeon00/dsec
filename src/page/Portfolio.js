import React from 'react'
import './Portfolio.css'
import Header from '../components/Header'

const Portfolio = () => {
  return (
    <>
        <div className='portfolioContainer'>
            <Header />
            <div className='portfolioWrapper'>
                <div className='portfolioTextWrapper'>
                    <h1>Portfolio</h1>
                </div>
            </div>
        </div>
    </>
  )
}

export default Portfolio