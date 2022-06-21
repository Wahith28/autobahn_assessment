
import { Provider } from "react-redux";
import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import configureStore from "redux-mock-store";

describe("AppComponent", () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;
  it('should render correctly', () => {
    store = mockStore(initialState);
    const component = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
