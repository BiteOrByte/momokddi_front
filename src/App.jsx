import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import MyPage from './components/myPage'
import Header from './components/header'

function App() {
  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route path="/myPage" element={<MyPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
