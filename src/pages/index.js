import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
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
              Hi there! I'm Teo <span>😄</span>
            </h2>
          </header>
          <p>
            Deep Learning and Machine Learning expert, with focus on Convolutional 
            Neural Networks for 3D voxel and point-cloud data.
            During my Mechanical Engineering studies at the Delft University of Technology,
             through Robotics, I discovered Artificial Intelligence and dived fully into it.
            <br />
            AGI and robotics enthousiast.
            <br />
            Fluent in Italian <span>🇮🇹</span>, English <span>🇬🇧</span> and Dutch <span>🇳🇱</span>

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
          <h2>Get In Touch</h2>
          <p>
            I prefer contact through email.
          </p>
          <div className="row">
            <div className="8u 12u$(small)">
              {/* <form method="post" action="#">
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </form> */}
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="#">tcherici@gmail.com</a>
                </li>
                <li>
                  <h3 className="icon fa-mobile">
                    <span className="label">Phone</span>
                  </h3>
                  +31 (0)641883688
                </li>
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Address</span>
                  </h3>
                  Hogewoerd 49A
                  <br />
                  Leiden, 2311HG
                  <br />
                  Netherlands
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="photos">
          <h2>Photos of my cat</h2>

          <Gallery />

          {/* <ul className="actions">
            <li>
              <a href="#" className="button">
                Full Portfolio
              </a>
            </li>
          </ul> */}
        </section>

        
      </div>
    </Layout>
  )
}

export default HomeIndex
