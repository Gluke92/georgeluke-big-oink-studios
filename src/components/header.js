import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

function Header({ siteTitle }) {

  return (
    <nav className=" flex flex-wrap items-center justify-between p-6 mb-0 bg-gradient-to-r from-black via-black-500 to-red-500">
      <div className=" text-white">
          {/* <svg src="/images/pig-piggy.png"/> */}
          <StaticImage
          className = "w-5 h-5 text-center"
          src="../images/invertPiggy.png"
          alt="pool house background"
          />
          <Link
            to={`/`}
            href="#responsive-header"
            className="mt-4 mr-4 text-white lg:inline-block lg:mt-0 text-white"
          >
            Big Oink Studios
          </Link>
        </div>
        <Link
            to={`/portfolio`}
            href="#responsive-header"
            className="mt-4 mr-4 text-white lg:inline-block lg:mt-0 text-white"
          >
            PORTFOLIO
          </Link>

    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
