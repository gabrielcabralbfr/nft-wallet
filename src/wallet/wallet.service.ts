import { Injectable } from '@nestjs/common';

import {
    resolveToWalletAddress,
    getParsedNftAccountsByOwner,
  } from "@nfteyez/sol-rayz";


@Injectable()
export class WalletService {

    async getNftsFromWallet() {
        
          
          // const address = "3EqUrFrjgABCWAnqMYjZ36GcktiwDtFdkNYwY6C6cDzy;
          // or use Solana Domain
          const address = "NftEyez.sol";
          
          const publicAddress = await resolveToWalletAddress({
            text: address
          });
          
          const nftArray = await getParsedNftAccountsByOwner({
            publicAddress,
          });
          return nftArray
    }
}
