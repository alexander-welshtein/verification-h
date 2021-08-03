export const Actions = {
  Open: () => ({ opened: true }),
  Close: () => ({ opened: false }),
  SetItems: ({ query, search, sort }, { items }) => ({ items, displayedItems: apply(items, query, search, sort) }),
  SetQuery: ({ items, search, sort }, { query }) => ({
    query,
    displayedItems: apply(items, query, search, sort),
    opened: true
  }),
  SetQueryAndConfirm: ({ items, search, sort }, { query }) => ({
    query,
    confirmedQuery: query,
    displayedItems: apply(items, query, search, sort),
    opened: false
  }),
  FillQuery: ({ items, displayedItems, search, sort, toValue }) => {
    const value = displayedItems[0] && toValue(displayedItems[0])

    return ({
      ...value && {
        query: value,
        confirmedQuery: value,
        displayedItems: apply(items, value, search, sort)
      },
      opened: false
    })
  },
  ClearQuery: ({ items, opened }) => ({ query: '', confirmedQuery: '', displayedItems: items, opened: opened || true })
}

const applySearch = (items, query, search) => query.length ? items.filter(item => search(item, query)) : items
const applySort = (items, sort) => items.sort(sort)
const apply = (items, query, search, sort) => items |> (items => applySearch(items, query, search)) |> (items => applySort(items, sort))
