import { URL_BASE } from './url';

export async function getIngredients(token: string): Promise<Response> {
  const response =  await fetch(`${URL_BASE}ingredients`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })

  return response
}