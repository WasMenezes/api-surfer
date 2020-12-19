import { Controller, Get, Post } from '@overnightjs/core';
import { User } from '@src/models/user';
import { Response, Request } from 'express';
import { BaseController } from './index';

@Controller('users')
export class UsersController extends BaseController {
  @Post('')
  public async create(req: Request, res: Response): Promise<void> {
    try {
      const user = new User(req.body);
      const result = await user.save();
      res.status(201).send(result);
    } catch (error) {
      this.sendCreatedUpdateErrorResponse(res, error);
    }
  }
}