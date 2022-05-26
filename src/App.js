import { Route, Routes } from "react-router-dom";
import Footer from "./components/Layout/Footer/Footer";
import Navbar from "./components/Layout/Navbar/Navbar";
import Home from "./components/Page/Home/Home";
import Purchase from "./components/Page/Purchase/Purchase";
import Login from "./components/Page/Login/Login";
import Signup from "./components/Page/Signup/Signup";
import RequireAuth from "./components/Authentication/RequireAuth";
import NotFound from "./components/Page/NotFound/NotFound";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./components/Page/Dashboard/Dashboard";
import MyOrders from "./components/Page/Dashboard/MyOrders";
import AddReview from "./components/Page/Dashboard/AddReview";
import MyProfile from "./components/Page/Dashboard/MyProfile";
import ManageAllOrders from "./components/Page/Dashboard/ManageAllOrders";
import ManageProducts from "./components/Page/Dashboard/ManageProducts";
import MakeAdmin from "./components/Page/Dashboard/MakeAdmin";
import AddProduct from "./components/Page/Dashboard/AddProduct";
import Payment from "./components/Page/Dashboard/Payment";
import Blog from "./components/Page/Blog/Blog";
import Portfolio from "./components/Page/Portfolio";

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
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard></Dashboard>
              </RequireAuth>
            }
          >
            <Route index element={<MyProfile />} />

            <Route index path="myOrders" element={<MyOrders />} />

            <Route path="addReview" element={<AddReview />} />

            <Route path="myProfile" element={<MyProfile />} />

            <Route path="manageOrders" element={<ManageAllOrders />} />

            <Route path="manageProducts" element={<ManageProducts />} />

            <Route path="addProduct" element={<AddProduct />} />

            <Route path="makeAdmin" element={<MakeAdmin />} />

            <Route path="payment/:id" element={<Payment />} />
          </Route>

          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<Portfolio />} />
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
