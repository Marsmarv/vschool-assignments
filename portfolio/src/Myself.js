import React from 'react';
import Fade from 'react-reveal/Fade'

const Myself = () => {
  return (
    <>
    <Fade bottom delay={500}>
      <div>
        <div className="myself-container">
          <h3>
            <Fade bottom cascade delay={3000}>
            Projects
            </Fade>
          </h3>
          <div className="projects">
            <Fade right duration={2000} delay={2000}><div className="project proj1">
                <a className="screenshot-link" href="http://www.bored-place.surge.sh" target="_blank"><div className="screenshot shot-one"></div></a>
              </div>
            </Fade>

            <Fade right duration={2000} delay={2400}><div className="project proj2">
              <a className="screenshot-link" href="http://basictodoapp.surge.sh/" target="_blank"><div className="screenshot shot-two"></div></a>
              </div>
            </Fade>

            <Fade right duration={2000} delay={2800}><div className="project proj3">
              <a className="screenshot-link" href="http://www.mariospestcontrol.surge.sh" target="_blank"><div className="screenshot shot-three"></div></a>
              </div>
            </Fade>

            <Fade right duration={2000} delay={3200}><div className="project proj4">
              <a className="screenshot-link" href="" target="_blank"><div className="screenshot shot-four"></div></a>
              </div>
            </Fade>

          </div>
        </div>
      </div>
    </Fade>
    </>
  )
}

export default Myself