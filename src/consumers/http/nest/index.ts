import { NestFactory } from '@nestjs/core';
import { BettingConsumer } from 'src/models/Infrastructure';

export class NestConsumer implements BettingConsumer {
  constructor(public appModule: any) {}
  public async start() {
    const app = await NestFactory.create(this.appModule);
    await app.listen(3000);
  }
}
