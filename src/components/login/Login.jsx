import { KAKAO_AUTH_URL } from './Oauth';
import KAKAO_IMAGE from '../../assets/kakao_login_medium_wide.png'

function Login() {
  return <>
    <h1>점메추</h1>
    <a href={KAKAO_AUTH_URL}>
      <img src={KAKAO_IMAGE} />
    </a>
  </>
}

export default Login;