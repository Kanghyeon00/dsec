import React from 'react'
import './Login.css'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const readyAlert = () => {
        alert('준비중 입니다.')
    }

    const navigate = useNavigate();

    const goToMain = () => {
        navigate('/')
    }

    const goToRegister = () => {
        navigate('/register')
    }

  return (
    <>
        <div className='loginContainer'>
            <Header />
            <div className='loginWrapper'>
                <div className='loginLogoWrapper'>
                    <img onClick={goToMain} src={`${process.env.PUBLIC_URL}/img/logo_white.png`} alt='img' />
                    <p>디지털스마트교육센터에 로그인하여 더 많은 서비스를 경험하세요</p>
                    <div className='loginInputWrapper'>
                        <input name='id' type='text' placeholder='ID' />
                        <input name='password' type='password' placeholder='PASSWORD' />
                        <button className='loginButton'>Login</button>
                        <div className='findWrapper'>
                            <span onClick={readyAlert}>아이디 찾기</span><span onClick={readyAlert}>비밀번호 찾기</span><span onClick={goToRegister}>회원가입</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login