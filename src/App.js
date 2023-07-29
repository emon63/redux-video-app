
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Video from "./pages/video/Video";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/videos/:videoId" element={<Video />}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
