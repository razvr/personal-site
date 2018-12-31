import React from 'react'
import '../styles/homepage.scss'
//import $ from 'jquery'
//  Import function
import panning from '../scripts/homepage'

import '../styles/particles.scss'

class Jumbotron extends React.Component {
  componentDidMount() {
    panning()
  }
  render() {
    return (
      <div className="jumbotron" ref={elem => (this.elem = elem)}>
        <div className="bg" />
        <div className="panel" />
        <div id="focus" />
        <div className="page-head">
          <div className="title">
            <img src={require("../imgs/logo.png")} alt={''}/>
          </div>
          <div className="tag">
            <span>
              avid gamer.&nbsp; developer + designer.
            </span>
          </div>
        </div>

      </div>

    )
  }
}
export default Jumbotron
