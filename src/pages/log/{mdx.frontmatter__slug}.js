import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'


const LogEntry = ({ data, children }) => {
  return (
    
    <Layout pageTitle={data.mdx.frontmatter.title}>
   
      {children}
   
  
    </Layout>
  
  )
}
export const query = graphql`
query ($id: String) {
  mdx(id: {eq: $id}, frontmatter: {meta: {eq: "log"}}) {
    frontmatter {
      title
    }
    body
  }
}
`
export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default LogEntry

