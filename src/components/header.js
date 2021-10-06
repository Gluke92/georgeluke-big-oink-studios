import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

function Header({ siteTitle }) {

  return (
    <nav className=" flex flex-wrap items-center justify-between p-6 mb-0 bg-gradient-to-r from-black via-black-500 to-red-500">
      <div className=" text-white">
          {/* <svg src="/images/pig-piggy.png"/> */}
          <Link
            to={`/`}
            href="#responsive-header"
            className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 text-white"
          >
            Big Oink Studios
          </Link>
        </div>
        <Link
            to={`/portfolio`}
            href="#responsive-header"
            className="block mt-4 mr-4 text-white lg:inline-block lg:mt-0 text-white"
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
