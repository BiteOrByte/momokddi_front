const CLIENT_ID = import.meta.env.VITE_RESET_API_KEY;
const REDIRECT_URL = import.meta.env.VITE_REDIRECT_URL;

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}`