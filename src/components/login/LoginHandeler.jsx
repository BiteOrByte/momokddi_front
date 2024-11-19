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
        localStorage.setItem("token", res.data);
        navigate("/food");
      }); // TODO: 에러 시 페이지 이동 필요
    };

    kakaoLogin();
  }, [code, navigate]);

};

export default LoginHandeler;