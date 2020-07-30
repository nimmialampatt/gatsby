


import React from "react"
import { useStaticQuery,graphql } from "gatsby"
import Layout from "../component/Layout"
import CodeBox from "../component/codeBox/codeBox"
// import { graphql } from "gatsby"


//   console.log("Ssssssssssss",data);

  const IntroducingJsx=(props)=>{

 const data=useStaticQuery(graphql`query  {
    postsJson(slug:{
      eq:"intro-jsx"
    } ) {
      title
      slug
      content{
        title
        paragraph1
        paragraph2
        paragraph3
        paragraph4
        codeboxText
        Tips
      }
    }
  }`)
    console.log("Ssssssssssssssss",data);
      return (<div>
          <Layout>
{data.postsJson.content.map(content=>
<div>    <h1>{content.title}</h1>
<span>{content.codeboxText ? <CodeBox codeboxText={content.codeboxText}/> : ""}</span>

    <p>{content.paragraph1}</p>
    <p>{content.paragraph2}</p>
    

    <p>{content.paragraph3}</p>

    <p>{content.paragraph4}</p>
    </div>

)}



          </Layout>
      </div>)
  }
  
  export default IntroducingJsx