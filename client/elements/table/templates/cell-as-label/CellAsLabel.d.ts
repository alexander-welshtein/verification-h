import { FunctionComponent } from 'react'
import BaseProps from '../../../../types/BaseProps'

export interface CellAsLabelProps extends BaseProps {
  label?: string
}

export const CellAsLabel: FunctionComponent<CellAsLabelProps>