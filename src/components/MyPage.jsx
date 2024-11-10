import { useState } from 'react';
import { Button, TextField, Typography, Container, Box, Link } from '@mui/material';

const MyPage = () => {
  const [nickname, setNickname] = useState('기본닉네임'); // 초기 닉네임 설정
  const [newNickname, setNewNickname] = useState(nickname);
  const [editMode, setEditMode] = useState(false);

  const handleEditClick = () => {
    setEditMode(true);
    setNewNickname(nickname);
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
          닉네임:
          {editMode ? (
            <TextField
              variant="outlined"
              value={newNickname}
              onChange={(e) => setNewNickname(e.target.value)}
              sx={{ marginLeft: 1, marginRight: 1 }}
            />
          ) : (
            <span>{nickname}</span>
          )}
        </Typography>
      </Box>

      {editMode ? (
        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveClick}
            sx={{ marginRight: 2 }}
          >
            저장
          </Button>
          <Button variant="outlined" onClick={handleCancelClick}>
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
