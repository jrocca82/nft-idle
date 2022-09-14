import setupNetwork from "./helpers/setupNetwork";

describe("CatsAndSoup Contract", () => {
  before(async () => {
    const [catsAndSoup, land, pot, currency, marketplace] = await setupNetwork();
    marketplace.setContractAuths();
  });
  
});
