const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Workout Model
const WorkoutSchema = new Schema({
//Date printing
    day: {
        type: Date,
        default: Date.now
    },
//Exercises types
    exercises: [
        {
            name: {
                type: String,
                trim: true,
                required: true
            },
            type: {
                type: String,
                trim: true,
                required: true
            },
            weight: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            duration: {
                type: Number,
                required: true
            },
            distance: {
                type: Number
            },
        }
    ],
},
{
    toJSON: {
        virtuals: true
    }
}
);

WorkoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;