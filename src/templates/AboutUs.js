// ----------------------------------------
// ----------------------------------------
// ----------------------------------------

        // WITH STATIC QUERIES

// ----------------------------------------
// ----------------------------------------
// ----------------------------------------


// import React from "react"
// import { graphql, StaticQuery } from "gatsby"


// import Navbar from "../components/Navbar/navbar"
// import Sidebar from "../components/Sidebar/sidebar"
// import Footer from "../components/Footer/footer"

// import SEO from "../components/seo"


// export default function AboutUs ({ data}) {
//   const { markDownRemark } = data
//   const { frontmatter, html } = markDownRemark

//   return (

//     <StaticQuery
//         query={graphql`
//         query($slug: String!) {
//           markdownRemark(frontmatter: { slug: {eq: $slug } }) {
//             html
//             frontmatter {
//               slug
//               title
//               abstract
//             }
//           }
//         }
//         `}

//         render={ e => (
//           <>
//           <SEO title={frontmatter.title} />
//           <Navbar />
//           <Sidebar />
    
//             <h1>
//               {frontmatter.title}
//             </h1>
    
//             <div 
//               dangerouslySetInnerHTML={{ __html: html }}
//             />
    
//           <Footer />
//         </>
//         )}

//     />
//   )}




// ----------------------------------------
// ----------------------------------------
// ----------------------------------------

        // WITH PAGE QUERIES

// ----------------------------------------
// ----------------------------------------
// ----------------------------------------


import React from "react"
import { graphql } from "gatsby"

import Navbar from "../components/Navbar/navbar"
import Sidebar from "../components/Sidebar/sidebar"
import Footer from "../components/Footer/footer"

import SEO from "../components/seo"
import "./aboutus.css"



const AboutUs = ({ data, }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (

    <>
      <SEO title={frontmatter.title} />
      <Navbar />
      <Sidebar />

        <div className="about-container">

          <h1 className="about-bigTitle">
            {frontmatter.title}
          </h1>

          <h3 className="about-bigTitle2">
          {frontmatter.title2}

          </h3>

          <div className="firstParagraph"
            dangerouslySetInnerHTML={{ __html: html }}
          />

        </div>

      <Footer />
    </>
  );
}

export default AboutUs


export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: {eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        title2
        abstract
      }
    }
  }
`


