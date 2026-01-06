import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get("health")
  @ApiOperation({ summary: 'Get health status of the server' })
  @ApiTags('app')
  @ApiResponse({ status: 200, description: 'Server is running' })
  getHealth(): {status: string, message: string} {
    return this.appService.getHealth();
  }
}
