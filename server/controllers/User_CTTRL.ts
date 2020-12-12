import * as UserCompany from "../Queries/User_Schema"
import * as shell from "shelljs"
import * as HandlerError from "http-errors"
import { AuthValidator } from "../validators/User_Valid"
import * as auth from "../helpers/JWT"
export const SignIn = async (req, res, next) => {
    try {
        const {user, password} =await AuthValidator.validateAsync(req.body);
        shell.env.PGUSER = user
        shell.env.PGPASSWORD = password
        const users =await UserCompany.Read(user, password)
        if(users.rows.length === 0) {
            throw HandlerError.NotFound("User doesn't registered!")
        } else {
            const User = users.rows[0];
            const token = await auth.CreateToken(User.usesysid)
            global["users"].push({token, auth: {user, password} })
            return res.status(200).send({User, token})
        }
    } catch (error) {
        if (error.isJoi) error.status = 422;
        if(error.routine === "auth_failed") return next(HandlerError.Unauthorized(`user or password invalid!`))
        return res.status(500).send(error)
    }        
}
export const ReadUser =async (req, res, next) => {
    try {
        const users =await UserCompany.Read(undefined, undefined)
        return res.status(200).send(users.rows)
    } catch (error) {
        return res.status(500).send(error)
    }        
}
export const CreateUser= async (req, res, next) => {
    try {
        const users =await UserCompany.Create(undefined)
        return res.status(200).send(users.rows)
    } catch (error) {
        return res.status(500).send(error)
    }        
}
export const UpdateUser = async(req, res, next) => {
    try {
        const users =await UserCompany.Update()
        return res.status(200).send(users.rows)
    } catch (error) {
        return res.status(500).send(error)
    }        
}
export const DeleteUser = async (req, res, next) => {
    try {
        const users =await UserCompany.Delete()
        return res.status(200).send(users.rows)
    } catch (error) {
        return res.status(500).send(error)
    }        
}