"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RabbitmqModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RabbitmqModule = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const rabbitmq_service_1 = require("./rabbitmq.service");
let RabbitmqModule = RabbitmqModule_1 = class RabbitmqModule {
    static register(options) {
        return {
            module: RabbitmqModule_1,
            imports: [
                microservices_1.ClientsModule.register([
                    {
                        name: options.name,
                        transport: microservices_1.Transport.RMQ,
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
            providers: [rabbitmq_service_1.RabbitmqService],
            exports: [microservices_1.ClientsModule, rabbitmq_service_1.RabbitmqService],
        };
    }
};
exports.RabbitmqModule = RabbitmqModule;
exports.RabbitmqModule = RabbitmqModule = RabbitmqModule_1 = __decorate([
    (0, common_1.Module)({})
], RabbitmqModule);
