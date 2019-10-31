import { Module } from '@nestjs/common';

import { controllers } from './controllers/index';
import { services } from './services/index';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from './entities/index';

@Module({
  imports: [
    TypeOrmModule.forFeature([...entities])
  ],
  controllers: [
    ...controllers
  ],
  providers: [
    ...services
  ],
})
export class CoreModule {
}
