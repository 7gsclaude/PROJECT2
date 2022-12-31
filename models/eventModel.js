//toodo write oute the event models schema 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema(
    
    {
location: {
            type: String, // implementing ref: "model" allows me to be specifc about wheere that inforation is going 
    
        },
img: {
            type: String,
        },
name: {
            type: String,
            
        },
courses: {
            type: String, // not sure why i put brackets around it [] bbefore this was edited 
}, 
        
    },
{timestamps: true})
// todo fleesh out intro figure out logiccal routing of info 

const Event = mongoose.model("Event", eventSchema);

module.exports = Event; // need to capitolize in order to make it valid  