import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // 드로어 열기/닫기 핸들러
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        {/* 점메추 문자열 클릭 시 / 경로로 이동 */}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, textAlign: 'center', cursor: 'pointer' }}
          onClick={() => navigate('/')}
        >
          점메추
        </Typography>

        {/* 오른쪽 메뉴 아이콘 */}
        <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>

        {/* 오른쪽에서 슬라이드로 나타나는 메뉴 드로어 */}
        <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
          <List sx={{ width: 250 }}>
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate('/mypage')}>
                <ListItemText primary="마이페이지" />
              </ListItemButton>
            </ListItem>
            {/* 추가 메뉴 아이템을 원하는 대로 추가할 수 있습니다 */}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
