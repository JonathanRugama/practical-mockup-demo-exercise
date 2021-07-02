const fs = require('fs');
const path = require('path');
const faker = require('faker');

function createEmployees(limit = 5) {
  const result = [];

  for (let i = 0; i < limit; i++) {
    const name = faker.name.name();
    const email = faker.internet.email();

    result.push({
      id: faker.random.uuid(),
      name,
      email,
    });
  }

  return result;
}

function main() {
  const data = {
    employees: createEmployees(),
  };

  fs.writeFileSync(
    path.resolve(__dirname, 'db.json'),
    JSON.stringify(data, null, 4)
  );
}

main();
