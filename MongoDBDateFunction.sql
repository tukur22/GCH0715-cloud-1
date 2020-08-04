db.students.aggregate([
  {$project: {name: 1, month: {$month: '$BirhtDay'}}},
  {$match: {month: 6}}
]);
