import {Injectable, Inject} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {lastValueFrom} from 'rxjs';


@Injectable()
export class RabbitmqService {
    constructor(
        @Inject('RABBITMQ_CLIENT') private readonly client: ClientProxy,
    ) {
        console.log('RabbitMQ client injected?', !!client);
    }

    async send<T = any, R = any>(pattern: string, data: T): Promise<R> {
        return await lastValueFrom(this.client.send<R, T>(pattern, data));
    }

    async emit<T = any>(pattern: string, data: T): Promise<void> {
        await lastValueFrom(this.client.emit<T>(pattern, data));
    }
}
