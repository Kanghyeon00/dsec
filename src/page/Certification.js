import React from "react";
import "./Certification.css";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Certification = () => {
  return (
    <>
      <div className="certificationContainer">
        <Header />
        <div className="certificationWrapper">
          <div className="certiTextWrapper">
            <p>더블엠소셜컴퍼니</p>
            <p>Patents and Certifications</p>
            <p>다양한 인증 및 특허 출원, 등록</p>
          </div>
          <div className="certiListWrapper1">
            <div className="certiList1">
              <Link
                to={
                  "https://drive.google.com/file/d/10fq1LLyAfzigH5Ia96oBtBrosml9OWkb/view?usp=sharing"
                }
                target="_blank"
              >
                2022기술평가우수기업인증서.pdf
              </Link>
              <Link
                to={
                  "https://drive.google.com/file/d/1PcG_zBT8O95e_zeAppXzMBfIWOAD_Sj6/view?usp=sharing"
                }
                target="_blank"
              >
                벤처기업확인서.pdf
              </Link>
              <Link
                to={
                  "https://drive.google.com/file/d/1ZBKXqMQsm6eq9TwNBCxHMzdCQkSDbaW3/view?usp=sharing"
                }
                target="_blank"
              >
                널센스 저작권등록증.pdf
              </Link>
              <Link
                to={
                  "https://drive.google.com/file/d/1tqSFlbWO_nlAG7lhKFpTrMf6IUXNiHLH/view?usp=sharing"
                }
                target="_blank"
              >
                커스터마이징된 시뮬레이션 환경을 통한
                <br />
                교육 시스템 및 교육 방법 특허출원.pdf
              </Link>
            </div>
          </div>
          <div className="certiListWrapper2">
            <div className="certiList2">
              <Link
                to={
                  "https://drive.google.com/file/d/13JiVMNLsl1shAdciGQYUztCbHbv2RS69/view?usp=sharing"
                }
                target="_blank"
              >
                광고특허증.pdf
              </Link>
              <Link
                to={
                  "https://drive.google.com/file/d/1jDQeDNwFv85WujkNiwmuzW0gFAOPS73I/view?usp=sharing"
                }
                target="_blank"
              >
                전력제어장치특허증.pdf
              </Link>
              <Link
                to={
                  "https://drive.google.com/file/d/1qpuixwkCzhzwnLzEyjngVCuLO0WX74T-/view?usp=sharing"
                }
                target="_blank"
              >
                제어보드 및 모션센서 결합 장치 및 결합 방법<br />특허출원.pdf
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certification;
