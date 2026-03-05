const express = require("express");
const errorHandler = require("./middlewares/errorsHandler");
const notFound = require("./middlewares/notFound");
const app = express();
const port = 3000;
const appURL = `http://localhost:${port}`;

// Imports
const postsRouter = require("./routers/posts");

// Middleware
app.use(express.static("public"));
app.use(express.json());

// Routers
app.use("/posts", postsRouter);

// ERROR HANDLER
app.use(errorHandler);
app.use(notFound);

app.listen(port, () => {
  console.log(`Server listenting on ${appURL}`);
});
