
import React from "react"
import {Link} from "gatsby"
import Layout from "../component/Layout"

const NotFound=()=>{
return (<Layout><div>
    <h1>UH-OH ! It's 404</h1>
        <h3> Page Not Found</h3>
    <Link to="/">Head Home</Link>
    </div></Layout>)
}

export default NotFound