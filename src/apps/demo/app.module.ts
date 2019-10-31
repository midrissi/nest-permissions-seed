import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CoreModule } from '../../libs/core/core.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      synchronize: true,
    }),
    CoreModule
  ],
  controllers: []
})
export class AppModule { }
