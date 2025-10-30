import express, { Request, Response } from "express";

const app = express();
const PORT = 7777

app.listen(PORT, () => {
  console.log(`App is running on Port ${PORT}`)
});

app.get('/', (req: Request, res: Response) => {
  res.send("Holla .ts!!!")
})