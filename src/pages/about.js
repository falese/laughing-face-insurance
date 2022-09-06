import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () =>{
    return (
        <Layout pageTitle="About Us">
            <p>We're the insurance company you hire when you need others to incur losses</p>
        </Layout>
    )
}
export const Head = () =>(
   
    <Seo title="About Us" />

)
export default AboutPage