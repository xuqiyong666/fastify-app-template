
import app from "./application"

// Run the server!
async function start() {
  const port = Number(process.env.PORT) || 3001
  try {
    await app.listen({ port, host: "0.0.0.0" })
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()

