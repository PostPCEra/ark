import {
  Controller,
  Get,
  Req,
  Res,
} from '@nestjs/common';
import { NextService } from '../logics/next/next.service';

@Controller('stube')
export class AuthController {
  constructor(
    private readonly next: NextService,
  ) {}


  @Get('show')
  public somePage(@Req() req, @Res() res) {
    return this.next.render('/stube/ll', req, res);
  }
}
