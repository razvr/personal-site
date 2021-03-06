import React from 'react'
import '../styles/homepage.scss'

import * as Icon from '../icons/skill-icons'

//  SKILLS TO ADD
//  SASS 👌
//  

class Skills extends React.Component {
  skills = [
    {
      function: 'react',
      display: 'React',
    },
    {
      function: 'html',
      display: 'HTML5',
    },
    {
      function: 'css',
      display: 'CSS3',
    },
    {
      function: 'javascript',
      display: 'JavaScript',
    },
    {
      function: 'bootstrap',
      display: 'Bootstrap',
    },
    {
      function: 'sass',
      display: 'Sass',
    },
    {
      function: 'git',
      display: 'Git',
    },
    {
      function: 'cSharp',
      display: 'C#',
    },
    // {
    //   function: 'sql',
    //   display: 'SQL Server',
    // },
  ]

  render() {
    return (
      <div className="container">
        <div className="skills">
          <ul>
            {this.skills.map(skill => {
              const IconElem = Icon[skill.function];
              return <li key={skill.function}>
                <IconElem />
                <div>
                  <h4>{skill.display}</h4>
                </div>
              </li>
            })}

          </ul>
        </div>
      </div>
    )
  }
}
export default Skills
