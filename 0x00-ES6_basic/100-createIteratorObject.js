export default function createIteratorObject(report) {
  return {
    [Symbol.iterator]: function () {
      const employees = Object.values(report.allEmployees);
      let departmentIndex = 0;
      let employeeIndex = 0;

      return {
        next() {
          while (departmentIndex < employees.length) {
            if (employeeIndex < employees[departmentIndex].length) {
              return {
                value: employees[departmentIndex][employeeIndex++],
                done: false,
              };
            } else {
              departmentIndex++;
              employeeIndex = 0;
              continue;
            }
          }
          return { done: true };
        },
      };
    },
  };
}
