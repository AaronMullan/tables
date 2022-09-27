import * as React from "react"
import type { HeadFC } from "gatsby"
import {Box} from 'theme-ui'

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}


const IndexPage = () => {
  return (
    <main style={pageStyles}>
<Box>hello world</Box>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
