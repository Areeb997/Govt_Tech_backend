import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    states: String,
    district : String,
    "2019-20 Employment Demanded " : Number,
    "2019-20 Employment Offred " : Number,
    "2020-21 Employment Demanded " : Number,
    "2020-21 Employment Offred " : Number,
    "2021-22 Employment Demanded " : Number,
    "2021-22 Employment Offred " : Number,
})

export default mongoose.model("HouseHold", dataSchema)
