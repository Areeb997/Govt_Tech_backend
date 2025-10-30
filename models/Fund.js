import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    states: String,
    FundRelease : Number
})

export default mongoose.model("Fund", dataSchema)
