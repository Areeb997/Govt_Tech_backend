import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    states: String,
    NoOfGram: Number
})

export default mongoose.model("Gram", dataSchema)
