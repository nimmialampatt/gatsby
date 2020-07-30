import React from "react"
import HeaderStyle from "./header.module.scss"
import { Link, graphql, useStaticQuery } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <div>
      <div className="{headerStyles.overlay}"></div>
      <header className={HeaderStyle.header}>
        {" "}
        {data.site.siteMetadata.author}
        <div className={HeaderStyle.heroContent}>
          <p className={HeaderStyle.brand}>
            <Link to="/">{data.site.siteMetadata.title}</Link>
          </p>
        </div>
        {/* <h1 className={HeaderStyle.tiAtle}>{data.site.siteMetadata.title}</h1> */}
        <nav className={HeaderStyle.navContainer}>
          <ul className={HeaderStyle.navList}>
            <li>
              <Link to="/">React</Link>
            </li>
            <li>
              <Link to="/doc">Docs</Link>
            </li>
            <li>
              <Link to="/tutorials">Tutorials</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/Community">Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
export default Header
