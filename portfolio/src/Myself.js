import React, {useState} from 'react';
import Fade from 'react-reveal/Fade'

const Myself = () => {
  const [showInfo, setShowInfo] = useState(false)
  const [showInfoTwo, setShowInfoTwo] = useState(false)
  const [showInfoThree, setShowInfoThree] = useState(false)  
  const [showInfoFour, setShowInfoFour] = useState(false)

  const modalDisplay = showInfo ? "desc" : "no-display"
  const modalDisplayTwo = showInfoTwo ? "desc" : "no-display"
  const modalDisplayThree = showInfoThree ? "desc" : "no-display"
  const modalDisplayFour = showInfoFour ? "desc" : "no-display"

  const modalDisplay1 = showInfo ? "desc2" : "no-display"
  const modalDisplay2 = showInfoTwo ? "desc2" : "no-display"
  const modalDisplay3 = showInfoThree ? "desc2" : "no-display"
  const modalDisplay4 = showInfoFour ? "desc2" : "no-display"

  return (
    <>
    <Fade bottom delay={500}>
      <div>
        <div className="myself-container">
          <h3 className="project-text">
            <Fade bottom cascade delay={3000}>
            Projects
            </Fade>
          </h3>

          <div className="projects">
            <Fade right duration={2000} delay={2000}>
              <div className="project proj1">
                <a className="screenshot-link" href="https://www.inspirave.com/" target="_blank"><div className="screenshot shot-four"></div></a>
                <Fade opposite when={showInfo === true}>
                  <div className={modalDisplay} onClick={() => {setShowInfo(!showInfo) ; showInfoThree && setShowInfoThree(!showInfoThree) ; showInfoTwo && setShowInfoTwo(!showInfoTwo) ; showInfoFour && setShowInfoFour(!showInfoFour)}}>
                    <p><span> Title:</span> Inspirave</p><br/>
                    <p><span> Description:</span> Enterprise level website SaveAway® utilizes the power of peer to peer sharing, to save towards purchase goals</p>
                  </div>
                </Fade>
              </div>  
            </Fade>

            <Fade right duration={2500} delay={200}>
              <div className="info-one" onClick={() => {setShowInfo(!showInfo) ; showInfoThree && setShowInfoThree(!showInfoThree) ; showInfoTwo && setShowInfoTwo(!showInfoTwo) ; showInfoFour && setShowInfoFour(!showInfoFour)}}>
                <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" width="26pt" height="26pt" viewBox="0 0 26 26" version="1.1">
                  <g id="surface2667499">
                  <path d="M 13 3.785156 C 7.910156 3.785156 3.785156 7.910156 3.785156 13 C 3.785156 18.089844 7.910156 22.214844 13 22.214844 C 18.089844 22.214844 22.214844 18.089844 22.214844 13 C 22.214844 7.910156 18.089844 3.785156 13 3.785156 Z M 14.917969 18.066406 C 14.445312 18.253906 14.066406 18.394531 13.78125 18.492188 C 13.5 18.589844 13.171875 18.640625 12.800781 18.640625 C 12.226562 18.640625 11.777344 18.5 11.457031 18.21875 C 11.140625 17.941406 10.984375 17.585938 10.984375 17.152344 C 10.984375 16.984375 10.996094 16.816406 11.019531 16.640625 C 11.039062 16.464844 11.082031 16.269531 11.132812 16.046875 L 11.726562 13.949219 C 11.777344 13.75 11.824219 13.5625 11.859375 13.378906 C 11.898438 13.199219 11.914062 13.035156 11.914062 12.886719 C 11.914062 12.621094 11.855469 12.433594 11.746094 12.328125 C 11.636719 12.222656 11.425781 12.171875 11.113281 12.171875 C 10.960938 12.171875 10.804688 12.195312 10.640625 12.242188 C 10.480469 12.289062 10.34375 12.335938 10.226562 12.378906 L 10.386719 11.734375 C 10.773438 11.574219 11.144531 11.441406 11.5 11.328125 C 11.855469 11.214844 12.191406 11.15625 12.507812 11.15625 C 13.074219 11.15625 13.519531 11.296875 13.824219 11.570312 C 14.132812 11.84375 14.289062 12.203125 14.289062 12.644531 C 14.289062 12.734375 14.28125 12.894531 14.257812 13.125 C 14.238281 13.351562 14.199219 13.5625 14.140625 13.757812 L 13.546875 15.847656 C 13.5 16.015625 13.457031 16.207031 13.417969 16.421875 C 13.378906 16.636719 13.363281 16.800781 13.363281 16.910156 C 13.363281 17.1875 13.421875 17.378906 13.546875 17.480469 C 13.671875 17.578125 13.886719 17.628906 14.195312 17.628906 C 14.335938 17.628906 14.5 17.605469 14.683594 17.554688 C 14.863281 17.503906 14.992188 17.460938 15.074219 17.421875 Z M 14.8125 9.582031 C 14.539062 9.835938 14.207031 9.964844 13.820312 9.964844 C 13.433594 9.964844 13.097656 9.835938 12.820312 9.582031 C 12.542969 9.324219 12.40625 9.015625 12.40625 8.652344 C 12.40625 8.289062 12.546875 7.976562 12.820312 7.714844 C 13.097656 7.457031 13.433594 7.328125 13.820312 7.328125 C 14.207031 7.328125 14.539062 7.457031 14.8125 7.714844 C 15.089844 7.976562 15.226562 8.289062 15.226562 8.652344 C 15.226562 9.015625 15.089844 9.324219 14.8125 9.582031 Z M 14.8125 9.582031 "/>
                  </g>
                </svg>

              <div className="info-text">info</div> 
              </div>
            </Fade>

            <Fade right duration={2000} delay={2400}>
              <div className="project proj2">
                <a className="screenshot-link" href="https://theofficeexperience.com/" target="_blank"><div className="screenshot shot-one"></div></a>
                <Fade opposite when={showInfoTwo === true}>
                  <div className={modalDisplayTwo} onClick={() => {setShowInfoTwo(!showInfoTwo) ; showInfoThree && setShowInfoThree(!showInfoThree) ; showInfoFour && setShowInfoFour(!showInfoFour) ; showInfo && setShowInfo(!showInfo)}}>
                    <p><span> Title:</span> The Office Experience</p><br/>
                    <p><span> Description:</span> Made with React in collaboration with SuperFly, a live experience for the hit show "The Office"</p>
                  </div>
                </Fade>
              </div>
            </Fade>

            <Fade right duration={2500} delay={600}>
              <div className="info-two" onClick={() => {setShowInfoTwo(!showInfoTwo) ; showInfoThree && setShowInfoThree(!showInfoThree) ; showInfoFour && setShowInfoFour(!showInfoFour) ; showInfo && setShowInfo(!showInfo)}}>
                <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" width="26pt" height="26pt" viewBox="0 0 26 26" version="1.1">
                  <g id="surface2667499">
                  <path d="M 13 3.785156 C 7.910156 3.785156 3.785156 7.910156 3.785156 13 C 3.785156 18.089844 7.910156 22.214844 13 22.214844 C 18.089844 22.214844 22.214844 18.089844 22.214844 13 C 22.214844 7.910156 18.089844 3.785156 13 3.785156 Z M 14.917969 18.066406 C 14.445312 18.253906 14.066406 18.394531 13.78125 18.492188 C 13.5 18.589844 13.171875 18.640625 12.800781 18.640625 C 12.226562 18.640625 11.777344 18.5 11.457031 18.21875 C 11.140625 17.941406 10.984375 17.585938 10.984375 17.152344 C 10.984375 16.984375 10.996094 16.816406 11.019531 16.640625 C 11.039062 16.464844 11.082031 16.269531 11.132812 16.046875 L 11.726562 13.949219 C 11.777344 13.75 11.824219 13.5625 11.859375 13.378906 C 11.898438 13.199219 11.914062 13.035156 11.914062 12.886719 C 11.914062 12.621094 11.855469 12.433594 11.746094 12.328125 C 11.636719 12.222656 11.425781 12.171875 11.113281 12.171875 C 10.960938 12.171875 10.804688 12.195312 10.640625 12.242188 C 10.480469 12.289062 10.34375 12.335938 10.226562 12.378906 L 10.386719 11.734375 C 10.773438 11.574219 11.144531 11.441406 11.5 11.328125 C 11.855469 11.214844 12.191406 11.15625 12.507812 11.15625 C 13.074219 11.15625 13.519531 11.296875 13.824219 11.570312 C 14.132812 11.84375 14.289062 12.203125 14.289062 12.644531 C 14.289062 12.734375 14.28125 12.894531 14.257812 13.125 C 14.238281 13.351562 14.199219 13.5625 14.140625 13.757812 L 13.546875 15.847656 C 13.5 16.015625 13.457031 16.207031 13.417969 16.421875 C 13.378906 16.636719 13.363281 16.800781 13.363281 16.910156 C 13.363281 17.1875 13.421875 17.378906 13.546875 17.480469 C 13.671875 17.578125 13.886719 17.628906 14.195312 17.628906 C 14.335938 17.628906 14.5 17.605469 14.683594 17.554688 C 14.863281 17.503906 14.992188 17.460938 15.074219 17.421875 Z M 14.8125 9.582031 C 14.539062 9.835938 14.207031 9.964844 13.820312 9.964844 C 13.433594 9.964844 13.097656 9.835938 12.820312 9.582031 C 12.542969 9.324219 12.40625 9.015625 12.40625 8.652344 C 12.40625 8.289062 12.546875 7.976562 12.820312 7.714844 C 13.097656 7.457031 13.433594 7.328125 13.820312 7.328125 C 14.207031 7.328125 14.539062 7.457031 14.8125 7.714844 C 15.089844 7.976562 15.226562 8.289062 15.226562 8.652344 C 15.226562 9.015625 15.089844 9.324219 14.8125 9.582031 Z M 14.8125 9.582031 "/>
                  </g>
                </svg>

              <div className="info-text">info</div> 
              </div>
            </Fade>

            <Fade right duration={2000} delay={2800}>
              <div className="project proj3">
                <a className="screenshot-link" href="https://revvupyourfitness.com/" target="_blank"><div className="screenshot shot-three"></div></a>
                <Fade opposite when={showInfoThree === true}>  
                  <div className={modalDisplayThree} onClick={() => {setShowInfoThree(!showInfoThree) ; showInfoFour && setShowInfoFour(!showInfoFour) ; showInfoTwo && setShowInfoTwo(!showInfoTwo) ; showInfo && setShowInfo(!showInfo)}}>
                    <p><span> Title:</span> Revv Fitness</p><br/>
                    <p><span> Description:</span> Website made in WordPress and CSS for a gym experience in southern Utah</p>
                  </div>
                </Fade>
              </div>
            </Fade>

            <Fade right duration={2500} delay={1000}>
              <div className="info-three" onClick={() => {setShowInfoThree(!showInfoThree) ; showInfoFour && setShowInfoFour(!showInfoFour) ; showInfoTwo && setShowInfoTwo(!showInfoTwo) ; showInfo && setShowInfo(!showInfo)}}>
                <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" width="26pt" height="26pt" viewBox="0 0 26 26" version="1.1">
                  <g id="surface2667499">
                  <path d="M 13 3.785156 C 7.910156 3.785156 3.785156 7.910156 3.785156 13 C 3.785156 18.089844 7.910156 22.214844 13 22.214844 C 18.089844 22.214844 22.214844 18.089844 22.214844 13 C 22.214844 7.910156 18.089844 3.785156 13 3.785156 Z M 14.917969 18.066406 C 14.445312 18.253906 14.066406 18.394531 13.78125 18.492188 C 13.5 18.589844 13.171875 18.640625 12.800781 18.640625 C 12.226562 18.640625 11.777344 18.5 11.457031 18.21875 C 11.140625 17.941406 10.984375 17.585938 10.984375 17.152344 C 10.984375 16.984375 10.996094 16.816406 11.019531 16.640625 C 11.039062 16.464844 11.082031 16.269531 11.132812 16.046875 L 11.726562 13.949219 C 11.777344 13.75 11.824219 13.5625 11.859375 13.378906 C 11.898438 13.199219 11.914062 13.035156 11.914062 12.886719 C 11.914062 12.621094 11.855469 12.433594 11.746094 12.328125 C 11.636719 12.222656 11.425781 12.171875 11.113281 12.171875 C 10.960938 12.171875 10.804688 12.195312 10.640625 12.242188 C 10.480469 12.289062 10.34375 12.335938 10.226562 12.378906 L 10.386719 11.734375 C 10.773438 11.574219 11.144531 11.441406 11.5 11.328125 C 11.855469 11.214844 12.191406 11.15625 12.507812 11.15625 C 13.074219 11.15625 13.519531 11.296875 13.824219 11.570312 C 14.132812 11.84375 14.289062 12.203125 14.289062 12.644531 C 14.289062 12.734375 14.28125 12.894531 14.257812 13.125 C 14.238281 13.351562 14.199219 13.5625 14.140625 13.757812 L 13.546875 15.847656 C 13.5 16.015625 13.457031 16.207031 13.417969 16.421875 C 13.378906 16.636719 13.363281 16.800781 13.363281 16.910156 C 13.363281 17.1875 13.421875 17.378906 13.546875 17.480469 C 13.671875 17.578125 13.886719 17.628906 14.195312 17.628906 C 14.335938 17.628906 14.5 17.605469 14.683594 17.554688 C 14.863281 17.503906 14.992188 17.460938 15.074219 17.421875 Z M 14.8125 9.582031 C 14.539062 9.835938 14.207031 9.964844 13.820312 9.964844 C 13.433594 9.964844 13.097656 9.835938 12.820312 9.582031 C 12.542969 9.324219 12.40625 9.015625 12.40625 8.652344 C 12.40625 8.289062 12.546875 7.976562 12.820312 7.714844 C 13.097656 7.457031 13.433594 7.328125 13.820312 7.328125 C 14.207031 7.328125 14.539062 7.457031 14.8125 7.714844 C 15.089844 7.976562 15.226562 8.289062 15.226562 8.652344 C 15.226562 9.015625 15.089844 9.324219 14.8125 9.582031 Z M 14.8125 9.582031 "/>
                  </g>
                </svg>

              <div className="info-text">info</div> 
              </div>
            </Fade>

            <Fade right duration={2000} delay={3200}>
              <div className="project proj4">
                <a className="screenshot-link" href="https://petesmeals.com/home" target="_blank"><div className="screenshot shot-two"></div></a>
                <Fade opposite when={showInfoFour === true}> 
                  <div className={modalDisplayFour} onClick={() => {setShowInfoFour(!showInfoFour) ; showInfoThree && setShowInfoThree(!showInfoThree) ; showInfoTwo && setShowInfoTwo(!showInfoTwo) ; showInfo && setShowInfo(!showInfo)}}>
                    <p><span> Title:</span> Pete's Meals</p><br/>
                    <p><span> Description:</span> A meal prep subscription site done in React and backend in Node.js </p>
                  </div> 
                </Fade> 
              </div>
            </Fade>

            <Fade right duration={2500} delay={1400}>
              <div className="info-four" onClick={() => {setShowInfoFour(!showInfoFour) ; showInfoThree && setShowInfoThree(!showInfoThree) ; showInfoTwo && setShowInfoTwo(!showInfoTwo) ; showInfo && setShowInfo(!showInfo)}}>
                <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/1999/xlink" width="26pt" height="26pt" viewBox="0 0 26 26" version="1.1">
                  <g id="surface2667499">
                  <path d="M 13 3.785156 C 7.910156 3.785156 3.785156 7.910156 3.785156 13 C 3.785156 18.089844 7.910156 22.214844 13 22.214844 C 18.089844 22.214844 22.214844 18.089844 22.214844 13 C 22.214844 7.910156 18.089844 3.785156 13 3.785156 Z M 14.917969 18.066406 C 14.445312 18.253906 14.066406 18.394531 13.78125 18.492188 C 13.5 18.589844 13.171875 18.640625 12.800781 18.640625 C 12.226562 18.640625 11.777344 18.5 11.457031 18.21875 C 11.140625 17.941406 10.984375 17.585938 10.984375 17.152344 C 10.984375 16.984375 10.996094 16.816406 11.019531 16.640625 C 11.039062 16.464844 11.082031 16.269531 11.132812 16.046875 L 11.726562 13.949219 C 11.777344 13.75 11.824219 13.5625 11.859375 13.378906 C 11.898438 13.199219 11.914062 13.035156 11.914062 12.886719 C 11.914062 12.621094 11.855469 12.433594 11.746094 12.328125 C 11.636719 12.222656 11.425781 12.171875 11.113281 12.171875 C 10.960938 12.171875 10.804688 12.195312 10.640625 12.242188 C 10.480469 12.289062 10.34375 12.335938 10.226562 12.378906 L 10.386719 11.734375 C 10.773438 11.574219 11.144531 11.441406 11.5 11.328125 C 11.855469 11.214844 12.191406 11.15625 12.507812 11.15625 C 13.074219 11.15625 13.519531 11.296875 13.824219 11.570312 C 14.132812 11.84375 14.289062 12.203125 14.289062 12.644531 C 14.289062 12.734375 14.28125 12.894531 14.257812 13.125 C 14.238281 13.351562 14.199219 13.5625 14.140625 13.757812 L 13.546875 15.847656 C 13.5 16.015625 13.457031 16.207031 13.417969 16.421875 C 13.378906 16.636719 13.363281 16.800781 13.363281 16.910156 C 13.363281 17.1875 13.421875 17.378906 13.546875 17.480469 C 13.671875 17.578125 13.886719 17.628906 14.195312 17.628906 C 14.335938 17.628906 14.5 17.605469 14.683594 17.554688 C 14.863281 17.503906 14.992188 17.460938 15.074219 17.421875 Z M 14.8125 9.582031 C 14.539062 9.835938 14.207031 9.964844 13.820312 9.964844 C 13.433594 9.964844 13.097656 9.835938 12.820312 9.582031 C 12.542969 9.324219 12.40625 9.015625 12.40625 8.652344 C 12.40625 8.289062 12.546875 7.976562 12.820312 7.714844 C 13.097656 7.457031 13.433594 7.328125 13.820312 7.328125 C 14.207031 7.328125 14.539062 7.457031 14.8125 7.714844 C 15.089844 7.976562 15.226562 8.289062 15.226562 8.652344 C 15.226562 9.015625 15.089844 9.324219 14.8125 9.582031 Z M 14.8125 9.582031 "/>
                  </g>
                </svg>

              <div className="info-text">info</div> 
              </div>
            </Fade>

            {/* */}
            <Fade opposite when={showInfo === true}>
              <div className={modalDisplay1} onClick={() => {setShowInfo(!showInfo) ; showInfoThree && setShowInfoThree(!showInfoThree) ; showInfoTwo && setShowInfoTwo(!showInfoTwo) ; showInfoFour && setShowInfoFour(!showInfoFour)}}>
                <p><span> Title:</span> Inspirave</p><br/>
                <p><span> Description:</span> Enterprise level website SaveAway® utilizes the power of peer to peer sharing, to save towards purchase goals</p>
              </div>
            </Fade>
            <Fade opposite when={showInfoTwo === true}>
              <div className={modalDisplay2} onClick={() => {setShowInfoTwo(!showInfoTwo) ; showInfoThree && setShowInfoThree(!showInfoThree) ; showInfoFour && setShowInfoFour(!showInfoFour) ; showInfo && setShowInfo(!showInfo)}}>
                <p><span> Title:</span> The Office Experience</p><br/>
                <p><span> Description:</span> Made with React in collaboration with SuperFly, a live experience for the hit show "The Office"</p>
              </div>
            </Fade>
            <Fade opposite when={showInfoThree === true}> 
              <div className={modalDisplay3} onClick={() => {setShowInfoThree(!showInfoThree) ; showInfoFour && setShowInfoFour(!showInfoFour) ; showInfoTwo && setShowInfoTwo(!showInfoTwo) ; showInfo && setShowInfo(!showInfo)}}>
                <p><span> Title:</span> Revv Fitness</p><br/>
                <p><span> Description:</span> Website made in WordPress and CSS for a gym experience in southern Utah</p>
              </div> 
            </Fade> 
            <Fade opposite when={showInfoFour === true}> 
              <div className={modalDisplay4} onClick={() => {setShowInfoFour(!showInfoFour) ; showInfoThree && setShowInfoThree(!showInfoThree) ; showInfoTwo && setShowInfoTwo(!showInfoTwo) ; showInfo && setShowInfo(!showInfo)}}>
                <p><span> Title:</span> Pete's Meals</p><br/>
                <p><span> Description:</span> A meal prep subscription site done in React and backend in Node.js </p>
              </div> 
            </Fade> 
            {/*  */}
          </div>
        </div>
      </div>
    </Fade>
    </>
  )
}

export default Myself