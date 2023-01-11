import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ODDS_SERVICE_NAME, ODDS_PACKAGE_NAME } from './odds.pb';
import { OddsController } from './odds.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: ODDS_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          url: '0.0.0.0:50052',
          package: ODDS_PACKAGE_NAME,
          protoPath: 'node_modules/betting-proto/proto/odds.proto',
        },
      },
    ]),
  ],
  controllers: [OddsController],
})
export class OddsModule {}
