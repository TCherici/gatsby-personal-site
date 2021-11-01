import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import CV from '../assets/Teo_Cherici_CV.pdf'

const HomeIndex = () => {
  const siteTitle = 'Teo Cherici'
  const siteDescription = 'Personal Website'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
              Hi there! I'm Teo <span role="img" aria-labelledby="smile">😄</span>
            </h2>
          </header>
          <p>
            Deep Learning and Machine Learning expert, with focus on Convolutional 
            Neural Networks for 3D voxel and point-cloud data.
            During my Mechanical Engineering studies at the Delft University of Technology,
             through Robotics, I discovered Artificial Intelligence and dived in.
            <br />
            AGI and robotics enthousiast.
            <br />
            Fluent in &nbsp;
            <span role="img" aria-labelledby="it">🇮🇹</span> Italian,
            &nbsp;<span role="img" aria-labelledby="uk">🇬🇧</span> English 
            and &nbsp; <span role="img" aria-labelledby="nl">🇳🇱</span> Dutch

          </p>
          <ul className="actions">
            <li>
              <a href={CV} className="button">
                Download CV
              </a>
            </li>
          </ul>
        </section>
        <section id="contact">
          <h2>Where to find me</h2>
          <p>
            I prefer contact through email.
          </p>
          <div className="row">
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  
                <h3 className="icon fa-envelope-o">
                  <span className="label">Email</span>
                </h3>
                tcherici@gmail.com
                </li>
                <li>
                  <h3 className="icon fa-github">
                    <span className="label">GitHub</span>
                  </h3>
                  <a href="https://github.com/TCherici"> TCherici on github </a>
                </li>
                <li>
                  <h3 className="icon fa-linkedin">
                    <span className="label">LinkedIn</span>
                  </h3>
                  <a href="https://www.linkedin.com/in/teo-cherici-a6a6509b/">LinkedIn</a>
                </li>
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Address</span>
                  </h3>
                  Leiden,
                  <br />
                  Netherlands
                </li>
              </ul>
            </div>
          </div>
        </section>
        
      </div>
    </Layout>
  )
}

export default HomeIndex
