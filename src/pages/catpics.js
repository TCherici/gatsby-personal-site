import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Gallery from '../components/Gallery'


const CatPics = () => {
    const siteTitle = "Poepie 'o Malley"
    const siteDescription = 'Best cat in the world'
  
    return (
        <Layout>
            <Helmet>
                <title>{siteTitle}</title>
                <meta name="description" content={siteDescription} />
            </Helmet>
            <div id='main'>
              <section id="photos">
            <h2>Photos of my cat</h2>

            <Gallery />

            <ul className="actions">
              <li>
                <a href="/" className="button">
                  Back to main page
                </a>
              </li>
            </ul>
          </section>

            </div>
        </Layout>
    )
}

export default CatPics
