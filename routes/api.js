// const API = {
//   async getLastWorkout() {
//     let res;
//     try {
//       res = await fetch("/api/workouts");
//     } catch (err) {
//       console.log(err)
//     }
//     const json = await res.json();

//     return json[json.length - 1];
//   },
//   async addExercise(data) {
//     const id = location.search.split("=")[1];

//     const res = await fetch("/api/workouts/" + id, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(data)
//     });

//     const json = await res.json();

//     return json;
//   },
//   async createWorkout(data = {}) {
//     const res = await fetch("/api/workouts", {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: { "Content-Type": "application/json" }
//     });

//     const json = await res.json();

//     return json;
//   },

//   async getWorkoutsInRange() {
//     const res = await fetch(`/api/workouts/range`);
//     const json = await res.json();

//     return json;
//   },
// };

const Workout = require("../models/workout")

module.exports= function(app){
  app.get("/api/workouts", function(req,res){ 
    Workout.find()
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.json(err)
    })
  }); 

  app.post("/api/workouts", function (req,res){
    Workout.create({})
    .then(data => res.json(data))
    .catch(err => {
      res.json(err)
    })
  }); 

  app.get("api/workouts/range", function (req,res){
    Workout.find()
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.json(err)
    })
  }); 

  app.put("/api/workouts/:id", ({body,params}, res)=> {
    Workout.findByIdAndUpdate(
      params.id, 
      {$push: {excerises: body}}, 
      {new: true,runValidators:true}
    )
    .then(data => res.json(data))
    .catch(err => {
      res.json(err)
    })
      
  
  });

}