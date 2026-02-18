import { useContext } from 'react'
import CheckInContext, { type CheckInContextType } from './CheckInContext'

export function useCheckInContext(): CheckInContextType {
  const context = useContext(CheckInContext)
  if (!context) {
    throw new Error('useCheckInContext must be used within a CheckInProvider')
  }
  return context
}

export default useCheckInContext
