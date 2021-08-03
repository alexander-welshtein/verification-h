import bent from 'bent'

const getJSON = bent('json')

export const SpaceXProvider = {
  getLaunches: async () => await getJSON('https://api.spacexdata.com/v3/launches')
}