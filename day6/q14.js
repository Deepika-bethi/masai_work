function evaluateEmployees(employees) {
  const filtered = employees.filter(emp => emp.tasksCompleted > 5);

  const mapped = filtered.map(emp => {
    let performance;
    if (emp.rating > 4.5) performance = "Excellent";
    else if (emp.rating >= 3) performance = "Good";
    else performance = "Needs Improvement";

    return { name: emp.name, performance };
  });

  const order = { Excellent: 1, Good: 2, "Needs Improvement": 3 };

  const sorted = mapped.sort((a, b) => order[a.performance] - order[b.performance]);

  return sorted;
}

const employees = [
  { name: "Alice", tasksCompleted: 8, rating: 4.7 },
  { name: "Bob", tasksCompleted: 4, rating: 4.0 },
  { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
  { name: "David", tasksCompleted: 10, rating: 4.9 },
  { name: "Eve", tasksCompleted: 7, rating: 2.8 }
];

console.log(evaluateEmployees(employees));
