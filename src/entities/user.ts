import e from 'express';

export type User = {
  id: string;
  name: string;
  age: number;
};

export type UserCreateDto = {
  name: string;
  age: number;
};

export type UserUpdateDto = {
  name?: string;
  age?: number;
};
