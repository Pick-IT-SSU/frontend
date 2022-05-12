import React, { useEffect } from "react";
import '../pages_css/Main.css';
import logo from '../logo.png';
import mainPic from '../mainCoding.png';
import subPic1 from '../subCoding1.png';
import subPic2 from '../subCoding2.png';
import subPic3 from '../subCoding3.png';
import { Link } from "react-router-dom";
import axios from "axios";
import $ from 'jquery';
window.$ = $;

function Main() {
  //  const axios = require('axios');
  //  const cheerio=require('cheerio');
  //  axios.get("https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81-mvc-1").then(dataa => {
  //   console.log(dataa);
  // $("meta[property="og:image").attr('content)
  //});

  return (
    <div className="App">
      <body>
        <div className="body_box">
          <MainCard></MainCard>
          <SubPicRightCard img={subPic1}></SubPicRightCard>
          <SubPicLeftCard img={subPic2}></SubPicLeftCard>
          <SubPicRightCard img={subPic3}></SubPicRightCard>
        </div>
      </body>

    </div>
  );
}

const MainCard = () => {
  return (
    <div className="main_card">
      <img src={mainPic} id="mainPicture"></img>
      <div className="text_box">
        <h1>코딩 강의, 어떻게 골라야할지 막막하셨나요?</h1>
        <p>강의 후기, 코딩 스터디, 로드맵 추천까지</p>
        <Link to="/lectures" id="linkBox"><p id="linkButton">추천 강의 보러가기</p></Link>
      </div>

    </div>
  );
}

const SubPicRightCard = (props) => {
  return (
    <div className="sub_card">
      <div className="text_box">
        <h3>코딩 강의, 어떻게 골라야할지 막막하셨나요?</h3>
        <p>강의 후기, 코딩 스터디, 로드맵 추천까지</p>
      </div>
      <img src={props.img} id="subPicture"></img>
    </div>
  );
}

const SubPicLeftCard = (props) => {
  return (
    <div className="sub_card">
      <img src={props.img} id="subPicture"></img>
      <div className="text_box">
        <h3>코딩 강의, 어떻게 골라야할지 막막하셨나요?</h3>
        <p>강의 후기, 코딩 스터디, 로드맵 추천까지</p>
      </div>
    </div>
  );
}

export default Main;