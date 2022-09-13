import { ethers } from "ethers";

export const getEventData = (
  eventName: string,
  contract: ethers.Contract,
  txResult: ethers.ContractReceipt
): any => {
  if (!Array.isArray(txResult.logs)) return null;
  for (let log of txResult.logs) {
    try {
      const decoded = contract.interface.parseLog(log);
      if (decoded.name === eventName)
        return {
          ...decoded,
          ...decoded.args
        };
    } catch (error) {}
  }
  return null;
};

export const fakeAddress = "0x5CD0b455893eae3ebe0a72b23f0D86564ccEC218";