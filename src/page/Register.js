import React from "react";
import "./Register.css";
import Header from "../components/Header";

const Register = () => {
  return (
    <>
      <div className="registerContainer">
        <Header />
        <div className="registerWrapper">
          <div className="registerLogoWrapper">
            <img src={`${process.env.PUBLIC_URL}/img/dm_logo_white.png`} />
            <p>
              디지털스마트교육센터에 회원가입하여 더 많은 서비스를 경험하세요.
            </p>
          </div>
          <div className="registerInputWrapper">
            <form>
              <label>
                아이디
                <input type="text" name="id" />
              </label>
              <label>
                이름
                <input type="text" name="name" />
              </label>
              <label>
                비밀번호
                <input type="password" name="pw" />
              </label>
              <label>
                비밀번호 확인
                <input type="password" name="pwcheck" />
              </label>
              <label>
                이메일
                <input type="email" name="email" />
              </label>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
