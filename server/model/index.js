import { makeExecutableSchema } from '@graphql-tools/schema'
import Launch from './launch/Launch'
import Root from './root/Root'

const schema = makeExecutableSchema({
  typeDefs: [Root, Launch].map(each => each['definitions']),
  resolvers: [Root, Launch].map(each => each['resolvers'])
})

export default schema