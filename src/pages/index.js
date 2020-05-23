import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/sections/hero"
import Blog from "../components/sections/blog" 
import Photos from "../components/sections/photos" 
import About from "../components/sections/about"
import Interests from "../components/sections/interests"
import Projects from "../components/sections/projects"
import Contact from "../components/sections/contact"
import { splashScreen } from "../config"

const IndexPage = ({ data }) => (
  <Layout splashScreen={splashScreen}>
    <SEO title="Jon Mountjoy" description="Jon's home, describing his work, interests, and other homes on the internet." />
    <Hero content={data.hero.edges} />
    {/* Articles is populated via Medium RSS Feed fetch */}
    <Blog />
    {/* <About content={data.about.edges} /> */}
    {/* <Interests content={data.interests.edges} /> */}
    <Projects content={data.projects.edges} />
    <Photos content={data.photos.edges}/>
    <Contact content={data.contact.edges} />
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IndexPage

export const pageQuery = graphql`
{
  hero: allMdx(filter: {fileAbsolutePath: {regex: "/hero/"}}) {
    edges {
      node {
        body
        frontmatter {
          # greetings
          title
          image {
            childImageSharp {
              fluid(maxWidth: 400, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          # subtitlePrefix
          # subtitle
          # icon {
          #  childImageSharp {
          #    fluid(maxWidth: 60, quality: 90) {
          #      ...GatsbyImageSharpFluid
          #    }
          #  }
          # }
        }
      }
    }
  }
  about: allMdx(filter: {fileAbsolutePath: {regex: "/about/"}}) {
    edges {
      node {
        body
        frontmatter {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 400, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
  interests: allMdx(filter: {fileAbsolutePath: {regex: "/interests/"}}) {
    edges {
      node {
        exports {
          shownItems
          interests {
            name
            icon {
              childImageSharp {
                fixed(width: 20, height: 20, quality: 90) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
        frontmatter {
          title
        }
      }
    }
  }
  photos: allMdx(filter: {fileAbsolutePath: {regex: "/photos/"}}) {
    edges {
      node {
        body
        exports {
          photos {
            title
            subtitle
            url
            image {
              childImageSharp {
                fluid(maxWidth: 200, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        frontmatter {
          title
        }
      }
    }
  }
  projects: allMdx(filter: {fileAbsolutePath: {regex: "/projects/"}, frontmatter: {visible: {eq: "true"}}}, sort: {fields: [frontmatter___position], order: ASC}) {
    edges {
      node {
        body
        frontmatter {
          title
          category
          emoji
          svimage { publicURL }
          position
          buttonVisible
          buttonUrl
          buttonText
        }
      }
    }
  }
  contact: allMdx(filter: {fileAbsolutePath: {regex: "/contact/"}}) {
    edges {
      node {
        body
        frontmatter {
          title
          name
          email
        }
      }
    }
  }
}
`
