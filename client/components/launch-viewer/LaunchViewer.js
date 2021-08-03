import React, { useEffect, useState } from 'react'
import TableIcon from '../../../assets/layout.svg'
import ListIcon from '../../../assets/list.svg'
import { ListItem } from '../../elements/list-item/ListItem'
import { List } from '../../elements/list/List'
import { Selector } from '../../elements/selector/Selector'
import { SequenceToggle } from '../../elements/sequence-toggle/SequenceToggle'
import { Spacer } from '../../elements/spacer/Spacer'
import { Table } from '../../elements/table/Table'
import { TableTemplates } from '../../elements/table/templates'
import { Bench } from '../../helpers/Bench'
import { useModel, usePatchedState } from '../../helpers/Hooks'
import { LaunchModel } from '../../models/Launch'
import { ViewingMode } from '../../values/ViewingMode'
import { LaunchItem } from '../launch-item/LaunchItem'
import './LaunchViewer.sass'

/**
 * @param {import('./LaunchViewer.d.ts').LaunchViewerProps} props
 * @returns {*}
 * @constructor
 */
export const LaunchViewer = props => {
  const [select, dispatch] = useModel(LaunchModel)

  const [filter, patchFilter] = usePatchedState({
    rocketName: '',
    siteName: ''
  })

  const [mode, setMode] = useState(ViewingMode.Table)

  const launches = select(({ launches }) => launches)

  const filterByRocketName = launches => filter.rocketName.length ? launches.filter(launch => launch.rocketName === filter.rocketName) : launches
  const filterByLaunchSite = launches => filter.siteName.length ? launches.filter(launch => launch.siteName === filter.siteName) : launches
  const displayedLaunches = launches |> filterByRocketName |> filterByLaunchSite

  useEffect(() => dispatch('loadLaunches'), [])

  return (
    <div
      className="vh-launch-viewer"
    >
      <div
        className="toolbar"
      >
        <Selector
          label={'Rocket'}
          labelWidth={5}
          items={Bench.aggregate.basic(launches, item => item['rocketName'])}
          search={(item, query) => Bench.search.basic(item['key'], query)}
          sort={({ key: a }, { key: b }) => Bench.sort.abc(a, b)}
          toValue={item => item.value}
          toItem={({ value }) => (
            <ListItem
              value={value}
            />
          )}
          onChange={rocketName => patchFilter({ rocketName })}
        />
        <Selector
          label={'Launch site'}
          labelWidth={7}
          items={Bench.aggregate.basic(launches, item => item['siteName'])}
          search={(item, query) => Bench.search.basic(item['key'], query)}
          sort={({ value: a }, { value: b }) => Bench.sort.abc(a, b)}
          toValue={item => item.value}
          toItem={({ value }) => (
            <ListItem
              value={value}
            />
          )}
          onChange={siteName => patchFilter({ siteName })}
        />
        <Spacer/>
        <SequenceToggle
          items={[
            { mode: ViewingMode.List, value: 'List', icon: <ListIcon/> },
            { mode: ViewingMode.Table, value: 'Table', icon: <TableIcon/> }
          ]}
          value={({ mode: it }) => it === mode}
          onChange={({ mode }) => setMode(mode)}
          reversed
        />
      </div>
      <div
        className="body"
      >
        {mode === ViewingMode.List && (
          <List
            items={displayedLaunches}
            toItem={({ id, name, description, date, thumbnail }) => (
              <LaunchItem
                key={id}
                title={name}
                description={description}
                date={date}
                cover={thumbnail}
              />
            )}
            noItemsLabel="No Launches Found"
          />
        )}
        {mode === ViewingMode.Table && (
          <Table
            items={displayedLaunches}
            columns={[
              {
                header: () => TableTemplates.header.as.label({ label: 'Mission' }),
                cell: item => TableTemplates.cell.as.thumbnail({ label: item['name'], image: item['thumbnail'] })
              },
              {
                header: () => TableTemplates.header.as.label({ label: 'Description' }),
                cell: item => TableTemplates.cell.as.label({ label: item['description'] || 'No description' })
              },
              {
                header: () => TableTemplates.header.as.label({ label: 'Rocket' }),
                cell: item => TableTemplates.cell.as.label({ label: item['rocketName'] }),
                width: 24
              },
              {
                header: () => TableTemplates.header.as.label({ label: 'Launch site' }),
                cell: item => TableTemplates.cell.as.label({ label: item['siteName'] }),
                width: 32
              },
              {
                header: () => TableTemplates.header.as.label({ label: 'Date' }),
                cell: item => TableTemplates.cell.as.label({ label: item['date'].toLocaleDateString() }),
                width: 16
              }
            ]}
            noItemsLabel="No Launches Found"
          />
        )}
      </div>
    </div>
  )
}