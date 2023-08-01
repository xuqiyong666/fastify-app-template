import { PrismaClient } from "@prisma/client"
import { FastifyInstance } from "fastify"

class BaseController {
  fastify: FastifyInstance
  opts: Object
  database: PrismaClient

  constructor(fastify: FastifyInstance, opts: Object) {
    this.fastify = fastify
    this.opts = opts

    // 数据库
    this.database = fastify.prisma
  }
}

export default BaseController
