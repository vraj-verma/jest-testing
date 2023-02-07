import { UserService } from './user.service';
import { Controller, Get, Res, Req, Post, Body, Param, Put } from '@nestjs/common';

@Controller()
export class UserController{
    


    constructor(
        private userService: UserService
    ){ }

    @Get()
    async getName(){
        const res = await this.userService.getName();
        return res;
    }
}