import {Inject, Injectable} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';

@Injectable()
export class RabbitmqService {
    constructor(
        @Inject('RABBITMQ_CLIENT') private readonly client: ClientProxy,
    ) {
    }

    async send(pattern: string, data: any) {
        return this.client.send(pattern, data).toPromise();
    }

    async emit(pattern: string, data: any) {
        return this.client.emit(pattern, data).toPromise();
    }
}
