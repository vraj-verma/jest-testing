import { Test, TestingModule } from '@nestjs/testing';
import { AppController, UserData } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;


  const mockAppService = {
    create: jest.fn(x => {
      return {
        id: 6,
        ...x
      }
    }),
    getData: jest.fn((x) => {
      return ['a', 'b', 'c']
    }),

    update: jest.fn((id, data) => {
      return {
        id: 2,
        ...data
      }
    }),
  }

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    })
      .overrideProvider(AppService)
      .useValue(mockAppService)
      .compile();

    appController = app.get<AppController>(AppController);

  });

  it('should have controller', () => {
    expect(appController).toBeDefined()
  });

  it('Should create a user', () => {
    let user = { name: "Sumit" }
    expect(appController.create(user)).toEqual({
      id: expect.any(Number),
      name: expect.any(String)
    });

    expect(mockAppService.create).toHaveBeenCalledWith({ name: 'Sumit' });
  });

  it('Should update the value', () => {
    let userData = { name: 'Nest' }
    expect(appController.update('8', userData)).toEqual({
      id: expect.any(Number),
      name: expect.any(String)
    });

    expect(mockAppService.update).toHaveBeenCalledWith('8', userData);
  });

});

