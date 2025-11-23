export interface FormData {
  username: string,
  email: string,
  password: string
}


export type authFormProps = {
    mode: 'signup' | 'login'
}