import Footer from "./components/Layout/Footer/Footer";
import Navbar from "./components/Layout/Navbar/Navbar";
import Home from "./components/Page/Home/Home";
import Purchase from "./components/Page/Purchase/Purchase";

function App() {
  return (
    <div className="">
      <Navbar>
        {/* <Home /> */}
        <Purchase />
        <Footer />
      </Navbar>
    </div>
  );
}

export default App;
