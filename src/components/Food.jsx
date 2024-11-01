// App.js
import { useState } from 'react';
import Checkbox from '@mui/joy/Checkbox';
import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import axios from 'axios';

function Food() {
  const [selectedCategories, setSelectedCategories] = useState([]); // 타입 없이 기본 사용
  const [food, setFood] = useState(null); // null로 초기화

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

  // API 호출
  const fetchFood = async () => {
    try {
      const params = new URLSearchParams();
      selectedCategories.forEach((category) => params.append('category', category));

      const response = await axios.get(`http://localhost:8080/food?${params.toString()}`);
      setFood(response.data);
    } catch (error) {
      console.error('API 호출 중 오류:', error);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <Typography level="h4" gutterBottom>
        음식 카테고리 선택
      </Typography>

      {/* 체크박스 리스트 */}
      <Stack spacing={1}>
        {categories.map((category) => (
          <Checkbox
            key={category}
            label={category}
            checked={selectedCategories.includes(category)}
            onChange={() => handleCheckboxChange(category)}
          />
        ))}
      </Stack>

      {/* 서버 호출 버튼 */}
      <Button onClick={fetchFood} variant="solid" color="primary" sx={{ mt: 2 }}>
        음식 추천 받기
      </Button>

      {/* 응답 결과 표시 */}
      {food && (
        <div style={{ marginTop: '20px' }}>
          <Typography level="h2" gutterBottom>
            {food.name}
          </Typography>
          <Typography level="body1" color="neutral">
            {food.category}
          </Typography>
        </div>
      )}
    </div>
  );
}

export default Food;
