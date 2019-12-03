import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import InviteCode from './InviteCode';
import AddRoom from './AddRoom';
import axios from 'axios';

class App extends Component {

  componentDidMount() {
    axios.get('http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json', {
      params:{
      key: '62998ef7f60ff569d9fbdfe814bdf524',
      targetDt: '20191102'
      }
    })
    .then (response => {console.log(response)})

  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={InviteCode}/>
          <Route path="/addroom" component={AddRoom}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
//62998ef7f60ff569d9fbdfe814bdf524

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