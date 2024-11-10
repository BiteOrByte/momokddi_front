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
          <Route path="/myPage" element={<MyPage />} />
          <Route path="/food" element={<Food />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
