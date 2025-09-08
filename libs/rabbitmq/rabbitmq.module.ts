import {DynamicModule, Module} from '@nestjs/common';
import {ClientsModule, Transport} from '@nestjs/microservices';
import {RabbitmqService} from './rabbitmq.service';

interface RabbitmqModuleOptions {
    name: string;
    queue: string;
    urls: string[]
}

@Module({})
export class RabbitmqModule {
    static register(options: RabbitmqModuleOptions): DynamicModule {
        return {
            module: RabbitmqModule,
            imports: [
                ClientsModule.register([
                    {
                        name: options.name,
                        transport: Transport.RMQ,
                        options: {
                            urls: options.urls,
                            queue: options.queue,
                            queueOptions: {
                                durable: true,
                            },
                        },
                    },
                ]),
            ],
            providers: [RabbitmqService],
            exports: [ClientsModule, RabbitmqService],
        };
    }
}
