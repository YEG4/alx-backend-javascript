export default function createIteratorObject(report) {
  return {
    [Symbol.iterator]() {
      const employees = Object.values(report.allEmployees); // eslint-disable-line object-shorthand
      let departmentIndex = 0;
      let employeeIndex = 0;

      return {
        next() {
          while (departmentIndex < employees.length) {
            if (employeeIndex < employees[departmentIndex].length) {
              return {
                /* eslint-disable-next-line no-plusplus */
                value: employees[departmentIndex][employeeIndex++], //

                done: false,
              };
            }
            // eslint-disable-line no-else-return
            departmentIndex++; // eslint-disable-line no-plusplus
            employeeIndex = 0;
            continue; // eslint-disable-line no-continue
          }
          return { done: true };
        },
      };
    },
  };
}
