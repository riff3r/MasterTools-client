import { Route, Routes } from "react-router-dom";
import Footer from "./components/Layout/Footer/Footer";
import Navbar from "./components/Layout/Navbar/Navbar";
import Home from "./components/Page/Home/Home";
import Purchase from "./components/Page/Purchase/Purchase";
import Login from "./components/Page/Login/Login";
import Signup from "./components/Page/Signup/Signup";
import RequireAuth from "./components/Authentication/RequireAuth";
import NotFound from "./components/Page/NotFound/NotFound";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="">
      <Navbar>
        {/* <Home /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/purchase/:id"
            element={
              <RequireAuth>
                <Purchase />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Navbar>

      <ToastContainer />
    </div>
  );
}

export default App;
