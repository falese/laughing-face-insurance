import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'


const DocPage = ({ data }) => {
 console.log(data)
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}
      </p>
      <MDXRenderer>
        {data.mdx.body}
        
      </MDXRenderer>
    </Layout>
  
  )
}
export const query = graphql`
query ($id: String) {
  mdx(id: {eq: $id}, frontmatter: {meta: {eq: "hall"}}) {
    frontmatter {
      title
      date(formatString: "MMMM D, YYYY")
      attachments{
        publicURL
      }
    }
    body
  }
}
`

export default DocPage

