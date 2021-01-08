const express = require('express')
const next = require('next')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({
  dev
})

const newrelic = require('newrelic')
const parse = require('url').parse



//console.log('process', process.env.DB_HOST)


const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  

  server.get('*', (req, res) => {
    const parsedUrl = parse(req.url, true)
    const {
      pathname,
      query
    } = parsedUrl
    // Transaction Name: (w/o this new relic shows "/*" for all transaction)
    // https://docs.newrelic.com/docs/agents/nodejs-agent/api-guides/guide-using-nodejs-agent-api
    console.log(`path ${pathname}`)
    newrelic.setTransactionName(pathname);

    return handle(req, res)
  });

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})