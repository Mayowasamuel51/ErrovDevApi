const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const  Key = new Schema({
    keyname:{
        type:String,
        // required:true
    },

    apikey:{
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

module.exports = mongoose.model('Key' ,Key)