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
    static register({name, queue, urls}: RabbitmqModuleOptions): DynamicModule {
        return {
            module: RabbitmqModule,
            imports: [
                ClientsModule.register([
                    {
                        name,
                        transport: Transport.RMQ,
                        options: {
                            urls,
                            queue,
                            queueOptions: {durable: true},
                        },
                    },
                ]),
            ],
            providers: [RabbitmqService],
            exports: [RabbitmqService],
        };
    }
}
