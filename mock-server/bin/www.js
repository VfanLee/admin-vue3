import http from 'node:http'

import app from '../app.js'

const PORT = process.env.PORT || 3000

const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`Express server is running at: http://localhost:${PORT}`)
})
