import { Module } from '@nestjs/common';
import { FeaturesModule } from './features';
import { SharedModule } from './shared.module';

@Module({
  imports: [
    SharedModule,
    FeaturesModule,
  ],
})
export class AppModule {}