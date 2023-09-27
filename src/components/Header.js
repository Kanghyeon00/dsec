import React from 'react'
import './Header.css'
import { useNavigate, Link } from 'react-router-dom';

const Header = () => {

const navigate = useNavigate();


  return (
    <>
        <div className='headerContainer'>
            <div className='headerWrapper'>
                <div className='logoWrapper'>
                <Link to='/'><img src={process.env.PUBLIC_URL + '/img/logo_white.png'} alt='logo image' /></Link>
                </div>
                <div className='navWrapper'>
                    <Link to='/curriculum/learn'><span>센터소개</span></Link>
                    <span>교육과정</span>
                    <span>정보마당</span>
                    <span>문의하기</span>
                    
                </div>
                <div className='loginWrapper'>
                    <span>로그인</span>
                    <span>회원가입</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header