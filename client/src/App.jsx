import './App.css';
import { Route, Routes } from "react-router-dom";

import IndexPage from './pages/indexPage';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
// import ExplorePage from './pages/explorePage';

import axios from "axios"

axios.defaults.baseURL = 'http://localhost:4000'

function App() {

  return (
    <Routes>
      <Route index element={<IndexPage />}/>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      {/* <Route path="/ratings" element={<RatingsPage />} /> */}
    </Routes>
  )
}

export default App