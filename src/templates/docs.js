

import React from "react"
// import { useStaticQuery } from "gatsby"
import { graphql } from "gatsby"


export const query=graphql`query ($title: String!) {
  postsJson(title:{
    eq:$title
  } ) {
    title
    content{
      title
      paragraph1
      paragraph2
      paragraph3
      Tips
    }
  }
}
`


// const data=useStaticQuery(graphql `query ($title: String!) {
//     postsJson(title:{
//       eq:$title
//     } ) {
//       title
//       content{
//         title
//         paragraph1
//         paragraph2
//         paragraph3
//         Tips
//       }
//     }
//   }
//   `)

const docDescription=(props)=>{
  console.log("Ssssssssssssssss",props);
    return (<div>

    </div>)
}

export default docDescription