import React from 'react'
import { withThemeProvider } from './ThemeProvider'

const Main = (props)=>{
    return(
        <div className="btn">

            <button className="button" onClick={props.toggle}>{props.lightTheme ? 'Change to dark': 'Change to light'}</button>

        </div>
    )
}

export default withThemeProvider(Main)