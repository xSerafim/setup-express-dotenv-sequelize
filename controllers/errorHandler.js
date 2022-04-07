module.exports = (err, _req, res, _) => {
  console.log(err);
  return res.status(500).end();
};