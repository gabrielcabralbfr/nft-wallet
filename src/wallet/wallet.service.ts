import { Injectable } from '@nestjs/common';

import {
  resolveToWalletAddress,
  getParsedNftAccountsByOwner,
} from "@nfteyez/sol-rayz";

@Injectable()
export class WalletService {

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
