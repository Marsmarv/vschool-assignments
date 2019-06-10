import React from 'react'
import Fade from 'react-reveal/Fade'

const Projects = () => {
  return (
    <>
    <Fade top delay={600}>
      <div>
        <div className="header"> <br />
        <h3>MR</h3>
        </div>
      </div>
    </Fade>
    <div className="proj">

      <Fade bottom cascade><h3 className="hello">Hello</h3></Fade>
      <Fade bottom cascade delay={1000}><h3>I'm Marvin</h3></Fade>
      <Fade bottom cascade delay={1500}><h3>and I'm a developer from New York</h3></Fade>

    </div>
    </>
  )
}

export default Projects