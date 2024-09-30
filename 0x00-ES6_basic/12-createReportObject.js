export default function createReportObject(employeesList) {
  let count = 0;
  let obj = {};
  //   console.log(employeesList);
  //   for (const key of Object.keys(employeesList)) {
  //     console.log(key);
  //     console.log(...employeesList[key]);
  //   }
  return {
    allEmployees: employeesList,
    getNumberOfDepartments(employeesList) {
      for (const key of Object.keys(employeesList)) {
        count++;
      }
      return count;
    },
  };
}
