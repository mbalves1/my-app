import { URL_BASE } from './url';

export async function login({ email, password }: { email: Number, password: number }): Promise<Response> {
  // const token = localStorage.getItem("token")

  const response =  await fetch(`${URL_BASE}auth/user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, password})
  })

  return response
}