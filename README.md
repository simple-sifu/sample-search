# Setup

- npm install
- npm start - will bring up both client and server
- npm build - stores minified build artifact in builds/prod
- npm build-dev - stores build artifacts in builds/dev with sourcemaps
- npm test - will run jest tests.

# linting code

- Added eslint and prettier plugin and .eslintrc.js
- Also added to .vscode/settings.json for code formatting on save.

# Tests

- jest tests were written for testing of Caching of Search Results
- provided postman collections(server/postman) for testing node backend.
- did not write cypress tests due to time.
- did not have at least 85% test coverage due to time.

# Webpack

- replaced gulpfile
- allow for webpack use and builds in different environments
- added webpack-dev-server for automatic reloading for changes and openning of webpage
- separating files like scss, js, images.
- prod mode defaults to minifying builds
- npm start brings up both services for client and server.

# Environment

- configured in .env
- I commented out .gitignore so that you can bring up application. This file should usually not be included in pkg and should be private.
- did not implement docker due to time.

# Search Hashmap

- used closure on backend to store product keys and values on startup
- keys are stored to handle single digit searches or queries
- test was written for this
- if data is larger I would explore the use of tries data structure similar to Google search.

# State Management

- I chose NOT to use Redux(ReduxToolkit) and Redux Saga because they are commonly used in most companies but is kinda overkill for this small project. Also global state is bad. It doesnt promote encapsulation of properties.
- For large apps and different developers Redux provides a global state or a common store to keep track of changes using devtools. This is extremely useful for debugging, but not good for component based development(as stated in prev statement)
- I used React.Context to reduce the prop drilling. Also created a custom useFetch hook
to work with useContext

# Styles

- I used styled-components to prevent css selector conflicts in the future.
- I did not have time to make it responsive.

# API
- url is versioned initially to v1, ie. http://localhost:8080/api/v1/products/

# Use Cases

---

## 1. load home page after npm start

## ![Screen Shot 2023-04-28 at 11 55 50 PM](https://user-images.githubusercontent.com/36891099/235282541-c74f7e06-d9de-4e8a-95bd-048d5b773eb6.png)

---

## 2. select magnifier glass on far right corner will show searchbar.

## ![image](https://user-images.githubusercontent.com/36891099/235282559-0cbf3c5d-60bb-48cd-8d9f-8c53a217df72.png)

---

## 3. single character like 'd' on search bar will show 4 different types of products.

## ![image](https://user-images.githubusercontent.com/36891099/235282577-f741441e-0fa9-4cb4-b334-d041e99a235f.png)

---

## 4. Two ways you can go to display page and show Product Carousel:

1.  Click See all Results link will send you the carousel of products on display page.
2.  You can press return on search bar.
    ![image](https://user-images.githubusercontent.com/36891099/235282758-8955117b-bed4-4449-ac24-9c73d22c4a62.png)

---

## 5. Product Carousel

## ![image](https://user-images.githubusercontent.com/36891099/235282883-1163fb0d-e105-4400-a782-9b8b65846bb9.png)

---

## 6. click ELC icon on the top left corner on the navbar will bring you back to home page.
# sample-search
