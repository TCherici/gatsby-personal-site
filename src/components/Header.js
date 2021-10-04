import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/teo_portrait_color_adjusted.png'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="/" className="image avatar">
        <img src={avatar} alt="" width="300"/>
      </a>
      <h1>
        <strong>Teo Cherici</strong>
        <br />
        Machine Learning Researcher
        <br />
        Deep Learning Engineer
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
