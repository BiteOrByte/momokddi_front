import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const LoginHandeler = () => {
  const [errorCode, setErrorCode] = useState(null);
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    const kakaoLogin = async () => {
      try {
        const response = await fetchData(`/api/login/callback?code=${code}`);

        localStorage.setItem("token", response.data);
        navigate("/food");
      } catch(error) {
        setErrorCode(error);
      }
    };

    if (errorCode) {
      return <ErrorPage errorCode={errorCode} />;
    }

    kakaoLogin();
  }, [code, navigate]);

};

export default LoginHandeler;