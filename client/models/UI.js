import React from 'react'
import HomeIcon from '../../assets/home.svg'
import SettingsIcon from '../../assets/settings.svg'

export const UIModel = {
  state: {
    items: [
      {
        label: 'Workspace',
        icon: <HomeIcon/>
      },
      {
        label: 'Settings',
        icon: <SettingsIcon/>
      }
    ],
    selector: ({ label }) => label === 'Workspace'
  },
  actions: {
    changeSelector: (_, { selector }) => ({ selector })
  }
}