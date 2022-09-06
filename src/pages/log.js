import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const LogPage = () =>{
    return(
        <Layout pageTitle="Log Entries">
            <p>Entries from the Stella Marina's Voyages</p>
        </Layout>
    )
}
export const Head = ()=> <Seo title="Log Entries" />
export default LogPage