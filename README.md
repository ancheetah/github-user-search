# Frontend Mentor - GitHub user search app solution

This is a solution to the [GitHub user search app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 
## Overview
Use a search bar to search the Github database for user information such as repositories, bio, avatar, etc.

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page [TODO]
- Search for GitHub users by their username
- See relevant user information based on their search
- Switch between light and dark themes
- **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

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

### What I learned

Gatsby was not the best framework for this project since the Github community user database is very large and too much to pre-render at build time. This also makes it difficult to work with dynamic Gatsby images. A dynamic Next.js app would have been a better choice.

### Useful resources

- [Authenticating Github GraphQL API](https://docs.github.com/en/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql)