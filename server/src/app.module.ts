import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';
import { CategoryModule } from './category/category.module';
import { ProposalModule } from './proposal/proposal.module';
import { ReviewModule } from './review/review.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
      envFilePath: '.env', 
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule], 
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URL'), 
      }),
      inject: [ConfigService], 
    }),
    UserModule,
    OrderModule,
    CategoryModule,
    ProposalModule,
    ReviewModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
