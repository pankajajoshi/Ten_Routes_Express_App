//we are using EJS(a popular view engine)and Express 

const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Import the routes from bonus.js
const routes = require('./bonus.js');

// Define the route handlers dynamically
routes.forEach((route) => {
  app.get(route.url, (req, res) => {
    res.render(route.page);
  });
});

// // Define the routes
// app.get('/', (req, res) => {
//   res.render('funerror1');
// });

// app.get('/route1', (req, res) => {
//   res.render('funerror2');
// });

// app.get('/route2', (req, res) => {
//     res.render('funerror3');
//   });

// app.get('/route3', (req, res) => {
//     res.render('funerror4');
//  });

//  app.get('/route4', (req, res) => {
//     res.render('funerror5');
//   });

//   app.get('/route5', (req, res) => {
//     res.render('funerror6');
//   });

//   app.get('/route6', (req, res) => {
//     res.render('funerror7');
//   });

//   app.get('/route7', (req, res) => {
//     res.render('funerror8');
//   });

//   app.get('/route8', (req, res) => {
//     res.render('funerror9');
//   });

//   app.get('/route9', (req, res) => {
//     res.render('funerror10');
//   });


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});