import { Test, TestingModule } from '@nestjs/testing';
import { SenderController } from './sender.controller';

describe('Send Controller', () => {
  let controller: SenderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SenderController],
    }).compile();

    controller = module.get<SenderController>(SenderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
