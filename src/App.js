import './App.css';
import { useState } from 'react';
import * as React from 'react';
import LoginPage from './Login';
import SignUpPage from './Signup';

function App() {
  const [pageNo,setPageNo] = useState(0);

  function changePage( num )
  {
    setPageNo(num);    
  }

  return (
    <div className="App">
      <header></header>
      <body>
        {pageNo == 0 && <LoginPage onChangePage={changePage}/> }
        {pageNo == 1 && <SignUpPage/> }
      </body>
    </div>
  );
}

export default App;
