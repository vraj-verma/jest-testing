import { Injectable } from '@nestjs/common';
import { UserData } from './app.controller';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getMessage() {
    return 'Hi There'
  }

  create(userData: UserData) {
    return { id: 2, name: userData.name }
  }

  update(id: string, userData: UserData) {
    return { id: Date.now(), ...userData }
  }
}
