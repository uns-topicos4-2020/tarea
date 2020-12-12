import * as QueryCompany from "../Queries/Company_Schema"
import * as shell from "shelljs"
import * as  HandlerError from "http-errors"
import { CreateValidator,DeleteIDValidator, UpdateIDValidator, UpdateValidator } from "../validators/Company_Valid"
export const ReadCompanies = async (req, res, next) => {
    try {
        const companies =await QueryCompany.Read()
        return res.status(200).send(companies.rows)
    } catch (error) {
        return res.status(500).send(error)
    }        
}
export const CreateCompanies = async (req, res, next) => {
    try {
        const company = await CreateValidator.validateAsync(req.body)
        const companies =await QueryCompany.Create(company)
        return res.status(200).send(companies.rows)
    } catch (error) {
        return res.status(500).send(error)
    }        
}
export const UpdateCompanies = async (req, res, next) => {
    try {
        const companyid =await  UpdateIDValidator.validateAsync(req.query)
        const company = await UpdateValidator.validateAsync(req.body)
        const companies =await QueryCompany.Update(company, companyid.company_id)
        return res.status(200).send(companies.rows)
    } catch (error) {
        return res.status(500).send(error)
    }        
}
export const DeleteCompanies = async (req, res, next) => {
    try {
        const company =await DeleteIDValidator.validateAsync(req.query)
        const companies =await QueryCompany.Delete(company.company_id)
        return res.status(200).send(companies.rows)
    } catch (error) {
        return res.status(500).send(error)
    }        
}