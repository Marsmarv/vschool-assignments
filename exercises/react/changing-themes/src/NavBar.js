import React from 'react'
import { withThemeProvider } from './ThemeProvider'

const Navbar = (props)=>{
    return (
        <div className={props.lightTheme ? 'light-nav nav' : 'dark-nav nav'}>
            <h3>home</h3>
            <h3>About</h3>
            <h3>Themes</h3>
        </div>
    )
}

export default withThemeProvider(Navbar)