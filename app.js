const express = require('express');
const app = express();

let employees = [
  { id: 1, name: 'Gulnar', position: 'Senior Developer' },
  { id: 2, name: 'Rehime', position: 'Junior Developer' },
];

app.get('/', function (req, res) {
  res.json(employees);
});


app.listen(3000, function () {
  console.log('Server port 3000-da dinləyir!');
});
