import fs from "fs";
import path from "path";
const configPath = path.resolve(__dirname, "../contracts.json");

export const updateContractConfig = (network, newConfig): boolean => {
    const config = JSON.parse(fs.readFileSync(configPath).toString());
    config[network] = newConfig;
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
    return true;
  };