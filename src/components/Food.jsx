import { useState } from 'react';
import { Checkbox, Typography, Button, Box, Stack } from '@mui/joy';

// React 컴포넌트로 변경
const Food = () => {
  // 선택한 카테고리를 상태로 관리
  const [selectedFood, setSelectedFood] = useState('');

  // 체크박스 항목 리스트 (음식 카테고리)
  const foodCategories = ['한식', '중식', '양식', '일식', '동남아식'];

  // 선택된 카테고리 업데이트
  const handleFoodSelect = (food) => {
    setSelectedFood(food);
  };

  return (
    <Box
      sx={{
        p: 4,
        maxWidth: 400,
        mx: 'auto',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <Typography level="h2" fontSize="lg" mb={2}>
        음식 카테고리를 선택하세요
      </Typography>

      {/* 체크박스 항목 세로 배치 */}
      <Stack spacing={2} alignItems="flex-start">
        {foodCategories.map((food) => (
          <Checkbox
            key={food}
            label={food}
            size="lg"
            checked={selectedFood === food}
            onChange={() => handleFoodSelect(food)}
          />
        ))}
      </Stack>

      {/* 선택된 카테고리 이름을 표시 */}
      <Box mt={4} textAlign="center">
        <Typography level="h1" fontSize="xl" fontWeight="bold" mb={1}>
          {selectedFood || '음식을 선택해주세요'}
        </Typography>
        <Typography level="body2" color="neutral.500">
          {selectedFood ? `카테고리: ${selectedFood}` : ''}
        </Typography>
      </Box>

      {/* 시작 버튼 */}
      <Button
        variant="solid"
        color="primary"
        size="lg"
        onClick={() => alert(`선택한 카테고리: ${selectedFood}`)}
        sx={{ mt: 4 }}
        disabled={!selectedFood}
      >
        시작
      </Button>
    </Box>
  );
};

export default Food;
