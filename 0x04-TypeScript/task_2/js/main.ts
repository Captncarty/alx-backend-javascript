export interface Teachers {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location?: string;
  [key: string]: any;
};


const teacher3: Teachers = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

/** (5) Advanced types Part 1 */
/**
 * Create the DirectorInterface interface with the 3 expected methods:
 * workFromHome() returning a string
 * getCoffeeBreak() returning a string
 * workDirectorTasks() returning a string
 */

export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks?(): string;
}

/**
 * Create the TeacherInterface interface with the 3 expected methods:
 * workFromHome() returning a string
 * getCoffeeBreak() returning a string
 * workTeacherTasks() returning a string
 */

export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks?(): string;
}

/**
 * Create a class Director that will implement DirectorInterface
 * workFromHome should return the string Working from home
 * getToWork should return the string Getting a coffee break
 * workDirectorTasks should return the string Getting to director tasks
 */

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from Home";
  }
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

/**
 * Create a class Teacher that will implement TeacherInterface
 * workFromHome should return the string Cannot work from home
 * getCoffeeBreak should return the string Cannot have a break
 * workTeacherTasks should return the string Getting to work
 */

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from Home";
  }
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

/** export interface EmployeeInterface extends TeacherInterface, DirectorInterface {
  salary: number | string;
}
*/

function createEmployee(salary: number | string) {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher;
  }
  else 
  {
    return new Director;
  }
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));


/**(6.) Creating functions specific to employees*/
/**
 * Write a function isDirector:
 * it accepts employee as an argument
 * it will be used as a type predicate and if the employee is a director
 * instead of the below pattern !
 */

type Employee = Director | Teacher;

export function isDirector(employee: Employee): employee is Teacher {
  return (employee as Teacher).workTeacherTasks !== undefined;
}

/**
 * Write a function executeWork:
 * it accepts employee as an argument
 * if the employee is a Director, it will call workDirectorTasks
 * if the employee is a Teacher, it will call workTeacherTasks
 */

export function executeWork(employee: Employee) {
  if (isDirector(employee)) {
    employee.workTeacherTasks();
  }
  else
  {
    employee.workDirectorTasks();
  }
}



/**Alternate fix (6.)  */
const create = createEmployee('150');
console.log(create.getCoffeeBreak(), create.workFromHome());

if ('workTeacherTasks' in create) {
  console.log(create.workTeacherTasks());
}
else 
{
  console.log("This emploee is not a Teacher.");
}

if ("workDirectorTasks" in create) {
  console.log(create.workDirectorTasks());
}
else 
{
  console.log("Not the Director!");
}



