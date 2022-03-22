import { CacheModule, Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WalletController } from './wallet/wallet.controller';
import { WalletService } from './wallet/wallet.service';


import type { RedisClientOptions } from 'redis';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 3,
    }),
    CacheModule.registerAsync({
      imports: [],
      useFactory: async () => ({
        ttl: 86000,
        store: redisStore,
        host: 'redis',
        port: '6379'
      }),
      inject: [],
    })
  ],
  controllers: [AppController, WalletController],
  providers: [AppService, WalletService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard
    }],
})
export class AppModule { }
