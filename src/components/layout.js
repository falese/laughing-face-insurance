import * as React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'
import { row,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    column, container} from './styles.module.scss'
import Header from './header'

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
        <div>
           <Header 
           siteTitle={data.site.siteMetadata.title}
           />
            <nav className={row}>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link> </li>
                        
                    <li className={navLinkItem}><Link to="/about" className={navLinkText}>About Us</Link></li>
                    <li className={navLinkItem}><Link to="/log" className={navLinkText}>Log Entries</Link></li>
                    <li className={navLinkItem}><Link to="/intern" className={navLinkText}>Apply for an Internship</Link></li>
                    <li className={navLinkItem}><Link to="/Hall" className={navLinkText}>Intern Hall of Fame</Link></li>
                   
                </ul>
            </nav>
            <main className={row}>
                <h1 className={heading}>{pageTitle}</h1>
                <div className={container}>
                {children}
                </div>
            </main>
        </div>
    )
}

export default Layout