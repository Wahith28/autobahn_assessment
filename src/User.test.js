import React from "react";
import { shallow } from "enzyme";
import User from "./components/User";
describe("User Component", () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<User />);
    const a = component.find("[testData='test']").length;
    expect(a).toBe(1);
  });

  it("should render correctly", () => {
    const component = shallow(<User />);
    expect(component).toMatchSnapshot();
  });
});
