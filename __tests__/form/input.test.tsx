import React from "react";
import {create} from "react-test-renderer";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Input } from "../../form";

it("normal", () => {

  expect(create(
    <Input id="ejemplo" required />
  ).toJSON()).toMatchSnapshot();

});

it("Filled", () => {

  expect(create(
    <Input id="ejemplo2" value="filled" required />
  ).toJSON()).toMatchSnapshot();

});

it("label=Email: *", () => {

  expect(create(
    <Input id="ejemplo3" label="Email: *"  />
  ).toJSON()).toMatchSnapshot();

});

it("Focus", () => {
  let { container } = render(<Input id="hi" data-testid="ejemplo" setProps={{root:{
    "data-testid":"root"
  }}} />);

  act(() => {
    let a = container.querySelector('#hi') as HTMLInputElement;
    a.focus();
  });

  expect(container).toMatchSnapshot();

});
