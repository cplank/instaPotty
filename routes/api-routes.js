var db = require("../models");


//TESTING OBJECTS
const User = require("../test/user_class");
const Image = require("../test/image_class");

let user1 = new User("qq01pp", sailorMoon)
let user2 = new User("ww02oo", sailorMercury)
let user3 = new User("ee03ii", sailorVenus)
let user4 = new User("rr04uu", sailorMars)
let user5 = new User("tt05yy", sailorJupiter)

let image1 = new Image(1, "Cloud-123-id", "www.funPIC.super", "qq01pp", "luxury", "the mall", "a cool mall bathroom", true)
let image2 = new Image(2, "Cloud-444-id", "www.funPIC.duper", "ww02oo", "luxury", "the mall", "a cool mall bathroom", true)
let image3 = new Image(3, "Cloud-555-id", "www.funPIC.fun", "ee03ii", "luxury", "the mall", "a cool mall bathroom", true)
let image4 = new Image(4, "Cloud-143-id", "www.funPIC.heynow", "rr04uu", "luxury", "the mall", "a cool mall bathroom", true)
let image5 = new Image(5, "Cloud-555-id", "www.funPIC.yolo", "tt05yy", "luxury", "the mall", "a cool mall bathroom", true)


// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/todos", function(req, res) {
      db.Images.findAll()
        .then(function(data){
          res.json(data);
        });
  });

  // POST route for saving a new todo. You can create a todo using the data on req.body
  app.post("/api/todos", function(req, res) {
    
    db.Images.create(image1).then(())
  });

  // DELETE route for deleting todos. You can access the todo's id in req.params.id
  app.delete("/api/todos/:id", function(req, res) {

  });

  // PUT route for updating todos. The updated todo will be available in req.body
  app.put("/api/todos", function(req, res) {

  });
};