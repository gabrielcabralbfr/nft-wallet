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
        const walletId = params.walletId
        console.log(params);
        
        if (!walletId) throw new Error("Missing wallet id")
        return this.walletService.getNftsFromWallet();
    }
}
