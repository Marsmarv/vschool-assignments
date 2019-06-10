import React from 'react'
import Fade from 'react-reveal/Fade'
import ModalImage from 'react-modal-image'
import resFront from './resFront.png'

const Resume = () => {
  return (
    <Fade bottom delay={500}>
      <div>
        <div className="res">

          <div className="resBox">
            <Fade bottom cascade delay={3000}>
              <h3>Résumé</h3>
              {/* <div className="pic"></div> */}
              <div className='pic'>
              <ModalImage 
                small={resFront}
                medium={resFront}
                alt="Marvin Romero"
              />
              </div>
            </Fade>
          </div>

        </div>
      </div>
    </Fade>
  )
}

export default Resume