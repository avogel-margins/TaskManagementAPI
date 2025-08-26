import { Injectable } from '@nestjs/common';
import { NodeConfig, ProjectConfig } from 'src/common/config/env.validation';

import { Environment } from 'src/common/constants/environment.enum';
import { ExceptionName } from 'src/common/exceptions/custom.exception.enum';
import { ICustomExceptionInfo } from 'src/common/exceptions/exception-info.interface';
import { exceptionMetadata } from 'src/common/exceptions/metadata.exception';

import { IHealthCheckService } from 'src/common/interfaces/health-check.interface';
import { HealthCheckResponse } from 'src/common/responses/health-check.response';

@Injectable()
export class AppService implements IHealthCheckService {
  constructor(
    private readonly project: ProjectConfig,
    private readonly node: NodeConfig,
  ) {}

  getHello(): string {
    return 'Task Management API is running!';
  }

  getHealthCheck(): HealthCheckResponse {
    return new HealthCheckResponse(
      this.project.NAME,
      this.project.DESCRIPTION,
      this.project.VERSION,
    );
  }

  getExceptionMetadata(): Record<ExceptionName, ICustomExceptionInfo> {
    if (this.node.ENV !== Environment.Development) {
      throw new Error(
        'This endpoint is only available in development environment',
      );
    }
    return exceptionMetadata;
  }
}
