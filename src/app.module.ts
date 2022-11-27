import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { OddsModule } from './odds/odds.module';

@Module({
  imports: [AuthModule, OddsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
