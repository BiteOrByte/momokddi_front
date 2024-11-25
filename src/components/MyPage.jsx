import { useState } from 'react';
import { Button, TextField, Typography, Container, Box, Link, IconButton, Paper } from '@mui/material';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import { fetchData } from '../utils/apiUtils';
import ErrorPage from '../components/ErrorPage.jsx';

const MyPage = () => {
  const [nickname, setNickname] = useState('기본닉네임'); // 초기 닉네임 설정
  const [newNickname, setNewNickname] = useState(nickname);
  const [editMode, setEditMode] = useState(false);
  const [errorCode, setErrorCode] = useState(null);

  const handleEditClick = () => {
    setEditMode(true);
    setNewNickname(nickname);
  };

  const handleRandomClick = async () => {
    try {
      const randomNickname = await fetchData('/user/api/nickname');
      if (randomNickname) {
        setNewNickname(randomNickname);
      }
    } catch (error) {
      setErrorCode(error);
    }
  };

  const handleSaveClick = () => {
    setNickname(newNickname);
    setEditMode(false);
  };

  const handleCancelClick = () => {
    setNewNickname(nickname);
    setEditMode(false);
  };

  const handleLogout = () => {
    console.log('로그아웃 되었습니다.');
    // TODO: 로그아웃 처리
  };

  const handleWithdraw = () => {
    console.log('회원 탈퇴가 진행되었습니다.');
    // TODO: 회원 탈퇴 처리
  };

  if (errorCode) {
    return <ErrorPage errorCode={errorCode} />;
  }

  return (
    <Container maxWidth="sm" sx={{ paddingTop: 4 }}>
      <Paper sx={{ padding: 3, borderRadius: 2, boxShadow: 3, backgroundColor: 'rgba(255, 255, 255, 0.65)' }}>
        <Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: 'bold'}}>
          마이 페이지
        </Typography>

        <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
            닉네임:{' '}
            {editMode ? (
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>
                <TextField
                  color="success"
                  size="small"
                  value={newNickname}
                  placeholder="닉네임"
                  onChange={(e) => setNewNickname(e.target.value)}
                  sx={{ marginRight: 1, width: 200 }}
                />
                <IconButton onClick={handleRandomClick} sx={{ color: 'green' }}>
                  <RefreshRoundedIcon />
                </IconButton>
              </Box>
            ) : (
              <span>{nickname}</span>
            )}
          </Typography>
        </Box>

        {editMode ? (
          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              color="success"
              onClick={handleSaveClick}
              sx={{ marginRight: 2, marginTop: 2 }}
            >
              저장
            </Button>
            <Button
              variant="outlined"
              color="success"
              onClick={handleCancelClick}
              sx={{ marginTop: 2 }}
            >
              취소
            </Button>
          </Box>
        ) : (
          <Box sx={{ textAlign: 'center', marginTop: 2 }}>
            <Button
              variant="contained"
              color="success"
              onClick={handleEditClick}
              sx={{ marginRight: 2 }}
            >
              닉네임 수정
            </Button>
            <Button variant="outlined" color="error" onClick={handleLogout}>
              로그아웃
            </Button>
          </Box>
        )}

        <Box sx={{ textAlign: 'center', marginTop: 2 }}>
          <Link href="#" onClick={handleWithdraw} color="error" underline="hover">
            회원 탈퇴
          </Link>
        </Box>
      </Paper>
    </Container>
  );
};

export default MyPage;
