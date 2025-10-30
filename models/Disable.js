import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    states: String,
    NoOfDisabledEmployed : Number,
})

export default mongoose.model("Disable", dataSchema)
