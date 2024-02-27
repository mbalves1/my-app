import { defineStore } from 'pinia'
import {
  getIngredients
} from "../api/api-ingredient";

interface State {
  ingredient: string[]
}

export const useIngredient = defineStore('ingredients', {
  state: (): State => {
    return {
      ingredient: []
    }
  },
  actions: {
    async getIngredients(token: string) {
      try {
        const response = await getIngredients(token)
        const data = await response.json() 
        this.ingredient = data
        return data
      } catch (error) {
        console.error(error)
      }
    },
  }
})