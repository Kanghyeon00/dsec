import React, { useState } from "react";
import "./Curriculum.css";
import Header from "./Header";
import { useLocation } from "react-router-dom";

const Curriculum = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="currContainer">
        <div className="currBgWrapper">
          <Header />
          <div className="currBgTextWrapper">
            <p>Curriculum</p>
          </div>
        </div>
        <div className="currNavWrapper">
          <span>이용안내</span>
          <span
            className={`${
              currentPath === "/curriculum/learn" ? "underline" : ""
            }`}
          >
            사전학습
          </span>
          <span>사전학습평가</span>
        </div>
        <div className="currInfoWrapper">
          <div className="currInfoBox">
            <p className="currInfoTag">지역사회간호학</p>
            <p className="currInfoTitle">당뇨</p>
            <p className="currDate">등록일 : 2023.09.27</p>
            <div className="currDesWrapper">
              <p className="currDescript">
                당뇨병(糖尿病)은 창자에서 소화흡수되거나 간에서 합성되어
                들어오는 포도당을 나중에 쓰기 위해 글리코겐으로 전환하여 세포에
                저장해두는 과정이 지연되거나 혹은 정지되어 혈액 중에 포도당이
                지나치게 누적되어 소변으로 대량 유출되는 병을 말한다.
              </p>
            </div>
            <button className="currJoinButton">참여하기</button>
          </div>
          <div className="currInfoBox">
            <p className="currInfoTag">지역사회간호학</p>
            <p className="currInfoTitle">단순도뇨</p>
            <p className="currDate">등록일 : 2023.09.27</p>
            <div className="currDesWrapper">
              <p className="currDescript">
                단순도뇨는 척추손상이나 근육, 신경계 퇴행으로 불완전한 방광
                기능을 가진 대상자의 장기적인 관리, 방광팽만을 즉시 완화 할 수
                있다. 무균적인 소변검사물을 채취 할 수 있으며 배뇨 후 방광의
                잔뇨량 측정, 수술 전, 중, 후, 진단검사 전에 방광을 비우기 위하여
                시행한다 또한 방광세척이나 약물 주입을 하기위해 시행하기도한다.
              </p>
            </div>
            <button className="currJoinButton">참여하기</button>
          </div>
          <div className="currInfoBox">
            <p className="currInfoTag">지역사회간호학</p>
            <p className="currInfoTitle">유치도뇨</p>
            <p className="currDate">등록일 : 2023.09.27</p>
            <div className="currDesWrapper">
              <p className="currDescript">
                유치도뇨법은 자가도뇨법과 같은 방식 으로 요도를 통해 방광으로
                도뇨관을 삽입하는 것이나 일정기간 지속적으로 방광 내에
                유지하면서 소변 배출을 도와주는 것이다. 남성도뇨용 기구는 콘돔
                카테터라고도 불리며, 음경 외부에 부착하여 방광에서 나오는 소변을
                수집 배출 할 수 있다.
              </p>
            </div>
            <button className="currJoinButton">참여하기</button>
          </div>
          <div className="currInfoBox">
            <p className="currInfoTag">지역사회간호학</p>
            <p className="currInfoTitle">근육주사</p>
            <p className="currDate">등록일 : 2023.09.27</p>
            <div className="currDesWrapper">
              <p className="currDescript">
                정맥주사(靜脈注射; Intravenous injection, IV injection)는 약액을
                정맥에 직접 투여하는 주사방법이다. 약액의 양이 다량이거나
                근육주사, 혹은 피하주사를 할 수 없을 때 쓰이며 응급상황에서는
                신속한 효과를 위해 쓰인다.
              </p>
            </div>
            <button className="currJoinButton">참여하기</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Curriculum;
