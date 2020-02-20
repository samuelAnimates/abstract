import React from "react"
import "typeface-patrick-hand-sc"
import IMGdoodles from "../images/doodles.svg"
import IMGgraphy from "../images/graphy.png"
import Header from "./header"
import Footer from "./footer"
import "../styles/global.css"

export default ({ children }) => (
    <div style={{backgroundImage: `url(${IMGgraphy}`}}>
        <div style={{backgroundImage: `url(${IMGdoodles})`, backgroundRepeat: 'round'}}>
            <Header/>
                 {children}
            <Footer/>
        </div>
    </div>
)