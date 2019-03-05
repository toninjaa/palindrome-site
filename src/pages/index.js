import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import cat from "../images/cat.jpg"
import SEO from "../components/seo"



const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div>
    </div>
    <div>
      <img src={cat} alt="Cat" />
    </div>
    <div style={{ position: `absolute`, bottom: `1.5rem`, left: `auto`, right: `auto` }}>
      <Link to="/palindrome/">Take Me To The Palindrome Palace</Link>
    </div>
  </Layout>
)

export default IndexPage
