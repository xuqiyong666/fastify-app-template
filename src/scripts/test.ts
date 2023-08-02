import fastifyApp from "../application"

import { encrypt } from "../utils/AuthUtils"

const main = async () => {
  await fastifyApp.ready()

  await test1()
}

const test1 = async () => {
  const encryptedPassword = encrypt("admin@2020")

  console.log("encryptedPassword", encryptedPassword)
}

// 执行主方法
main()
