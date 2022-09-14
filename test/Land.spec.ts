import setupNetwork from "./helpers/setupNetwork";

describe("Land Contract", () => {
  before(async () => {
    const [catsAndSoup, land, pot, currency, marketplace] = await setupNetwork();
    marketplace.setContractAuths();
  });

});
