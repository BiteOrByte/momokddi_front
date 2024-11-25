import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// axios 인스턴스 생성
const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 공통 GET 요청 함수
export const fetchData = async (url, data = {}) => {
    const response = await api.get(url, { data });
    return response.data;
  };
  
// 공통 POST 요청 함수
export const postData = async (url, data) => {
  const response = await api.post(url, data);
  return response.data;
};

// 에러 처리 함수
const handleError = (error) => {
  let errorCode = null;
  if (error.response) {
    const status = error.response.status;
    errorCode = status;
  } else if (error.request) {
    errorCode = 503;
  } else {
    errorCode = 400;
  }
  return errorCode;
};