
import React from "react"
import TipStyles from "./tips.module.scss"


const Tips=(props)=>{
    console.log("ddddddddddddddddddddddddddddddddddddd",props);
    return(<div className={TipStyles.tipboxStyle}>
        <h5>Tips:</h5>
<span>{props.tipText}</span>
    </div>)
}

export default Tips