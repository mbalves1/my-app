import { defineStore } from 'pinia'
import {
  login
} from "../api/api-auth";

interface LoginPayload {
  email: string;
  password: string;
}

interface State {
  token: string
}

export const useAuth = defineStore('auth', {
  state: (): State => {
    return {
      token: ''
    }
  },
  actions: {
    async login(payload: LoginPayload) {
      try {
        console.log("payload", payload)
        const response = await login(payload)
        const data = await response.json()
        this.token = data?.token;
        return data
      } catch (error) {
        console.error(error)
      }
    },
  }
})