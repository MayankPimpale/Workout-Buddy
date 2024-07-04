const mongoose =  require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
    title:{
        type: String,
        require: true
    },
    reps:{
        type: Number,
        required:true
    },
    load:{
        type:Number,
        required:true
    },
    user_id:{
        type: String,
        required: true
    }
},{timestamps:true})

module.exports = mongoose.model('workout', workoutSchema)