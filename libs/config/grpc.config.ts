import { join } from 'path';
import { Transport, GrpcOptions } from '@nestjs/microservices';

export const grpcConfig: GrpcOptions = {
  transport: Transport.GRPC,
  options: {
    package: process.env.GRPC_PACKAGE_NAME || 'complaints',
    protoPath: join(process.cwd(), process.env.GRPC_PROTO_PATH || 'proto/complaints.proto'),
    url: `${process.env.GRPC_HOST || '0.0.0.0'}:${process.env.GRPC_PORT || 50051}`,
  },
};
