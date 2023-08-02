import { Prisma } from "@prisma/client"
import { FastifyReply, FastifyRequest } from "fastify"

export interface ISayHiQuery {
  name?: string
}

export type TSayHiRequest = FastifyRequest<{ Querystring: ISayHiQuery }>


export interface  IGetDemoTaskListQuery {
  pageNum?: number
  pageSize?: number
}

export type TGetDemoTaskList = FastifyRequest<{ Querystring: IGetDemoTaskListQuery }>

