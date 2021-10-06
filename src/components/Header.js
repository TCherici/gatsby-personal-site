import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/teo_portrait_2.png'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="/" className="image avatar">
        <img src={avatar} alt="" width="300"/>
      </a>
      <h1>
        <strong>Teo Cherici</strong>
      </h1>
      <h1>
        Machine Learning Researcher
      </h1>
      <h1>
        Deep Learning Engineer
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
