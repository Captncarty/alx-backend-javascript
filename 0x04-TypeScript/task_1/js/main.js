"use strict";
/**
 * Building a Teacher interface
 * modifiable attributes
 * defined attributes
 * optional attributes
 * non-specific attributes
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.students = exports.printTeacher = void 0;
;
var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};
console.log(teacher3);
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
var printTeacher = function (firstName, lastName) {
    var firstLetter = firstName.charAt(0).toUpperCase();
    var formattedName = "".concat(firstLetter, ". ").concat(lastName);
    return formattedName;
};
exports.printTeacher = printTeacher;
(0, exports.printTeacher)("Mathew", "Maccarthy");
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently Working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
exports.students = new StudentClass("Mike", "Adenuga");
console.log(exports.students);
console.log(exports.students.displayName());
console.log(exports.students.workOnHomework());
