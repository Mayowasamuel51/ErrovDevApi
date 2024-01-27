const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const WebsiteUrl = new Schema({
    url:{
        type:String,
        // required:true
    },

    description:{
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

module.exports = mongoose.model('Website_Url',WebsiteUrl)