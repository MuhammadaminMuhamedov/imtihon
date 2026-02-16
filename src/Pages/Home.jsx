import React, { useEffect, useState } from "react"
import "./Home.css"

import home0 from "../assets/uy.png"
import home1 from "../assets/uy.jpg"
import imgage from "../assets/image.png"
import map from "../assets/map.png"
import cilp from "../assets/Clip.png"
import blak from "../assets/blak.png"
import path from "../assets/Path.png"
import uycha from "../assets/homeee.png"
import ulu from "../assets/ulu.png"


const Home = () => {
  const [home, setHome] = useState([])

  useEffect(() => {
    fetch("https://698c128c21a248a27360636a.mockapi.io/house")
      .then(res => res.json())
      .then(data => setHome(data.slice(0, 3)))

  }, [])

  return (
    <div>
      <h1 className='text'>Find Your Dream Home</h1>
      <p className='pa'>Explore our curated selection of exquisite properties meticulously tailored to your unique dream home vision</p>
      <img src={home0} className='uy' />

      <div className="input">
        <input type="text" placeholder='Location' className='inpt' />
        <input type="text" placeholder='Property Type' className='inpt' />
        <input type="number" placeholder='Price Range' className='inpt' />
      </div>

      <img src={home1} className='home1' />

      <h1 className='j1text'>We Help You To Find Your Dream Home</h1>
      <p className='j1p'>From cozy cottages to luxurious estates, our dedicated team guides you through every step of the journey, ensuring your dream home becomes a reality</p>
      <img src={imgage} className="imagga" />

      <h1 className='text1'>Why Choose Us</h1>
      <p className='p1'>Elevating Your Home Buying Experience with Expertise, Integrity, and Unmatched Personalized Service</p>

      <div className="j2">
        <div className="box1">
          <img src={map} className="j2img" />
          <h1 className='j2text'>Expert Guidance</h1>
          <p className='j2p'>Benefit from our team's seasoned expertise for a smooth buying experience</p>
        </div>

        <div className="box2">
          <img src={cilp} className="j2img" />
          <h1 className='j2text'>Expert Guidance</h1>
          <p className='j2p'>Benefit from our team's seasoned expertise for a smooth buying experience</p>
        </div>

        <div className="box3">
          <img src={blak} className="j2img" />
          <h1 className='j2text'>Expert Guidance</h1>
          <p className='j2p'>Benefit from our team's seasoned expertise for a smooth buying experience</p>
        </div>

        <div className="box4">
          <img src={path} className="j2img" />
          <h1 className='j2text'>Expert Guidance</h1>
          <p className='j2p'>Benefit from our team's seasoned expertise for a smooth buying experience</p>
        </div>
      </div>

      <div className="cards">
        {home.map(item => (
          <div key={item.id} className="card">
            <img src={uycha} className="api" />
            <h1 className="apih1">{item.city}</h1>
            <div className="p">
              <p className="apip">{item.rooms} Rooms</p>
              <p className="apip1">{item.area}</p>
            </div>
            <div className="b">
              <button className="bb">Sign Up</button>
              <h1 className="price">{item.price}</h1>
            </div>
          </div>
        ))}
      </div>

      <h1 className="j3">What People Say About Dwello</h1>
      <div className="j3ota">
        <img src={ulu} className="ulu" />
        <img src={ulu} className="ulu" />
        <img src={ulu} className="ulu" />
      </div>

      <div className="foot">
        <button className="ft"></button>
        <button className="ft"></button>
      </div>
      <br />

    </div>
  )
}

export default Home
