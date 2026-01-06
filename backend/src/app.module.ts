import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { GanzaModule } from './ganza/ganza.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule, GanzaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
