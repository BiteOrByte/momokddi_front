import { useState } from 'react';
import { Checkbox, Button, Typography, Stack, FormControlLabel, Paper, Box, Container } from '@mui/material';
import { fetchData } from '../utils/apiUtils';

function Food() {
  const [selectedCategories, setSelectedCategories] = useState([]); // 타입 없이 기본 사용
  const [food, setFood] = useState({
    name: '메뉴를 추천해 드립니다.',
    category: '버튼을 눌러 음식을 골라주세요.',
  });

  // 음식 카테고리 목록
  const categories = ['한식', '중식', '일식', '양식', '동남아식'];

  // 체크박스 변경 처리
  const handleCheckboxChange = (category) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((item) => item !== category)
        : [...prevCategories, category],
    );
  };

  const fetchFood = async () => {
    const params = new URLSearchParams();
    selectedCategories.forEach((category) => params.append('category', category));
    
    const response = await fetchData(`/food?${params.toString()}`);
    if (response) {
      setFood(response);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ paddingTop: 4 }}>
      <Paper sx={{ padding: 4, borderRadius: 2, boxShadow: 3, backgroundColor: 'rgba(255, 255, 255, 0.65)' }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
          음식 카테고리 선택
        </Typography>

        {/* 체크박스 리스트 */}
        <Stack spacing={2} sx={{ marginBottom: 2 }}>
          {categories.map((category) => (
            <FormControlLabel
              key={category}
              control={
                <Checkbox
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCheckboxChange(category)}
                  color="success"
                  sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} // 체크박스 아이콘 크기 조정
                />
              }
              label={category}
              sx={{ fontSize: '1.1rem', fontWeight: 'medium', color: '#333' }} // 라벨 크기 조정
            />
          ))}
        </Stack>

        {/* 서버 호출 버튼 */}
        <Box sx={{ textAlign: 'center' }}>
          <Button
            onClick={fetchFood}
            variant="contained"
            color="success"
            sx={{
              paddingX: 4,
              paddingY: 1.5,
              fontSize: '1.1rem',
              '&:hover': { backgroundColor: '#388e3c' },
            }}
          >
            음식 추천 받기
          </Button>
        </Box>

        {/* 응답 결과 표시 */}
        {food && (
          <Box sx={{ marginTop: 4, textAlign: 'center' }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold'}}>
              {food.name}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', marginTop: 1 }}>
              {food.category}
            </Typography>
          </Box>
        )}
      </Paper>
    </Container>
  );
}

export default Food;
