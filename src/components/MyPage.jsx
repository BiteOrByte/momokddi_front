import { useState } from 'react';
import { Button, TextField, Typography, Container, Box, Link, IconButton } from '@mui/material';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import axios from 'axios';

const MyPage = () => {
  const [nickname, setNickname] = useState('기본닉네임'); // 초기 닉네임 설정
  const [newNickname, setNewNickname] = useState(nickname);
  const [editMode, setEditMode] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL;

  const handleEditClick = () => {
    setEditMode(true);
    setNewNickname(nickname);
  };

  const handleRandomClick = async () => {
    try {
      const response = await axios.get(`${API_URL}/user/api/nickname`);
      if (response.data) {
        setNewNickname(response.data);
      } else {
        console.error('응답에서 닉네임을 찾을 수 없습니다.');
      }
    } catch (error) {
      if (error.response) {
        console.error('서버 오류:', error.response.data);
        alert('서버에서 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      } else if (error.request) {
        console.error('응답 없음:', error.request);
        alert('서버와 연결할 수 없습니다. 네트워크 상태를 확인해주세요.');
      } else {
        console.error('요청 오류:', error.message);
      }
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

  return (
    <Container sx={{ paddingTop: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        마이 페이지
      </Typography>
      <Box sx={{ textAlign: 'center', marginBottom: 2 }}>
        <Typography variant="h6">
          닉네임:{' '}
          {editMode ? (
            <div>
              <TextField
              color="success" size="sm"
              value={newNickname}
              placeholder="닉네임" 
              onChange={(e) => setNewNickname(e.target.value)}
              sx={{ marginLeft: 1, marginRight: 1 }}
            />
            <IconButton onClick={handleRandomClick}>
                <RefreshRoundedIcon />
              </IconButton>
            </div>
          ) : (
            <span>{nickname}</span>
          )}
        </Typography>
      </Box>

      {editMode ? (
        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="solid"
            color="success"
            onClick={handleSaveClick}
            sx={{ marginRight: 2 }}
          >
            저장
          </Button>
          <Button 
            variant="outlined"
            color="success" onClick={handleCancelClick}>
            취소
          </Button>
        </Box>
      ) : (
        <Box sx={{ textAlign: 'center', marginTop: 2 }}>
          <Button
            variant="contained"
            color="secondary"
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
    </Container>
  );
};

export default MyPage;