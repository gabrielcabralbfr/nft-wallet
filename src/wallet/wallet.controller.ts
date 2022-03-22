import { Controller, Get, Param } from '@nestjs/common';
import { WalletService } from './wallet.service';

@Controller('wallet')
export class WalletController {

    /**
     *
     */
    constructor(private readonly walletService: WalletService) {

    }

    @Get(':walletId')
    getNftsFromWallet(@Param() params): any {
        const { walletId } = params
        if (!walletId) return { error: true, message: "missing wallet id", status: 400 }
        return this.walletService.getNftsFromWallet(walletId);
    }
}
