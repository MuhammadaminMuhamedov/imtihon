import React, { useEffect, useState } from 'react'
import "./Product.css"
import home0 from "../assets/uy.png"
import uycha from "../assets/homeee.png"

const Product = () => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    fetch("https://698c128c21a248a27360636a.mockapi.io/house")
      .then(res => res.json())
      .then(data => {
        const newData = data.slice(0, 9).map(item => ({
          ...item,
          rooms: 0
        }))
        setProduct(newData)
      })
      .catch(err => console.log(err))
  }, [])

  const addRoom = (id) => {
    const updated = product.map(item =>
      item.id === id ? { ...item, rooms: item.rooms + 1 } : item
    )
    setProduct(updated)
  }

  return (
    <div>
      <img src={home0} className='uy' />
      <h1 className='text1'>The Best Cities</h1>

      <div className="cards">
        {product.slice(0, 3).map(item => (
          <div key={item.id} className='card'>
            <img src={uycha} className='api' />
            <h1 className='city'>{item.city}</h1>

            <div className="p">
              <p className='pp'>{item.rooms} Rooms</p>
              <p className='pp'>{item.area}</p>
            </div>

            <div className="btn">
              <button onClick={() => addRoom(item.id)} className='btnn'>Add rooms</button>
              <button onClick={() => setProduct(prev => prev.map(p => ({ ...p, rooms: 0 })))} className='btnn'>Reset</button>
              <h1 className='price'>${item.price}</h1>
            </div>
          </div>
        ))}
      </div>

      <h1 className='text2'>California houses</h1>

      <div className="cards">
        {product.slice(3, 6).map(item => (
          <div key={item.id} className='card'>
            <img src={uycha} className='api' />
            <h1 className='city'>{item.city}</h1>

            <div className="p">
              <p className='pp'>{item.rooms} Rooms</p>
              <p className='pp'>{item.area}</p>
            </div>

            <div className="btn">
              <button onClick={() => addRoom(item.id)} className='btnn'>Add rooms</button>
              <button onClick={() => setProduct(prev => prev.map(p => ({ ...p, rooms: 0 })))} className='btnn'>Reset</button>
              <h1 className='price'>${item.price}</h1>
            </div>
          </div>
        ))}
      </div>

      <h1 className='text2'>Miami houses</h1>

      <div className="cards">
        {product.slice(6, 9).map(item => (
          <div key={item.id} className='card'>
            <img src={uycha} className='api' />
            <h1 className='city'>{item.city}</h1>

            <div className="p">
              <p className='pp'>{item.rooms} Rooms</p>
              <p className='pp'>{item.area}</p>
            </div>

            <div className="btn">
              <button onClick={() => addRoom(item.id)} className='btnn'>Add rooms</button>
              <button onClick={() => setProduct(prev => prev.map(p => ({ ...p, rooms: 0 })))} className='btnn'>Reset</button>
              <h1 className='price'>${item.price}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product

