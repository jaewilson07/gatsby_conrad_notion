module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter - Strata by HTML5 UP',
    author: 'Hunter Chang',
    description: 'A Gatsby.js Starter based on Strata by HTML5 UP',
  },
  plugins: [
    {
      resolve: `@conradlin/gatsby-source-notion-database`,
      options: {
        sourceConfig: [
          {
            name: 'posts',
            table:
              'https://www.notion.so/f1aca37400104e06a2423638e88bdd13?v=7c40ce84d4ed4bb28c7cab19b2f4481b',
            cacheType: 'html',
          },
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
