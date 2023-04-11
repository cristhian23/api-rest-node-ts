import {hash, compare} from "bcryptjs"

const encrypt = async (pass:string) => {
  const passwordHast = await hash(pass, 8);
  return passwordHast;
}

const verified = async (pass:string, passHash:string) => {
  const isCorrect = await compare(pass, passHash);
  return isCorrect;
}

export { verified, encrypt}