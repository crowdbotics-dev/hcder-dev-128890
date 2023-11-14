import axios from "axios"
import {
  CONNECTOR_JUCONNECT_USERNAME,
  CONNECTOR_JUCONNECT_PASSWORD
} from "react-native-dotenv"
const juconnect = axios.create({
  baseURL: "https://crowdbotics.com",
  auth: {
    username: CONNECTOR_JUCONNECT_USERNAME,
    password: CONNECTOR_JUCONNECT_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
