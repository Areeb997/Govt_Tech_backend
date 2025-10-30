import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    states: String,
    Allowance: Number
})

export default mongoose.model("Allowance", dataSchema)
