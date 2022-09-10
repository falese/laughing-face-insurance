import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


const InternPage = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.hero_Image)
  return (
    
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <GatsbyImage
      image= {image}
      alt="ron the frickin man"
      />
      {children}
   
  
    </Layout>
  
  )
}
export const query = graphql`
query ($id: String) {
  mdx(id: {eq: $id}, frontmatter: {meta: {eq: "hall"}}) {
    frontmatter {
      title
      hero_Image{
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    body
  }
}
`
export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default InternPage

