import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Banner = () => {
    const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
            
          }
          description
        }
      }
    }
  `)
return(
    <div>
    {/* <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/splash.jpg"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      /> */}
        <p>
            {data.site.siteMetadata.description}
        </p>
    </div>
)

}
export default Banner