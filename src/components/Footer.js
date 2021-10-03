import React from 'react'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a href="https://www.linkedin.com/in/teo-cherici-a6a6509b/" className="icon fa-linkedin">
            <span className="label">LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/TCherici" className="icon fa-github">
            <span className="label">Github</span>
          </a>
        </li>
        <li>
          <a href="mailto: tcherici@gmail.com" className="icon fa-envelope-o">
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; Gatsby Starter Strata</li>
        <li>
          Design: <a href="http://html5up.net">HTML5 UP</a>
        </li>
      </ul>
      <par className="copyright">
          Background by <a href="https://unsplash.com/@staffank?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Staffan Kjellvestad</a> on <a href="https://unsplash.com/s/photos/forest?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
      </par>
    </div>
  </div>
)

export default Footer
