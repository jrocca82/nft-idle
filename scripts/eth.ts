import { task } from "hardhat/config";

task("transfer-eth")
  .addParam("address")
  .addParam("amount")
  .addOptionalParam("ledgersigner")
  .setAction(async (args, hre) => {
    const signer = (await hre.ethers.getSigners())[0];

    console.log(
      `transferring ${args.amount} ETH to ${
        args.address
      } from ${await signer.getAddress()}`
    );
    const amount = hre.ethers.utils.parseEther(args.amount);
    const tx = await signer.sendTransaction({
      to: args.address,
      value: amount,
    });
    console.log("waiting for confirmation...");
    await tx.wait(1);
  });