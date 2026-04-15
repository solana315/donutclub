import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const port = process.env.PORT || 4000
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.json())

app.get('/api/status', (req, res) => {
  res.json({ status: 'ok', message: 'API Node.js ativa' })
})

app.get('/api/donuts', (req, res) => {
  res.json({
    donuts: [
      { id: 1, name: 'Classic Glazed', price: 1.8 },
      { id: 2, name: 'Matcha Dream', price: 2.4 },
      { id: 3, name: 'Salted Caramel', price: 2.2 },
    ],
  })
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')))

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
  })
}

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
})
