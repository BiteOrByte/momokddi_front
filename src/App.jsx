import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyPage from './components/MyPage.jsx';
import Header from './components/Header.jsx';
import Food from './components/Food.jsx';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Food />} />
          <Route path="/food" element={<Food />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
