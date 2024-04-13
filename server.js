import express from "express";
const app = express();
const port = process.env.port || 3000;

// app.get("/", (req, res) => {
//   res.send("server is ready brother");
// });
// get a list of 5 jokes

app.get("/jokes", (req, res) => {
  const jokes = [
    { id: 1, joke1: "hi this is joke 1" },
    { id: 2, joke2: "hi this is joke 2" },
    { id: 3, joke3: "hi this is joke 3" },
    { id: 4, joke4: "hi this is joke 4" },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
