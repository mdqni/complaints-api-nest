import { Inject, Injectable, OnModuleDestroy } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService implements OnModuleDestroy {
    constructor(@Inject('REDIS_CLIENT') private readonly client: Redis) {}

    async setJSON<T>(key: string, value: T, ttl?: number): Promise<void> {
        const data = JSON.stringify(value);
        if (ttl) {
            await this.client.set(key, data, 'EX', ttl);
        } else {
            await this.client.set(key, data);
        }
    }

    async getJSON<T>(key: string): Promise<T | null> {
        const str = await this.client.get(key);
        return str ? (JSON.parse(str) as T) : null;
    }

    async del(...keys: string[]) {
        if (keys.length > 0) {
            await this.client.del(...keys);
        }
    }

    async keys(pattern: string): Promise<string[]> {
        return this.client.keys(pattern);
    }

    onModuleDestroy() {
        this.client.disconnect();
    }
}
