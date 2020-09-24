import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function Mdx({ data }) {
  return (
    <>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
    }
  }
`
