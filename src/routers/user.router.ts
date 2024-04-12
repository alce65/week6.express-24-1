import { Router as router } from 'express';
import { UserController } from '../controllers/user.controller.js';
import createDebug from 'debug';
import { UserMemoryRepository } from '../repositories/user.memory.repo.js';

const debug = createDebug('W6E:router:user');
debug('Starting user router');
export const userRouter = router();
const userRepo = new UserMemoryRepository();
const userController = new UserController(userRepo);

userRouter.get('/', userController.getAll.bind(userController));
userRouter.get('/:id', userController.getById.bind(userController));
userRouter.post('/', userController.create.bind(userController));
userRouter.patch('/:id', userController.update.bind(userController));
userRouter.delete('/:id', userController.delete.bind(userController));
