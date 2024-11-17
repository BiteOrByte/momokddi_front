import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MyPage from './components/MyPage.jsx';
import Header from './components/Header.jsx';
import Food from './components/Food.jsx';
import Login from './components/login/Login.jsx';
// import LoginHandeler from './components/login/LoginHandeler.jsx';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/myPage" element={<><Header /><MyPage /></>} />
          <Route path="/food" element={<><Header /><Food /></>} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/login/callback" element={<LoginHandeler />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
