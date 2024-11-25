import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { KAKAO_AUTH_URL } from './Oauth';
import KAKAO_IMAGE from '../../assets/kakao_login_medium_wide.png'
import PIG_IMAGE from '../../assets/pig.png'

function Login() {
  return <>
    <Container maxWidth="sm">
        <Box>
          <h1 sx={{ textAlign: 'center' }}>점메추</h1>
        </Box>
        <Box>
          <img src={PIG_IMAGE}></img>
        </Box>
        <Box>
          <a href={KAKAO_AUTH_URL}>
            <img src={KAKAO_IMAGE} />
          </a>
        </Box>
      </Container>
  </>
}

export default Login;