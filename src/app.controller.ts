import { Controller, Get, Res, Req, Post, Body, Param, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

export interface UserData {
  name: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getMessage(@Req() req: Request, @Res() res: Response,) {
    const msg = this.appService.getMessage();
    res.status(200).json(msg);
  }

  @Post()
  create(@Body() userData: UserData) {
    const res = this.appService.create(userData)
    return res;
  }

  @Get()
  getData() {
    return ['apple', 'mango', 'orange'];
  }

  @Put(':id')
  update(@Param('id') id: string, userData: UserData) {
    const res = this.appService.update(id, userData);
    return res;
  }
}
