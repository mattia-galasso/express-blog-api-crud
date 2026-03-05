function errorHandler(err, req, res, next) {
  console.log("[ERROR]: " + err.message);
  res.status(500).json({
    message: "Internal Server Error!",
    status: false,
  });
}

module.exports = errorHandler;
