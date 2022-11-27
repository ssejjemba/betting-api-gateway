import { Module } from '@nestjs/common';
import { OddsController } from './odds.controller';

@Module({
  controllers: [OddsController]
})
export class OddsModule {}
