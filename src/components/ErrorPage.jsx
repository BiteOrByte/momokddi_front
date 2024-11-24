import React from 'react';
import ERROR_IMG from '../assets/error.png'

const ErrorPage = ({ errorCode }) => {
    let message = '';
    switch (errorCode) {
      case 404:
        message = '페이지를 찾을 수 없습니다.';
        break;
      case 405:
        message = '허용되지 않은 요청입니다.';
        break;
      case 500:
        message = '서버 내부 오류가 발생했습니다.';
        break;
      default:
        message = '알 수 없는 오류가 발생했습니다.';
    }

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1 style={{ fontSize: '30px', color: 'red' }}>Oops!</h1>
      <img src={ERROR_IMG} style={{ width: '300px' }}/>
      <p style={{ fontSize: '20px' }}>{message}</p>
    </div>
  );
};

export default ErrorPage;
