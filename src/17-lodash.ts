import _ from 'lodash';

const data = [
  {
    username: 'john',
    age: 24,
    role: 'admin',
  },
  {
    username: 'john',
    age: 24,
    role: 'admin',
  },
  {
    username: 'mike',
    age: 50,
    role: 'owner',
  },
];

console.log(_.groupBy(data, (item) => item.role));
