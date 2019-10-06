import React from 'react'
import Spot from '../Spotify/Spot'
import { withGlobalProvider } from "./GlobalProvider";
const Footer = (props)=>{
  return(
    <>
    <div className="footer">
      <div className="github-icon">
        <a href="https://github.com/Marsmarv" target="_blank" rel="noopener noreferrer">
          <svg  className="github" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
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
          </svg>
        </a>
        {props.user.username && <div className="login-text">signed in as {props.user.username}</div>}
      </div>
      
      <div className="miniPlayer">
        <a href="https://open.spotify.com/browse/featured" target="_blank">
          <svg className="spotify-icon" xmlns="http://www.w3.org/2000/svg" height="40px" width="132px" version="1.1" viewBox="0 0 559 168">
          <path d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.288 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.802c-1.89 3.072-5.91 4.042-8.98 2.152-22.51-13.836-56.823-17.843-83.448-9.761-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739zm94.56 3.072c-14.46-3.448-17.03-5.868-17.03-10.953 0-4.804 4.52-8.037 11.25-8.037 6.52 0 12.98 2.455 19.76 7.509 0.2 0.153 0.46 0.214 0.71 0.174 0.26-0.038 0.48-0.177 0.63-0.386l7.06-9.952c0.29-0.41 0.21-0.975-0.18-1.288-8.07-6.473-17.15-9.62-27.77-9.62-15.61 0-26.52 9.369-26.52 22.774 0 14.375 9.41 19.465 25.67 23.394 13.83 3.187 16.17 5.857 16.17 10.629 0 5.29-4.72 8.58-12.32 8.58-8.44 0-15.33-2.85-23.03-9.51-0.19-0.17-0.45-0.24-0.69-0.23-0.26 0.02-0.49 0.14-0.65 0.33l-7.92 9.42c-0.33 0.4-0.29 0.98 0.09 1.32 8.96 8 19.98 12.22 31.88 12.22 16.82 0 27.69-9.19 27.69-23.42 0.03-12.007-7.16-18.657-24.77-22.941l-0.03-0.013zm62.86-14.26c-7.29 0-13.27 2.872-18.21 8.757v-6.624c0-0.523-0.42-0.949-0.94-0.949h-12.95c-0.52 0-0.94 0.426-0.94 0.949v73.601c0 0.52 0.42 0.95 0.94 0.95h12.95c0.52 0 0.94-0.43 0.94-0.95v-23.23c4.94 5.53 10.92 8.24 18.21 8.24 13.55 0 27.27-10.43 27.27-30.369 0.02-19.943-13.7-30.376-27.26-30.376l-0.01 0.001zm12.21 30.375c0 10.149-6.25 17.239-15.21 17.239-8.85 0-15.53-7.41-15.53-17.239 0-9.83 6.68-17.238 15.53-17.238 8.81-0.001 15.21 7.247 15.21 17.237v0.001zm50.21-30.375c-17.45 0-31.12 13.436-31.12 30.592 0 16.972 13.58 30.262 30.91 30.262 17.51 0 31.22-13.39 31.22-30.479 0-17.031-13.62-30.373-31.01-30.373v-0.002zm0 47.714c-9.28 0-16.28-7.46-16.28-17.344 0-9.929 6.76-17.134 16.07-17.134 9.34 0 16.38 7.457 16.38 17.351 0 9.927-6.8 17.127-16.17 17.127zm68.27-46.53h-14.25v-14.566c0-0.522-0.42-0.948-0.94-0.948h-12.95c-0.52 0-0.95 0.426-0.95 0.948v14.566h-6.22c-0.52 0-0.94 0.426-0.94 0.949v11.127c0 0.522 0.42 0.949 0.94 0.949h6.22v28.795c0 11.63 5.79 17.53 17.22 17.53 4.64 0 8.49-0.96 12.12-3.02 0.3-0.16 0.48-0.48 0.48-0.82v-10.6c0-0.32-0.17-0.63-0.45-0.8-0.28-0.18-0.63-0.19-0.92-0.04-2.49 1.25-4.9 1.83-7.6 1.83-4.15 0-6.01-1.89-6.01-6.11v-26.76h14.25c0.52 0 0.94-0.426 0.94-0.949v-11.126c0.02-0.523-0.4-0.949-0.93-0.949l-0.01-0.006zm49.64 0.057v-1.789c0-5.263 2.02-7.61 6.54-7.61 2.7 0 4.87 0.536 7.3 1.346 0.3 0.094 0.61 0.047 0.85-0.132 0.25-0.179 0.39-0.466 0.39-0.77v-10.91c0-0.417-0.26-0.786-0.67-0.909-2.56-0.763-5.84-1.546-10.76-1.546-11.95 0-18.28 6.734-18.28 19.467v2.74h-6.22c-0.52 0-0.95 0.426-0.95 0.948v11.184c0 0.522 0.43 0.949 0.95 0.949h6.22v44.405c0 0.53 0.43 0.95 0.95 0.95h12.94c0.53 0 0.95-0.42 0.95-0.95v-44.402h12.09l18.52 44.402c-2.1 4.66-4.17 5.59-6.99 5.59-2.28 0-4.69-0.68-7.14-2.03-0.23-0.12-0.51-0.14-0.75-0.07-0.25 0.09-0.46 0.27-0.56 0.51l-4.39 9.63c-0.21 0.46-0.03 0.99 0.41 1.23 4.58 2.48 8.71 3.54 13.82 3.54 9.56 0 14.85-4.46 19.5-16.44l22.46-58.037c0.12-0.292 0.08-0.622-0.1-0.881-0.17-0.257-0.46-0.412-0.77-0.412h-13.48c-0.41 0-0.77 0.257-0.9 0.636l-13.81 39.434-15.12-39.46c-0.14-0.367-0.49-0.61-0.88-0.61h-22.12v-0.003zm-28.78-0.057h-12.95c-0.52 0-0.95 0.426-0.95 0.949v56.481c0 0.53 0.43 0.95 0.95 0.95h12.95c0.52 0 0.95-0.42 0.95-0.95v-56.477c0-0.523-0.42-0.949-0.95-0.949v-0.004zm-6.4-25.719c-5.13 0-9.29 4.152-9.29 9.281 0 5.132 4.16 9.289 9.29 9.289s9.28-4.157 9.28-9.289c0-5.128-4.16-9.281-9.28-9.281zm113.42 43.88c-5.12 0-9.11-4.115-9.11-9.112s4.04-9.159 9.16-9.159 9.11 4.114 9.11 9.107c0 4.997-4.04 9.164-9.16 9.164zm0.05-17.365c-4.67 0-8.2 3.71-8.2 8.253 0 4.541 3.51 8.201 8.15 8.201 4.67 0 8.2-3.707 8.2-8.253 0-4.541-3.51-8.201-8.15-8.201zm2.02 9.138l2.58 3.608h-2.18l-2.32-3.31h-1.99v3.31h-1.82v-9.564h4.26c2.23 0 3.69 1.137 3.69 3.051 0.01 1.568-0.9 2.526-2.21 2.905h-0.01zm-1.54-4.315h-2.37v3.025h2.37c1.18 0 1.89-0.579 1.89-1.514 0-0.984-0.71-1.511-1.89-1.511z"></path>
        </svg>
        </a>
        <Spot />
      </div>
    </div>
    </>
  )
}

export default withGlobalProvider(Footer)