# Messages Express App

Build a server that implements all CRUD functionality for a message resource.

# Getting Started

* fork and clone this repository
* In terminal at the root of this repo run `npm install`
* Create any start scripts that would make your development easier

* build CRUD routes for a message resource:
  - create a message `/api/messages`
  - retrieve a list of all messages (output should be an array of objects)`/api/messages`
  - update a specific message `/api/messages/1`
  - delete a specific message `/api/messages/1`
  - get one specific message  `/api/messages/1`

* Build a database table (write a schema) that can handle a message that looks like the following:
```
{
  id: 1,
  name:'Criminal',
  message:'What Are You?'
}
```
## Hints for Backend
* Use Postman to test your routes
* Nodemon is your friend :)
* Body-parser is fairly important

# Advanced

* Congratulations on building a fully functional CRUDdy RESTful server! If you need more practice with the server, build CRUD routes for another resource of your choosing (a `user` resource might be useful).
* Then modularize your code (put each resource in its own js file). Use [Express router](http://expressjs.com/en/5x/api.html#router).


# Next Steps

* Using [Material-UI](https://v0.material-ui.com/) and React, build a styled frontend that will: show all messages, allow users to upload, edit, and delete messages.
* Use [Font Awesome Icons](https://material-ui.com/components/icons/) to add some style to your app.

## Hints for Frontend Integration
* You will need to revisit webpack/babel in order to set up your React development environment
* Use express.static to have your server serve the React build directory
