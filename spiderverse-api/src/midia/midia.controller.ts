import { Controller, Get } from '@nestjs/common';
import { MidiaService } from './midia.service';

@Controller('midia')
export class MidiaController {
  constructor(private readonly midiaService: MidiaService) { }
  @Get()
  getMidia() {
    return this.midiaService.getAll();
  }
}
