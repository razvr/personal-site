import React from 'react'
import '../styles/homepage.scss'

class Footer extends React.Component {
  render() {
    return (
      <footer className="disclaimer" >
        <div className="container" style={{height: "18px"}}>
          <div className="copyright">
            &copy; 2016 &ndash; 2018 Rachel Zurawski
          </div>
          <div className="wip">
            website is a work in progress
          </div>
        </div>
      </footer>
    )
  }
}
export default Footer
