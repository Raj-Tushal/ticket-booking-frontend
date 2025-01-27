import EmailList from "./components/EmailList.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import HotelPage from "./pages/Hotel";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ResultPage from "./pages/ResultPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ErrorPage from "./components/ErrorPage.jsx";
import { useEffect } from "react";
import API from "./utils/api.js";
import { loginFailure, loginSuccess } from "./redux/Slices/auth.js";
function App() {
  const light = useSelector((state) => state.themeReducer.light);
  const dispatch = useDispatch();
  
    // On App Load (Check if user is logged in)
    useEffect(() => {
      const token = localStorage.getItem("token");
      console.log(token,"token");
      if (token) {
        // Verify token and fetch user details if necessary
        API.get("/auth/me")
          .then((response) => {
            dispatch(loginSuccess(response.data));
          })
          .catch((error) => {
            dispatch(loginFailure(error));
          });
      }
    }, []);
  return (
    
    <div className={light ? "" : "dark" }>

      {/* Dynamic Routes */}
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Result" element={<ResultPage />} />
          <Route path="/Hotel/:id" element={<HotelPage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Register" element={<SignUpPage />} />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>

      <EmailList />
    </div>
  );
}

export default App;
