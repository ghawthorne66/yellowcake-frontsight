import React from 'react'
import { graphql } from 'gatsby'


import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import '../components/PageHeader.css'


// Export Template for use in CMS preview
export const HomePageTemplate = ({
  title, 
  subtitle,
   featuredImage,
   section1,
   section2,
   video,
  videoPoster,
  videoTitle,
  accordion,
  body,
  gallery
  }) => (
  <main className="Home">
    <div>
     <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
      />
     </div>
     
    <section className="section">
      <div className="container">
        <Content source={section1} />
      </div>
    </section>
  

    <section className="section">
      <div className="container">
        <Content source={section2} />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <Content source={body} />
      </div>
    </section>

  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...Gallery
      html
      frontmatter {
        title
        subtitle
        featuredImage
        section1
        section2
        video
        videoPoster
        videoTitle
      }
    }
  }
`
