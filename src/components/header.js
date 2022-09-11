import * as React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'
import { siteTitle } from './styles.module.scss'

const Header =() =>{
    const data = useStaticQuery(
        graphql`
        query{
            site{
                siteMetadata{
                    title
                }
            }
        }`
    )
    return(
        <header className={siteTitle}>{data.site.siteMetadata.title}</header>
    )
}

export default Header