import express from 'express'
import mongoose from 'mongoose'
import cors from "cors";
import 'dotenv/config'
import { DisableEmployed, DistrictWiseData, EmploymentFamilies, fethUnemploymetAllowance, FundRelease, GramPanchayatCovered, HouseholdEmployment } from './api.js'
const app = express()
const port = 3000

mongoose
    .connect(process.env.AtlasString)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch((err) => console.error("❌ MongoDB connection error:", err))

app.use(
    cors({
        origin: "http://Govt_Tech_Frontend.onrender.com",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true
    })
)

app.get('/data/DistrictWise', async (req, res) => {
    try {
        const record = await DistrictWiseData()
        res.json(record)
    } catch (error) {
        res.status(500).json({ message: "Failed to get data" })
    }
})

app.get('/data/UnemploymentAllowance', async (req, res) => { // 1
    try {
        const record = await fethUnemploymetAllowance()
        res.json(record)
    } catch (error) {
        res.status(500).json({ message: "Failed to get data" })
    }
})
app.get('/data/GramPanchayatCovered', async (req, res) => { // 2
    try {
        const record = await GramPanchayatCovered()
        res.json(record)
    } catch (error) {
        res.status(500).json({ message: "Failed to get data" })
    }
})
app.get('/data/HouseholdEmployment', async (req, res) => {  // 3
    try {
        const record = await HouseholdEmployment()
        res.json(record)
    } catch (error) {
        res.status(500).json({ message: "Failed to get data" })
    }
})
app.get('/data/DisableEmployed', async (req, res) => {  // 4
    try {
        const record = await DisableEmployed()
        res.json(record)
    } catch (error) {
        res.status(500).json({ message: "Failed to get data" })
    }
})
app.get('/data/FundRelease', async (req, res) => { // 5
    try {
        const record = await FundRelease()
        res.json(record)
    } catch (error) {
        res.status(500).json({ message: "Failed to get data" })
    }
})
app.get('/data/EmploymentFamilies', async (req, res) => { // 6
    try {
        const record = await EmploymentFamilies()
        res.json(record)
    } catch (error) {
        res.status(500).json({ message: "Failed to get data" })
    }
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
