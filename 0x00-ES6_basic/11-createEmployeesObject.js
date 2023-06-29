export default function createEmployeesObject(departmentName, employees) {
  const format = {
    [`${departmentName}`]: employees,
  };
  return format;
}
