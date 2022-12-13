# Frontend Mentor - GitHub user search app solution

This is a solution to the [GitHub user search app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 
## Overview
Use a search bar to search the Github database for user information such as repositories, bio, avatar, etc.

### The challenge

Users are able to:

- View the optimal layout for the app depending on their device's screen size
- Search for GitHub users by their username
- See relevant user information based on their search
- Switch between light and dark themes

### Demo

https://github-user-search-lemon.vercel.app/

### Built with

- Gatsby
- React Bootstrap
- Emotion CSS
- Github REST API & GraphQL API

## Features
This app uses a Gatsby plugin for Github to get Octocat data with GraphQL at build time. For client-side requests in the search bar, a fetch to the Github REST API "users" endpoint is used.

React Bootstrap and Emotion CSS are used to quickly style responsive components.

### Useful resources

- [Authenticating Github GraphQL API](https://docs.github.com/en/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql)