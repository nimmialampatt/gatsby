/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require(`path`)

module.exports = {
  /* Your site config here */

  siteMetadata: {
    title: "Black Lives Matter. Support the Equal Justice Initiative.",
    author: "Nimmi Alampatt",

  },
  plugins: [
    "gatsby-plugin-sass",
    // "gatsby-source-graphql"
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `j4oqrfi3x2b0`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: "RP4GkRXUPEjgGsuIEVi9vVBZRAwd3hlzy8zY5CavvnQ",
      },
    },`gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/posts/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: { name: "src", path: `${__dirname}/src/` },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
