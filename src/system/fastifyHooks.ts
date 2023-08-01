import { FastifyInstance } from "fastify"

import createError from "@fastify/error"
import { getAccessSecret } from "../config/utils"

const AccessSecretInvalidError = createError("ACCESS_SECRET_INVALID", "access secret is invalid", 401)

export const useAccessSecretVerifyHook = (fastify: FastifyInstance) => {
  fastify.addHook("onRequest", async (request, reply) => {
    const secret = getAccessSecret()

    if (secret) {
      const reqSecret = String(request.headers.http_system_access_secret)
      if (!reqSecret || reqSecret !== secret) {
        reply.send(new AccessSecretInvalidError())
      }
    }
  })
}
