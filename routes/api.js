const db = require('../models');
const router = require('express').Router();

// Build completed workouts
router.post("/", (req, res)=> {
    db.Workout.create(req.body)
    .then(dbWorkout=> {
        res.json(dbWorkout);
    })
    .catch(err=>{
        res.status(500).json(err)
    });
})
// Get data for range page
router.get("/range", (req, res) => {
    db.Workout.find()
        .then((dbWorkout) => {
            res.json(dbWorkout);
        }).catch(err => {
            res.status(400).json(err);
        });
});

// Update workouts
router.put("/:id", (req, res) => {
    const id = req.params.id;
    let workoutExe = [];
    db.Workout.find({ _id: id })
        .then(dbWorkout => {
            workoutExe = dbWorkout[0].exercises;
            res.json(workoutExe);
            let exercises = [...workoutExe, req.body];
            db.Workout.findByIdAndUpdate(id, { exercises: exercises }, function (err, doc) {
                if (err) {
                    console.log(err)
                }
            })
        })
        .catch(err => {
            res.json(err);
        });

});
//Get data for workouts page
router.get("/", (req, res) => {
    db.Workout.find()
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err=> {
            res.status(500).json(err);
        })
  });






module.exports = router;