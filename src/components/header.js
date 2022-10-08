import * as React from 'react'
import { siteTitle, wrap, row, column, doubleColumn } from './styles.module.scss'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql, useStaticQuery } from 'gatsby'

export default function Header(props) {
    const data = useStaticQuery(graphql`
    {
      imageSharp(fixed: {originalName: {eq: "logo.png"}}) {
        gatsbyImageData
      }
    }
  `)
    const logoImage = getImage(data.imageSharp.gatsbyImageData)
    return(
        <div className={row}>
            <div className={column}>
                <div>
                <GatsbyImage 
                    image={logoImage}
                    alt="logo"
                    className={wrap}
                />
                   
                </div>
            </div>
            <div className={doubleColumn}>
                <header className={siteTitle}>{props.siteTitle}</header>
            </div>
        </div>

    )
}

