import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';

import {
  resolveToWalletAddress,
  getParsedNftAccountsByOwner,
} from "@nfteyez/sol-rayz";

@Injectable()
export class WalletService {

  /**
   *
   */
  constructor() {
    
    
  }

  async getNftsFromWallet(address = "NftEyez.sol") {
    

    const publicAddress = await resolveToWalletAddress({
      text: address
    });

    const nftArray = await getParsedNftAccountsByOwner({
      publicAddress,
    });

    return nftArray
  }
}
