import { Controller, Get } from '@nestjs/common';
import { WalletService } from './wallet.service';

@Controller('wallet')
export class WalletController {

    /**
     *
     */
    constructor(private walletService: WalletService) {

    }

    @Get()
    getHello(): any {
        return this.walletService.getNftsFromWallet();
    }
}
