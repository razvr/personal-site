import React from 'react'
import '../styles/homepage.scss'
import Link from 'gatsby-link'


class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container" style={{height: "18px"}}>
          <div className="copyright">
          <Link to="/portfolio">&copy;</Link> 2016 &ndash; 2018 Rachel Zurawski
          </div>
          <div className="wip">
            built with <a href="https://www.gatsbyjs.org/">gatsby</a>,&nbsp; hosted by <a href="https://neocities.org/">neocities</a><i>!</i>
          </div>
        </div>
      </footer>
    )
  }
}
export default Footer
