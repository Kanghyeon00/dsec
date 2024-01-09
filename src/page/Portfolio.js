import React, { useEffect, useState } from "react";
import './Portfolio.css'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'

const Portfolio = () => {

  const navigate = useNavigate();

  return (
    <>
        <div className='portfolioContainer'>
            <Header />
            <div className='portfolioWrapper'>
                <div className='portfolioTextWrapper'>
                    <h1>Portfolio</h1>
                </div>
                <div className='portfolioContentWrapper'>
                  
                </div>
            </div>
        </div>
    </>
  )
}

export default Portfolio