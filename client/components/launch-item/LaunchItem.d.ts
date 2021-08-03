import { FunctionComponent } from 'react'
import BaseProps from '../../types/BaseProps'

export interface LaunchItemProps extends BaseProps {
  title?: string
  description?: string
  cover?: string
  date?: Date
}

export const LaunchItem: FunctionComponent<LaunchItemProps>