import React, { useState } from "react";
import Header from "../components/Header";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {

    const formRef = React.createRef();

  const [formData, setFormData] = useState({
    companyName: "",
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_u6rpf76", "template_vlfp4zr", formRef.current, "RkqGFFEa2IcswbJf7")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    // 폼 전송 후 상태 초기화 또는 다른 동작 수행
    setFormData({
      companyName: "",
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <div className="contactContainer">
        <Header />
        <div className="contactWrapper">
          <div className="contactTextWrapper">
            <p>문의하기</p>
            <p>Contact Us</p>
            <p>
              더블엠소셜컴퍼니에 문의를 주시면
              <br />
              빠른시일내에 연락 드리겠습니다.
            </p>
          </div>
          <div className="contactImgWrapper">
            <div className="partnerWrapper">
              <img src={`${process.env.PUBLIC_URL}/img/hand.png`} alt="img" />
              <p>파트너쉽 문의 및 협업문의</p>
              <p>
                투자관련 및
                <br />
                파트너쉽 문의
              </p>
              <p>
                <img src={`${process.env.PUBLIC_URL}/img/tel.png`} alt="img" />
                Tel: 1688-9564, 010-9436-5543
              </p>
              <p>
                <img
                  src={`${process.env.PUBLIC_URL}/img/email.png`}
                  alt="img"
                />
                E-mail : wmsc0202@naver.com
              </p>
            </div>
            <div className="developWrapper">
              <img src={`${process.env.PUBLIC_URL}/img/code.png`} alt="img" />
              <p>파트너쉽 문의 및 협업문의</p>
              <p>
                투자관련 및
                <br />
                파트너쉽 문의
              </p>
              <p>
                <img src={`${process.env.PUBLIC_URL}/img/tel.png`} alt="img" />
                Tel: 1688-9564, 010-9436-5543
              </p>
              <p>
                <img
                  src={`${process.env.PUBLIC_URL}/img/email.png`}
                  alt="img"
                />
                E-mail : wmsc0202@naver.com
              </p>
            </div>
          </div>
          <div className="contactInputWrapper">
            <form ref={formRef} onSubmit={handleSubmit}>
              <label>
                회사명
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </label>
              <br />
              <label>
                성함
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </label>
              <br />
              <label>
                연락처
                <input
                  type="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </label>
              <br />
              <label>
                이메일
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
              <br />
              <label>
                문의내용
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </label>
              <br />
              <div className="termsWrapper">
                <input type="checkbox" /><span>개인정보 수집 및 이용에 동의합니다.</span>
              <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
          <div className="contactFooterWrapper">
            <div className="contactFooterTop">
              <p>회사명 : (주)더블엠소셜컴퍼니</p>
              <p>대표자 : 김선미</p>
              <p>Tel : 1688-9564, 010-9436-5543</p>
              <p>E-mail : wmsc0202@naver.com</p>
              <p>
                소재지 : 대구광역시 동대구로465<br />스케일업허브 DASH 405호, 406호
              </p>
            </div>
            <div className="contactFooterLogo">
              <img
                src={`${process.env.PUBLIC_URL}/img/logo_white.png`}
                alt="img"
              />
              <img
                src={`${process.env.PUBLIC_URL}/img/dm_logo_white.png`}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
