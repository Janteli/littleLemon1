import React from 'react'
import { Link } from 'react-router-dom'
import bannerImg from '../images/RestaurantFood.jpg'
const Header = () => {
  return (
    <>
      <header className='header'>
        <section>
          {/* banner text */}
          <div className='banner'>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>We are a family owned Mediterraneran restaurent, focused on traditional recipes served.</p>
            <Link to = '/booking'><button aria-label='On Click' >Reserve Table</button></Link>
          </div>

          {/* banner image */}
          <div className='banner-img'>
            <img src={bannerImg} alt='' />
          </div>
        </section>
      </header>
    </>
  )
}

export default Header