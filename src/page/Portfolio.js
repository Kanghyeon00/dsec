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

                <div className='portfolioContentWrapper'>
                  <div className="nursenseWrapper">
                    <img src={`${process.env.PUBLIC_URL}/img/pfOpen.png`} />
                  </div>
                  <div className="portfolioMiddleWrapper">
                  <div className="siminWrapper">
                  <img src={`${process.env.PUBLIC_URL}/img/pfOpen.png`} />
                  </div>
                  <div className="jenanWrapper">
                  <img src={`${process.env.PUBLIC_URL}/img/pfOpen.png`} />
                  </div>
                  </div>
                  <div className="portfolioMiddleWrapper">
                  <div className="fireWrapper">
                  <img src={`${process.env.PUBLIC_URL}/img/pfOpen.png`} />
                  </div>
                  <div className="eduWrapper">
                  <img src={`${process.env.PUBLIC_URL}/img/pfOpen.png`} />
                  </div>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Portfolio