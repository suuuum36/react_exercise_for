import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './InviteCode.css'
import logo from './logo.png';
import plus from './plusbutton.png';
import redarrow from './redarrow.png';

class InviteCode extends Component {
  render() {
    const textStyle1 = { 
      color : '#333333',
      fontSize: '15px',
      fontWeight: '500',
      marginBottom: '5px'
    };

    const textStyle2 = {
      color : '#606060',
      fontSize: '12px',
      marginBottom: '5px'
    };

    const textStyle3 = {
      color : '#606060',
      fontSize: '12px',
      textAlign: 'center',
      marginTop: '30px'
    };

    return (
      <Fragment className = "body">
        <div className = "header">
            <img src={logo} className="logo"/>
        </div>

        <div className ="secondHeader">
          <img src = {plus} className = "headIcon"/>
          <div className = "headText"> 방 추가하기 </div>
          <img src={redarrow} className="direction"/>
        </div>

        <div className = "contentBody">
          <div style = {textStyle1} > 초대코드로 방 들어가기 </div>
          <div style = {textStyle2}> 팀원에게 공유받은 초대코드와 닉네임을 입력해주세요.</div>
          <div><input placeholder="초대코드" className="inputBox" type ="text"/></div>
          <div><input placeholder="닉네임" className="inputBox" type ="text" /></div>
            <div> <Link to ='/AddRoom'><button className="inputButton">들어가기</button></Link></div>
            <div style = {textStyle3}> 초대코드가 없다면? </div>
            <div> <Link to ='/AddRoom'><button className="inputButton2">새로운 방 만들기</button></Link></div>
        </div>
      </Fragment>
    );
    }
}

export default InviteCode;


{/* 다른 페이지로 넘어가는 라우터 코드

import { BrowserRouter, Route } from 'react-router-dom';
import Main from './Main';
import Sub from './Sub';

      <BrowserRouter>
        <div>
          <Route exact path="/" component={Main}/> 
          <Route path="/sub" component={Sub}/>
        </div>
      </BrowserRouter>
      */}