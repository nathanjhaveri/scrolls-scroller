import React from "react";
import Card from "./index.js";
import { shallow } from "enzyme";

const PROPS = {
  imageUrl: "http://test.com",
  name: "Some card",
  type: "Type",
  text: "Description",
  setName: "Some set",
};

it("Displays all text", () => {
  const wrapper = shallow(<Card {...PROPS} />);
  [PROPS.name, PROPS.text, PROPS.setName, PROPS.type].forEach((text, i) => {
    const component = wrapper.find("dd").at(i);
    expect(component.text()).toEqual(text);
  });
});

it("omits 'text' when not available", () => {
  const { text, ...propsWithoutText } = PROPS;
  const wrapper = shallow(<Card {...propsWithoutText} />);
  [PROPS.name, PROPS.setName, PROPS.type].forEach((text, i) => {
    const component = wrapper.find("dd").at(i);
    expect(component.text()).toEqual(text);
  });
});
