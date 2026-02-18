import { createContext } from 'react'

export type CheckInContextType = unknown
export const CheckInContext = createContext<CheckInContextType | undefined>(undefined)

export default CheckInContext
