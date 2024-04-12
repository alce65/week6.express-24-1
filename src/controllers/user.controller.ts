import { type Request, type Response } from 'express';
import { type User } from '../entities/user';
import createDebug from 'debug';
import { type UserMemoryRepository } from '../repositories/user.memory.repo.js';

const debug = createDebug('W6E:controller:user');

export class UserController {
  constructor(private readonly repo: UserMemoryRepository) {
    debug('Instantiated user controller');
  }

  getAll(req: Request, res: Response) {
    const result = this.repo.readAll();
    res.json(result);
  }

  getById(req: Request, res: Response) {
    const { id } = req.params;
    const result = this.repo.readById(id);
    res.json(result);
  }

  create(req: Request, res: Response) {
    const data = req.body as User;
    const result = this.repo.create(data);
    res.status(201);
    res.json(result);
  }

  update(req: Request, res: Response) {
    const { id } = req.params;
    const data = req.body as User;
    const result = this.repo.update(id, data);
    res.json(result);
  }

  delete(req: Request, res: Response) {
    const { id } = req.params;
    const result = this.repo.delete(id);
    res.json(result);
  }
}
