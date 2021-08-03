import { SpaceXProvider } from '../../components/SpaceXProvider'
import definitions from './Launch.gql'

const Launch = {
  definitions,

  resolvers: {},

  providers: {
    getItems: async () => (await SpaceXProvider.getLaunches()).map((item, id) => ({
      id,
      name: item['mission_name'],
      date: item['launch_date_utc'],
      description: item['details'],
      thumbnail: item['links']['mission_patch_small'],
      rocketName: item['rocket']['rocket_name'],
      siteName: item['launch_site']['site_name']
    }))
  }
}

export default Launch