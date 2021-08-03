import React from 'react'
import { Dashboard } from '../dashboard/Dashboard'
import './Application.sass'

export const Application = () => {
  return (
    <div
      className="vh-application theme-dark"
    >
      <Dashboard/>
    </div>
  )
}