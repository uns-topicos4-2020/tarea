import { Request, Response, NextFunction } from 'express'
import * as jwt from "jsonwebtoken"
import * as dotenv from "dotenv";
dotenv.config({ path: './config.env'})
import * as shell from "shelljs"
import * as  HandlerError from "http-errors"
export const CreateToken = async (payload) => {
    return await jwt.sign({payload}, process.env.KEY_TOKEN_SECRET, { expiresIn: '8h'  })
} 
export const ValidToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if(!req.headers["authorization"]) return  res.status(401).send(HandlerError.Unauthorized())
        const token = req.headers["authorization"].split(" ")[1];
        const payload = await jwt.verify(token, process.env.KEY_TOKEN_SECRET)
        const currentUser = global["users"].filter((user) => {
            return user.token === token;
        })
        if(!currentUser[0] || !payload.payload) return  res.status(401).send(HandlerError.Unauthorized())
        req["user"] = currentUser[0];
        shell.env.PGUSER = currentUser[0].auth.user
        shell.env.PGPASSWORD = currentUser[0].auth.password
       return  next();
    } catch (error) {
        return  res.status(401).send(HandlerError.Unauthorized(error.message))
    }
}
