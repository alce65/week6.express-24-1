import createDebug from 'debug';
import {
  type UserCreateDto,
  type UserUpdateDto,
  type User,
} from '../entities/user';
const debug = createDebug('W6E:repository:user');

// eslint-disable-next-line @typescript-eslint/naming-convention
const USERS: User[] = [
  { id: '1', name: 'Alice', age: 30 },
  { id: '2', name: 'Bob', age: 35 },
  { id: '3', name: 'Charlie', age: 40 },
];

export class UserMemoryRepository {
  users = USERS;
  constructor() {
    debug('Instantiated user memory repository');
  }

  readAll() {
    return this.users;
  }

  readById(id: string) {
    return this.users.find((user) => user.id === id);
  }

  create(data: UserCreateDto) {
    const newUser: User = {
      id: (this.users.length + 1).toString(),
      name: data.name,
      age: data.age,
    };
    this.users = [...this.users, newUser];
    return newUser;
  }

  update(id: string, data: UserUpdateDto) {
    console.log(this.users);
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new Error(`User ${id} not found`);
    }

    const newUser = { ...user, ...data };
    this.users = this.users.map((user) => (user.id === id ? newUser : user));

    return newUser;
  }

  delete(id: string) {
    const user = this.users.find((user) => user.id === id);
    this.users = this.users.filter((user) => user.id !== id);
    return user;
  }
}
