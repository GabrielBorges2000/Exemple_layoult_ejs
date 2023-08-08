import app from "./src/app.js";

const port = 3000

console.log('[ Everything is OK! ]')
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
});
