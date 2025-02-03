import express from "express";

const app = express();

function isMajor() {
  return age > 18;
}

function Major() {
  return age > 18;
}
app.listen(3000, () => {
  console.log("server running in 3000");
});
