"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.grpcConfig = void 0;
const path_1 = require("path");
const microservices_1 = require("@nestjs/microservices");
exports.grpcConfig = {
    transport: microservices_1.Transport.GRPC,
    options: {
        package: process.env.GRPC_PACKAGE_NAME || 'complaints',
        protoPath: (0, path_1.join)(process.cwd(), process.env.GRPC_PROTO_PATH || 'proto/complaints.proto'),
        url: `${process.env.GRPC_HOST || '0.0.0.0'}:${process.env.GRPC_PORT || 50051}`,
    },
};
