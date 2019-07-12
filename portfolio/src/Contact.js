import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'




class Contact extends Component {
  constructor(props) {
    super(props)
  }
  offset = () => {
    console.log(offset)
    return window.pageYOffset 
  }
  render() {
    return(
      <>
      <Fade bottom>

        <div className="con" onScroll={offset}>
        <Fade bottom cascade><h3 className="contact-text">Contact</h3></Fade>
          <div className="icons">
            <Fade left duration={2000} delay={1000}><div>
              <a href="https://www.facebook.com/profile.php?id=100039175030366" target="_blank">
              <svg className="facebook" xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 18 18">
            <path fill-rule="evenodd" d="M9.426 17.647H.974A.974.974 0 0 1 0 16.673V.974C0 .436.436 0 .974 0h15.7c.537 0 .973.436.973.974v15.699a.974.974 0 0 1-.974.974h-4.497v-6.834h2.294l.343-2.663h-2.637v-1.7c0-.772.214-1.297 1.32-1.297h1.41V2.77a18.853 18.853 0 0 0-2.055-.105c-2.033 0-3.425 1.241-3.425 3.52V8.15h-2.3v2.663h2.3v6.834z"></path></svg></a>
            </div></Fade>
            <Fade left duration={2000} delay={1200}><div>
              <a href="https://twitter.com/react_naive" target="_blank">
              <svg className="twitter" xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 18 15">
          <path fill-rule="evenodd" d="M17.647 1.74a7.072 7.072 0 0 1-2.079.585A3.704 3.704 0 0 0 17.16.272a7.13 7.13 0 0 1-2.3.9A3.57 3.57 0 0 0 12.217 0C10.22 0 8.598 1.662 8.598 3.712c0 .291.031.574.093.846-3.009-.155-5.676-1.632-7.463-3.88a3.78 3.78 0 0 0-.49 1.868c0 1.287.64 2.424 1.611 3.09a3.555 3.555 0 0 1-1.64-.463v.045c0 1.8 1.248 3.3 2.905 3.64-.304.088-.624.131-.954.131-.233 0-.461-.022-.682-.066.461 1.475 1.798 2.549 3.382 2.577A7.149 7.149 0 0 1 0 13.04a10.08 10.08 0 0 0 5.55 1.666c6.66 0 10.3-5.656 10.3-10.562 0-.162-.002-.323-.008-.482a7.43 7.43 0 0 0 1.805-1.921"></path></svg></a>
            </div></Fade>

            <Fade left duration={2000} delay={1400}><div>
              <a href="http://www.linkedin.com/in/marvin-romero-fullstack" target="_blank">
              <svg className="instagram" xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div></Fade>
            
            <Fade left duration={2000} delay={1600}><div>
              <a href="https://github.com/Marsmarv" target="_blank">
              <svg className="github" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="68px" height="68px" viewBox="0 0 120.774 117.793" enable-background="new 0 0 120.774 117.793"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M60.388,0C27.041,0,0,27.035,0,60.387
                c0,26.682,17.303,49.316,41.297,57.303c3.018,0.559,4.126-1.311,4.126-2.906c0-1.439-0.056-6.197-0.082-11.242
                c-16.8,3.652-20.345-7.125-20.345-7.125c-2.747-6.98-6.705-8.836-6.705-8.836c-5.479-3.748,0.413-3.672,0.413-3.672
                c6.063,0.426,9.257,6.225,9.257,6.225c5.386,9.23,14.127,6.562,17.573,5.02c0.542-3.902,2.106-6.568,3.834-8.076
                c-13.413-1.525-27.514-6.705-27.514-29.843c0-6.593,2.359-11.98,6.223-16.209c-0.627-1.521-2.694-7.663,0.585-15.981
                c0,0,5.071-1.622,16.61,6.191c4.817-1.338,9.983-2.009,15.115-2.033c5.131,0.023,10.301,0.694,15.127,2.033
                c11.527-7.813,16.59-6.191,16.59-6.191c3.287,8.318,1.221,14.46,0.594,15.981c3.871,4.229,6.215,9.616,6.215,16.209
                c0,23.195-14.127,28.3-27.574,29.796c2.166,1.873,4.096,5.549,4.096,11.182c0,8.08-0.07,14.584-0.07,16.572
                c0,1.607,1.088,3.49,4.148,2.898c23.98-7.994,41.262-30.623,41.262-57.295C120.774,27.035,93.737,0,60.388,0z"/>
              <path d="M22.872,86.704c-0.133,0.301-0.605,0.391-1.035,0.184c-0.438-0.197-0.684-0.605-0.542-0.906
                c0.13-0.309,0.603-0.395,1.04-0.189C22.773,85.989,23.023,86.403,22.872,86.704L22.872,86.704z M22.129,86.153"/>
              <path d="M25.318,89.432c-0.288,0.266-0.852,0.143-1.233-0.279c-0.396-0.422-0.469-0.984-0.177-1.256
                c0.297-0.266,0.843-0.141,1.238,0.279C25.542,88.602,25.619,89.161,25.318,89.432L25.318,89.432z M24.742,88.813"/>
              <path d="M27.699,92.909c-0.37,0.258-0.976,0.018-1.35-0.52c-0.37-0.537-0.37-1.182,0.009-1.439
                c0.374-0.258,0.971-0.025,1.35,0.506C28.077,92.002,28.077,92.647,27.699,92.909L27.699,92.909z M27.699,92.909"/>
              <path d="M30.961,96.27c-0.331,0.365-1.036,0.266-1.552-0.232c-0.528-0.486-0.675-1.178-0.344-1.543
                c0.336-0.365,1.045-0.262,1.564,0.232C31.154,95.213,31.313,95.909,30.961,96.27L30.961,96.27z M30.961,96.27"/>
              <path d="M35.461,98.221c-0.146,0.473-0.825,0.688-1.509,0.486c-0.684-0.207-1.13-0.762-0.992-1.238
                c0.142-0.477,0.824-0.701,1.513-0.486C35.155,97.19,35.603,97.739,35.461,98.221L35.461,98.221z M35.461,98.221"/>
              <path d="M40.403,98.583c0.017,0.498-0.563,0.91-1.281,0.92c-0.722,0.016-1.307-0.387-1.314-0.877
                c0-0.504,0.567-0.912,1.289-0.924C39.814,97.688,40.403,98.088,40.403,98.583L40.403,98.583z M40.403,98.583"/>
              <path d="M45.002,97.799c0.086,0.486-0.413,0.984-1.126,1.117c-0.701,0.129-1.35-0.172-1.439-0.652
                c-0.087-0.498,0.421-0.998,1.121-1.127C44.271,97.014,44.911,97.305,45.002,97.799L45.002,97.799z M45.002,97.799"/></g>
                </svg></a>
            </div></Fade>
          </div>
        </div>

      </Fade>
      </>
    )
  }
}


export default Contact