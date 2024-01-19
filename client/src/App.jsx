import './App.css';
import { Route, Routes } from "react-router-dom";

import IndexPage from './pages/indexPage';
import LoginPage from './pages/loginPage';
// import IndexPager from './pages/indexPage2';
import RegisterPage from './pages/registerPage';
// import Add from './pages/Add'
// import ExplorePage from './pages/explorePage';

import axios from "axios"
import { UserContextProvider } from './UserContext';

axios.defaults.baseURL = 'http://127.0.0.1:4000'
axios.defaults.withCredentials = true

function App() {

  return (
    <UserContextProvider>
      <Routes>
        <Route index element={<IndexPage />}/>
        {/* <Route path="/2"  element={<IndexPager />}/> */}
        {/* <Route path="/add"  element={<Add />}/> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* <Route path="/ratings" element={<RatingsPage />} /> */}
      </Routes>
    </UserContextProvider>
    
  )
}

export default App