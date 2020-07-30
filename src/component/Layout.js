
import React from "react"
import Header from "../component/Header"
import Footer from "../component/Footer"
import  "../styles/index.scss"
import LayoutStyles from "./layout.module.scss"

const Layout=(props)=>{
return (<div className={LayoutStyles.container}>
    <div className={LayoutStyles.content}>
    <Header/>
    <div className={LayoutStyles.mainContent}>
    {props.children}
    </div>
    </div>
   
    <Footer/>
</div>)
}
export default Layout