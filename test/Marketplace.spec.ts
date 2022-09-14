import setupNetwork from "./helpers/setupNetwork";

describe("Marketplace buyStarter", () => {
  before(async () => {
    const [catsAndSoup, land, pot, currency, marketplace] = await setupNetwork();
    marketplace.setContractAuths();
  });

});
