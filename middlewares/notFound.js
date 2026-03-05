function notFound(req, res, next) {
  res.status(404).json({
    error: "Page Not Found!",
    message: "Pagina Non Trovata!",
    status: false,
  });
}

module.exports = notFound;
