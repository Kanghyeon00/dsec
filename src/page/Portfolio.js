import React, { useEffect } from "react";
import './Portfolio.css'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'

const Portfolio = () => {

  const navigate = useNavigate();

  const handleWheel = (event) => {
    // 마우스 휠을 아래로 돌렸을 때 URL을 변경합니다.
    if (event.deltaY > 0) {
      navigate('/contact'); // 다음 페이지로 이동하도록 설정
    } else if (event.deltaY < 0) {
      navigate('/portfolio');
    }
  };

  useEffect(() => {
    const handleWheelEvent = (event) => handleWheel(event);

    // 마우스 휠 이벤트에 대한 이벤트 리스너 추가
    window.addEventListener('wheel', handleWheelEvent);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('wheel', handleWheelEvent);
    };
  }, [handleWheel, navigate]);

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