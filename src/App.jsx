import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
// import { useState } from 'react'
import NavigationBar, { Footer } from "./cumponents/cumponents";
import Home from "./Home/home";
import Photos from "./Photos/photos";
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/photos" element={<Photos></Photos>}/>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App
