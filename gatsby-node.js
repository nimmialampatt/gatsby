// const path = require("path")




//   // module.exports.onCreateNode = ({ node, actions }) => {
//   //   const { createNode, createNodeField } = actions
//   //   console.log("-------",node.internal );
//   //   if (node.internal.type === "File"&&node.internal.mediaType==="application/json") {
//   //     const slug = path.basename(node.fileAbsolutePath, ".json")
//   //     console.log("dddddddddddddddddddddddddddddddddddd",slug);
//   //     createNodeField({
//   //       node,
//   //       name: "slug",
//   //       value: slug,
//   //     })
//   //   }
//   // }
//   // Transform the new node here and create a new node or
//   // create a new node field.

// // module.exports.createPages = async ({ graphql, actions }) => {
// //   const { createPage } = actions
// //   const blogTemplate = path.resolve("./src/templates/blog.js")
// //   const res = await graphql(`
// //     query {
// //       allContentfulCourse {
// //         edges {
// //           node {
// //             id
// //             title
// //             slug
// //           }
// //         }
// //       }
// //     }
// //   `)

// //   res.data.allContentfulCourse.edges.map(edge =>
// //     createPage({
// //       component: blogTemplate,
// //       path: `/blog/${edge.node.slug}`,
// //       context: {
// //         slug: edge.node.slug,
// //       },
// //     })
// //   )
// // }

// module.exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const DocsTemplate = path.resolve("./src/templates/docs.js")
//   const res = await graphql(`
//     query {
//       allPostsJson {
//         edges {
//           node {
            
//             title
//           }
//         }
//       }
//     }
//   `)

//   res.data.allPostsJson.edges.map(edge =>
//     createPage({
//       component: DocsTemplate,
//       path: `/blog/${edge.node.title}`,
//       context: {
//         title: edge.node.title,
//       },
//     })
//   )
// }
