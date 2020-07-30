

import React from "react"
import Layout from "../component/Layout"
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    contentfulAsset {
      file {
        url
      }
    }
    contentfulCourse(slug: { eq: $slug }) {
      childContentfulCourseDescriptionTextNode {
        description
      }

      id
      title
      slug
      shortDescription
      description {
        id
        description
      }
      image {
        file {
          fileName
          contentType
          details {
            image {
              width
            }
          }
        }
        description
      }
    }
  }
`

const BlogPAge = props => {
  return (
    <Layout>
      <h1>{props.data.contentfulCourse.title}</h1>
      {/* <Img fixed={data.file.childImageSharp.fixed} /> */}
      <p>{props.data.contentfulCourse.shortDescription}</p>
      <p>
        {
          props.data.contentfulCourse.childContentfulCourseDescriptionTextNode
            .description
        }
      </p>
    </Layout>
  )
}

export default BlogPAge
