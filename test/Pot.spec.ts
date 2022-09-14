
import setupNetwork from "./helpers/setupNetwork";

describe("Pot Contract", () => {
  before(async () => {
    const [catsAndSoup, land, pot, currency, marketplace] = await setupNetwork();
    marketplace.setContractAuths();
  });
});
