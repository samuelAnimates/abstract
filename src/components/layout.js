import React from "react"
import "typeface-patrick-hand-sc"
import IMGgraphy from "../images/graphy.png"
import Header from "./header"
import Footer from "./footer"
import "../styles/global.css"

export default ({ children }) => (
    <div style={{backgroundImage: `url(${IMGgraphy}`}}>
        <Header/>
            <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
                {children}
            </div>
        <Footer/>
    </div>
)