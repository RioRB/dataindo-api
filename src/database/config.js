import postgresql from 'pg'
import * as dotenv from 'dotenv'

dotenv.config()

const { Pool } = postgresql

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT
})

export { pool };