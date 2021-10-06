import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="w-full max-w-lg h-64 rounded-lg shadow-2xl overflow-hidden relative">
      <StaticImage className="absolute"
          src="../images/poolHouse.jpg"
          alt="pool house background"
        />
        <div className="flex h-full items-center justify-center relative">
          <h2 className = "relative text-3xl font-bold tracking-wider text-white">BIG OINK STUDIOS</h2>
        </div>
    </section>
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
