import { defineStore } from 'pinia'
import {
  postSnack,
  getSnack
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
        console.log("data", data);
        
        return data
      } catch (error) {
        console.error(error);
      }
    }
  }
})