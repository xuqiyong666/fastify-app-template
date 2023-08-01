import fp from "fastify-plugin"
import { Prisma, PrismaClient } from "@prisma/client"
import { getNodeEnv } from "../config/utils"

// Use TypeScript module augmentation to declare the type of server.prisma to be PrismaClient
declare module "fastify" {
  interface FastifyInstance {
    prisma: PrismaClient
  }
}

const prismaPlugin = fp(async (fastify, options) => {
  // console.log("[Fastify] register plugin: prisma")

  const nodeEnv = getNodeEnv()

  let log: Array<Prisma.LogLevel> = []
  if (nodeEnv === "development") {
    log = ["query", "info", "warn", "error"] // 开发环境打印日志
  }

  const prisma = new PrismaClient({
    log: log
  })

  await prisma.$connect()

  fastify.decorate("prisma", prisma)

  // fastify.addHook('onRequest', async (request, reply) => {
  //   request.prisma = prisma
  // })

  fastify.addHook("onClose", async (fastify) => {
    await prisma.$disconnect()
  })
})

export default prismaPlugin
