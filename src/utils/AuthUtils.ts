// @ts-ignore
import sha256 from "crypto-js/sha256"

export const getSecret = (): string => {
  return process.env.SECRET || "default_secret_ef5bb62514e94a5122f009c4ddd04346cc57a278d733aa1f68bac7060de927df"
}

export const encrypt = (password: string): string => {
  const headSalt = "UserPasswordBasicSalt"
  const tailSalt = getSecret()
  const saltedPassword = `${headSalt}${password}${tailSalt}`
  const encryptedPassword = sha256(saltedPassword).toString()

  return encryptedPassword
}




