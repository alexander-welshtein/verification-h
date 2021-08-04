export const MasterProvider = {
  sendGraphQLRequest: async query => (await (await fetch('/bridge', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query })
  })).json())['data']
}