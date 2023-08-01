import { FastifyReply, FastifyRequest } from "fastify"
import lodash from "lodash"
import { Prisma } from "@prisma/client"

import { sendErrorReply, sendSuccessReply } from "../system/baseUtils"
import BaseController from "../system/baseController"
import { TSayHiRequest } from "./publicType"

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

}

export default PublicController
