import React from "react";
import {create} from "react-test-renderer";

import { Button } from "../../button";

it("simple button", () => {

  expect(create(
    <Button>Aceptar</Button>
  ).toJSON()).toMatchSnapshot();

});

it("disabled button", () => {

  expect(create(
    <Button disabled>Disabled Button</Button>
  ).toJSON()).toMatchSnapshot();

});

it("setEl=div button", () => {

  expect(create(
    <Button setEl="div">Aceptar</Button>
  ).toJSON()).toMatchSnapshot();

});

