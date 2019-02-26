import React from "react"

const Header = () => (
  <header
    style={{
      background: `lightblue`,
      marginBottom: `1.45rem`,
      props: `headerText`,
    }}

  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0,
            color: `black`,
            textDecoration: `none`,
            textAlign: `center`,
      }}> Welcome to the Palindrome Detector
      </h1>
    </div>
  </header>
)

export default Header
