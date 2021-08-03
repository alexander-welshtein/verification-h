import { MasterProvider } from './Master'

export const LaunchProvider = {
  getItems: async () => (await MasterProvider.sendGraphQLRequest('{ launches { id, name, date, description, thumbnail, rocketName, siteName } }'))['launches']
}