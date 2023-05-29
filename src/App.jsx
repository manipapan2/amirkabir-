import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import { createContext, useContext, useState } from 'react'
import NavigationBar, { Footer, Languageselector, Model, Zaban} from "./cumponents/cumponents";
import Home from "./Home/home";
import Photos from "./Photos/photos";
import './App.css'

function App() {
  const [model, setmodel] = useState("")
  const [zaban, setzaban] = useState("english")
  return (
    <Router>
      <NavigationBar></NavigationBar>
      <Languageselector></Languageselector>
        <Zaban.Provider value={{zaban, setzaban}}>
        <Model.Provider value={{model, setmodel}}>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/photos" element={<Photos></Photos>}/>
      </Routes>
        </Model.Provider>
        </Zaban.Provider>
      <Footer></Footer>
    </Router>
  );
}
export default App