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
        <main style={{background: 'grey'}}>{children}</main>
        <div>
          <h1>We are gluttons for our clients' success</h1>
          <p>At big oink studios, we make it our responsibility to put the customer first</p>
        </div>
        <footer className="flex-right"> 
          {/* experienced an outage around here */}
          <StaticImage
          className = "w-5 h-5 text-center"
          src="../images/invertPiggy.png"
          alt="pool house background"
          />
          <Link
            to={`/`}
            href="#responsive-header"
            className="mt-4 mr-4 text-sm items-center lg:inline-block lg:mt-0 text-white"
          >
            Big Oink Studios
          </Link>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
