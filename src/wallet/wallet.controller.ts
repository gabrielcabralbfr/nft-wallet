import { CacheInterceptor, Controller, Get, Param, UseGuards, UseInterceptors } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt.auth.guard';
import { WalletService } from './wallet.service';

@Controller('wallet')
export class WalletController {

    /**
     *
     */
    constructor(private readonly walletService: WalletService) {

    }

    @Get(':walletId')
    @UseInterceptors(CacheInterceptor)
    @UseGuards(JwtAuthGuard)
    getNftsFromWallet(@Param() params): any {
        const { walletId } = params
        if (!walletId) return { error: true, message: "missing wallet id", status: 400 }
        return this.walletService.getNftsFromWallet(walletId);
    }
}
