import React, { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import '../pages_css/StudiesUpdate.css';

import axios from 'axios';
import $ from 'jquery';
window.$ = $;

const StudiesUpdate = () => {
    const navigate = useNavigate();
    var current = ''
    current += String(decodeURI(window.location.href));
    useEffect(() => {
        if (localStorage.getItem('token')) {
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + window.localStorage.getItem('token');
        }
        axios.get('http://54.180.150.167:8080/studies/' + parseInt(current.split("/")[6]), {

        }, localStorage.getItem('token'),).then((response)=>{
            $("#studiesUpdate_titleInput").val(response.data.data.studyTitle);
            $("#studiesUpdate_descriptionInput").val(response.data.data.studyContent);
            $("#studiesUpdate_locationInput").val(response.data.data.studyLocation);
            $("#studiesUpdate_categoryInput").val(response.data.data.studyCategoryName);
            $("#studiesUpdate_max").val(response.data.data.studyMaxReq);
            $("#studiesUpdate_min").val(response.data.data.studyMinReq);
        }).catch((error) => { 
            // navigate('/signin')
        })
    });

  return (
    <div id='body_main' style={{ background:'rgb(240, 240, 240)', }}>
      <div id='body_center_top'></div>
      <div id='body_center_name' style={{ height: '120px', background:'rgb(240, 240, 240)', }}></div>

      <div style={{ width: '60%', height: '850px', display: 'inline-block', borderRadius: '10px', background: 'white', }}>
        <div style={{ width: 'auto', height: '50px', }}>
          <div style={{ width: '6.5%', height: '60px',  display: 'flex', float: 'left', }}></div>
          <div style={{ width: '225px', margin: '10px 10px', display: 'flex', float: 'right', }}></div>

          <div style={{ width: '100px', height: '13px', opacity: '0', background: 'red' }}>a</div>
          <div style={{ width: '38px', height: '50px', margin: '11px 0px 0px 0px', display: 'flex', float: 'left', }}>
            
            <div style={{ width: 'auto', height: '50px', margin: '0px 20px', padding: '0px 20px', display: 'flex', float: 'left', border: '1px solid rgb(190, 190, 190)', borderRadius: '10px', }}>
              <select id='studiesUpdate_locationInput' className='studiesUpdate_input'>
                <option>??????</option>
                <option value='??????'>??????</option>
                <option value='??????'>??????</option>
                <option value='??????'>??????</option>
                <option value='??????'>??????</option>
                <option value='??????'>??????</option>
                <option value='??????'>??????</option>
                <option value='??????'>??????</option>
                <option value='??????'>??????</option>
                <option value='??????'>??????</option>
                <option value='??????'>??????</option>
                <option value='??????'>??????</option>
                <option value='??????'>??????</option>
                <option value='??????'>??????</option>
                <option value='??????'>??????</option>
                <option value='??????'>??????</option>
                <option value='??????'>??????</option>
                <option value='??????'>??????</option>
                <option value='?????????'>?????????</option>
              </select>
            </div>
            <div style={{ width: 'auto', height: '50px', margin: '0 20px', padding: '0px 20px', display: 'flex', float: 'left',  border: '1px solid rgb(190, 190, 190)', borderRadius: '10px', }}>
              <select id='studiesUpdate_categoryInput' className='studiesUpdate_input'>
                <option>????????????</option>
                <option value='?????????'>?????????</option>
                <option value='???????????????'>???????????????</option>
                <option value='????????? ????????????'>????????? ????????????</option>
                <option value='?????????'>?????????</option>
                <option value='?????????????????????'>?????????????????????</option>
                <option value='????????????'>????????????</option>
                <option value='???????????????'>???????????????</option>
                <option value='?????????'>?????????</option>
              </select>
            </div>
          </div>
        </div>

        <div id ='studiesUpdate_peeple'>???????????????&nbsp;&nbsp;
          <input id='studiesUpdate_max' type='number' min='2'/>
          &nbsp;&nbsp;/&nbsp;&nbsp;
          <input id='studiesUpdate_min' type='number' min='1'/>
        </div>
        {/* <div id ='studiesUpdate_peeple'>???????????????&nbsp;&nbsp;<input id="studiesUpdate_max" /></div> */}
        <div id="studiesUpdate_title"><div style={{ textAlign: 'center', }}>??????&nbsp;&nbsp;</div><input id="studiesUpdate_titleInput" /></div>
        <div id="studiesUpdate_description"><div style={{ textAlign: 'center', }}>??????&nbsp;&nbsp;</div><textarea id="studiesUpdate_descriptionInput" /></div>

        <div style={{ width: '98%', margin: '10px 15px', textAlign: 'center', }}>
          <button style={{ margin: '10px 0px', color: 'white', borderRadius: '5px', backgroundColor: '#17173D', }} onClick={() => {
              if ($('#studiesUpdate_max').val() < $('#studiesUpdate_min').val()) {
                alert('?????? ??????????????? ?????? ?????????????????? ?????? ??? ????????????')
                return
              }
              if ($('#studiesUpdate_titleInput').val()==='' || $('#studiesUpdate_descriptionInput').val()==='' || $('#studiesUpdate_locationInput').val()==='??????' || $('#studiesUpdate_categoryInput').val()==='????????????' || $('#studiesUpdate_max').val()==='' || $('#studiesUpdate_min').val()==='') {
                alert('??? ?????? ????????????')
                return
              }
              axios.patch('http://54.180.150.167:8080/studies/' + parseInt(current.split("/")[6]), {
                "studyCategoryName": $('#studiesUpdate_categoryInput').val(),
                "studyContent": $('#studiesUpdate_descriptionInput').val(),
                "studyLocation": $('#studiesUpdate_locationInput').val(),
                "studyMaxReq": $('#studiesUpdate_max').val(),
                "studyMinReq": $('#studiesUpdate_min').val(),
                "studyTitle": $('#studiesUpdate_titleInput').val(),
              }, localStorage.getItem('token'),).then(()=>{
                navigate('/studies/' + parseInt(current.split("/")[6]))
              }).catch((error) => {
                alert('????????? ????????? ??????')
              })
            }}>
              ?????????
            </button>
          </div>
      </div>
      <div id='body_center_name' style={{ height: '120px', background:'rgb(240, 240, 240)', }}></div>
    </div>
  );
}

export default StudiesUpdate;