import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <StaticImage className="absolute"
          src="../images/buzz.jpg"
          alt="pool house background"
        />
    <h1>NOT FOUND</h1>
    <p>WHERE AM I???? 404 is a strange, strange number. It's even, and 4-0 = 4, which means you're right back
      where you started.</p>
  </Layout>
)

export default NotFoundPage
