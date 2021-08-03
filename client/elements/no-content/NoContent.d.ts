import { FunctionComponent } from 'react'
import BaseProps from '../../types/BaseProps'

export interface NoContentProps extends BaseProps {
  label?: string
  icon?: any
}

export const NoContent: FunctionComponent<NoContentProps>