"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rabbitmqConfig = exports.postgresConfig = exports.grpcConfig = exports.appConfig = void 0;
const app_config_1 = require("./app.config");
Object.defineProperty(exports, "appConfig", { enumerable: true, get: function () { return app_config_1.appConfig; } });
const grpc_config_1 = require("./grpc.config");
Object.defineProperty(exports, "grpcConfig", { enumerable: true, get: function () { return grpc_config_1.grpcConfig; } });
const postgres_config_1 = __importDefault(require("./postgres.config"));
exports.postgresConfig = postgres_config_1.default;
const rabbitmq_config_1 = __importDefault(require("./rabbitmq.config"));
exports.rabbitmqConfig = rabbitmq_config_1.default;
