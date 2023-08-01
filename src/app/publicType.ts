import { Prisma } from "@prisma/client"
import { FastifyReply, FastifyRequest } from "fastify"

interface ISayHiQuery {
  name?: string
}

export type TSayHiRequest = FastifyRequest<{ Querystring: ISayHiQuery }>

