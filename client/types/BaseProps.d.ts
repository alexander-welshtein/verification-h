import { CSSProperties } from 'react'

export default interface BaseProps {
  key?: string | number
  id?: string
  className?: string
  style?: CSSProperties
  children?: any | any[]
}