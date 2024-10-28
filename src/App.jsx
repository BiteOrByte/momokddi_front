import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import MyPage from './component/myPage'
import Header from './component/header'

function App() {
  const [count, setCount] = useState(0)

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
