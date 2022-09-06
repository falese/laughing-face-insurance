import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = () =>{
  return (
    <div>
    <Layout pageTitle="Home Page">
    <p>Welcome to the Laughing Head Insurance Company</p>
    <StaticImage
    alt="logo for insurance company with a laughing head"
    src="../images/Slide1.png"></StaticImage>
  </Layout>
  </div>
  )
}

export const Head = ()=> <Seo title="Home Page" />
export default IndexPage