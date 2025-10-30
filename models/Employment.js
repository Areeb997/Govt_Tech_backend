import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    states: String,
    "Families Employed 2014-15": Number,
    "Families Employed 2015-16": Number,
    "Families Employed 2016-17": Number,
    "Families Employed 2017-18": Number,
})

export default mongoose.model("Employment", dataSchema)
