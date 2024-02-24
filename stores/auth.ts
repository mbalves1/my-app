import { defineStore } from 'pinia'
import {
  login
} from "../api/api-auth";

interface LoginPayload {
  email: string;
  password: string;
}

export const useAuth = defineStore('auth', {
  state: () => ({
    user: []
  }),
  actions: {
    async login(payload: LoginPayload) {
      try {
        const response = await login(payload)
        const data = await response.json()
        console.log("data", data)
        return data
      } catch (error) {
        console.error(error)
      }
    },
  }
})