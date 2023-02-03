import React from 'react'
import Header from './Components/Header/Header'
import Home from './Pages/Home/Home'
import Checkout from './Components/Checkout/Checkout'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
 
function App(){
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={[<Header />,<Home />]} />
          <Route path="checkout" element={[<Header />,<Checkout />]}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App