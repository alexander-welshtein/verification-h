import { FunctionComponent } from 'react'
import BaseProps from '../../../../types/BaseProps'

export interface HeaderAsLabelProps extends BaseProps {
  label?: string
}

export const HeaderAsLabel: FunctionComponent<HeaderAsLabelProps>