import { LaunchProvider } from '../providers/Launch'

export const LaunchModel = {
  state: {
    launches: []
  },
  actions: {
    loadLaunches: async () => ({
      launches: (await LaunchProvider.getItems()).map(each => ({
        ...each,
        date: new Date(each['date'])
      }))
    })
  }
}