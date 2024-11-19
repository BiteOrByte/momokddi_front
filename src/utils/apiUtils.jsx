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
    try {
      const response = await api.get(url, { data });
      return response.data;
    } catch (error) {
      handleError(error);
    }
  };
  
// 공통 POST 요청 함수
export const postData = async (url, data) => {
  try {
    const response = await api.post(url, data);
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// 에러 처리 함수
const handleError = (error) => {
  if (error.response) {
    console.error('서버 오류:', error.response.data);
    alert('서버에서 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
  } else if (error.request) {
    console.error('응답 없음:', error.request);
    alert('서버와 연결할 수 없습니다. 네트워크 상태를 확인해주세요.');
  } else {
    console.error('요청 오류:', error.message);
  }
};
