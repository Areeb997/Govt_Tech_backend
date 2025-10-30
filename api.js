import Allowance from "./models/Allowance.js";
import Disable from "./models/Disable.js";
import DistrictWise from "./models/DistrictWise.js";
import Employment from "./models/Employment.js";
import Fund from "./models/Fund.js";
import Gram from "./models/Gram.js";
import HouseHold from "./models/HouseHold.js";

export async function DistrictWiseData() {
    const Url = 'https://api.data.gov.in/resource/ee03643a-ee4c-48c2-ac30-9f2ff26ab722?api-key=579b464db66ec23bdd0000014c2e81124a82454b57d95831a2b86764&format=json'
    try {
        const apiResponse = await fetch(Url); // fetch data form api 
        if (!apiResponse.ok) {      // check response error
            throw new Error(`Https error! status: ${apiResponse.status}`)
        }
        const data = await apiResponse.json()   // parse the data 
        const { records } = data // destructure the recordes array 
        const savedRecords = []
        for (const record of records) {
            const exist = await DistrictWise.findOne({
                fin_year: record.fin_year,
                month: record.month,
                state_code: record.state_code,
                state_name: record.state_name,
                district_code: record.district_code,
                district_name: record.district_name,
                Approved_Labour_Budget: record.Approved_Labour_Budget,
                Average_Wage_rate_per_day_per_person: record.Average_Wage_rate_per_day_per_person,
                Average_days_of_employment_provided_per_Household: record.Average_days_of_employment_provided_per_Household,
                Differently_abled_persons_worked: record.Differently_abled_persons_worked,
                Material_and_skilled_Wages: record.Material_and_skilled_Wages,
                Number_of_Completed_Works: record.Number_of_Completed_Works,
                Number_of_GPs_with_NIL_exp: record.Number_of_GPs_with_NIL_exp,
                Number_of_Ongoing_Works: record.Number_of_Ongoing_Works,
                Persondays_of_Central_Liability_so_far: record.Persondays_of_Central_Liability_so_far,
                SC_persondays: record.SC_persondays,
                SC_workers_against_active_workers: record.SC_workers_against_active_workers,
                ST_persondays: record.ST_persondays,
                ST_workers_against_active_workers: record.ST_workers_against_active_workers,
                Total_Adm_Expenditure: record.Total_Adm_Expenditure,
                Total_Exp: record.Total_Exp,
                Total_Households_Worked: record.Total_Households_Worked,
                Total_Individuals_Worked: record.Total_Individuals_Worked,
                Total_No_of_Active_Job_Cards: record.Total_No_of_Active_Job_Cards,
                Total_No_of_Active_Workers: record.Total_No_of_Active_Workers,
                Total_No_of_HHs_completed_100_Days_of_Wage_Employment: record.Total_No_of_HHs_completed_100_Days_of_Wage_Employment,
                Total_No_of_JobCards_issued: record.Total_No_of_JobCards_issued,
                Total_No_of_Workers: record.Total_No_of_Workers,
                Total_No_of_Works_Takenup: record.Total_No_of_Works_Takenup,
                Wages: record.Wages,
                Women_Persondays: record.Women_Persondays,
                percent_of_Category_B_Works: record.percent_of_Category_B_Works,
                percent_of_Expenditure_on_Agriculture_Allied_Works: record.percent_of_Expenditure_on_Agriculture_Allied_Works,
                percent_of_NRM_Expenditure: record.percent_of_NRM_Expenditure,
                percentage_payments_gererated_within_15_days: record.percentage_payments_gererated_within_15_days,
                Remarks: record.Remarks
            })
            if (!exist) {
                const saved = await DistrictWise.create({
                    fin_year: record.fin_year,
                    month: record.month,
                    state_code: record.state_code,
                    state_name: record.state_name,
                    district_code: record.district_code,
                    district_name: record.district_name,
                    Approved_Labour_Budget: record.Approved_Labour_Budget,
                    Average_Wage_rate_per_day_per_person: record.Average_Wage_rate_per_day_per_person,
                    Average_days_of_employment_provided_per_Household: record.Average_days_of_employment_provided_per_Household,
                    Differently_abled_persons_worked: record.Differently_abled_persons_worked,
                    Material_and_skilled_Wages: record.Material_and_skilled_Wages,
                    Number_of_Completed_Works: record.Number_of_Completed_Works,
                    Number_of_GPs_with_NIL_exp: record.Number_of_GPs_with_NIL_exp,
                    Number_of_Ongoing_Works: record.Number_of_Ongoing_Works,
                    Persondays_of_Central_Liability_so_far: record.Persondays_of_Central_Liability_so_far,
                    SC_persondays: record.SC_persondays,
                    SC_workers_against_active_workers: record.SC_workers_against_active_workers,
                    ST_persondays: record.ST_persondays,
                    ST_workers_against_active_workers: record.ST_workers_against_active_workers,
                    Total_Adm_Expenditure: record.Total_Adm_Expenditure,
                    Total_Exp: record.Total_Exp,
                    Total_Households_Worked: record.Total_Households_Worked,
                    Total_Individuals_Worked: record.Total_Individuals_Worked,
                    Total_No_of_Active_Job_Cards: record.Total_No_of_Active_Job_Cards,
                    Total_No_of_Active_Workers: record.Total_No_of_Active_Workers,
                    Total_No_of_HHs_completed_100_Days_of_Wage_Employment: record.Total_No_of_HHs_completed_100_Days_of_Wage_Employment,
                    Total_No_of_JobCards_issued: record.Total_No_of_JobCards_issued,
                    Total_No_of_Workers: record.Total_No_of_Workers,
                    Total_No_of_Works_Takenup: record.Total_No_of_Works_Takenup,
                    Wages: record.Wages,
                    Women_Persondays: record.Women_Persondays,
                    percent_of_Category_B_Works: record.percent_of_Category_B_Works,
                    percent_of_Expenditure_on_Agriculture_Allied_Works: record.percent_of_Expenditure_on_Agriculture_Allied_Works,
                    percent_of_NRM_Expenditure: record.percent_of_NRM_Expenditure,
                    percentage_payments_gererated_within_15_days: record.percentage_payments_gererated_within_15_days,
                    Remarks: record.Remarks
                })
                savedRecords.push(saved)
            }
            else{
                const Alreadysaved = await DistrictWise.find({})  // return data form database 
                return savedRecords.length ? savedRecords : Alreadysaved  // rerturn save data to route 
            }
        }

    } catch (error) {
        console.log(error);
        res.json(500).json({ message: 'Error fetching data from third party Api' })
    }
}
export async function fethUnemploymetAllowance() {
    const Url = 'https://api.data.gov.in/resource/c3bbf4fb-a09c-42d7-b28c-b45d68a6ccba?api-key=579b464db66ec23bdd0000014c2e81124a82454b57d95831a2b86764&format=json';
    try {
        const apiResponse = await fetch(Url); // fetch data form api 
        if (!apiResponse.ok) {      // check response error
            throw new Error(`Https error! status: ${apiResponse.status}`)
        }
        const data = await apiResponse.json()   // parse the data 
        const { records } = data // destructure the recordes array 
        const savedRecords = []
        for (const record of records) {    // iterate over records array 
            const exist = await Allowance.findOne({
                states: record.states,
                Allowance: record.unemployment_allowance_paid__in_lakh_
            })
            if (!exist) {    // check if the alredy exist 
                const saved = await Allowance.create({
                    states: record.states,
                    Allowance: record.unemployment_allowance_paid__in_lakh_
                })
                savedRecords.push(saved)
            }
            else {
                const Alreadysaved = await Allowance.find({})  // return data form database 
                return savedRecords.length ? savedRecords : Alreadysaved  // rerturn save data to route 
            }
        }
    }
    catch (error) {
        console.log(error);
        res.json(500).json({ message: 'Error fetching data from third party Api' })
    }
}
export async function GramPanchayatCovered() {
    const Url = 'https://api.data.gov.in/resource/392b362b-35ef-4b94-9b7e-4863ae8afde7?api-key=579b464db66ec23bdd0000014c2e81124a82454b57d95831a2b86764&format=json'
    try {
        const apiResponse = await fetch(Url);
        if (!apiResponse.ok) {
            throw new Error(`Https error! status: ${apiResponse.status}`)
        }
        const data = await apiResponse.json()
        const { records } = data
        const SavedRecords = []
        for (const record of records) {
            const exist = await Gram.findOne({
                states: record.state_ut,
                NoOfGram: record.total_number_of_gram_panchayats_covered_under_mgnrega
            })
            if (!exist) {
                const saved = await Gram.create({
                    states: record.state_ut,
                    NoOfGram: record.total_number_of_gram_panchayats_covered_under_mgnrega
                })
                SavedRecords.push(saved)
            }

            else {
                const Alreadysaved = await Gram.find({})  // return data form database 
                return SavedRecords.length ? SavedRecords : Alreadysaved  // rerturn save data to route 
            }
        }

    } catch (error) {
        console.log(error);
        res.json(500).json({ message: 'Error fetching data from third party Api' })
    }
}
export async function HouseholdEmployment() {
    const Url = 'https://api.data.gov.in/resource/564928ed-8cf3-4b9d-aa82-2df883deed4a?api-key=579b464db66ec23bdd0000014c2e81124a82454b57d95831a2b86764&format=json'
    try {
        const apiResponse = await fetch(Url);
        if (!apiResponse.ok) {
            throw new Error(`Https error! status: ${apiResponse.status}`)
        }
        const data = await apiResponse.json()
        const { records } = data
        const SavedRecords = []
        for (const record of records) {
            const exist = await HouseHold.findOne({
                states: record.state_ut,
                district: record.district,
                "2019-20 Employment Demanded ": record._2019_20___employment_demanded_by_household,
                "2019-20 Employment Offred ": record._2019_20___employment_offered_to_household,
                "2020-21 Employment Demanded ": record._2020_21___employment_demanded_by_household,
                "2020-21 Employment Offred ": record._2020_21___employment_offered_to_household,
                "2021-22 Employment Demanded ": record._2021_22__as_on_04_08_2021____employment_demanded_by_household,
                "2021-22 Employment Offred ": record._2021_22__as_on_04_08_2021____employment_offered_to_household
            })
            if (!exist) {
                const saved = await HouseHold.create({
                    states: record.state_ut,
                    district: record.district,
                    "2019-20 Employment Demanded ": record._2019_20___employment_demanded_by_household,
                    "2019-20 Employment Offred ": record._2019_20___employment_offered_to_household,
                    "2020-21 Employment Demanded ": record._2020_21___employment_demanded_by_household,
                    "2020-21 Employment Offred ": record._2020_21___employment_offered_to_household,
                    "2021-22 Employment Demanded ": record._2021_22__as_on_04_08_2021____employment_demanded_by_household,
                    "2021-22 Employment Offred ": record._2021_22__as_on_04_08_2021____employment_offered_to_household
                })
                SavedRecords.push(saved)
            }
            else {
                const Alreadysaved = await HouseHold.find({})  // return data form database 
                return SavedRecords.length ? SavedRecords : Alreadysaved  // rerturn save data to route 
            }
        }
    } catch (error) {
        console.log(error);
        res.json(500).json({ message: 'Error fetching data from third party Api' })
    }
}
export async function DisableEmployed() {
    const Url = 'https://api.data.gov.in/resource/bca76617-f585-402f-8fc7-028c8255a363?api-key=579b464db66ec23bdd0000014c2e81124a82454b57d95831a2b86764&format=json'
    try {
        const apiResponse = await fetch(Url);
        if (!apiResponse.ok) {
            throw new Error(`Https error! status: ${apiResponse.status}`)
        }
        const data = await apiResponse.json()
        const { records } = data
        const SavedRecords = []
        for (const record of records) {
            const exist = await Disable.findOne({
                states: record.state_ut,
                NoOfDisabledEmployed: record.persons_with_disabilities_employed_during_april_2021
            })
            if (!exist) {
                const saved = await Disable.create({
                    states: record.state_ut,
                    NoOfDisabledEmployed: record.persons_with_disabilities_employed_during_april_2021
                })
                SavedRecords.push(saved)
            }
            else {
                const Alreadysaved = await Disable.find({})  // return data form database 
                return SavedRecords.length ? SavedRecords : Alreadysaved  // rerturn save data to route 
            }
        }
    } catch (error) {
        console.log(error);
        res.json(500).json({ message: 'Error fetching data from third party Api' })
    }
}
export async function FundRelease() {
    const Url = 'https://api.data.gov.in/resource/6ab8708d-0d1c-4902-be60-6f01fc79fe4f?api-key=579b464db66ec23bdd0000014c2e81124a82454b57d95831a2b86764&format=json'
    try {
        const apiResponse = await fetch(Url);
        if (!apiResponse.ok) {
            throw new Error(`Https error! status: ${apiResponse.status}`)
        }
        const data = await apiResponse.json()
        const { records } = data
        const SavedRecords = []
        for (const record of records) {
            const exist = await Fund.findOne({
                states: record.state_ut,
                FundRelease: record._2023_24
            })
            if (!exist) {
                const saved = await Fund.create({
                    states: record.state_ut,
                    FundRelease: record._2023_24
                })
                SavedRecords.push(saved)
            }

            else {
                const Alreadysaved = await Fund.find({})  // return data form database 
                return SavedRecords.length ? SavedRecords : Alreadysaved  // rerturn save data to route 
            }
        }
    } catch (error) {
        console.log(error);
        res.json(500).json({ message: 'Error fetching data from third party Api' })
    }
}
export async function EmploymentFamilies() {
    const Url = 'https://api.data.gov.in/resource/e18cc777-9d98-40d9-959a-ed4c4263824c?api-key=579b464db66ec23bdd0000014c2e81124a82454b57d95831a2b86764&format=json'
    try {
        const apiResponse = await fetch(Url);
        if (!apiResponse.ok) {
            throw new Error(`Https error! status: ${apiResponse.status}`)
        }
        const data = await apiResponse.json()
        const { records } = data
        const SavedRecords = []
        for (const record of records) {
            const exist = await Employment.findOne({
                states: record.states_uts,
                "Families Employed 2014-15": record.number_of_families_completed_100_days_of_employment_in_nos___2014_15,
                "Families Employed 2015-16": record.number_of_families_completed_100_days_of_employment_in_nos___2015_16,
                "Families Employed 2016-17": record.number_of_families_completed_100_days_of_employment_in_nos___2016_17,
                "Families Employed 2017-18": record.number_of_families_completed_100_days_of_employment_in_nos___2017_18
            })
            if (!exist) {
                const saved = await Employment.create({
                    states: record.states_uts,
                    "Families Employed 2014-15": record.number_of_families_completed_100_days_of_employment_in_nos___2014_15,
                    "Families Employed 2015-16": record.number_of_families_completed_100_days_of_employment_in_nos___2015_16,
                    "Families Employed 2016-17": record.number_of_families_completed_100_days_of_employment_in_nos___2016_17,
                    "Families Employed 2017-18": record.number_of_families_completed_100_days_of_employment_in_nos___2017_18
                })
                SavedRecords.push(saved)
            }

            else {
                const Alreadysaved = await Employment.find({})  // return data form database 
                return SavedRecords.length ? SavedRecords : Alreadysaved  // rerturn save data to route 
            }
        }
    } catch (error) {
        console.log(error);
        res.json(500).json({ message: 'Error fetching data from third party Api' })
    }
}