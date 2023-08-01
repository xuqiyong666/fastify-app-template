import { FastifyReply } from "fastify"

import { BaseResponseBody } from "./baseType"

export const generateSuccessBody = (data: any): BaseResponseBody => {
  return generateSuccessBodyWithStatus(data, 1)
}

export const generateSuccessBodyWithStatus = (data: any, status: number): BaseResponseBody => {
  return {
    status: status,
    data: data
  }
}

export const generateErrorBody = (error: string, message: string = "") => {
  return generateErrorBodyWidthStatus(error, message, -1)
}

export const generateErrorBodyWidthStatus = (
  error: string,
  message: string,
  status: number
): BaseResponseBody => {
  return {
    status: status,
    error: error || "UNKNOWN_ERROR",
    message: message
  }
}

export const sendSuccessReply = (reply: FastifyReply, data: any) => {
  const body: BaseResponseBody = generateSuccessBody(data)
  reply.send(body)
}

export const sendErrorReply = (reply: FastifyReply, error: any, message: string = "") => {
  const body: BaseResponseBody = generateErrorBody(error, message)
  reply.send(body)
}

export class BaseError extends Error {

}
