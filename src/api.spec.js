import { expect } from "chai";
import { fetchCards } from "./api";

it("api returns _totalCount", async () => {
  const res = await fetchCards(0, "");
  expect(res._totalCount).to.exist;
});

it("api returns pageSize 20", async () => {
  const res = await fetchCards(0, "");
  expect(res.cards).to.have.lengthOf(20);
});

it("api returns card data", async () => {
  const res = await fetchCards(0, "Raise Dead");
  expect(res.cards).to.have.lengthOf(1);

  const card = res.cards[0];
  expect(card.name).to.equal("Raise Dead");
  expect(card.set.name).to.equal("Core Set");
});
