import React from 'react'
import { withThemeProvider } from './ThemeProvider'
import Navbar from './NavBar'
import Main from './Main'
import Footer from './Footer'
import './App.css'


const App = (props)=>{
    return (
        <div className={props.lightTheme ? 'light' : 'dark'}>
            <Navbar />
            <Main />
            <Footer />
        </div>
    )
}

export default withThemeProvider(App)