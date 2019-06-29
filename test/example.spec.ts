import { expect } from "chai";

describe("webdriver.io page", () => {
  it("should have the right title", async () => {
    await browser.url("https://webdriver.io");
    const title = await browser.getTitle();
    expect(title).to.be.equal(
      "WebdriverIO · Next-gen WebDriver test framework for Node.js"
    );
  });
});
