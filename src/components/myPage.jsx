import React, { useState } from 'react';

const myPage = () => {
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
    // TODO 로그아웃 처리
  };

  const handleWithdraw = () => {
    console.log('회원 탈퇴가 진행되었습니다.');
    // TODO 회원 탈퇴 처리
  };

  return (
    <div style={{ padding: '20px', position: 'relative' }}>
      <h3 style={{textAlign: 'center'}}>마이 페이지</h3>
      <div>
        <h4>
          닉네임: {editMode ? (
            <input
              type='text'
              value={newNickname}
              onChange={(e) => setNewNickname(e.target.value)}
              style={{ marginLeft: '10px', marginRight: '10px' }}
            />
          ) : (
            <span>{nickname}</span>
          )}
        </h4>
        {editMode ? (
          <div>
            <button onClick={handleSaveClick} style={{ marginRight: '10px'}}>저장</button>
            <button onClick={handleCancelClick}>취소</button>
          </div>
        ) : (
          <div>
            <button onClick={handleEditClick} style={{ marginTop: '10px' }}>닉네임 수정</button>
            <br />
            <button onClick={handleLogout} style={{ marginLeft: '10px', marginTop: '10px' }}>로그아웃</button>
          </div>
        )}
      </div>
      <br />
      <div>
        <a
          href="#"
          onClick={handleWithdraw}
          className='withdraw' >
          회원 탈퇴
        </a>
      </div>
    </div>
  );
};

export default myPage;