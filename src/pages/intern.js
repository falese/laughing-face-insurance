import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const InternPage = () =>{
    return(
        <Layout pageTitle="Internship">
            <p>Join our amazing team as an Intern</p>
        </Layout>
    )
}
export const Head = ()=> <Seo title="Internships" />
export default InternPage