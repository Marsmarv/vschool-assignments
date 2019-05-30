import React from 'react'
import { withThemeProvider } from './ThemeProvider'

const Footer = (props)=>{
    return(
        <div className={props.lightTheme ? 'light-footer footer' : 'dark-footer footer'}>
            <h3>Footer</h3>
        </div>
    )
}

export default withThemeProvider(Footer)