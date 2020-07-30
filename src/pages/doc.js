

  import React from "react"
  import { graphql, useStaticQuery, Link } from "gatsby"
  import Layout from "../component/Layout"
  
  const Docs = () => {
    const Contentful = useStaticQuery(graphql`
    query{
        allPostsJson{
          edges{
            node{
              title
              slug
              content{
                title
              }
            }
          }
        }
      }
    `)
    return (
      <div>
        <Layout>
          {" "}
          <div>
            
            
            <ul>
              {Contentful.allPostsJson.edges.map(edge => (
                <div>
                  <li className={"c"}>
                    <Link to={`/docs/${edge.node.title}`}>{edge.node.title}</Link>
                  </li>
                 
                </div>
              ))}
            </ul>
          </div>{" "}
        </Layout>{" "}
      </div>
    )
  }
  export default Docs
  
