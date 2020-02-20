import React from "react"
class Logo extends React.Component {
    render() {
        return(
            <div style={{margin:"1em", width:"125px"}}>
                <svg role="img" alt="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 141.414 57.353">
                    <title>
                        Abstract Logo
                    </title>
                    <g>
                        <polygon style={{fill:"black", stroke: "#f2f2f2", strokeMiterLimit: "10", strokeWidth:"2px"}} points="86.052 55.035 31.593 0.375 140.511 0.375 86.052 55.035"/>
                        <polygon style={{fill:"#86dd28", stroke: "#f2f2f2", strokeMiterLimit: "10", strokeWidth:"2px"}} points="39.198 54.779 0.903 16.343 77.493 16.343 39.198 54.779"/>
                        <polygon style={{fill:"#7c002b", stroke: "#f2f2f2", strokeMiterLimit: "10", strokeWidth:"2px"}} points="109.769 56.822 86.482 33.449 133.055 33.449 109.769 56.822"/>
                    </g>
                </svg>
            </div>
            
        ); 
    }
}
export default Logo;