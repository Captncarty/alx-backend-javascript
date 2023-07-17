export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
};

const studentOne: Student = {
    firstName: "Kelvin",
    lastName: "Maccarthy",
    age: 26,
    location: "Nigeria"
};

const studentTwo: Student = {
    firstName: "Kelly",
    lastName: "Oteri",
    age: 45,
    location: "Kenya"
};

const studentsList: Array<Student> = [studentOne, studentTwo];

/**
 * Displays information about students in a table.
 * @param students The list of students to display.
 */

export const displayStudent = (students: Array<Student>) => {
    let tableHTML = `
      <table>
        <tr>
          <th>First Name</th>
          <th>Location</th>
        </tr>
    `;
  
    for (const student of students) {
      tableHTML += `
        <tr>
          <td>${student.firstName}</td>
          <td>${student.location}</td>
        </tr>
      `;
    }
  
    tableHTML += '</table>';
  
    console.log(tableHTML);
  };
  
  displayStudent(studentsList);
  