import express from "express";

const app = express();
const PORT = 7777

app.listen(PORT, () => {
  console.log(`App is running on Port ${PORT}`)
});
