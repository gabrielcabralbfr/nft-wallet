import { Test, TestingModule } from '@nestjs/testing';
import { WalletController } from './wallet.controller';
import { WalletService } from './wallet.service';

describe('WalletController', () => {
  let controller: WalletController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WalletController],
      providers: [WalletService]
    }).compile();

    controller = module.get<WalletController>(WalletController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return error object when wallet id is null', () => {
    expect(controller.getNftsFromWallet({ walletId: null })).toStrictEqual({ error: true, message: "missing wallet id", status: 400 })
  });

  it('should return nfts when provided valid wallet id', async () => {
    const nfts = await controller.getNftsFromWallet({ walletId: "NftEyez.sol" })
    expect.assertions(2)
    expect(nfts).toBeInstanceOf(Array)
    expect(nfts.length).toBeGreaterThanOrEqual(1)
  })
});
