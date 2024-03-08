import { URL_BASE } from './url';

interface Snack {
  type: String;
  name: String;
  sum: Number
  ingredients: [String]
}

export async function postSnack(token: string, payload: Snack): Promise<Response> {
  const response =  await fetch(`${URL_BASE}snack`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(payload)
  })

  return response
}

export async function getSnack(token: string): Promise<Response> {
  const response =  await fetch(`${URL_BASE}snack`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
  
  return response
}

export async function deleteSnack(token: string, id: string): Promise<Response> {
  const response =  await fetch(`${URL_BASE}snack/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })

  return response
}