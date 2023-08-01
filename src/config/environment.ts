import path from "path"

import { config } from "dotenv"
import { expand } from "dotenv-expand"

// console.log(path.resolve(process.cwd(), ".env"))

const myEnv = config({
  path: path.resolve(process.cwd(), ".env"),
})
expand(myEnv)
