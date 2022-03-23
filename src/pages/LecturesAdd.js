import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import '../pages_css/LecturesAdd.css';
import tempImg from '../mainCoding.png';

import axios from 'axios';
import $ from 'jquery';
window.$ = $;

const LecturesAdd = () => {
  const navigate = useNavigate();
  var current = ''
  current += String(decodeURI(window.location.href));

  return (
    <div id='body_main'>
      <div style={{ width: 'auto', height: '70px',}}></div>
      <div style={{ width: '100%', height: '1150px', backgroundColor: 'rgb(240, 240, 240)', }}>
        <div id='body_center_name' style={{ height: '70px', }}></div>
        
        <div style={{ width: '60%', margin: '0px 0px 20px 0px', textAlign: 'left', display: 'inline-block', fontSize: '22px', fontWeight: 'bolder', }}>강의 정보</div>
        <div style={{ width: '60%', height: '360px', textAlign: 'center', display: 'inline-block', borderRadius: '10px', backgroundColor: 'white', }}>
          <div style={{ margin: '30px 0px 10px 0px', fontSize: '18px', fontWeight: 'bolder', display: 'flex', justifyContent: 'center', }}>링크&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <div style={{ width: '81%', }}><input id='lecturesAdd_linkInput'/><button>링크확인</button></div></div>
          <div style={{ margin: '20px 0px 10px 0px', fontSize: '18px', fontWeight: 'bolder' }}>제목&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input id='lecturesAdd_mainTitleInput'/></div>
          <div style={{ margin: '20px 0px 10px 0px', fontSize: '18px', fontWeight: 'bolder' }}>강의자&nbsp;&nbsp;&nbsp; <input id='lecturesAdd_teacherInput'/></div>
          <div style={{ margin: '20px 0px 10px 0px', fontSize: '18px', fontWeight: 'bolder' }}>사이트명 <input id='lecturesAdd_siteInput'/></div>
          <div style={{ margin: '20px 0px 10px 0px', fontSize: '18px', fontWeight: 'bolder', display: 'flex', justifyContent: 'center', }}>해시태그&nbsp; <div style={{ width: '80%', }}><input id='lecturesAdd_hashtagInput1'/><input id='lecturesAdd_hashtagInput2'/><input id='lecturesAdd_hashtagInput3'/></div></div>
        </div>

        <div style={{ width: '60%', margin: '60px 0px 20px 0px', textAlign: 'left', display: 'inline-block', fontSize: '22px', fontWeight: 'bolder', }}>나의 리뷰</div>
        <div style={{ width: '60%', height: '410px', textAlign: 'center', display: 'inline-block', borderRadius: '10px', backgroundColor: 'white', }}>
          <div style={{ margin: '30px 0px 10px 0px', fontSize: '18px', fontWeight: 'bolder' }}>별점 <input id='lecturesAdd_rateInput'/></div>
          <div style={{ margin: '30px 0px 10px 0px', fontSize: '18px', fontWeight: 'bolder' }}>글 제목 <input id='lecturesAdd_titleInput'/></div>
          <div style={{ margin: '20px 0px 10px 0px', fontSize: '18px', fontWeight: 'bolder', display: 'flex', justifyContent: 'center', }}>내용&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<textarea id='lecturesAdd_descriptionInput'/></div>
        </div>
        
        <div style={{ width: '60%', margin: '10px 0px 0px 0px', display: 'inline-block', textAlign: 'right', }}>
          <button onClick={() => {
            axios.post('http://54.180.150.167:8080/lectures/' + parseInt(current.split("/")[4]), {
              "comment": $('#lecturesAdd_descriptionInput').val(),
              "commentTitle": $('#lecturesAdd_titleInput').val(),
              "hashtags": [
                $('#lecturesAdd_hashtagInput1').val(),
                $('#lecturesAdd_hashtagInput2').val(),
                $('#lecturesAdd_hashtagInput3').val(),
              ],
              "lectureTitle": $('#lecturesAdd_mainTitleInput').val(),
              "lectureUrl": $('#lecturesAdd_linkInput').val(),
              "lecturer": $('#lecturesAdd_teacherInput').val(),
              "rate": $('#lecturesAdd_rateInput').val(),
              "siteName": $('#lecturesAdd_siteInput').val(),
              "thumbnailUrl": $('#lecturesAdd_linkInput').val(), //메인 이미지 링크
            }, localStorage.getItem('token'),).then((response)=>{
                
            }).catch((error) => {
                console.log(error)
                alert('강의평 글추가 실패')
                navigate('/lectures')
            })

          }}>글추가</button></div>

      </div>
    </div>
  );
}

export default LecturesAdd;