const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const  Portfoilo = new Schema({
    portfoilourl:{
        type:String,
        // required:true
    },

    imageurl:{
        type:String, 
    },
    email:{
        type:String, 
    },
    date: {
        type: Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('Portfoilo', Portfoilo)