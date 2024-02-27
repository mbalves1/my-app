import { URL_BASE } from './url';

export async function login({ email, password }: { email: string, password: string }): Promise<Response> {
  const response =  await fetch(`${URL_BASE}auth/user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, password})
  })

  return response
}