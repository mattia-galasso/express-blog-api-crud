const express = require("express");
const app = express();
const port = 3000;
const appURL = `http://localhost:${port}`;

// Imports
const postsRouter = require("./routers/posts");

// Middleware
app.use(express.static("public"));

// Routers
app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log(`Server listenting on ${appURL}`);
});
