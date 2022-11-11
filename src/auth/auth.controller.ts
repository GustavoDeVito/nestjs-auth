import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('signin')
  signin(@Req() req: any) {
    return this.authService.signin(req.user);
  }

  @Post('refresh')
  refresh(@Body() { refresh_token }: { refresh_token: string }) {
    return refresh_token;
  }
}
