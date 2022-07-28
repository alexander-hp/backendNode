exports.succes = function (req, res, msg, status, details) {
  res.status(status || 200).send({
    error: '',
    body: msg,
  });
};

exports.error = function (req, res, msg, status, details) {
  console.error('[Response error]: ', details);
  res.status(status || 500).send({
    error: msg,
    body: '',
  });
};
