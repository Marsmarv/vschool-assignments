import React, {useState} from 'react'
import Fade from 'react-reveal/Fade'
import resume from './images/Fdev.pdf'

const Resume = () => {
  const [showRes, setShowRes] = useState(false)
  const modalDisplay = showRes ? "show-modal" : "no-display"
  const modalDisplayTwo = showRes ? "xbox" : "no-display"

  return (
    <Fade bottom>
      <div>
        <div className="res" onClick={() => showRes ? setShowRes(false) : "" }>
          <div className="resBox">
            <Fade bottom cascade>
              <h3 className="resume-text">Résumé</h3>
              <div className='pic' onClick={() => setShowRes(!showRes)}></div>
              <Fade bottom opposite when={showRes === true}>
                <div className={modalDisplay} onClick={() => setShowRes(!showRes)}></div>
                <a href={resume} className={modalDisplayTwo} onClick={() => console.log('downloaded')} download>D</a>
              </Fade>
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default Resume