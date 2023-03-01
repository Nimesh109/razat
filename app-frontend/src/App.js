import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import {
  HomePage,
  About,
  Login,
  Register,
  ForgetPass,
  Blog,
  Gallery,
  Banquet,
  DisplayBanquet,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/Banquet" element={<Banquet />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/displayBanquet" element={<DisplayBanquet />}></Route>

          <Route path="/register" element={<Register />}></Route>
          <Route path="/forgetPass" element={<ForgetPass />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
