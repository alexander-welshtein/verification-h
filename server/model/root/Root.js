import Launch from '../launch/Launch'
import definitions from './Root.gql'

const Root = {
  definitions,

  resolvers: {
    Query: {
      launches: async () => await Launch.providers.getItems()
    }
  }
}

export default Root