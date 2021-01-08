module.exports = {
  siteMetadata: {
    title: `Explore`,
    description: `Open up your Mind`,
    author: `@Thomas`,
  },
  plugins: [


    `gatsby-transformer-remark`,
    `gatsby-source-instance-name-for-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  


    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-pages`,
        name: `markdown-pages`,
      },
    },
      
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },

    {
      resolve: `gatsby-plugin-paypal`,
      options: {
        clientId: `AeUmu7a378NOBOGFPy7bdWEBpTM4G94QMAUqanmbnDX21u2iGdQmzBfeUJc0mnRGsmIR34btbKSodOiU`,
        currency: `EUR` // Optional
      }
    },

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `source serif pro` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }

  ],
    pathPrefix: "/Explore",
}
