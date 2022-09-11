require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    pathPrefix: '/github-user-search',
    title: `Github User Search`,
  },
  plugins: ["gatsby-plugin-emotion", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", 
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-source-github-api`,
    options: {

      // token: required by the GitHub API
      // scopes: https://docs.github.com/en/graphql/guides/forming-calls-with-graphql
      token: process.env.GITHUB_TOKEN,

      // GraphQLquery: defaults to a search query
      graphQLQuery: `
        query {
          user(login:"octocat") {
            name
            login
            createdAt
            bio
            repositories {
              totalCount
            }
            followers {
              totalCount
            }
            following {
              totalCount
            }
            location
            websiteUrl
            twitterUsername
            company
            avatarUrl
          }
        }
        `,

      // variables: defaults to variables needed for a search query
      variables: {}
    }
  }]
};