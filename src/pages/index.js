import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <div className="w-full relative bg-grey-1000">
        <div className = "w-full h-full bg-grey-800 top-0 left-0">
        <div className="w-full h-full flex flex-col absolute top-0 left-0 justify-center items-center">
        <div className = "text-6xl font-bold text-white">Bake my bacon</div>
        </div>

      <StaticImage
          src="../images/poolHouse.jpg"
          alt="pool house background"
        />
        </div>
      </div>

    <section>
      <form className="bg-grey mg-1 solid" name="contact" method="POST" data-netlify="true">
          <p>
            <label>Your Name: <input type="text" name="name" /></label>   
          </p>
          <p>
            <label>Your Email: <input type="email" name="email" /></label>
          </p>
          <p>
            <label>Your Role: <select name="role[]" multiple>
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select></label>
          </p>
          <p>
            <label>Message: <textarea name="message"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
      </form>
    </section>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
