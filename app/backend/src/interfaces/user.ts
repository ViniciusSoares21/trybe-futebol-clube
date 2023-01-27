export interface IUser {
  id:number,
  username:string,
  email:string,
  role:string,
  password:string,
}

export interface Tpayload {
  data: { email:string },
  password: string,
  iat: number,
  exp: number
}
