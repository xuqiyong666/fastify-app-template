import { FastifyReply, FastifyRequest } from "fastify"
import lodash from "lodash"
import { Prisma } from "@prisma/client"

import { sendErrorReply, sendSuccessReply } from "../system/baseUtils"
import BaseController from "../system/baseController"
import { TGetDemoTaskList, TSayHiRequest } from "./publicType"

class PublicController extends BaseController {
  async sayHi(request: TSayHiRequest, reply: FastifyReply) {
    let { name } = request.query

    if (!name) {
      name = "guest"
    }

    const resultPayload = {
      msg: `hi, ${name}`
    }

    return sendSuccessReply(reply, resultPayload)
  }

  async getDemoTaskList(request: TGetDemoTaskList, reply: FastifyReply) {
    let { pageNum, pageSize } = request.query

    if (!pageNum) pageNum = 1
    if (!pageSize) pageSize = 10

    const skip = (pageNum - 1) * pageSize

    const taskQuery = {
      skip: skip,
      take: pageSize
    }

    const tasksCount = await this.database.demoTask.count()
    const tasks = await this.database.demoTask.findMany(taskQuery)

    const resultPayload = {
      pageNum: pageNum,
      pageSize: pageSize,
      count: tasksCount,
      taskList: tasks
    }

    return sendSuccessReply(reply, resultPayload)
  }
}

export default PublicController
