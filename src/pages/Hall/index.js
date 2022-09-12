import * as React from 'react'
import Layout from '../../components/layout'
import { graphql, Link } from 'gatsby'


const HallPage = ({ data }) => {
    return (
        <Layout pageTitle="Hall of Fame">
    <ul>
    {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2><Link to={`./${node.frontmatter.slug}`}>
                {node.frontmatter.title}
                </Link>
            </h2>
          </article>
        ))
      }
      </ul>
        </Layout>
    )
}
export const query = graphql`
  query {
    allMdx(filter: {frontmatter: {meta: {eq: "hall"}}}) {
      nodes {
        frontmatter {
          title
          slug
        }
        id
        
      }
    }
  }
`

export default HallPage