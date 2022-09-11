import * as React from 'react'
import {Link, useStaticQuery, graphql} from 'gatsby'
import { container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText} from './styles.module.scss'
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
        <div className={container}>
           <Header pageTitle={pageTitle}></Header>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link> </li>
                        
                    <li className={navLinkItem}><Link to="/about" className={navLinkText}>About Us</Link></li>
                    <li className={navLinkItem}><Link to="/log" className={navLinkText}>Log Entries</Link></li>
                    <li className={navLinkItem}><Link to="/intern" className={navLinkText}>Apply for an Internship</Link></li>
                    <li className={navLinkItem}><Link to="/Hall" className={navLinkText}>Intern Hall of Fame</Link></li>
                   
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