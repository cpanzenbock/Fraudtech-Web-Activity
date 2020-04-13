# Fraudtech-Web-Activity
Self-teaching project. Simple web application for submitting enhancement requests to existing business tools.

## Frameworks and Modules Overview
### express
Takes care of the implementation of a lot of standard web application features. Automatically allows server to handle multiple http requests asynchronously.
### pug
Templating engine and language, acting as a kind of 'plug-in' that augments HTML making it easier to work with and make modular.
### sequelize
Our application's Object-relational Mapper Software (ORM) for converting our JS objects into SQL queries.
Makes use of 'pg' modules to communicate with a postgres database.
### object-to-xml
Converts javascript object to xml for exporting.

## Project File Structure
### bin
This contains the top js file that exports no modules. It implements the http server for serving the web app.
### config
Contains the configs for sequelize that it needs to establish connection with the backend database.
### controllers
Exports modules for responding to requests. Makes modular what otherwise would be programmed directly into the */routes* directory's method calls as callback functions.
### docs
Design documentation for the web form application.
### migrations
Contains migrations made to the back-end DB performed by sequelize.
### models
Contains models for interacting with the back-end DB by sequelize.
### node_modules
All of the npm modules utilised by the web app and their dependencies.
### public
Media, styles and JS functions available globally to include in served HTML.
### routes
Contains code to route and reroute users to the appropriate pages of the website depending on their interactions. It makes use of modules from */controllers* to handle these requests.
### seeders
TODO
### views
Contains HTML pages and the templates they're derived from, in 'pug'.
