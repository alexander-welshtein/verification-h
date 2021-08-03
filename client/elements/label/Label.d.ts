import { FunctionComponent } from 'react'
import BaseProps from '../../types/BaseProps'

export interface LabelProps extends BaseProps {
  value?: string
  primary?: boolean
  secondary?: boolean
  accent?: boolean
}

export const Label: FunctionComponent<LabelProps>