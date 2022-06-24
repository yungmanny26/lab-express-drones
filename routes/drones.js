const express = require('express');
//const { response } = require('../app');

const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model')


router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
  .then((allDrones) => {
    res.render("./drones/list", { allDrones } )
  })
  .catch((err) => {
    console.log("no drone here");
  })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("./drones/create-form");
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const { name, propellers, maxSpeed } = req.body;
  Drone.create({
    name,
    propellers,
    maxSpeed
  })
  .then((newSavedDrone) => res.redirect("/drones"))
  .catch(() => console.log("nothing transmitted"))
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  Drone.findById(req.params.id)
  .then((droneToUpdate) => {
    res.render("./drones/update-form", droneToUpdate);
  })
  .catch((err) => console.log("nothing was updated"))
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  //const { id } = req.params;
  //const { name, propellers, maxSpeed } = req.body;
  Drone.findByIdAndUpdate(req.params.id, req.body, { new: true})
  .then((updatedDrone) => res.redirect(`/drones`))
  .catch(() => console.log("error has ocurred"))
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const { id } = req.params;

  Drone.findByIdAndRemove(id)
  .then((result) => {
    res.redirect("/drones");
  })
  .catch((error) => console.log("nothing was deleted"))
});



module.exports = router;
