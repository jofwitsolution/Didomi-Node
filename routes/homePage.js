const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  //   res.write("This is Ex-Nihilo backend");
  res.send('This is Didomi backend');
});

module.exports = router;
