const express = require('express');

const router = express.Router();
const data = require('../data').templates;

router.get('/', (req, res) => {
  const query = req.query;
  const page = query.page > 0 ? +query.page : 1;
  const search = query.search ? query.search : '';
  const pageSize = 8;

  let searchResult = [
    ...data,
  ];

  if (search) {
    searchResult = searchResult.filter(file => ~file.title.indexOf(search) || ~file.type.name.indexOf(search));
  }

  const result = {
    total: searchResult.length,
    page,
    search,
    list: [
      ...searchResult.slice((page - 1) * pageSize, page * pageSize),
    ],
  };

  res.json(result);
});

module.exports = router;
