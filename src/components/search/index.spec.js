import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import Search from "./index.js";

const PROPS = {
  onSubmit: () => undefined,
};

it("Search component renders", () => {
  const wrapper = shallow(<Search {...PROPS} />);
  const component = wrapper.find(".search");
  expect(component).to.exist;
});

it("Search component renders", () => {
  let submitFired = false;
  const onSubmit = () => {
    submitFired = true;
  };

  const props = { onSubmit };

  const wrapper = shallow(<Search {...props} />);
  const component = wrapper.find("#submitButton");
  component.simulate("click");

  expect(submitFired).to.be.true;
});
