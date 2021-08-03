export const Bench = {
  aggregate: {
    basic: (items, by, as) => {
      as ||= by

      return Object.values(
        items.reduce((result, item, id) => {
          const key = by(item)
          const value = as(item)

          return ({
            ...result,
            [key]: { id, key, value, items: [...result[key]?.['items'] || [], item] }
          })
        }, {})
      )
    }
  },

  search: {
    basic: (value, query) => value.toLowerCase().includes(query.toLowerCase())
  },

  sort: {
    abc: (a, b) => a && b ? a.localeCompare(b) : 1
  },

  intersects: {
    pointToRect: (x, y, rectX, rectY, rectWidth, rectHeight) =>
      x >= rectX
      && x <= rectX + rectWidth
      && y >= rectY
      && y <= rectY + rectHeight,

    pointToElementRectWithIndent: (x, y, rect, indent) =>
      x >= rect.x - indent
      && x <= rect.x + rect.width + indent
      && y >= rect.y - indent
      && y <= rect.y + rect.height + indent,

    pointToElementRect: (x, y, rect) =>
      x >= rect.x
      && x <= rect.x + rect.width
      && y >= rect.y
      && y <= rect.y + rect.height
  }
}