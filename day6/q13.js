function processCategories(categories) {
  const count = categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  const sorted = Object.entries(count)
    .sort((a, b) => b[1] - a[1])
    .map(item => item[0]);

  return { count, sorted };
}

const categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

console.log(processCategories(categories));
