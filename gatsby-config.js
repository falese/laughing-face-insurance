module.exports = {
  siteMetadata: {
    title: `Laughing Head Insurance Company`,
    siteUrl: `https://www.laughingheadinsurance.com`
  },
  plugins: [
    "gatsby-plugin-sass", "gatsby-transformer-sharp","gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/content/images/"
    },
    __key: "images"
  }, 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, 
 {resolve: 'gatsby-source-filesystem',
  options: {
    "name": "log",
    "path": "./src/content/log"
  } ,
  __key: "logEntries"
},
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "hall",
      "path": "./src/content/hall"
    },
    __key: "hallEntries"
  },
  {
    resolve: `gatsby-plugin-mdx`,
    options: {
      gatsbyRemarkPlugins:[
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 590,
          }
        }
      ]
    }
  }
]
};
