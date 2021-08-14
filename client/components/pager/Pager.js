import React from 'react'
import { useModel } from '../../helpers/Hooks'
import { UIModel } from '../../models/UI'
import './Pager.sass'

/**
 * @param {import('./Pager.d.ts').PagerProps} props
 * @constructor
 */
export const Pager = props => {
  const [{ items, selector }] = useModel(UIModel)

  return (
    <div
      className="vh-pager"
    >
      <div
        className="content"
        style={{
          left: (items.findIndex(selector) * -100) + '%'
        }}
      >
        {props.children}
      </div>
    </div>
  )
}