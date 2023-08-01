import { posix, resolve, join } from "path"

export const getBasePath = () => {
  return process.env.BASE_PATH || "/"
}

export const addBasePathPrefix = (inputPath: string) => {
  const basePath = getBasePath()
  const resultPath = posix.join(basePath, inputPath)
  // console.log("resultPath", resultPath)
  return resultPath
}

export const getNodeEnv = () => {
  return process.env.NODE_ENV || ""
}

export const getAccessSecret = () => {
  return process.env.ACCESS_SECRET || ""
}

// 获取项目根路径
export const getRootPath = () => {
  const rootPath = resolve(__dirname, "..")
  return rootPath
}

export const resolveRoot = (inputPath: string) => {
  return join(getRootPath(), inputPath)
}

export const bindThis = (instance: Object) => {
  return (handler: Function) => handler.bind(instance)
}

export const getFastifyLogger = () => {
  const env: string = getNodeEnv()

  const envToString: any = {
    development: {
      transport: {
        target: "pino-pretty",
        options: {
          translateTime: "HH:MM:ss Z",
          ignore: "pid,hostname"
        }
      }
    },
    production: true,
    test: false
  }

  const logger = envToString[env] ?? true
  return logger
}
