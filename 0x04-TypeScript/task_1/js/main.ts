/**
 * Building a Teacher interface
 * modifiable attributes
 * defined attributes
 * optional attributes
 * non-specific attributes
 */

export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location?: string;
  [key: string]: any;
};

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);


/**
 * Extending the Teacher interface
 * additional defined attribute
 */

export interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);


/**
 * A function that prints Teacher
 * accepts two arguments
 * returns the first letter of the firstName
 * and the full lastName
 */

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  const firstLetter = firstName.charAt(0).toUpperCase();
  const formattedName = `${firstLetter}. ${lastName}`;
  return formattedName;
}

printTeacher("Mathew", "Maccarthy");


/**
 * Write a Class StudentClass
 * accepts two arguments via constructor
 * has a two methods
 * workOnHomework: returns the string currently working on
 * displayName: returns the firstname of the student
 * describe constructor via interface
 * class should be described via interface
 */

export interface ClassStudent {
  firstName: string;
  lastName: string;
  workOnHomework: Function;
  displayName: Function;
}

class StudentClass {
  firstName: string;
  lastName: string;
  
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework() {
    return "Currently Working";
  }

  displayName() {
    return this.firstName;
  }
}

export const students: ClassStudent = new StudentClass("Mike", "Adenuga");
console.log(students);
console.log(students.displayName())
console.log(students.workOnHomework());



