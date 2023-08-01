import fastify, { FastifyReply, FastifyRequest } from "fastify"

import Ajv from "ajv"

import ajvFormats from "ajv-formats"

import "./config/environment"

import { getBasePath, addBasePathPrefix, getFastifyLogger } from "./config/utils"

const fastifyApp = fastify({
  logger: getFastifyLogger()
})

const ajv = new Ajv({
  removeAdditional: true,
  useDefaults: true,
  coerceTypes: true,
  allErrors: true
})

ajvFormats(ajv)

fastifyApp.setValidatorCompiler(({ schema }) => {
  return ajv.compile(schema)
})

import prismaPlugin from "./plugins/prisma"
fastifyApp.register(prismaPlugin)

import { useAccessSecretVerifyHook } from "./system/fastifyHooks"
useAccessSecretVerifyHook(fastifyApp)

// Declare home route
const basePath = getBasePath()
async function homeHandler(request: FastifyRequest, reply: FastifyReply) {
  return {
    message: "you are visiting jowo-studio-datasource service.",
    basePath: basePath
  }
}
fastifyApp.get("/", homeHandler)
if (basePath !== "/") {
  fastifyApp.get(basePath, homeHandler)
}

// 挂载路由
import PublicRoute from "./app/publicRoute"
fastifyApp.register(PublicRoute, { prefix: addBasePathPrefix("/") })

export default fastifyApp
