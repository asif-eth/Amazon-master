import React from 'react'
import "./Home.css"
import Product from './Components/Product/Product'

const Home = () => {
  return (
    <div className="home">
        <div className="home-container">
            <img className='home-image' src="https://m.media-amazon.com/images/I/61NeF7dQPhL._SX1500_.jpg" alt="" />

            <div className="home-row">

                <Product 
                title="MacBook Air with M2 chip"
                price={"1,02,990"}
                image="https://m.media-amazon.com/images/I/719C6bJv8jL._SX679_.jpg"
                rating={5}
                />

                <Product 
                title="Apple iPhone 14 Pro Max 128GB Deep Purple"
                price={"1,39,900"}
                image="https://m.media-amazon.com/images/I/31GmCJTD0GL._SY445_SX342_QL70_FMwebp_.jpg"
                rating={5}
                />

            </div>

            <div className="home-row">

                <Product 
                title="Krishna: The Man & His Philosophy"
                price={"284"}
                image="https://m.media-amazon.com/images/I/51hNchmuWuL._SX319_BO1,204,203,200_.jpg"
                rating={5}
                />

                <Product 
                title="UrbanBotanics Pressed Olive Oil"
                price={"269"}
                image="https://m.media-amazon.com/images/I/61acPpIHP4L._SX425_.jpg"
                rating={4}
                />

            </div>

            <div className="home-row">

                <Product 
                 title="Versace Dylan Turquoise Eau De Toilette Natural Spray for Women 50 ml"
                 price={"5,535"}
                 image="https://m.media-amazon.com/images/I/61n25zVL1wL._SY679_.jpg"
                 rating={5}
                />

                <Product 
                 title="Hugo Boss BOTTLED TONIC Eau de Toilette Spray for Men 200 ml"
                 price={"8,200"}
                 image="https://m.media-amazon.com/images/I/813w63ogyDL._SX466_.jpg"
                 rating={5}
                />

            </div>

        </div>
    </div>
  )
}

export default Home
