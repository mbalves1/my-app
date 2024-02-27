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

interface Ingredient {
  name: String;
  carbvalue: String;
  type: String;
  unity: String;
  quantityvalue: String;
}

export async function postIngredient(token: string, paylaod: Ingredient): Promise<Response> {
  const response =  await fetch(`${URL_BASE}ingredients/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(paylaod)
  })

  return response
}

export async function deleteIngredient(token: string, id: string): Promise<Response> {
  const response =  await fetch(`${URL_BASE}ingredients/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })

  return response
}