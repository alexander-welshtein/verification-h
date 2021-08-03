export const Actions = {
  SetItems: (_, { items }) => ({ items }),
  Select: ({ items }, { predicate }) => ({
    selection: items.find(predicate),
    selectionIndex: items.findIndex(predicate)
  }),
  Toggle: ({ selectionIndex, items }) => ({
    selection: items[selectionIndex + 1] || items[0],
    selectionIndex: items[selectionIndex + 1] ? selectionIndex + 1 : 0
  })
}