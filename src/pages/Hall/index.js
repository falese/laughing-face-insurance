import * as React from 'react'
import Layout from '../../components/layout'
import { graphql, Link } from 'gatsby'

const HallEntry = ({ data }) => {
    return (
        <Layout pageTitle="Hall of Fame">
    <ul>
    {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2><Link to={`../Hall/${node.slug}`}>
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
        }
        id
        slug
      }
    }
  }
`

export default HallEntry