import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
		}),
		UsersModule,
		TypeOrmModule.forRootAsync({
			inject: [ConfigService],
			useFactory: async (configService: ConfigService) => {
				return {
					type: 'postgres',
					host: 'localhost',
					port: 5432,
					username: configService.get('DB_USERNAME'),
					password: configService.get('DB_PASSWORD'),
					database: configService.get('DB_DATABASE'),
					synchronize: true, // * if production {false}
					logging: true,
				};
			},
		}),
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
