import React from 'react'
import Layout from "../components/layout"

import Jumbotron from '../components/Jumbotron'
import Introduction from '../components/Introduction'
import Skills from '../components/Skills'

const IndexPage = () => (
  <Layout>


      <Jumbotron />
      <Introduction />
      <Skills />
      <div style={{ height: "40px", width: "100%" }} />


  </Layout>
)

export default IndexPage
