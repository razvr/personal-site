import React from 'react'
import Layout from "../components/layout"
import Link from 'gatsby-link'

import Template from '../components/Template'
const portfolio = () => (
  <Layout>


    <div className="container">
      <h1>Portfolio</h1>
      <p>Here's a quick look at some of the work I've done.
      <br />
        <small>Organization will be more practical in the future, I just needed a 1-pager with everything on it.</small>
        <br /><br />
        <Link to="/"><button>Go back to the homepage</button></Link>
        <br /><br />
      </p>

      <Template />

    </div>


  </Layout>
)

export default portfolio
