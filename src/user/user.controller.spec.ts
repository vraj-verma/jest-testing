import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';

let MockUserService = {

}

describe('user Controller test', () => {
    let userController: UserController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [UserController],
            providers: [UserService],
        })
            .overrideProvider(UserService)
            .useValue(MockUserService)
            .compile();

        userController = app.get<UserController>(UserController);
    });


    it('Should have user controller',()=>{
        expect(userController).toBeDefined();
    })
});