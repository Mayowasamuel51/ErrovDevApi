const WebsiteUrl = require("../models/websiteurl");
const Key = require("../models/keys")
const { validationResult } = require("express-validator");

const storeUrl = async (req, res, next) => {
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      const errorMessage = new Error("fill in the input please!!!!!");
      errorMessage.statusCode = 422;
      throw error;
    }
    const { url, description, email } = req.body;
    const response = await WebsiteUrl.create({
      url: url,
      email: email,
      description: description,
    });

    res.status(201).json({
      message: "created sucssfully",
      response: response,
    });
    console.log(response);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
    console.log(err.message);
  }
};

const getUrl = async (req, res, next) => {
  try {
    const email = req.params.email;
    console.log(email);
    const response = await WebsiteUrl.where({email:email}).sort({ $natural: -1 })
    res.status(200).json({
      response: response,
    });
    console.log(response);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
    console.log(err.message);
  }
};




const storeKey = async (req, res, next) => {
    try {
      const error = validationResult(req);
      if (!error.isEmpty()) {
        const errorMessage = new Error("fill in the input please!!!!!");
        errorMessage.statusCode = 422;
        throw error;
      }
      const {keyname, apikey, email } = req.body;
      const response = await Key.create({
        keyname:keyname,
        email: email,
        apikey: apikey,
      });
  
      res.status(201).json({
        message: "created sucssfully",
        response: response,
      });
      console.log(response, "key stored");
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
      console.log(err.message);
    }
  };
  
  const getKey = async (req, res, next) => {
    try {
      const email = req.params.email;
      console.log(email);
      const response = await Key.where({email:email}).sort({ $natural: -1 })
      res.status(200).json({
        response: response,
      });
      console.log(response, "key info");
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
      console.log(err.message);
    }
  };
module.exports = {
  storeUrl,
  getUrl,
  getKey,
  storeKey,
};
