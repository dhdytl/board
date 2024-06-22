import logo from './logo.svg';
import './App.css';
import * as React from 'react';

function handleLabel()
{
    window.alert("bbb");
}

function SignUpPage() {
  return (    
    <table align='center' className='Login-table' >
    <tr>
        <td className='Login-td'>
        <div>
            <div><input type='text' id='Login-id'/></div>
            <div><input type='password' id='Login-pw'/></div>
        </div>
        <div><label id="Login-noti">아이디가 입력되지 않았습니다.</label></div>
        <div>
            <button type="button" className='Login-button'>로그인</button>
        </div>
        <div>
            <label className='Login-label'>아이디 찾기</label>
            <label className='Login-label'>비밀번호 찾기</label>
            <label className='Login-label' onClick={handleLabel}>회원가입</label>
        </div>
        </td>
    </tr>
    </table>
  );
}

export default SignUpPage;
