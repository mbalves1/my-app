import { defineStore } from 'pinia'
import {
  postSnack,
  getSnack,
  deleteSnack
} from "../api/api-snack";

interface Snack {
  type: String;
  name: String;
  sum: Number
  ingredients: [String]
}

export const useSnack = defineStore('snack', {
  state: () => {
    return {
      snack: []
    }
  },
  actions: {
    async createSnack(token: string, payload: Snack) {
      try {
        const response = await postSnack(token, payload)
        const data = await response.json() 
        return data
      } catch (error) {
        console.error(error)
      }
    },
    async fecthSnack(token: string) {
      try {
        const response = await getSnack(token)
        const data = await response.json()
        
        return data
      } catch (error) {
        console.error(error);
      }
    },
    async removeSnack(token: string, id: string) {      
      try {
        const response = await deleteSnack(token, id)
        const data = await response.json() 
        return data
      } catch (error) {
        console.error(error)
      }
    }
  }
})