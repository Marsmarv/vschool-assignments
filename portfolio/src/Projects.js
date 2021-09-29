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
      <Fade bottom cascade delay={1000}><h3 className="bye">I'm Marvin</h3></Fade>
      <Fade bottom cascade delay={1600}><h3 className="bye">A software developer</h3></Fade>
      <Fade bottom cascade delay={1800}><h3 className="bye">from New York</h3></Fade>

    </div>
    </>
  )
}

export default Projects