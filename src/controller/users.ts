import { Controller, Get, Post } from '@overnightjs/core';
import { User } from '@src/models/user';
import { Response, Request } from 'express';

@Controller('users')
export class UsersController {
  @Post('')
  public async create(req: Request, res: Response): Promise<void> {
    const user = new User(req.body);
    const result = await user.save();
    res.status(201).send(result);
  }
}