import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const LoginHandeler = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    const kakaoLogin = async () => {
      await axios({
        method: "GET",
        url: `http://localhost:8080/login/callback?code=${code}`,
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          "Access-Control-Allow-Origin": "*",
        },
      }).then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.userInfo.nickName);
        navigate("/food");
      });
    };

    kakaoLogin();
  }, [code, navigate]);

  return (
    <div className="LoginHandeler">
      <div className="notice">
        <p>로그인 중입니다.</p>
        <p>잠시만 기다려주세요.</p>
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default LoginHandeler;