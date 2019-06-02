# Whitebox Code Challenge
---
### Initial Requirements

1. Create a NodeJS server that has getMany & getSingle API endpoints using this JSON URL
2. Create a SPA which wires up the static HTML given in the repo (You can use (or not) any framework you're comfortable with).
2.5. Wire up includes any search, sort or filters you see
3. The SPA should have 2 pages, a list all products, and an individual product page. Both HTML templates are provided.
4. Delivery should be a separate github repo on your own account.

### Project Overview
---

I chose to utilize React and Express to handle all the routing and logic for my application, mostly because the technologies are what I'm familiar with. I ran into a lot of problems with the provided front-end and React creating issues with how things were implemented, and a few features are implemented inefficiently to retain initial functionality in the template. In a later build, I would probably completely replace some aspects of the front-end with React components. Express and Axios are used on the API Server script to handle fetching data from the provided json link and provide endpoints for the application to fetch products, both for all products and a given product ID. There were a few filter features that I made an attempt to scaffold, as the provided datasets for products didn't allow full implementation.

### Installation Instructions
---

#### `npm install`
Installs all dependencies required. The bulk of the application was bootstrapped with create-react-app.

#### `npm run dev`
The dev script will utilize concurrently to start the api.js server file and initiate the react-scripts 'start' script, while will load the application at [http://localhost:3000](http:/localhost:3000). All calls to the API server will hit [http://localhost:1003](http://localhost:1003) on the `/products` and `/products/:id` endpoints.