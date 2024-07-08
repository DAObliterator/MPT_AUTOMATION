import React from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import { useAuth } from './Contexts/AuthContext';
import Home from './pages/Home';
import { UploadedPdfs } from './pages/UploadedPdfs';
import { AdminDashboard} from "./pages/AdminDashboard";
import "./App.css"
import Sidebar from './components/Sidebar';

 const App = () => {
  const { isLoggedIn, setIsLoggedIn, userDetails, setUserDetails, isAdmin , setIsAdmin } = useAuth();

  return (
    <div id="AppMain">
      <Router>
        {isLoggedIn && <Sidebar></Sidebar>}
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          {isLoggedIn && (
            <Route
              path="/allUploads"
              element={<UploadedPdfs></UploadedPdfs>}
            ></Route>
          )}
          {isAdmin && (
            <Route
              path="/adminDashboard"
              element={<AdminDashboard></AdminDashboard>}
            ></Route>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

