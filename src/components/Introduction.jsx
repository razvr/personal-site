import React from 'react'
import '../styles/homepage.scss'

// import * as data from '../markdown/introduction.md'

class Introduction extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="introduction">
          {/* <div className="image">
            <img src="https://via.placeholder.com/350x150" alt="" />
          </div> */}
          <div className="copy">
            <h1>Hey <span className="blink"> █ </span></h1>
            <p>
              I'm Ray. I love design and strive for flawless execution.
            </p>
            <p>
              I've been passionate about web design since I was 12 years old. Wanted to be an illustrator but got an AAS in graphic design instead. Web development allows me to marry my love for art with my desire for organization. The results are thoughtful compositions with full functionality.
            </p>
            <div className="buttons">
              <a href="https://twitter.com/_Razur">
                <button>Twitter</button>
              </a>
              <a href="https://github.com/razvr">
                <button>Github</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Introduction
