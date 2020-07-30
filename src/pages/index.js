import React from "react"
import Layout from "../component/Layout"
import Img from "gatsby-image"
import {useStaticQuery} from "gatsby"




const Home=()=>{

  const data = useStaticQuery(graphql`
  query {
    

      file(relativePath: { eq: "images/ss.jpg" }) {
        childImageSharp {
          fixed(width: 350, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
    
  
`)

  return <div>
    <Layout>
    REact
       </Layout></div>

}

export default  Home