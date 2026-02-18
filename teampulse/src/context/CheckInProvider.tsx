import React from 'react'
import { useCheckIns } from '../reducers/checkInReducer'
import CheckInContext from './CheckInContext'

export interface CheckInProviderProps {
  children: React.ReactNode
}

export const CheckInProvider: React.FC<CheckInProviderProps> = ({ children }) => {
  const value = useCheckIns()
  return <CheckInContext.Provider value={value}>
    
            {children}
  
        </CheckInContext.Provider>
}

export default CheckInProvider
