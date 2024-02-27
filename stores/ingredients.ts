import { defineStore } from 'pinia'
import {
  getIngredients,
  postIngredient,
  deleteIngredient
} from "../api/api-ingredient";

interface State {
  ingredient: Ingredient[]
}

interface Ingredient {
  name: String;
  carbvalue: String;
  type: String;
  unity: String;
  quantityvalue: String;
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
        console.log("this", this.ingredient)
        return data
      } catch (error) {
        console.error(error)
      }
    },
    async createIngredient(token: string, payload: Ingredient) {
      try {
        const response = await postIngredient(token, payload)
        const data = await response.json() 
        return data
      } catch (error) {
        console.error(error)
      }
    },
    async deleteIngredient(token: string, id: any) {      
      try {
        const response = await deleteIngredient(token, id)
        const data = await response.json() 
        return data
      } catch (error) {
        console.error(error)
      }
    }
  }
})