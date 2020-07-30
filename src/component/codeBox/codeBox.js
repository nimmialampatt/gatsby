
import React from "react"
import codeBoxStyles from "./codebox.module.scss"


const CodeBox=(props)=>{
    console.log("ddddddddddddddddddddddddddddddddddddd",props);
    return(<div className={codeBoxStyles.codeboxStyle}>
<span>{props.codeboxText}</span>
    </div>)
}

export default CodeBox