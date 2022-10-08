import * as React from 'react'
import Layout from '../../components/layout'
import { graphql, Link } from 'gatsby'


const LogPage = ({ data }) => {
    return (
        <Layout pageTitle="Ship's Log">
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
    allMdx(filter: {frontmatter: {meta: {eq: "log"}}}) {
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

export default LogPage