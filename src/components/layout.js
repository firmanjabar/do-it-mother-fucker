/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        className="layout"
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 auto`,
        }}
      >
        <main>{children}</main>
        <footer>
          <br></br>
          <br></br>
          <blockquote>
            This is my version of the legendary DO IT MOTHERFUCKER DOT COM, I
            just knew this site from{" "}
            <a href="https://resir014.github.io/doitmotherfucker/">resir014</a>
          </blockquote>
          <br></br>© {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
