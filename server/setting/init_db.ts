import * as shell from "shelljs"
import * as pg from 'pg'
import * as  dotenv from "dotenv";
dotenv.config({ path: './config.env'})
shell.env.PGHOST=process.env.PGHOST;
shell.env.PGDATABASE=process.env.PGDATABASE;
shell.env.PGPORT=process.env.PGPORT;
export default new pg.Pool()