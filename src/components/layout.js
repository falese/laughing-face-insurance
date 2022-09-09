import * as React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'
import { container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle} from './styles.module.scss'

const Layout = ({pageTitle, children}) => {
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
        <div className={container}>
            <header className={siteTitle}>{data.site.siteMetadata.title}</header>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link> </li>
                        
                    <li className={navLinkItem}><Link to="/about" className={navLinkText}>About Us</Link></li>
                    <li className={navLinkItem}><Link to="/log" className={navLinkText}>Log Entries</Link></li>
                    <li className={navLinkItem}><Link to="/intern" className={navLinkText}>Apply for an Internship</Link></li>
                   
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout