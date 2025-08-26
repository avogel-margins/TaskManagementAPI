import { Controller, Get, VERSION_NEUTRAL } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiOkResponse } from '@nestjs/swagger';

import { HealthCheckResponse } from 'src/common/responses/health-check.response';
import { AppService } from './app.service';

import { ExceptionName } from 'src/common/exceptions/custom.exception.enum';
import { ICustomExceptionInfo } from 'src/common/exceptions/exception-info.interface';

@Controller({
  version: VERSION_NEUTRAL,
})
@ApiTags('Application')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Get health check information' })
  @ApiOkResponse({
    description: 'Health check information',
    type: HealthCheckResponse,
  })
  getHealthCheck(): HealthCheckResponse {
    return this.appService.getHealthCheck();
  }

  @Get('/exceptions')
  @ApiOperation({
    summary: 'Get exception metadata',
    description:
      'Note: This endpoint is available only in development environment',
  })
  @ApiOkResponse({
    description: 'Exception metadata',
  })
  getExceptionMetadata(): Record<ExceptionName, ICustomExceptionInfo> {
    return this.appService.getExceptionMetadata();
  }
}
