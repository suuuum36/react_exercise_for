import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './InviteCode.css'
import logo from './logo.png';
import plus from './plusbutton.png';
import redarrow from './redarrow.png';

class AddRoom extends Component {
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
              <Link to ='./'><img src={redarrow} className="direction"/></Link>
            </div>
    
            <div className = "contentBody">
              <div style = {textStyle1} > 새로운 방 만들기 </div>
              <div style = {textStyle2}> 팀원들과 사용할 방 이름과 닉네임을 입력해주세요.</div>
              <div><input placeholder="방 이름" className="inputBox" type ="text"/></div>
              <div><input placeholder="닉네임" className="inputBox" type ="text" /></div>
                <div><button className="inputButton2">방 만들기</button></div>
            </div>
          </Fragment>
        );
        }
    }


export default AddRoom;