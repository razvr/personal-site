import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Jumbotron from '../components/Jumbotron'
import Introduction from '../components/Introduction'
import Skills from '../components/Skills'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'
// import './index.css'
import '../styles/homepage.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'avid gamer. developer + designer.' },
        { name: 'keywords', content: 'developer, design' },
      ]}
    />
    {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div className="wrapper">
        <Jumbotron/>
        <Introduction/>
        <Skills/>
        <div style={{height: "40px", width: "100%"}}/>
      </div>
    <Footer/>
    {/* <Carousel/> */}
    {/* <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div> */}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
