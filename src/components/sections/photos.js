import React, { useEffect, useContext } from "react"
import styled from "styled-components"
import SkeletonLoader from "tiny-skeleton-loader-react"
import { motion, useAnimation } from "framer-motion"
import BackgroundImage from "gatsby-background-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Context from "../../context"
import config from "../../config"
import ContentWrapper from "../../styles/ContentWrapper"
import Underlining from "../../styles/Underlining"
import Theme from "../../styles/Theme"

const StyledSection = motion.custom(styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
  margin-top: 2rem;
`)

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    padding-right: 0;
    padding-left: 0;
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      padding-right: 2.5rem;
      padding-left: 2.5rem;
    }
    .section-title {
      padding-right: 2.5rem;
      padding-left: 2.5rem;
      margin-bottom: 0;
      @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        padding-right: 0;
        padding-left: 0;
      }
    }
    .indent {
      padding-left: 0rem;
    }
    .articles {
      display: flex;
      justify-content: space-between;
      overflow-x: scroll;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;
      margin: -2rem 0 0 0;
      padding: 0 2rem;
      &::-webkit-scrollbar {
        display: none;
      }
      @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        padding: 0;
        overflow: visible;
      }
      /* Show scrollbar if desktop and wrapper width > viewport width */
      @media (hover: hover) {
        &::-webkit-scrollbar {
          display: block;
          -webkit-appearance: none;
        }

        &::-webkit-scrollbar:horizontal {
          height: 0.8rem;
        }

        &::-webkit-scrollbar-thumb {
          border-radius: 8px;
          border: 0.2rem solid white;
          background-color: rgba(0, 0, 0, 0.5);
        }

        &::-webkit-scrollbar-track {
          background-color: #fff;
          border-radius: 8px;
        }
      }
    }
    .card {
      width: 18rem;
      height: 24.375rem;
      display: flex;
      flex-direction: column;
      text-align: center;
      padding: 1rem;
      margin: 2rem 1rem;
      // box-shadow: 0 5px 15px rgba(0, 0, 0, 0.16);
      border-radius: ${({ theme }) => theme.borderRadius};
      transition: box-shadow 0.3s ease-out;
      &:hover {
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.32);
      }
      &:hover ${Underlining} {
        box-shadow: inset 0 -1rem 0 ${({ theme }) => theme.colors.secondary};
      }
      @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        margin: 2rem auto;
      }
      .category {
        color: ${({ theme }) => theme.colors.primary};
        text-transform: uppercase;
        letter-spacing: +1px;
        font-weight: 700;
      }
      .imageX {
        background-size: cover;
        background-color: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
      }
      .title {
        font-weight: bold;
        margin-top: 0.25rem;
        margin-bottom: 0.25rem;
        color: white;
      }
      .subtitle {
        font-size: 0.75rem;
        color: #eeeeee;
        text-transform: uppercase;
        letter-spacing: +0.4px;
      }
    }
  }
`

const Photos = ({ content }) => {
  const { exports, body } = content[0].node
  const { photos } = exports

  // const { isIntroDone } = useContext(Context).state
  const articlesControls = useAnimation()

  useEffect(() => {
    const pageLoadSequence = async () => {
      await articlesControls.start({
        opacity: 1,
        transition: { delay: 0.4 },
      })
    }
    pageLoadSequence()
  }, [articlesControls])

  return (
    <StyledSection
      id="photos"
      initial={{ opacity: 0, y: 20 }}
      animate={articlesControls}
    >
      <StyledContentWrapper>
        <h3 className="section-title">Photos</h3>
        <div className="section-title">
          <MDXRenderer>{body}</MDXRenderer>
        </div>
        <div className="articles">
          {photos
            ? photos.map(item => (
                <a
                  href={item.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  title={item.title}
                  aria-label={item.url}
                  key={item.url}
                >
                  <div className="card">
                    <BackgroundImage
                      Tag="section"
                      className="imageX"
                      fluid={item.image.childImageSharp.fluid}
                      // backgroundColor={`#040e18`}
                    >
                      <span className="title">{item.title}</span>
                      <span className="subtitle">{item.subtitle}</span>
                      <p></p>
                    </BackgroundImage>
                  </div>
                </a>
              ))
            : [...Array(3)].map((i, key) => (
                <div className="card" key={key}>
                  <SkeletonLoader
                    background="#f2f2f2"
                    height="1.5rem"
                    style={{ marginBottom: ".5rem" }}
                  />
                  <SkeletonLoader background="#f2f2f2" height="4rem" />
                  <SkeletonLoader
                    background="#f2f2f2"
                    height=".75rem"
                    width="50%"
                    style={{ marginTop: ".5rem" }}
                  />
                </div>
              ))}
        </div>
        <div className="section-title">
          <a
            href="https://photos.jonmountjoy.com/"
            target="_blank"
            rel="noopener"
            aria-label="External Link"
            class="indent"
          >
            <Underlining
              color={Theme.colors.secondary}
              hoverColor={Theme.colors.secondary}
            >
              Visit the photo galleries >
            </Underlining>
          </a>
        </div>
      </StyledContentWrapper>
    </StyledSection>
  )
}

export default Photos
