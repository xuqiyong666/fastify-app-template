import { FastifyInstance } from "fastify"
import { bindThis } from "../config/utils"
import PublicController from "./publicController"

async function PublicRoute(fastify: FastifyInstance, opts: Object = {}) {
  // console.log("[Fastify] register route: PublicRoute")

  const publicController = new PublicController(fastify, opts)
  const forward = bindThis(publicController)

  fastify.route({
    method: "GET",
    url: "/sayHi",
    schema: {
      querystring: {
        type: "object",
        properties: {
          name: { type: "string" }
        }
      }
    },
    handler: forward(publicController.sayHi)
  })

  fastify.route({
    method: "GET",
    url: "/getDemoTaskList",
    schema: {
      querystring: {
        type: "object",
        properties: {
          pageNum: { type: "number" },
          pageSize: { type: "number" }
        }
      }
    },
    handler: forward(publicController.getDemoTaskList)
  })
}

export default PublicRoute
