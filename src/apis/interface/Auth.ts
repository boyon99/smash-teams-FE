import { TeamName } from './../../components/HistoryCard/style'
import { CgPassword } from 'react-icons/cg'

export interface LoginResponseData {
  data: {
    id: number
    name: string
    email: string
    pnhoneNumber: string
    profileImage: string
    startWork: string
    teamName: string
    role: string
  }
}

export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest extends LoginRequest {
  name: string
  phoneNumber: string
  startWork: string
  teamName: string
  passwordConfirm?: string
}

export interface UserPayload {
  id: number
  email: string
  username: string
}

export interface User {
  name: string
  email: string
  password: string
  phoneNumber: string
  startWork: string
  profileImage: string
}

export interface EmailCheckRequest {
  email: string
}

export interface RegisterEnroll {
  name: string
  email: string
  password: string
  phoneNumber: string
  startWork: string
  teamName: string
}
