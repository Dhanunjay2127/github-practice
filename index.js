import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send({ status: "Success" });
});

app.listen(3000, () => {
  console.log("server running in 3000");
});
