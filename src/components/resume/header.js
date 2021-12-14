import React from 'react';
import avatar from '../../assets/images/teo_portrait_2.png'

const Header = ({ basics }) => (
  <section id="header_cv" className="row">
  <aside className="col-sm-3">
  <img src={avatar} alt="" width="150"/>
  </aside>
    <div className="col">
      <h1>{basics.name}</h1>
      <h2>{basics.label}</h2>
  </div>
</section>
);

export default Header;