module.exports = {
  siteMetadata: {
    title: `razur`,
    description: `avid gamer. developer + designer.`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 5,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown`,
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-remark`,
  ],
}
