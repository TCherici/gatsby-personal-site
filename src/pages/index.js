import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Hi I'm Teo.</p>
      <StaticImage
        alt="Chilling with my cat"
        src="../images/meandpoepie.jpg"
      />
    </Layout>
  )
}

export default IndexPage
