"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
console.log(teacher3);
/**
 * Create a class Director that will implement DirectorInterface
 * workFromHome should return the string Working from home
 * getToWork should return the string Getting a coffee break
 * workDirectorTasks should return the string Getting to director tasks
 */
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from Home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
/**
 * Create a class Teacher that will implement TeacherInterface
 * workFromHome should return the string Cannot work from home
 * getCoffeeBreak should return the string Cannot have a break
 * workTeacherTasks should return the string Getting to work
 */
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from Home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
/** export interface EmployeeInterface extends TeacherInterface, DirectorInterface {
  salary: number | string;
}
*/
function createEmployee(salary) {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher;
    }
    else {
        return new Director;
    }
}
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
var create = createEmployee('150');
console.log(create.getCoffeeBreak(), create.workFromHome());
if ('workTeacherTasks' in create) {
    console.log(create.workTeacherTasks());
}
else {
    console.log("This emploee is not a Teacher.");
}
if ("workDirectorTasks" in create) {
    console.log(create.workDirectorTasks());
}
else {
    console.log("Not the Director!");
}
