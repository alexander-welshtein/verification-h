import React from 'react'
import { useDispatchedState } from '../../helpers/Hooks'
import { Actions } from './Actions'
import { Body } from './components/Body'
import { Header } from './components/Header'
import './Table.sass'

/**
 * @param {import('./Table.d.ts').TableProps} props
 * @returns {*}
 * @constructor
 */
export const Table = props => {
  const [state, dispatch] = useDispatchedState({
    items: [],
    columns: []
  }, {
    before: [
      [() => [props.items], ({ apply }) => apply(Actions.SetItems, { items: props.items })],
      [() => [props.columns], ({ apply }) => apply(Actions.SetColumns, { columns: props.columns })]
    ]
  })

  return (
    <div
      className="vh-table"
    >
      <Header
        columns={state.columns}
        items={state.items}
      />
      <Body
        columns={state.columns}
        items={state.items}
        noItemsLabel={props.noItemsLabel}
      />
    </div>
  )
}