import { taskFirst, getLast, taskNext } from "./0-constants";
test("taskFirst --> returns -> {I prefer const when I can.}", () => {
  expect(taskFirst()).toBe("I prefer const when I can.");
});

test("getLast --> returns -> is okay", () => {
  expect(getLast()).toBe(" is okay");
});

test("taskNext --> returns -> But sometimes let is okay", () => {
  expect(taskNext()).toBe("But sometimes let is okay");
});
