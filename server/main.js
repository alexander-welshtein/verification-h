import Router from '@koa/router'
import Application from 'koa'
import graphqlHTTP from 'koa-graphql'
import serve from 'koa-static'
import schema from './model'

const application = new Application()

const router = new Router()

router.post('/bridge', graphqlHTTP({
  schema,
  graphiql: true
}))

;[
  serve('client/dist'),
  router.routes()
].forEach(application.use.bind(application))

application.listen(3000)