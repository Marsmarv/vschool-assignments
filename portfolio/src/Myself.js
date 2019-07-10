import React from 'react';
import Fade from 'react-reveal/Fade'

const Myself = () => {
  return (
    <>
    <Fade bottom delay={500}>
      <div>
        <div className="myself-container">
          <h3><Fade bottom cascade delay={3000}>Projects</Fade></h3>
        </div>
      </div>
    </Fade>
    </>
  )
}

export default Myself