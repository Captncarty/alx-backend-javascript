const fs = require('fs');

async function countStudents (path) {
  let data;
  try {
    data = await fs.promises.readFile(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
  const students = data.split('\r\n').slice(1)
    .map((student) => student.split(','))
    .map((student) => ({
      firstName: student[0],
      lastName: student[1],
      age: student[2],
      field: student[3]
    }));
  const fields = students.map(student => student.field);
  const unique_fields = new Set(fields);
  const students_by_field = {};
  for (const field of unique_fields) {
    students_by_field[field] = [];
  }
  for (const student of students) {
    students_by_field[student.field].push(student.firstName);
  }
  console.log(students_by_field);
  return students_by_field;
}

module.exports = countStudents;
