// Iteration #1
require("../db");

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];

const async = require("hbs/lib/async");
  const mongoose = require("mongoose");
  const Drone = require("../models/Drone.model");

  Drone.create(drones)
  .then((dronesFromDB) =>{
    console.log(dronesFromDB.length);
    mongoose.connection.close()
  })
  .catch((error) => {
      console.log("there's an error while seeding")
  })